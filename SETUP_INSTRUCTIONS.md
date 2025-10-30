# Setup Instructions - Финальная настройка GrulyaFM

Пошаговые инструкции для завершения настройки проекта.

## 🔐 1. Создать GitHub Secrets

### Зачем нужны Secrets?

GitHub Secrets безопасно хранят пароли для CI/CD pipeline:
- `ANDROID_KEYSTORE_PASSWORD` - пароль от Android keystore
- `ANDROID_KEY_PASSWORD` - пароль от ключа внутри keystore
- `LHCI_GITHUB_APP_TOKEN` - токен для Lighthouse CI (опционально)

### Шаг 1: Перейти в Settings

1. Откройте https://github.com/oleksandr123321123/GrulyaFM
2. Нажмите **Settings** (вкладка справа)
3. В левом меню: **Secrets and variables** → **Actions**

### Шаг 2: Добавить Secrets

Нажмите **New repository secret** для каждого:

#### Secret 1: ANDROID_KEYSTORE_PASSWORD

```
Name: ANDROID_KEYSTORE_PASSWORD
Value: [Пароль который вы использовали при создании keystore]
```

**Где взять пароль:**
- Если вы ещё не создали keystore, сгенерируйте (см. раздел "Генерация Keystore" ниже)
- Если создали, возьмите из password manager

**Нажмите:** Add secret

#### Secret 2: ANDROID_KEY_PASSWORD

```
Name: ANDROID_KEY_PASSWORD
Value: [Пароль от ключа - обычно такой же как KEYSTORE_PASSWORD]
```

**Обычно** это тот же пароль, что и keystore password.

**Нажмите:** Add secret

#### Secret 3: LHCI_GITHUB_APP_TOKEN (Опционально)

Этот токен нужен для красивых отчётов Lighthouse CI прямо в Pull Requests.

**Если НЕ хотите настраивать:**
- Пропустите этот шаг
- Lighthouse всё равно будет работать, но без GitHub интеграции

**Если хотите настроить:**

1. Установите [Lighthouse CI GitHub App](https://github.com/apps/lighthouse-ci)
2. Выберите ваш репозиторий
3. Скопируйте сгенерированный токен
4. Добавьте как Secret:
   ```
   Name: LHCI_GITHUB_APP_TOKEN
   Value: [Ваш токен]
   ```

### Проверка

После добавления вы должны видеть:

```
✅ ANDROID_KEYSTORE_PASSWORD
✅ ANDROID_KEY_PASSWORD
✅ LHCI_GITHUB_APP_TOKEN (optional)
```

**Важно:** Secrets видны только при создании, потом показывается `***`

---

## 🔑 Генерация Android Keystore (если ещё нет)

### Если keystore уже есть

Пропустите этот раздел.

### Если keystore НЕТ

**Важно:** Сначала создайте keystore локально, ПОТОМ добавьте пароли в GitHub Secrets.

#### Шаг 1: Создать keystore

```bash
cd C:\Users\alex\Documents\GitHub\GrulyaFM

keytool -genkey -v -keystore upload.keystore -alias upload-key -keyalg RSA -keysize 2048 -validity 10000
```

#### Шаг 2: Ответить на вопросы

```
Enter keystore password: [Придумайте надёжный пароль, min 6 символов]
Re-enter new password: [Повторите]

What is your first and last name?
  [Unknown]:  Alexander (ваше имя)

What is the name of your organizational unit?
  [Unknown]:  GrulyaFM

What is the name of your organization?
  [Unknown]:  GrulyaFM

What is the name of your City or Locality?
  [Unknown]:  [Ваш город]

What is the name of your State or Province?
  [Unknown]:  [Область/регион]

What is the two-letter country code for this unit?
  [Unknown]:  UA (или ваш код)

Is CN=..., OU=..., O=..., L=..., ST=..., C=UA correct?
  [no]:  yes

Enter key password for <upload-key>
	(RETURN if same as keystore password): [ENTER - используйте тот же пароль]
```

#### Шаг 3: Сохранить пароль

**КРИТИЧЕСКИ ВАЖНО:** Сохраните пароль в 3 местах:

1. **Password Manager** (1Password, Bitwarden, LastPass)
2. **Бумажная записка** в сейфе
3. **Зашифрованный файл** на USB

**Если потеряете пароль** - потеряете доступ к приложению НАВСЕГДА!

#### Шаг 4: Backup keystore

```bash
# Скопировать keystore в безопасное место
copy upload.keystore "D:\Backups\GrulyaFM-keystore-backup.keystore"
copy upload.keystore "E:\USB-Drive\GrulyaFM-keystore.keystore"
```

#### Шаг 5: Добавить в .gitignore (уже сделано)

`.gitignore` уже содержит:
```
*.keystore
upload.keystore
```

**Проверьте:**
```bash
git status
# НЕ должно быть упоминаний о .keystore файлах
```

#### Шаг 6: Извлечь SHA256 fingerprint

```bash
keytool -list -v -keystore upload.keystore -alias upload-key | findstr SHA256
```

**Результат:**
```
SHA256: 11:13:66:59:75:61:0C:83:65:6D:C8:45:57:25:F5:A8:E8:02:AC:98:57:E6:AB:4A:D9:68:FC:60:C9:A7:26:47
```

**Сохраните этот SHA256** - он нужен для `assetlinks.json`.

#### Шаг 7: Обновить assetlinks.json

Откройте `.well-known/assetlinks.json` и замените SHA256:

```json
{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "app.vercel.grulya_fm.twa",
    "sha256_cert_fingerprints": [
      "11:13:66:59:75:61:0C:83:65:6D:C8:45:57:25:F5:A8:E8:02:AC:98:57:E6:AB:4A:D9:68:FC:60:C9:A7:26:47"
    ]
  }
}
```

---

## 📱 2. Тестирование на iOS устройстве

### Требования

- iPhone или iPad с iOS 14+
- Safari browser
- Доступ к https://grulya-fm.vercel.app

### Шаг 1: Установить PWA на Home Screen

1. **Откройте Safari** на iPhone/iPad
2. **Перейдите:** https://grulya-fm.vercel.app
3. **Нажмите кнопку Share** (квадрат со стрелкой вверх)
4. **Прокрутите вниз** → **"Add to Home Screen"**
5. **Нажмите "Add"**

**Результат:** Иконка GrulyaFM появится на home screen

### Шаг 2: Запустить приложение

1. **Нажмите** на иконку GrulyaFM
2. **Должно открыться:** Fullscreen без Safari UI
3. **Проверьте:** Status bar прозрачный, контент под ним

### Шаг 3: Протестировать Audio Playback

**Тест 1: Первый запуск аудио**
1. Выберите любую радиостанцию
2. Нажмите Play
3. **Ожидаемо:** Аудио начинает играть сразу (без ошибок "The user didn't interact")

**Тест 2: Background playback**
1. Начните воспроизведение
2. Нажмите Home button (свернуть приложение)
3. **Ожидаемо:** Музыка продолжает играть

**Тест 3: Lock screen controls**
1. Начните воспроизведение
2. Заблокируйте экран (Power button)
3. **Проверьте lock screen:**
   - Должна показываться станция
   - Кнопки Play/Pause/Next/Previous
   - Artwork (если есть metadata)

**Тест 4: Прерывания**
1. Начните воспроизведение
2. Позвоните себе или запустите видео в другом приложении
3. **Ожидаемо:** GrulyaFM автоматически ставит на паузу
4. После завершения звонка → **должно возобновиться**

### Шаг 4: Протестировать Push Notifications (iOS 16.4+)

**Проверка версии iOS:**
- Settings → General → About → Software Version
- Нужно **iOS 16.4 или выше**

**Если iOS < 16.4:**
- Web Push не поддерживается
- Пропустите этот тест

**Если iOS >= 16.4:**

1. **Откройте Console** (если есть Mac):
   - Подключите iPhone к Mac
   - Safari (Mac) → Develop → [Your iPhone] → grulya-fm.vercel.app
   - Проверьте Console на ошибки

2. **Запросить разрешение:**
   ```javascript
   // В консоли браузера (или добавьте кнопку в UI)
   Notification.requestPermission().then(permission => {
     console.log('Permission:', permission);
   });
   ```

3. **Ожидаемое поведение:**
   - iOS показывает native prompt "Allow notifications?"
   - После Allow - подписка создаётся

4. **Проверка:**
   ```javascript
   // В консоли
   navigator.serviceWorker.ready.then(reg => {
     return reg.pushManager.getSubscription();
   }).then(sub => {
     console.log('Subscription:', sub);
   });
   ```

**Важно:** На iOS Web Push работает ТОЛЬКО в standalone mode (установленное PWA), НЕ в Safari браузере.

### Шаг 5: Протестировать Offline Mode

1. **Включите Airplane Mode** на iPhone
2. **Откройте GrulyaFM** (уже установленное PWA)
3. **Ожидаемо:**
   - Приложение загружается (UI показывается)
   - Список станций доступен (из кэша)
   - Попытка воспроизведения показывает ошибку (нормально - нет интернета)

4. **Выключите Airplane Mode**
5. **Попробуйте Play** → должно заработать

### Чек-лист iOS Testing

- [ ] PWA устанавливается на home screen
- [ ] Иконка правильная (не generic Safari icon)
- [ ] Открывается fullscreen (без Safari UI)
- [ ] Status bar прозрачный
- [ ] Аудио играет сразу (без ошибок unlock)
- [ ] Background playback работает
- [ ] Lock screen controls показываются
- [ ] Автопауза при звонке
- [ ] Автовозобновление после звонка
- [ ] Service Worker кэширует контент
- [ ] Работает offline (UI загружается)
- [ ] Push notifications (если iOS 16.4+)

### Если что-то не работает

Проверьте Console в Safari Web Inspector:
```
iPhone → Settings → Safari → Advanced → Web Inspector: ON
Mac → Safari → Develop → [Your iPhone] → grulya-fm.vercel.app
```

Смотрите на ошибки в Console и Network.

---

## 🚀 3. Запустить CI/CD

### GitHub Actions уже настроен

После вашего `git push` автоматически запустится pipeline.

### Шаг 1: Push изменений

```bash
cd C:\Users\alex\Documents\GitHub\GrulyaFM

# Проверить статус
git status

# Запушить (если есть uncommitted changes)
git push origin master
```

### Шаг 2: Проверить запуск

1. Откройте https://github.com/oleksandr123321123/GrulyaFM/actions
2. Вы должны увидеть запущенный workflow: **"CI/CD Pipeline"**
3. Кликните на него чтобы видеть progress

### Шаг 3: Мониторить выполнение

**Jobs которые запустятся:**

1. **Lint & Code Quality** (~1 мин)
   - ESLint проверка
   - Поиск console.log
   - Поиск TODO комментариев

2. **Security Audit** (~2 мин)
   - npm audit
   - TruffleHog (поиск секретов)
   - Проверка .gitignore

3. **Lighthouse CI** (~3 мин)
   - Performance audit
   - Accessibility check
   - PWA validation
   - Budget checks

4. **Service Worker Warmup** (~1 мин)
   - Проверка sw.js
   - Валидация синтаксиса
   - Проверка cache strategies

5. **Verify Deployment** (~1 мин)
   - Проверка что сайт live
   - manifest.json доступен
   - Service Worker доступен
   - assetlinks.json доступен

6. **Notify Success** (~10 сек)
   - Отчёт об успешном деплое

### Шаг 4: Проверить результаты

**Если всё зелёное ✅:**
- CI/CD работает правильно
- Код прошёл все проверки
- Deployment успешный

**Если что-то красное ❌:**
- Кликните на failed job
- Прочитайте логи
- Исправьте ошибки
- Запушьте фикс

### Шаг 5: Собрать Android AAB (опционально)

Android AAB собирается ТОЛЬКО при создании git tag.

**Создать релиз:**

```bash
# Создать tag
git tag -a v1.0.0 -m "Release version 1.0.0"

# Запушить tag
git push origin v1.0.0
```

**Что произойдёт:**
1. GitHub Actions запустится снова
2. Дополнительно выполнится job **"Build Android App"**
3. Соберётся `app-release.aab`
4. Создастся Draft Release на GitHub
5. .aab файл прикрепится к Release

**Скачать AAB:**
1. https://github.com/oleksandr123321123/GrulyaFM/releases
2. Найдите v1.0.0 (Draft)
3. Скачайте `app-release.aab`
4. Загрузите в Google Play Console

### Важные замечания

**1. Первый запуск может упасть:**
- Нужны ANDROID_KEYSTORE_PASSWORD и ANDROID_KEY_PASSWORD secrets
- Если не добавили - build:android job упадёт (это нормально)

**2. Lighthouse может показать warnings:**
- Это не критично
- Только errors блокируют pipeline
- Warnings можно проигнорировать или исправить

**3. TruffleHog может находить false positives:**
- Проверьте что нашёл
- Если это не реальный секрет - ignore
- Если реальный секрет - НЕМЕДЛЕННО ротируйте

---

## 📊 Continuous Integration Dashboard

После настройки вы будете видеть:

```
Repository: GrulyaFM
├── ✅ CI/CD Pipeline (latest)
│   ├── ✅ Lint & Code Quality
│   ├── ✅ Security Audit
│   ├── ✅ Lighthouse CI (Performance: 92%)
│   ├── ✅ Service Worker Warmup
│   ├── ✅ Verify Deployment
│   └── ✅ Notify Success
│
└── 📦 Releases
    └── v1.0.0 (Draft)
        └── app-release.aab (12.5 MB)
```

---

## 🔧 Troubleshooting

### CI/CD упал с ошибкой "Secrets not found"

**Причина:** Не добавлены GitHub Secrets

**Решение:**
1. Добавьте secrets (см. раздел 1)
2. Re-run failed jobs
3. Или запушьте пустой коммит: `git commit --allow-empty -m "Trigger CI"`

### Lighthouse показывает низкий score

**Причина:** Vercel deployment ещё не завершён

**Решение:**
- Подождите 2-3 минуты после push
- Re-run Lighthouse job
- Или добавьте больше времени в `sleep 30` в workflow

### Android build упал

**Возможные причины:**
1. Secrets не добавлены → добавьте
2. Keystore не создан → создайте локально и добавьте в репо (НЕТ! используйте Secrets)
3. JDK version mismatch → Actions использует правильный JDK 17

**Для Android build лучше собирать локально:**
```bash
npm run build:android
```

### iOS Push не работает

**Проверьте:**
1. iOS version >= 16.4?
2. Приложение установлено на Home Screen (не в браузере)?
3. VAPID ключи сгенерированы и добавлены в Vercel?
4. Разрешение на уведомления дано?

---

## ✅ Final Checklist

**GitHub Secrets:**
- [ ] ANDROID_KEYSTORE_PASSWORD добавлен
- [ ] ANDROID_KEY_PASSWORD добавлен
- [ ] LHCI_GITHUB_APP_TOKEN добавлен (опционально)

**Keystore:**
- [ ] Keystore создан (`upload.keystore`)
- [ ] Пароль сохранён в 3 местах
- [ ] Backup сделан
- [ ] SHA256 извлечён
- [ ] `assetlinks.json` обновлён

**iOS Testing:**
- [ ] PWA установлен на home screen
- [ ] Audio playback работает
- [ ] Background playback работает
- [ ] Lock screen controls показываются
- [ ] Offline mode работает
- [ ] Push notifications протестированы (iOS 16.4+)

**CI/CD:**
- [ ] GitHub Actions запущен
- [ ] Все jobs прошли успешно
- [ ] Lighthouse score >= 85%
- [ ] Deployment verified
- [ ] Android AAB собран (при tag)

**Security:**
- [ ] `.gitignore` содержит все секретные паттерны
- [ ] No `.keystore` files in Git history
- [ ] VAPID keys в Vercel Environment Variables
- [ ] Supabase keys не в публичном коде

---

## 🎉 Готово!

После выполнения всех шагов у вас будет:

✅ Полностью настроенный CI/CD pipeline
✅ Автоматические security checks
✅ Performance monitoring с Lighthouse
✅ iOS PWA с full поддержкой
✅ Web Push notifications
✅ Автоматическая сборка Android AAB
✅ Безопасное хранение всех секретов

**Следующий шаг:** Публикация в Google Play Store (см. [QUICK_START.md](QUICK_START.md))
