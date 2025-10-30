# Security Guide - GrulyaFM

Руководство по безопасности, ротации ключей и лучшим практикам DevOps.

## 🔐 Критическая информация о безопасности

### ⚠️ ВНИМАНИЕ: Утечка секретов

Если файл `signing-key-info.txt` или подобные файлы с паролями/ключами **когда-либо попадали в Git**, они считаются скомпрометированными!

**Причины:**
- Git хранит всю историю навсегда
- Даже удаленные файлы доступны в истории коммитов
- GitHub/GitLab индексируют секреты и могут заблокировать репозиторий
- Боты сканируют публичные репозитории на предмет ключей

### Немедленные действия при утечке

1. **НЕ ПАНИКУЙТЕ**, но действуйте быстро
2. Пометьте текущий signing key как скомпрометированный
3. Сгенерируйте новые ключи
4. Переведите приложение на Google Play App Signing
5. Удалите секреты из истории Git
6. Измените все пароли и API ключи

---

## 🔑 Ротация Android Signing Keys

### Сценарий 1: Приложение еще не опубликовано

✅ **Просто**: Удалите старый keystore и создайте новый

```bash
# Удалить старый ключ
rm android.keystore
rm signing-key-info.txt

# Создать новый
keytool -genkey -v -keystore android.keystore -alias grulyafm-key -keyalg RSA -keysize 2048 -validity 10000

# ВАЖНО: Сохраните пароль в password manager!
```

### Сценарий 2: Приложение опубликовано БЕЗ Google Play App Signing

❌ **НЕВОЗМОЖНО** изменить signing key для существующего приложения

**Последствия:**
- Потеря доступа к ключу = потеря приложения навсегда
- Невозможно обновить приложение
- Придется публиковать новое приложение с новым package name

**Решение:** Миграция на Google Play App Signing (см. ниже)

### Сценарий 3: Использовано Google Play App Signing

✅ **МОЖНО** сменить upload key (но не app signing key)

Google управляет финальным signing key, вы можете менять upload key:

1. Зайдите в Play Console → Setup → App integrity
2. Нажмите "Request upload key reset"
3. Создайте новый upload keystore
4. Загрузите новый public certificate (.pem)
5. Google свяжет новый ключ с вашим приложением

**Преимущества:**
- Можно восстановить доступ при потере ключа
- Ротация ключей без переиздания приложения
- Google защищает финальный signing key

---

## 🛡️ Google Play App Signing Setup (Рекомендуется)

### Что это?

Google управляет финальным signing key вашего приложения:
- Вы подписываете .aab **upload key** (может меняться)
- Google перепак-signing с **app signing key** (защищен Google)
- Пользователи получают APK подписанный app signing key

### Настройка для нового приложения

1. **Создайте upload keystore:**
```bash
keytool -genkey -v -keystore upload.keystore -alias upload-key -keyalg RSA -keysize 2048 -validity 10000
```

2. **При первой загрузке .aab в Play Console:**
   - Выберите "Let Google manage my app signing key"
   - Google создаст и сохранит app signing key
   - Ваш upload key будет зарегистрирован

3. **Сохраните upload keystore:**
   - В password manager (1Password, LastPass, Bitwarden)
   - Зашифрованный backup в облаке
   - Офлайн копия на USB

### Миграция существующего приложения

Если уже опубликовали с собственным ключом:

1. **Экспортируйте существующий ключ:**
```bash
# Создать .pem файл из keystore
keytool -export -rfc -keystore android.keystore -alias grulyafm-key -file upload_cert.pem
```

2. **В Play Console:**
   - Setup → App integrity → App signing
   - Нажмите "Upgrade to Google Play App Signing"
   - Загрузите `upload_cert.pem`
   - Подтвердите миграцию

3. **После миграции:**
   - Создайте новый upload keystore (отдельный от production key)
   - Все будущие релизы подписывайте upload key
   - Google будет перепаковывать с app signing key

---

## 🗑️ Удаление секретов из Git истории

### Если случайно закоммитили signing-key-info.txt

**Метод 1: BFG Repo-Cleaner (Рекомендуется)**

```bash
# Скачать BFG: https://rtyley.github.io/bfg-repo-cleaner/
java -jar bfg.jar --delete-files signing-key-info.txt

# Очистить историю
git reflog expire --expire=now --all
git gc --prune=now --aggressive

# Force push (ВНИМАНИЕ: перезапишет историю!)
git push --force
```

**Метод 2: git filter-branch**

```bash
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch signing-key-info.txt" \
  --prune-empty --tag-name-filter cat -- --all

git push --force --all
git push --force --tags
```

**Метод 3: git filter-repo (Современный)**

```bash
# Установить: pip install git-filter-repo

git filter-repo --path signing-key-info.txt --invert-paths

git push --force
```

### После очистки

1. **Уведомите всех разработчиков:**
   ```bash
   # Каждый должен сделать
   git fetch origin
   git reset --hard origin/master
   ```

2. **Всё равно считайте ключи скомпрометированными**
   - GitHub могла проиндексировать до удаления
   - Кто-то мог сделать fork с секретами

3. **Ротируйте ключи** (см. выше)

---

## 🔒 Безопасное хранение секретов

### ❌ НИКОГДА не коммитить:

```
android.keystore
*.keystore
*.jks
*.p12
*.pem (приватные ключи)
signing-key-info.txt
.env (с реальными ключами)
google-services.json (с реальными данными)
secrets.txt
passwords.txt
credentials.json
```

### ✅ Правильное хранение

**Локально:**
- Password Manager (1Password, Bitwarden, LastPass)
- Encrypted USB drive
- Зашифрованный файл (GPG, VeraCrypt)

**В CI/CD:**
- GitHub Secrets (для Actions)
- Vercel Environment Variables
- GitLab CI/CD Variables
- Encrypted secrets в репозитории (с помощью SOPS, git-crypt)

**Backup:**
- Минимум 3 копии в разных местах
- Хотя бы одна offline копия
- Документируйте местоположение backups

---

## 🔐 .gitignore правила

Добавьте в `.gitignore`:

```gitignore
# Android Signing Keys
*.keystore
*.jks
*.p12
upload.keystore
android.keystore
production.keystore

# Signing Info
signing-key-info.txt
keystore.properties

# Private Keys
*.pem
*.key
*.p12
id_rsa*
*.ppk

# Environment Variables
.env
.env.local
.env.production
.env.*.local

# Secrets
secrets.txt
passwords.txt
credentials.json
google-services.json

# API Keys
api-keys.txt
vapid-keys.txt

# Supabase
.supabase/

# Build outputs with keys
android/app/build/outputs/
android/keystore.properties
```

---

## 📱 Push Notifications Security

### VAPID Keys

**Генерация:**
```bash
npm install -g web-push
web-push generate-vapid-keys
```

**Результат:**
```
Public Key:  BEl62iUYgUivxIkv...
Private Key: viDjIrHhGTmn...
```

**Хранение:**
- Public key → можно коммитить в код (клиентская часть)
- Private key → ТОЛЬКО в Vercel Environment Variables

**В Vercel Dashboard:**
```
Settings → Environment Variables:

VAPID_PUBLIC_KEY=BEl62iUYgUivxIkv...
VAPID_PRIVATE_KEY=viDjIrHhGTmn...
VAPID_SUBJECT=mailto:support@grulya-fm.vercel.app
```

### Supabase Credentials

**НЕ коммитить:**
- Service role key (полный доступ к БД!)
- Database password
- JWT secret

**Можно коммитить:**
- Anon/public key (ограниченный доступ)
- Project URL

**В коде используйте:**
```javascript
const supabaseUrl = 'https://your-project.supabase.co'; // OK
const supabaseAnonKey = 'eyJhbGciOiJIUzI1...'; // OK

// НЕ ВКЛЮЧАЙТЕ service_role ключ в клиентский код!
```

---

## 🔍 Аудит безопасности

### Проверка на утечки

**GitHub Secret Scanning:**
- Автоматически обнаруживает многие типы ключей
- Уведомляет владельца репозитория
- Может заблокировать ключ (AWS, Azure, etc.)

**TruffleHog (поиск секретов в истории):**
```bash
# Установка
pip install truffleHog

# Сканирование репозитория
trufflehog --regex --entropy=True https://github.com/username/GrulyaFM
```

**gitleaks (альтернатива):**
```bash
# Установка
brew install gitleaks  # macOS
# или скачать с GitHub releases

# Сканирование
gitleaks detect --source . --verbose
```

### Проверка текущего репозитория

```bash
# Поиск файлов с "password", "key", "secret"
git grep -i "password\|secret\|key" $(git rev-list --all)

# Поиск .keystore файлов в истории
git log --all --full-history -- "*.keystore"

# Поиск больших файлов (возможно бинарные ключи)
git rev-list --objects --all | grep "$(git verify-pack -v .git/objects/pack/*.idx | sort -k 3 -n | tail -10)"
```

---

## 🚨 Инцидент Response Plan

### При обнаружении утечки

**1. Немедленно (первые 15 минут):**
- [ ] Остановить все автоматические деплои
- [ ] Пометить скомпрометированные ключи
- [ ] Уведомить команду

**2. В течение часа:**
- [ ] Ротировать все скомпрометированные ключи
- [ ] Обновить секреты в CI/CD
- [ ] Удалить секреты из Git истории (force push)

**3. В течение дня:**
- [ ] Аудит всех сервисов, использующих ключи
- [ ] Проверить логи на подозрительную активность
- [ ] Задеплоить приложение с новыми ключами
- [ ] Документировать инцидент

**4. После инцидента:**
- [ ] Провести ретроспективу
- [ ] Обновить процессы для предотвращения повтора
- [ ] Обучить команду best practices

### Контакты при инциденте

- **Play Console Support:** https://support.google.com/googleplay/android-developer/
- **GitHub Security:** security@github.com
- **Vercel Support:** support@vercel.com

---

## 📋 Security Checklist

### Перед каждым коммитом

- [ ] Проверить `git status` на чувствительные файлы
- [ ] Убедиться, что `.gitignore` актуален
- [ ] Не коммитить `.env` с реальными значениями
- [ ] Использовать `git diff` перед `git add .`

### Перед публикацией в Play Store

- [ ] Signing key в безопасном месте (3+ копии)
- [ ] Пароль keystore в password manager
- [ ] Google Play App Signing включен
- [ ] SHA256 fingerprint записан
- [ ] `assetlinks.json` с правильным SHA256

### Периодически (раз в месяц)

- [ ] Ротация API ключей (если возможно)
- [ ] Обновление зависимостей (npm audit fix)
- [ ] Сканирование на уязвимости (Snyk, Dependabot)
- [ ] Проверка логов на подозрительную активность

### При уходе члена команды

- [ ] Ротация всех shared credentials
- [ ] Отозвать доступ к Play Console
- [ ] Отозвать доступ к Vercel/Supabase
- [ ] Обновить VAPID ключи
- [ ] Проверить GitHub collaborators

---

## 🛠️ Инструменты

### Password Managers
- [1Password](https://1password.com/) - Для команд
- [Bitwarden](https://bitwarden.com/) - Open source
- [LastPass](https://www.lastpass.com/)

### Secret Management
- [GitHub Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [SOPS](https://github.com/mozilla/sops) - Encrypted secrets in Git
- [git-crypt](https://github.com/AGWA/git-crypt)

### Security Scanning
- [TruffleHog](https://github.com/trufflesecurity/trufflehog)
- [gitleaks](https://github.com/gitleaks/gitleaks)
- [Snyk](https://snyk.io/)
- [npm audit](https://docs.npmjs.com/cli/v8/commands/npm-audit)

### Key Generation
- [web-push CLI](https://www.npmjs.com/package/web-push) - VAPID keys
- [keytool](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/keytool.html) - Java keystores
- [OpenSSL](https://www.openssl.org/) - General cryptography

---

## 📚 Дополнительные ресурсы

- [OWASP Mobile Security](https://owasp.org/www-project-mobile-security/)
- [Google Play App Signing](https://support.google.com/googleplay/android-developer/answer/9842756)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security)
- [Android App Signing Best Practices](https://developer.android.com/studio/publish/app-signing)

---

## ✅ Quick Reference

### Generate new Android signing key
```bash
keytool -genkey -v -keystore upload.keystore -alias upload-key -keyalg RSA -keysize 2048 -validity 10000
```

### Extract SHA256 fingerprint
```bash
keytool -list -v -keystore upload.keystore -alias upload-key | grep SHA256
```

### Generate VAPID keys
```bash
npx web-push generate-vapid-keys
```

### Check for secrets in Git
```bash
git log --all --full-history -- "*.keystore" "*.pem" "*secret*"
```

### Remove file from Git history
```bash
git filter-repo --path secrets.txt --invert-paths --force
```

---

**Помните:** Безопасность - это процесс, а не одноразовая задача. Регулярно пересматривайте практики и обновляйте этот документ.
