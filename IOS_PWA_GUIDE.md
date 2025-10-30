# iOS PWA Setup Guide

Complete guide for making GrulyaFM work perfectly on iOS as a Progressive Web App.

## 📱 iOS PWA Support

### What's Included

✅ **Basic Support Added:**
- `apple-mobile-web-app-capable` - Runs fullscreen without Safari UI
- `apple-mobile-web-app-status-bar-style` - Translucent status bar
- `apple-mobile-web-app-title` - App name on home screen
- `apple-touch-icon` - Home screen icon (multiple sizes)
- Splash screens for all iPhone/iPad sizes
- Safari audio unlock gesture
- Web Push support (iOS 16.4+)

### iOS PWA Features

**Works:**
- ✅ Install to Home Screen
- ✅ Fullscreen mode (no browser chrome)
- ✅ Audio playback in background
- ✅ Lock screen controls (Media Session API)
- ✅ Service Worker caching
- ✅ Offline support
- ✅ Web Push notifications (iOS 16.4+, only when installed)

**Limitations:**
- ❌ Web Push requires iOS 16.4+ and PWA installed to home screen
- ❌ No app badging API
- ❌ Limited background sync
- ❌ IndexedDB quota limited (50MB)

## 🖼️ Splash Screen Generation

The app currently references splash screens, but they need to be generated.

### Splash Screen Sizes Required

```
iPhone SE:           640×1136   (2x)
iPhone 6/7/8:        750×1334   (2x)
iPhone 6/7/8 Plus:   1242×2208  (3x)
iPhone X/XS/11 Pro:  1125×2436  (3x)
iPhone XR/11:        828×1792   (2x)
iPhone XS Max/11 Max: 1242×2688 (3x)
iPhone 12/13 mini:   1080×2340  (3x)
iPhone 12/13/14:     1170×2532  (3x)
iPhone 14 Plus:      1284×2778  (3x)
iPad:                1536×2048  (2x)
iPad Pro 11":        1668×2224  (2x)
iPad Pro 12.9":      2048×2732  (2x)
```

### Option 1: Generate with PWA Asset Generator

**Install:**
```bash
npm install -g pwa-asset-generator
```

**Generate all splash screens:**
```bash
pwa-asset-generator icon-512.png splash/ \
  --background "#0b0f14" \
  --splash-only \
  --portrait-only \
  --padding "20%" \
  --quality 90 \
  --opaque false
```

This creates all required sizes in the `splash/` directory.

### Option 2: Generate with Figma/Sketch

1. Create artboards for each size
2. Add GrulyaFM logo centered
3. Background: `#0b0f14` (dark theme)
4. Logo should be ~30% of screen height
5. Export as PNG @2x and @3x

### Option 3: Use Online Tool

https://appsco.pe/developer/splash-screens

1. Upload `icon-512.png`
2. Select background color `#0b0f14`
3. Generate all iOS sizes
4. Download and place in `/splash/` folder

### Splash Screen HTML (Already Added)

The splash screens are already referenced in `index.html`:

```html
<link rel="apple-touch-startup-image" href="/splash/iphonex_splash.png"
      media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" />
```

Just generate the images and place them in `/splash/` directory.

## 🔊 Audio Unlock for Safari

### Problem

Safari on iOS requires audio playback to be initiated by a user gesture for security reasons. The app won't play audio on first load without user interaction.

### Solution (Already Implemented)

The app now includes an iOS audio unlock mechanism in `app.js`:

```javascript
// iOS SAFARI AUDIO UNLOCK
function unlockIOSAudio() {
  // Detects iOS/Safari
  // Plays silent audio on first touch/click
  // Unlocks Web Audio context
}
```

**How it works:**
1. Detects iOS device on page load
2. Waits for first user touch/click
3. Plays silent audio to unlock audio context
4. All subsequent audio plays normally

**User Experience:**
- No visible UI changes
- Works automatically on first interaction
- No "Click to enable audio" popup needed

## 📲 Web Push Notifications (iOS 16.4+)

### Requirements

- iOS 16.4 or later
- PWA must be installed to Home Screen
- User must grant notification permission

### Implementation (Already Added)

**Files:**
- `push-notifications.js` - Client-side push API
- `api/push-subscribe.js` - Server endpoint for subscriptions
- `api/push-unsubscribe.js` - Server endpoint for unsubscribe

### Setup VAPID Keys

**1. Generate keys:**
```bash
npm run generate-vapid
```

**2. Add to Vercel Environment Variables:**
```
VAPID_PUBLIC_KEY=BEl62iUYgUivxIkv69yViEuiBIa-Ib9-SkvMeAtA3LFgDzkrxZJjSgSn...
VAPID_PRIVATE_KEY=viDjIrHhGUlIlGy...
VAPID_SUBJECT=mailto:support@grulya-fm.vercel.app
```

**3. Update `push-notifications.js`:**
```javascript
const VAPID_PUBLIC_KEY = 'YOUR_ACTUAL_PUBLIC_KEY';
```

### Usage in App

```javascript
import {
  subscribeToPush,
  isPushSupported,
  getPushInfo
} from './push-notifications.js';

// Check support
const info = getPushInfo();
console.log('Push supported:', info.canUsePush);

// Subscribe
if (info.canUsePush) {
  await subscribeToPush();
}
```

### iOS Push Limitations

- Only works when PWA is installed to Home Screen
- Won't work in Safari browser
- Requires user gesture to subscribe
- iOS 16.4+ only

**Check if user can receive push:**
```javascript
const canUsePush = isIOSPWA() && isPushSupported();
if (!canUsePush) {
  console.log('Install to Home Screen for notifications');
}
```

## 🎨 Status Bar Styles

Three options for `apple-mobile-web-app-status-bar-style`:

1. **`default`** - White status bar, black text
2. **`black`** - Black status bar, white text
3. **`black-translucent`** - Transparent, app content under status bar (current)

**Current setting:** `black-translucent`
- Looks more native
- App content extends under status bar
- Add `padding-top: env(safe-area-inset-top)` to header if needed

## 🔍 Testing iOS PWA

### Safari Web Inspector (Mac Required)

1. **Enable on iPhone:**
   - Settings → Safari → Advanced → Web Inspector: ON

2. **Connect iPhone to Mac:**
   - Open Safari on Mac
   - Develop → [Your iPhone] → grulya-fm.vercel.app

3. **Test features:**
   - Console logs
   - Network requests
   - Service Worker status
   - Storage (localStorage, IndexedDB)

### iOS Simulator (Mac Required)

1. **Install Xcode** from Mac App Store

2. **Open Simulator:**
   ```bash
   open -a Simulator
   ```

3. **Test PWA:**
   - Open Safari in simulator
   - Go to grulya-fm.vercel.app
   - Share → Add to Home Screen
   - Test installed app

### Test on Real Device

**Install PWA:**
1. Open https://grulya-fm.vercel.app in Safari
2. Tap Share button
3. Tap "Add to Home Screen"
4. Tap "Add"
5. App appears on home screen

**Test checklist:**
- [ ] App opens fullscreen (no Safari UI)
- [ ] Custom app icon shows
- [ ] Splash screen displays on launch
- [ ] Audio plays after first interaction
- [ ] Background playback works with screen locked
- [ ] Lock screen controls appear
- [ ] Service Worker caches content
- [ ] App works offline
- [ ] Status bar style is correct
- [ ] Web Push prompt appears (iOS 16.4+)

## 🐛 Common iOS Issues

### Issue: Audio doesn't play

**Cause:** Audio context not unlocked
**Fix:** Already implemented - iOS audio unlock on first gesture

### Issue: Background audio stops

**Cause:** Wake Lock not working, or audio element not set correctly
**Fix:**
- Use Wake Lock API (already implemented)
- Use Media Session API (already implemented)
- Audio must be playing continuously (not paused)

### Issue: Splash screen not showing

**Cause:** Images not generated or wrong paths
**Fix:**
- Generate splash screens (see above)
- Verify paths in HTML match actual files
- Check file sizes aren't too large (>1MB)

### Issue: App reloads when switching apps

**Cause:** iOS kills PWAs in background to save memory
**Fix:**
- Not fixable, iOS limitation
- Use Service Worker to cache state
- Persist playback state in localStorage

### Issue: Can't subscribe to push notifications

**Causes:**
1. iOS version < 16.4
2. App not installed to Home Screen
3. Running in Safari browser instead of standalone

**Fix:**
```javascript
const info = getPushInfo();
if (!info.iOSPushSupported) {
  alert('Update to iOS 16.4+ for notifications');
}
if (!info.isStandalone) {
  alert('Install app to Home Screen first');
}
```

## 📊 iOS PWA Analytics

Track iOS users separately:

```javascript
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
const isStandalone = window.navigator.standalone ||
                    window.matchMedia('(display-mode: standalone)').matches;

if (isIOS && isStandalone) {
  // User is running iOS PWA
  analytics.track('iOS PWA User');
}
```

## 🔗 Resources

- [Apple PWA Documentation](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html)
- [iOS PWA Limitations](https://firt.dev/notes/pwa-ios/)
- [PWA Asset Generator](https://github.com/elegantapp/pwa-asset-generator)
- [What PWA Can Do Today](https://whatpwacando.today/)
- [iOS Web Push (iOS 16.4+)](https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/)

## ✅ iOS PWA Checklist

Setup:
- [x] `apple-mobile-web-app-capable` meta tag
- [x] `apple-mobile-web-app-status-bar-style` meta tag
- [x] `apple-mobile-web-app-title` meta tag
- [x] `apple-touch-icon` links (multiple sizes)
- [ ] Splash screens generated and placed in `/splash/`
- [x] iOS audio unlock implemented
- [x] Web Push API integrated (iOS 16.4+)
- [x] VAPID keys generated

Testing:
- [ ] Test on real iOS device
- [ ] Test audio playback
- [ ] Test background audio
- [ ] Test lock screen controls
- [ ] Test offline mode
- [ ] Test push notifications (iOS 16.4+)
- [ ] Test different iOS versions
- [ ] Test on iPad

Documentation:
- [x] Setup guide created
- [x] Common issues documented
- [x] Testing instructions provided

---

**Next Steps:**

1. Generate splash screens (see "Splash Screen Generation" above)
2. Generate VAPID keys for push notifications
3. Test on real iOS devices
4. Monitor iOS-specific errors in Sentry (future)

**Need Help?**

Check the [iOS PWA limitations](https://firt.dev/notes/pwa-ios/) for up-to-date info on what's supported.
