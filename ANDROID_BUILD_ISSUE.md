# Android Build Issue - Bubblewrap Validation Error

## Проблема

Bubblewrap CLI постоянно падает с ошибкой:
```
cli ERROR Invalid URL
```

Несмотря на все попытки исправления.

## Что было исправлено

1. ✅ Все URL в `twa-manifest.json` изменены на абсолютные
2. ✅ Все URL в `manifest.json` shortcuts изменены на абсолютные
3. ✅ Все `icons.src` в shortcuts изменены на абсолютные
4. ✅ Все `icons.src` в основном массиве icons изменены на абсолютные
5. ✅ Удалено поле `monochromeIconUrl` (файл не существует)
6. ✅ Удалено/изменено поле `id`
7. ✅ Добавлен `yes |` для автоответа на все prompts
8. ✅ Настроен Android SDK в workflow

## Текущая ситуация

Ошибка продолжается даже после всех исправлений. Возможные причины:

1. **Версия Bubblewrap** - возможно версия 1.20.0 имеет баги с валидацией
2. **Скрытые поля** - возможно в manifest.json есть другие поля с невалидными URL
3. **Сетевые проблемы** - GitHub Actions не может достать manifest.json с Vercel
4. **Кэш** - Vercel или GitHub Actions кэширует старую версию manifest.json

## Решения

### Вариант 1: Создать Android проект локально (РЕКОМЕНДУЕТСЯ)

1. Запустить локально:
```bash
cd C:\Users\alex\Documents\GitHub\GrulyaFM
bubblewrap init --manifest=twa-manifest.json
# Ответить на все prompts вручную
```

2. Закоммитить папку `android/` в репозиторий

3. Изменить workflow чтобы использовал готовый проект:
```yaml
- name: Build TWA
  run: |
    cd android
    ./gradlew bundleRelease
```

### Вариант 2: Использовать PWABuilder вместо Bubblewrap

https://www.pwabuilder.com/ - альтернативный инструмент для создания Android APK/AAB из PWA

### Вариант 3: Создать Android проект с нуля

Использовать Android Studio и создать TWA проект вручную по официальной документации:
https://developer.chrome.com/docs/android/trusted-web-activity/

### Вариант 4: Отладить Bubblewrap локально

Запустить с флагами отладки чтобы увидеть ТОЧНЫЙ URL который невалидный:
```bash
DEBUG=* bubblewrap init --manifest=twa-manifest.json
```

## Файлы

- `twa-manifest.json` - конфигурация TWA для Bubblewrap
- `manifest.json` - Web App Manifest
- `upload.keystore` - Android signing key (НЕ в git)
- `.well-known/assetlinks.json` - Digital Asset Links

## Секреты GitHub

Настроены в Settings → Secrets:
- `ANDROID_KEYSTORE_PASSWORD` - Kozlov227335Lisin80664152567
- `ANDROID_KEY_PASSWORD` - Kozlov227335Lisin80664152567

## SHA256 Fingerprint

```
CD:40:B1:FA:54:65:68:6A:2C:C0:0D:46:45:28:BB:EA:D8:D7:FB:65:89:51:B0:FA:FD:DF:7E:1A:00:53:1C:88
```

## Следующие шаги

1. **Попробовать Вариант 1** (создать локально и закоммитить)
2. Если не сработает - использовать PWABuilder
3. Если нужна помощь - открыть issue в Bubblewrap: https://github.com/GoogleChromeLabs/bubblewrap/issues
