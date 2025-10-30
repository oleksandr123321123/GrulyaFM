# 🚀 Собрать Android AAB - Прямо Сейчас!

## Текущая ситуация:
- ✅ Keystore создан (`upload.keystore`)
- ✅ Пароли в GitHub Secrets
- ✅ twa-manifest.json готов
- ✅ Java JDK установлен
- ✅ Bubblewrap CLI установлен

## 2 способа собрать AAB:

---

## 🎯 Способ 1: Автоматический через Git Tag (РЕКОМЕНДУЕТСЯ)

Это самый простой способ - GitHub Actions соберёт всё автоматически!

### Команды:

```bash
cd C:\Users\alex\Documents\GitHub\GrulyaFM

git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

### Что произойдёт:
1. ✅ GitHub Actions запустится
2. ✅ Установит JDK и Android SDK автоматически
3. ✅ Запустит `bubblewrap build`
4. ✅ Создаст `app-release.aab`
5. ✅ Создаст GitHub Release (draft)
6. ✅ Прикрепит AAB к релизу

### Скачать AAB:
1. Откройте: https://github.com/oleksandr123321123/GrulyaFM/releases
2. Найдите **v1.0.0** (Draft)
3. Скачайте `app-release.aab`

**Время:** 10-15 минут (полностью автоматически)

---

## 🛠️ Способ 2: Ручная сборка (если хотите контроль)

### Шаг 1: Запустите batch скрипт

**Просто дважды кликните файл:**
```
C:\Users\alex\Documents\GitHub\GrulyaFM\build-twa.bat
```

**Или через командную строку:**
```bash
cd C:\Users\alex\Documents\GitHub\GrulyaFM
build-twa.bat
```

### Шаг 2: Следуйте инструкциям

Скрипт спросит:
- **Install JDK?** → YES (если Bubblewrap спросит снова)
- **Install Android SDK?** → YES
- **Введите пароль keystore** (когда попросит)

### Шаг 3: Результат

AAB файл будет здесь:
```
C:\Users\alex\Documents\GitHub\GrulyaFM\android\app\build\outputs\bundle\release\app-release.aab
```

**Время:** 15-20 минут (первый раз, скачивает SDK)

---

## ⚡ Способ 3: Через npm команду

```bash
cd C:\Users\alex\Documents\GitHub\GrulyaFM

# Инициализация (первый раз)
bubblewrap init --manifest=twa-manifest.json
# Отвечайте YES на все вопросы

# Сборка
npm run build:android
```

Или напрямую:
```bash
bubblewrap build
```

---

## 🎯 Какой способ выбрать?

### Выбирайте **Способ 1 (Git Tag)** если:
- ✅ Хотите автоматизацию
- ✅ Не хотите возиться с SDK
- ✅ Готовы подождать 15 минут

### Выбирайте **Способ 2 (Batch файл)** если:
- ✅ Хотите видеть процесс
- ✅ Нужен контроль над сборкой
- ✅ Планируете часто пересобирать

---

## 📦 После получения AAB файла:

### 1. Проверьте размер:
Файл должен быть ~10-20 MB

### 2. Загрузите в Play Console:

1. Откройте: https://play.google.com/console
2. Выберите ваше приложение (или создайте новое)
3. **Release → Production** (или Internal testing для теста)
4. **Create new release**
5. **Upload** `app-release.aab`
6. Заполните Release notes
7. **Review release**
8. **Start rollout to Production**

### 3. Подготовьте материалы:

**Нужно для Play Store:**
- [x] AAB файл (собрали)
- [ ] 2-8 скриншотов (см. SCREENSHOTS_GUIDE.md)
- [ ] Описание приложения (готово в PLAY_STORE_LISTING.md)
- [ ] Иконка 512×512 (уже есть: icon-512.png)
- [ ] Privacy Policy (https://grulya-fm.vercel.app/privacy-policy.html)

---

## 🐛 Если что-то пошло не так:

### Ошибка: "JAVA_HOME not set"
```bash
# Найдите где установлен Java:
where java

# Установите JAVA_HOME:
set JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-17.0.13.11-hotspot
```

### Ошибка: "Android SDK not found"
**Решение:** Разрешите Bubblewrap установить SDK автоматически (YES при вопросе)

### Ошибка: "Keystore password incorrect"
**Решение:** Проверьте что пароль такой же как в GitHub Secrets:
```
Kozlov227335Lisin80664152567
```

### Ошибка: "Build failed"
**Решение:** Посмотрите логи и напишите мне - помогу исправить

---

## ✅ Рекомендация:

**Используйте Способ 1 (Git Tag)** - это проще всего!

```bash
git tag -a v1.0.0 -m "Release 1.0.0"
git push origin v1.0.0
```

Затем проверяйте:
https://github.com/oleksandr123321123/GrulyaFM/actions

Через 15 минут AAB будет готов и доступен в Releases!

---

**Удачи! 🚀**
