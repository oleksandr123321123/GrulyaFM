# Android TWA Build Guide for GrulyaFM

Complete guide for building and publishing GrulyaFM as an Android app on Google Play Store.

## 📋 Prerequisites

- Node.js 16+ installed
- Android Studio (for SDK tools)
- Java JDK 11+ installed
- Google Play Console account ($25 one-time fee)

## 🎨 Step 1: Adaptive Icon Assets

### Icon Requirements

Android adaptive icons consist of two layers that create a visual effect:

1. **Foreground layer** - Your logo/icon (transparent PNG)
2. **Background layer** - Solid color or simple gradient
3. **Monochrome layer** - Single-color variant for Android 13+ themed icons

### Icon Specifications

- **Size**: 432×432px (108dp × 4 density scale)
- **Safe zone**: Center 288×288px (72dp × 4) - critical content must stay within this
- **Format**: PNG with transparency (foreground/monochrome), PNG or solid color (background)

### Current Icons

We have standard PWA icons that need to be split into layers:
- `icon-512.png` - Full color icon (512×512)
- `icon-192.png` - Medium icon
- `icon-72.png` through `icon-1024.png` - Various sizes

### Creating Adaptive Icons

**Option 1: Using existing icon-512.png (Quick method)**
```bash
# Use icon-512.png as foreground
# Use solid color #6D78FF as background
# This is handled automatically by Bubblewrap
```

**Option 2: Custom layers (Recommended for best quality)**
1. Design 432×432px foreground PNG with transparency
2. Create 432×432px background (solid color or gradient)
3. Create 432×432px monochrome PNG (single color on transparent)

**Monochrome Icon Requirements:**
- Single color (usually white or black)
- Transparent background
- Same safe zone rules apply
- Used by Android 13+ for themed icons that match system theme

### Testing Adaptive Icons

Use Android Studio's **Image Asset Studio**:
1. Open Android Studio
2. Right-click `app/res` → New → Image Asset
3. Upload your foreground/background/monochrome layers
4. Preview how it looks with different shapes (circle, square, rounded square)

## 🔧 Step 2: Build TWA with Bubblewrap

### Install Bubblewrap CLI

```bash
npm install -g @bubblewrap/cli
```

### Initialize TWA Project

```bash
# Navigate to project directory
cd C:\Users\alex\Documents\GitHub\GrulyaFM

# Initialize with existing twa-manifest.json
bubblewrap init --manifest twa-manifest.json
```

Bubblewrap will:
- Download your web manifest
- Verify assetlinks.json
- Generate Android project in `./android/` directory
- Configure deep links automatically

### Update SDK Versions (if needed)

Edit `android/app/build.gradle`:
```gradle
android {
    compileSdkVersion 34

    defaultConfig {
        applicationId "app.vercel.grulya_fm.twa"
        minSdkVersion 23  // Android 6.0+ (supports 95% of devices)
        targetSdkVersion 34  // Android 14
        versionCode 1
        versionName "1.0.0"
    }
}
```

**SDK Version Recommendations:**
- **minSdkVersion 23** (Android 6.0 Marshmallow) - Broad compatibility, supports Web APIs we use
- **targetSdkVersion 34** (Android 14) - Latest stable, required for new Play Store submissions
- **Alternative**: minSdkVersion 24 (Android 7.0) if you need advanced features

## 🔐 Step 3: Generate Signing Key

### Option A: Google Play App Signing (Recommended)

Let Google manage your signing keys for better security.

1. Generate an **upload key** (not the final signing key):
```bash
keytool -genkey -v -keystore android.keystore -alias grulyafm-key -keyalg RSA -keysize 2048 -validity 10000
```

2. Answer the prompts:
   - Password: **[Choose strong password and SAVE IT]**
   - Name: Your name or company
   - Organization: GrulyaFM or your company
   - Location: Your city
   - Country: Two-letter code (e.g., UA, US)

3. When uploading to Play Console:
   - Choose "Let Google manage my app signing key"
   - Upload your .aab signed with upload key
   - Google will re-sign with their production key

**Benefits:**
- Google handles key security and rotation
- Can reset upload key if compromised
- Automatic APK optimization

### Option B: Own Signing Key

If you want full control:

```bash
# Generate production signing key
keytool -genkey -v -keystore production.keystore -alias grulyafm-production -keyalg RSA -keysize 2048 -validity 10000
```

**⚠️ CRITICAL:** Backup this keystore file securely!
- If lost, you can NEVER update your app on Play Store
- Store in 3+ separate secure locations
- Use a password manager for credentials

### Extract SHA256 Fingerprint

```bash
# For upload/debug key
keytool -list -v -keystore android.keystore -alias grulyafm-key

# Look for SHA256 line, example:
# SHA256: 11:13:66:59:75:61:0C:83:65:6D:C8:45:57:25:F5:A8:E8:02:AC:98:57:E6:AB:4A:D9:68:FC:60:C9:A7:26:47
```

Update `.well-known/assetlinks.json` with this fingerprint (already done).

## 🏗️ Step 4: Build Release AAB

### Build Android App Bundle

```bash
# Build unsigned AAB
bubblewrap build

# Or build with specific keystore
bubblewrap build --signingKeyPath=./android.keystore --signingKeyAlias=grulyafm-key --signingKeyPassword=[YOUR_PASSWORD]
```

Output: `android/app/build/outputs/bundle/release/app-release.aab`

### Verify AAB

```bash
# Check what's inside the bundle
bundletool build-bundle --bundle=android/app/build/outputs/bundle/release/app-release.aab --output=./check.aab

# Extract APKs to test
bundletool build-apks --bundle=app-release.aab --output=app.apks --mode=universal
```

## 🔗 Step 5: Deep Links Configuration

Deep links are automatically configured by Bubblewrap using your `manifest.json` and `assetlinks.json`.

### URL Patterns Supported

Based on your manifest shortcuts:
- `https://grulya-fm.vercel.app/` - Home page
- `https://grulya-fm.vercel.app/?random=true` - Random station
- `https://grulya-fm.vercel.app/?tab=favorites` - Favorites tab
- `https://grulya-fm.vercel.app/?tab=history` - History tab
- `https://grulya-fm.vercel.app/?station=[id]` - Direct station link (future)

### Testing Deep Links

1. Build and install debug APK:
```bash
bubblewrap build --signingKeyPath=debug.keystore
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

2. Test deep link:
```bash
adb shell am start -W -a android.intent.action.VIEW -d "https://grulya-fm.vercel.app/?random=true" app.vercel.grulya_fm.twa
```

3. Expected behavior:
   - App opens directly to the specified screen
   - No browser chrome visible
   - Back button returns to previous app (not browser)

## 📱 Step 6: Google Play Console Setup

### Create New App

1. Go to [Google Play Console](https://play.google.com/console)
2. Click "Create app"
3. Fill in:
   - **App name**: GrulyaFM - Global Radio
   - **Default language**: Russian (ru-RU) or English (en-US)
   - **App/Game**: App
   - **Free/Paid**: Free

### App Category and Tags

- **Category**: Music & Audio
- **Tags**: radio, music, streaming, international, live radio
- **Content rating**: Everyone (no restrictions)
- **Target audience**: 13+ years (COPPA compliance)

### Privacy Policy

**Required**: Must provide URL to privacy policy

Already created: `https://grulya-fm.vercel.app/privacy-policy.html`

Enter this in Play Console → Policy → Privacy Policy

### Data Safety Form

You'll need to declare:
- ✅ **Collects data**: Account info (if using Supabase auth), App activity, Audio
- ✅ **Shares data**: No (unless using analytics)
- ✅ **Encryption**: Data encrypted in transit (HTTPS)
- ✅ **User controls**: Can delete account, export data

## 🌍 Step 7: Store Listing Localization

### Primary Language: Russian (ru-RU)

**Название приложения** (App name, 30 chars max):
```
GrulyaFM - Мировое Радио
```

**Краткое описание** (Short description, 80 chars max):
```
200+ радиостанций из 22 стран. Слушайте радио со всего мира бесплатно
```

**Полное описание** (Full description, 4000 chars max):
```
🎵 GrulyaFM - Глобальный Радио Плеер

Слушайте 200+ радиостанций из 22 стран мира совершенно бесплатно. Откройте для себя музыку, новости и подкасты со всей планеты.

✨ ОСНОВНЫЕ ФУНКЦИИ

📻 Огромная коллекция станций
• 200+ радиостанций из России, Украины, США, Великобритании, Германии, Франции и других стран
• Жанры: поп, рок, джаз, классика, электроника, новости, ток-шоу
• Постоянное обновление списка станций

❤️ Избранное и персонализация
• Добавляйте любимые станции в избранное
• Быстрый доступ к недавно прослушанным
• История треков (последние 50 композиций)
• Темная и светлая темы

🎚️ Продвинутый плеер
• Высокое качество звука (64/128/320 kbps)
• Автоматический выбор качества по скорости сети
• Таймер сна (15 мин - 2 часа)
• Будильник с любимой станцией
• Управление с экрана блокировки
• Непрерывное воспроизведение в фоне

🔍 Умный поиск и фильтры
• Поиск по названию, стране, жанру
• Фильтрация по странам и жанрам
• Случайная станция для открытий
• Сортировка по популярности и алфавиту

🌐 Поддержка языков
• Интерфейс на 10 языках
• Русский, English, Українська, Deutsch, Français и другие
• Автоматическое определение языка

⚡ ПОЧЕМУ GRULYAFM?

✓ Совершенно бесплатно - без подписок и скрытых платежей
✓ Без рекламы - только музыка
✓ Работает оффлайн - кеширование станций
✓ Экономия трафика - адаптивное качество
✓ Конфиденциальность - минимум разрешений

🎯 ИДЕАЛЬНО ДЛЯ

• Прослушивания музыки дома или в пути
• Изучения языков через радио
• Отслеживания новостей из разных стран
• Засыпания под любимую станцию
• Пробуждения с музыкой вместо сигнала

📱 PWA ТЕХНОЛОГИЯ

Современное веб-приложение с функциями нативного:
• Установка на главный экран
• Работа без браузера
• Быстрый запуск
• Минимальный размер

🔒 ПРИВАТНОСТЬ И БЕЗОПАСНОСТЬ

• Не собираем личные данные
• HTTPS шифрование
• Опциональная регистрация для синхронизации
• Прозрачная политика конфиденциальности

🆕 РЕГУЛЯРНЫЕ ОБНОВЛЕНИЯ

Мы постоянно улучшаем приложение:
• Добавляем новые станции
• Исправляем ошибки
• Слушаем ваши отзывы

💬 ПОДДЕРЖКА

Есть вопросы или предложения?
Email: support@grulya-fm.vercel.app
Сайт: https://grulya-fm.vercel.app

Откройте мир радио с GrulyaFM! 🌍🎧
```

### Secondary Language: English (en-US)

**App name** (30 chars max):
```
GrulyaFM - Global Radio
```

**Short description** (80 chars max):
```
200+ radio stations from 22 countries. Listen to worldwide radio for free
```

**Full description** (4000 chars max):
```
🎵 GrulyaFM - Global Radio Player

Listen to 200+ radio stations from 22 countries around the world completely free. Discover music, news, and podcasts from across the planet.

✨ KEY FEATURES

📻 Massive Station Collection
• 200+ radio stations from Russia, Ukraine, USA, UK, Germany, France, and more
• Genres: pop, rock, jazz, classical, electronic, news, talk shows
• Constantly updated station list

❤️ Favorites & Personalization
• Add favorite stations for quick access
• Recently played stations
• Track history (last 50 songs)
• Dark and light themes

🎚️ Advanced Player
• High-quality audio (64/128/320 kbps)
• Automatic quality based on network speed
• Sleep timer (15 min - 2 hours)
• Alarm clock with your favorite station
• Lock screen controls
• Continuous background playback

🔍 Smart Search & Filters
• Search by name, country, genre
• Filter by countries and genres
• Random station for discovery
• Sort by popularity and alphabet

🌐 Multi-Language Support
• Interface in 10 languages
• Russian, English, Ukrainian, German, French, and more
• Automatic language detection

⚡ WHY GRULYAFM?

✓ Completely free - no subscriptions or hidden fees
✓ Ad-free - just music
✓ Works offline - station caching
✓ Data saving - adaptive quality
✓ Privacy-focused - minimal permissions

🎯 PERFECT FOR

• Listening to music at home or on the go
• Learning languages through radio
• Following news from different countries
• Falling asleep to your favorite station
• Waking up to music instead of an alarm

📱 PWA TECHNOLOGY

Modern web app with native features:
• Install to home screen
• Works without browser
• Fast launch
• Minimal size

🔒 PRIVACY & SECURITY

• No personal data collection
• HTTPS encryption
• Optional registration for sync
• Transparent privacy policy

🆕 REGULAR UPDATES

We're constantly improving:
• Adding new stations
• Fixing bugs
• Listening to your feedback

💬 SUPPORT

Questions or suggestions?
Email: support@grulya-fm.vercel.app
Website: https://grulya-fm.vercel.app

Open the world of radio with GrulyaFM! 🌍🎧
```

## 📸 Step 8: Screenshots Requirements

### Phone Screenshots (REQUIRED)

**Requirements:**
- **Minimum**: 2 screenshots
- **Recommended**: 8 screenshots
- **Format**: JPEG or 24-bit PNG (no alpha)
- **Dimensions**: 16:9 or 9:16 aspect ratio
- **Size**: 1080×1920 (portrait) or 1920×1080 (landscape)
- **Max file size**: 8MB each

**Recommended Screenshots:**

1. **Home Screen** - Station list with player
2. **Playing Station** - Full player with metadata
3. **Favorites Tab** - Saved stations
4. **Search** - Search functionality
5. **Filters** - Country/genre filters
6. **Sleep Timer** - Timer UI
7. **Alarm** - Alarm setup
8. **Dark Theme** - Same screen in dark mode

**How to Create:**
1. Open app in browser
2. Set viewport to 1080×1920 (mobile)
3. Use browser DevTools screenshot feature
4. Or use Android emulator and `adb screencap`

**Tips:**
- Show the app in use, not just empty screens
- Include diverse content (different stations, genres)
- Highlight key features
- Use consistent device frame (optional)

### Tablet Screenshots (OPTIONAL but RECOMMENDED)

**Requirements:**
- **Format**: Same as phone
- **7-inch tablet**: 1920×1200 or 1200×1920
- **10-inch tablet**: 2560×1600 or 1600×2560
- **Minimum**: 1 screenshot
- **Recommended**: 4-8 screenshots

**Tablet-specific UI:**
- Two-column layout
- Side-by-side station list + player
- Wider cards
- More content visible

## 🎬 Step 9: Promotional Assets (Optional)

### Feature Graphic (Optional but recommended)

- **Size**: 1024×500
- **Format**: JPEG or 24-bit PNG
- **Content**: App branding, key features, tagline
- **Use**: Featured placement on Play Store

### Promo Video (Optional)

- **Length**: 30 seconds - 2 minutes
- **Format**: YouTube URL
- **Content**: Show app features, UX, value proposition
- **Tips**: Keep it short, show real usage, add music

## 🚀 Step 10: Upload to Play Console

### Release Track Options

**Internal Testing** (Recommended first):
- Up to 100 testers
- Fast review (minutes to hours)
- Test app before wider release

**Closed Testing**:
- Up to 100,000 testers
- Share via link or email list
- Get feedback before public launch

**Open Testing**:
- Anyone can join via Play Store link
- Public but not fully released
- Good for beta programs

**Production**:
- Full public release
- Longer review (2-7 days)
- Goes live to all users

### Upload Process

1. **Go to Release → Production** (or Testing)
2. **Create new release**
3. **Upload AAB**: Drop your `app-release.aab` file
4. **Release name**: "1.0.0 - Initial Release"
5. **Release notes**:

```
🎉 Initial Release of GrulyaFM

✨ Features:
• 200+ radio stations from 22 countries
• High-quality audio streaming
• Favorites and history
• Sleep timer and alarm clock
• Dark and light themes
• Offline support
• 10 languages supported

Thank you for trying GrulyaFM! Please share your feedback.
```

6. **Review and rollout**: Start rollout to 100% of users

### Review Process

- **Typical time**: 2-7 days
- **Can be faster**: 1 day for simple apps
- **Can be longer**: If flagged for manual review

**Common rejection reasons:**
- Missing privacy policy
- Incorrect content rating
- Metadata violations (misleading screenshots)
- Crashes on test devices
- Missing required permissions explanations

## 📊 Step 11: Post-Launch

### Monitor Crashes

1. Go to **Quality → Android vitals**
2. Check crash rate (should be <1%)
3. Use Play Console crash reports to fix issues

### Track Performance

- **Installs**: Daily/weekly install trends
- **Ratings**: Respond to reviews (especially negative)
- **Uninstalls**: Watch for sudden spikes
- **ANR rate**: Should be <0.5%

### Update Releases

```bash
# Increment version in twa-manifest.json
{
  "appVersionName": "1.0.1",
  "appVersionCode": 2
}

# Rebuild
bubblewrap build

# Upload new AAB to Play Console
```

## 🐛 Troubleshooting

### "App not verified" error

**Cause**: assetlinks.json not accessible or SHA256 mismatch

**Fix**:
1. Verify file accessible: `curl https://grulya-fm.vercel.app/.well-known/assetlinks.json`
2. Check SHA256 matches: `keytool -list -v -keystore android.keystore`
3. Wait 24-48 hours for Google to cache the file

### Build fails

**Common causes**:
- Java version mismatch (needs JDK 11+)
- Android SDK not found
- Signing key password incorrect

**Fix**:
```bash
# Check Java version
java -version  # Should be 11 or higher

# Check Android SDK
echo $ANDROID_HOME  # Should point to SDK directory

# Rebuild with verbose logging
bubblewrap build --verbose
```

### Deep links don't work

**Causes**:
- App not set as default handler
- assetlinks.json issues
- URL pattern mismatch

**Fix**:
1. Uninstall app completely
2. Clear Chrome cache
3. Reinstall and test again
4. On Android, go to Settings → Apps → GrulyaFM → Set as default → Supported web addresses

### Upload to Play Console rejected

**Check**:
- App must be signed with same key for updates
- Version code must increment (can't reuse)
- Min SDK must not decrease in updates
- Package name must match (can't change after first upload)

## 📚 Additional Resources

- [Bubblewrap Documentation](https://github.com/GoogleChromeLabs/bubblewrap)
- [TWA Best Practices](https://developer.chrome.com/docs/android/trusted-web-activity/)
- [Play Console Help](https://support.google.com/googleplay/android-developer/)
- [Android App Bundle Format](https://developer.android.com/guide/app-bundle)
- [Digital Asset Links](https://developers.google.com/digital-asset-links/v1/getting-started)

## ✅ Pre-Launch Checklist

- [ ] Web app works perfectly at https://grulya-fm.vercel.app
- [ ] manifest.json has correct icons and metadata
- [ ] assetlinks.json accessible at `/.well-known/assetlinks.json`
- [ ] Privacy policy page created and linked
- [ ] Terms of service page created
- [ ] Icons prepared (512×512 minimum, adaptive recommended)
- [ ] Signing keystore generated and backed up securely
- [ ] SHA256 fingerprint extracted and added to assetlinks.json
- [ ] twa-manifest.json configured correctly
- [ ] TWA builds without errors
- [ ] Deep links tested and working
- [ ] Screenshots captured (minimum 2, recommended 8)
- [ ] Store listing written in Russian and English
- [ ] Google Play Console account created
- [ ] Content rating questionnaire completed
- [ ] Data safety form filled out
- [ ] Test on multiple devices before production release

---

**Need Help?**

If you encounter any issues during the build process, check:
1. Bubblewrap GitHub issues
2. Stack Overflow (tag: trusted-web-activity)
3. Chrome Developers community forum
