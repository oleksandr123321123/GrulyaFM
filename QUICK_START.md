# Quick Start Guide - Публикация GrulyaFM в Google Play

Быстрая инструкция для сборки и публикации приложения.

## 🚀 Вариант 1: Автоматическая сборка (Windows)

### Шаг 1: Убедитесь что установлен Node.js
```bash
node --version
# Должно показать v16 или выше
```

Если не установлен: https://nodejs.org/

### Шаг 2: Запустите скрипт сборки
```bash
cd C:\Users\alex\Documents\GitHub\GrulyaFM
build-twa.bat
```

Скрипт автоматически:
- Проверит установку Bubblewrap CLI
- Установит JDK и Android SDK (если нужно)
- Соберет Android App Bundle (.aab)

### Шаг 3: Найдите готовый файл
```
android\app\build\outputs\bundle\release\app-release.aab
```

Этот файл нужно загрузить в Google Play Console.

---

## 🛠️ Вариант 2: Ручная сборка

### Установка инструментов

```bash
# 1. Установить Bubblewrap CLI
npm install -g @bubblewrap/cli

# 2. Проверить установку
bubblewrap --version
```

### Инициализация проекта

```bash
cd C:\Users\alex\Documents\GitHub\GrulyaFM

# Инициализировать TWA проект
bubblewrap init --manifest=twa-manifest.json
```

**Вопросы при инициализации:**
- `Install JDK?` → **YES** (или установите JDK 17+ вручную: https://adoptium.net/)
- `Install Android SDK?` → **YES** (или установите вручную)
- `Use existing keystore?` → **NO** (создастся новый)

### Сборка приложения

```bash
# Собрать .aab файл
bubblewrap build
```

**Результат:**
```
✔ Build completed successfully!

Your app bundle is ready at:
android\app\build\outputs\bundle\release\app-release.aab
```

---

## 📱 Загрузка в Google Play Console

### Шаг 1: Создать приложение

1. Зайдите на https://play.google.com/console
2. Нажмите **"Create app"**
3. Заполните:
   - **App name**: `GrulyaFM - Мировое Радио`
   - **Default language**: Russian
   - **App or game**: App
   - **Free or paid**: Free
4. Согласитесь с политиками

### Шаг 2: Загрузить .aab

1. Перейдите в **Release → Production** (или **Internal testing** для теста)
2. Нажмите **"Create new release"**
3. Загрузите файл `app-release.aab`
4. Укажите **Release name**: `1.0.0`
5. Добавьте **Release notes**:

```
🎉 Первый релиз GrulyaFM

✨ Возможности:
• 200+ радиостанций из 22 стран
• Высокое качество звука
• Избранное и история
• Таймер сна и будильник
• Темная и светлая темы
• Фоновое воспроизведение
• 10 языков интерфейса

Спасибо за установку! Оцените приложение.
```

### Шаг 3: Заполнить Store Listing

**Откройте:** Store presence → Main store listing

Скопируйте контент из файла [`PLAY_STORE_LISTING.md`](PLAY_STORE_LISTING.md):

**Название приложения** (30 символов):
```
GrulyaFM - Мировое Радио
```

**Краткое описание** (80 символов):
```
200+ радиостанций из 22 стран. Слушайте радио со всего мира бесплатно
```

**Полное описание**:
Скопируйте из `PLAY_STORE_LISTING.md` → Секция "Russian (ru-RU)" → "Full Description"

### Шаг 4: Добавить скриншоты

**Минимум 2 скриншота** (рекомендуется 8)

**Как сделать:**

1. Откройте Chrome DevTools (F12)
2. Нажмите Toggle device toolbar (Ctrl+Shift+M)
3. Установите размер: **1080 x 1920**
4. Откройте https://grulya-fm.vercel.app
5. Capture screenshot (F12 → ... → Capture screenshot)

**Рекомендуемые скриншоты:**
1. Главный экран со списком станций
2. Плеер с воспроизведением
3. Избранное
4. Поиск и фильтры
5. Таймер сна
6. Будильник
7. Темная тема
8. История треков

Подробнее: [`SCREENSHOTS_GUIDE.md`](SCREENSHOTS_GUIDE.md)

### Шаг 5: Настроить Privacy Policy

**Откройте:** Policy → Privacy Policy

**URL:**
```
https://grulya-fm.vercel.app/privacy-policy.html
```

### Шаг 6: Указать категорию и контакты

**App category:**
```
Music & Audio
```

**Email address:**
```
support@grulya-fm.vercel.app
```

### Шаг 7: Заполнить Content rating

**Откройте:** Policy → App content → Content ratings

**Ответы:**
- Violence? **NO**
- Sexual content? **NO**
- Bad language? **NO**
- Gambling? **NO**
- Drug/alcohol/tobacco use? **NO**
- User interaction? **YES** (optional account)
- Shares location? **NO**
- Ads? **NO**
- In-app purchases? **NO**

**Результат:** Everyone (все возраста)

### Шаг 8: Заполнить Data safety

**Откройте:** Policy → App content → Data safety

**Собираем данные:**
- ✅ Account info (email) - Optional
- ✅ App activity (favorites, history)
- ❌ Location - NO
- ❌ Personal info - NO
- ❌ Financial info - NO

**Делимся данными:**
- ❌ No data shared with third parties

**Безопасность:**
- ✅ Data encrypted in transit (HTTPS)
- ✅ Users can request deletion

### Шаг 9: Настроить Target audience

**Откройте:** Policy → App content → Target audience

**Target age:**
```
13+ (Teen)
```

### Шаг 10: Отправить на проверку

1. Проверьте все зеленые галочки в Dashboard
2. Нажмите **"Send X items for review"**
3. Подтвердите отправку

**Время проверки:** 2-7 дней

---

## ✅ Чек-лист перед отправкой

### Технические требования
- [ ] `.aab` файл собран и загружен
- [ ] Версия 1.0.0 (код версии: 1)
- [ ] Подписано signing key
- [ ] `assetlinks.json` доступен на сайте

### Store Listing
- [ ] Название приложения заполнено (русский и английский)
- [ ] Краткое описание заполнено
- [ ] Полное описание заполнено
- [ ] Минимум 2 скриншота загружено (рекомендуется 8)
- [ ] Иконка 512×512 загружена
- [ ] Feature graphic загружен (опционально)

### Политики
- [ ] Privacy Policy URL указан
- [ ] Content rating заполнен
- [ ] Data safety заполнен
- [ ] Target audience указан (13+)

### Контакты
- [ ] Email адрес указан
- [ ] Сайт указан (опционально)

---

## 🐛 Устранение проблем

### Ошибка: "Bubblewrap command not found"

```bash
# Переустановите Bubblewrap
npm uninstall -g @bubblewrap/cli
npm install -g @bubblewrap/cli
```

### Ошибка: "Java JDK not found"

**Решение 1:** Разрешите Bubblewrap установить JDK автоматически при инициализации

**Решение 2:** Установите вручную:
1. Скачайте JDK 17: https://adoptium.net/
2. Установите
3. Проверьте: `java -version`

### Ошибка: "Android SDK not found"

**Решение 1:** Разрешите Bubblewrap установить SDK автоматически

**Решение 2:** Установите Android Studio:
1. Скачайте: https://developer.android.com/studio
2. Установите с SDK Tools
3. Добавьте в PATH: `C:\Users\[User]\AppData\Local\Android\Sdk`

### Ошибка: "Build failed"

Проверьте логи:
```bash
# Пересоберите с подробным логом
bubblewrap build --verbose
```

Частые причины:
- Неправильная версия JDK (нужна 17+)
- Отсутствует Android SDK
- Проблема с signing key
- Недостаточно памяти (требуется 4GB+ RAM)

### Ошибка: "App not verified" на устройстве

**Причина:** Google не может проверить `assetlinks.json`

**Решение:**
1. Проверьте доступность: https://grulya-fm.vercel.app/.well-known/assetlinks.json
2. Убедитесь, что SHA256 совпадает с вашим ключом
3. Подождите 24-48 часов для кеширования Google

### Ошибка при загрузке в Play Console: "Invalid APK"

**Причины:**
- Неправильная подпись
- Version code не увеличен
- Package name конфликтует

**Решение:**
```bash
# Пересоберите с чистой инициализацией
rm -rf android/
bubblewrap init --manifest=twa-manifest.json
bubblewrap build
```

---

## 📞 Поддержка

### Документация
- [ANDROID_BUILD_GUIDE.md](ANDROID_BUILD_GUIDE.md) - Полное руководство (45+ страниц)
- [ICON_GUIDE.md](ICON_GUIDE.md) - Создание адаптивных иконок
- [SCREENSHOTS_GUIDE.md](SCREENSHOTS_GUIDE.md) - Создание скриншотов
- [PLAY_STORE_LISTING.md](PLAY_STORE_LISTING.md) - Готовый контент магазина

### Полезные ссылки
- [Bubblewrap Documentation](https://github.com/GoogleChromeLabs/bubblewrap)
- [Google Play Console](https://play.google.com/console)
- [TWA Best Practices](https://developer.chrome.com/docs/android/trusted-web-activity/)

### Если нужна помощь
- Проверьте логи ошибок
- Поищите ошибку в Google с ключевыми словами
- Проверьте GitHub Issues: https://github.com/GoogleChromeLabs/bubblewrap/issues

---

## 🎉 После публикации

### Мониторинг
- Проверяйте краши в Play Console → Quality → Android vitals
- Отвечайте на отзывы пользователей
- Следите за install/uninstall метриками

### Обновления
Когда вы обновляете приложение:

1. Увеличьте версию в `twa-manifest.json`:
```json
{
  "appVersionName": "1.0.1",
  "appVersionCode": 2
}
```

2. Пересоберите:
```bash
bubblewrap update
bubblewrap build
```

3. Загрузите новый `.aab` в Play Console

### Продвижение
- Поделитесь ссылкой на приложение в соцсетях
- Попросите друзей оценить
- Добавьте badge на сайт: https://grulya-fm.vercel.app

```html
<a href="https://play.google.com/store/apps/details?id=app.vercel.grulya_fm.twa">
  <img src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
       alt="Get it on Google Play"
       height="80">
</a>
```

---

**Удачи с публикацией! 🚀**
