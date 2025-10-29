-- ============================================
-- SUPABASE SQL SETUP для GrulyaFM
-- ============================================
-- Скопируйте и выполните в SQL Editor на supabase.com
-- ============================================

-- 1. Создание таблицы user_data
CREATE TABLE IF NOT EXISTS public.user_data (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  favorites JSONB DEFAULT '[]'::jsonb NOT NULL,
  custom_stations JSONB DEFAULT '[]'::jsonb NOT NULL,
  settings JSONB DEFAULT '{}'::jsonb NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(user_id)
);

-- 2. Включаем Row Level Security
ALTER TABLE public.user_data ENABLE ROW LEVEL SECURITY;

-- 3. Политики безопасности (каждый видит только свои данные)

-- Пользователи могут читать свои данные
CREATE POLICY "Users can view own data" 
ON public.user_data
FOR SELECT 
USING (auth.uid() = user_id);

-- Пользователи могут вставлять свои данные
CREATE POLICY "Users can insert own data" 
ON public.user_data
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Пользователи могут обновлять свои данные
CREATE POLICY "Users can update own data" 
ON public.user_data
FOR UPDATE 
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Пользователи могут удалять свои данные
CREATE POLICY "Users can delete own data" 
ON public.user_data
FOR DELETE 
USING (auth.uid() = user_id);

-- 4. Функция автоматического обновления updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 5. Триггер для автообновления updated_at
DROP TRIGGER IF EXISTS update_user_data_updated_at ON public.user_data;
CREATE TRIGGER update_user_data_updated_at 
  BEFORE UPDATE ON public.user_data
  FOR EACH ROW 
  EXECUTE FUNCTION public.update_updated_at_column();

-- 6. Создаем индексы для быстрого поиска
CREATE INDEX IF NOT EXISTS idx_user_data_user_id 
  ON public.user_data(user_id);

CREATE INDEX IF NOT EXISTS idx_user_data_updated_at 
  ON public.user_data(updated_at DESC);

-- 7. (Опционально) Функция для автоматического создания записи при регистрации
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_data (user_id, favorites, custom_stations, settings)
  VALUES (
    NEW.id,
    '[]'::jsonb,
    '[]'::jsonb,
    '{
      "volume": 70,
      "enabledCountries": ["GB", "FR", "DE", "ES", "IT", "PL", "NL"],
      "isDarkTheme": true,
      "language": "en",
      "alarm": null,
      "compact": false,
      "activeTab": "all"
    }'::jsonb
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 8. Триггер для автосоздания записи при регистрации
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW 
  EXECUTE FUNCTION public.handle_new_user();

-- ============================================
-- ГОТОВО! ✅
-- ============================================

-- Проверка: посмотреть структуру таблицы
-- SELECT * FROM public.user_data LIMIT 1;

-- Проверка RLS: попробовать вставить данные
-- INSERT INTO public.user_data (user_id, favorites) 
-- VALUES (auth.uid(), '["test"]'::jsonb);

-- ============================================
-- НАСТРОЙКА EMAIL АВТОРИЗАЦИИ
-- ============================================
-- 1. Authentication → Providers → Email → Enable
-- 2. Authentication → Email Templates → Customize (optional)
-- 3. Authentication → URL Configuration:
--    - Site URL: https://ваш-домен.com
--    - Redirect URLs: https://ваш-домен.com/*

-- ============================================
-- ТЕСТИРОВАНИЕ
-- ============================================

-- Тест 1: Создать тестового пользователя
-- 1. В приложении нажмите Sign Up
-- 2. Введите email и password
-- 3. Подтвердите email

-- Тест 2: Проверить что данные сохраняются
-- SELECT * FROM public.user_data WHERE user_id = auth.uid();

-- Тест 3: Проверить RLS
-- Попробуйте получить данные другого пользователя - должно вернуть пусто
-- SELECT * FROM public.user_data WHERE user_id != auth.uid();

-- ============================================
-- TROUBLESHOOTING
-- ============================================

-- Проблема: "permission denied for table user_data"
-- Решение: Проверьте что RLS включен и политики созданы
-- ALTER TABLE public.user_data ENABLE ROW LEVEL SECURITY;

-- Проблема: "duplicate key value violates unique constraint"
-- Решение: Пользователь уже есть в таблице, используйте UPSERT в приложении

-- Проблема: "relation public.user_data does not exist"
-- Решение: Выполните CREATE TABLE заново

-- ============================================
-- ОЧИСТКА (только для разработки!)
-- ============================================
-- ВНИМАНИЕ: Удалит все данные!
-- DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
-- DROP TRIGGER IF EXISTS update_user_data_updated_at ON public.user_data;
-- DROP FUNCTION IF EXISTS public.handle_new_user();
-- DROP FUNCTION IF EXISTS public.update_updated_at_column();
-- DROP TABLE IF EXISTS public.user_data CASCADE;

-- ============================================
-- КОПИРОВАНИЕ КЛЮЧЕЙ
-- ============================================
-- После создания таблицы:
-- 1. Project Settings → API
-- 2. Скопируйте:
--    - Project URL: https://ваш-проект.supabase.co
--    - anon public key: eyJ...
-- 3. Вставьте в index.html (строка ~732)

-- ============================================
-- ВСЕГО ХОРОШЕГО! 🚀
-- ============================================
