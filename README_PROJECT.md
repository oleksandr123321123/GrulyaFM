# 🎵 GrulyaFM - Global Radio PWA

**200+ radio stations from 22 countries** | **Progressive Web App** | **iOS & Android Support**

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)](https://grulya-fm.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PWA](https://img.shields.io/badge/PWA-Ready-blue)](https://grulya-fm.vercel.app)

🌐 **Live Demo:** https://grulya-fm.vercel.app

---

## 📱 Features

### 🎧 Radio Features
- **200+ stations** from 22 countries (Russia, USA, UK, France, Germany, etc.)
- **High-quality streaming** (64/128/320 kbps with adaptive quality)
- **Favorites & History** - Save favorite stations, track last 50 songs
- **Smart search & filters** - By name, country, genre
- **Random station** - Discover new music
- **Metadata display** - Track info from Radio Browser API

### ⏰ Advanced Features
- **Sleep timer** (15 min - 2 hours) with countdown display
- **Alarm clock** - Wake up to your favorite station
- **Background playback** - Continuous audio with screen locked
- **Lock screen controls** - Media Session API integration
- **Audio focus handling** - Auto-pause during calls
- **Volume normalization** - Consistent listening experience

### 🌍 Multi-Language & Theme
- **10 languages supported** - Russian, English, Ukrainian, German, French, Spanish, Italian, Polish, Turkish, Portuguese
- **Dark & light themes** - Auto or manual toggle
- **Responsive design** - Mobile, tablet, desktop optimized

### ☁️ Cloud Sync (Supabase)
- **Cross-device sync** - Favorites, custom stations, settings
- **User authentication** - Secure account system
- **Offline-first** - Works without internet (cached content)

### 📲 Progressive Web App
- **Install to Home Screen** - iOS & Android
- **Service Worker** - Offline support, caching strategies
- **Web Push notifications** - iOS 16.4+ when installed (optional)
- **Adaptive icons** - Android themed icons support

---

## 🚀 Quick Start

### For Users

**Visit:** https://grulya-fm.vercel.app

**Install PWA:**
- **iOS**: Safari → Share → Add to Home Screen
- **Android**: Chrome → Menu → Install app

**Create Account (Optional):**
- Click Account (👤) → Sign Up
- Sync favorites across devices

### For Developers

**1. Clone repository:**
```bash
git clone https://github.com/oleksandr123321123/GrulyaFM.git
cd GrulyaFM
```

**2. Install dependencies:**
```bash
npm install
```

**3. Set up Supabase (optional, for cloud sync):**
- Follow instructions in [SUPABASE_SETUP.sql](SUPABASE_SETUP.sql)
- Update keys in `index.html`

**4. Run development server:**
```bash
npm run dev
```

Open http://localhost:3000

**5. Deploy to Vercel:**
```bash
vercel
```

---

## 📂 Project Structure

```
GrulyaFM/
├── index.html              # Main HTML (UI structure)
├── app.js                  # Main JavaScript (app logic)
├── supabase-sync.js        # Cloud sync module
├── sw.js                   # Service Worker (caching)
├── manifest.json           # PWA manifest
├── push-notifications.js   # Web Push API client
├── twa-manifest.json       # Android TWA configuration
│
├── api/
│   ├── radio-proxy.js      # CORS proxy for radio streams
│   ├── push-subscribe.js   # Push notification subscription
│   └── push-unsubscribe.js # Push unsubscribe endpoint
│
├── .github/
│   └── workflows/
│       └── ci-cd.yml       # GitHub Actions CI/CD pipeline
│
├── splash/                 # iOS splash screens (to be generated)
│   └── (generate with pwa-asset-generator)
│
├── .well-known/
│   └── assetlinks.json     # Android App Links verification
│
├── Documentation/
│   ├── QUICK_START.md              # Quick start guide
│   ├── ANDROID_BUILD_GUIDE.md      # Android TWA build (45+ pages)
│   ├── ICON_GUIDE.md               # Adaptive icon creation
│   ├── SCREENSHOTS_GUIDE.md        # Play Store screenshots
│   ├── PLAY_STORE_LISTING.md       # Store listing content (ru/en)
│   ├── IOS_PWA_GUIDE.md            # iOS PWA setup & testing
│   ├── SECURITY_GUIDE.md           # Security & key management
│   ├── SETUP_INSTRUCTIONS.md       # Final setup steps
│   └── SUPABASE_SETUP.sql          # Database schema
│
├── Scripts/
│   ├── build-twa.bat               # Windows build automation
│   ├── check-deployment-ready.cjs  # Deployment readiness checker
│   └── generate-vapid-keys.cjs     # VAPID key generator
│
└── Config/
    ├── package.json          # npm scripts & dependencies
    ├── .eslintrc.json        # ESLint configuration
    ├── lighthouserc.json     # Lighthouse CI budgets
    ├── vercel.json           # Vercel deployment config
    └── .gitignore            # Git ignore rules (security-focused)
```

---

## 🛠️ Technology Stack

### Frontend
- **Vanilla JavaScript** (ES6+)
- **CSS3** with CSS Variables for theming
- **HTML5** with semantic markup
- **Web APIs**: Media Session, Wake Lock, Page Visibility, Network Information

### PWA
- **Service Worker** with cache strategies
- **Web App Manifest** with shortcuts
- **Web Push API** (iOS 16.4+ & Android)
- **IndexedDB** for offline storage

### Backend
- **Vercel Serverless Functions** (Node.js)
- **Supabase** (PostgreSQL, Auth, Row Level Security)
- **CORS Proxy** for radio streams
- **Radio Browser API** for metadata

### Development
- **GitHub Actions** (CI/CD pipeline)
- **Lighthouse CI** (performance monitoring)
- **ESLint** (code quality)
- **Bubblewrap** (Android TWA builds)

### Deployment
- **Vercel** (automatic deployments)
- **Google Play Store** (Android)
- **iOS Home Screen** (PWA)

---

## 📊 Performance

### Lighthouse Scores (Target)
- **Performance:** ≥ 85%
- **Accessibility:** ≥ 90%
- **Best Practices:** ≥ 85%
- **SEO:** ≥ 90%
- **PWA:** ≥ 80%

### Metrics
- **First Contentful Paint (FCP):** < 2s
- **Largest Contentful Paint (LCP):** < 3s
- **Cumulative Layout Shift (CLS):** < 0.1
- **Total Blocking Time (TBT):** < 300ms

### Optimization
- Service Worker caching (stale-while-revalidate)
- Lazy loading of metadata
- Adaptive bitrate selection
- Efficient state management
- Minimal JavaScript bundle

---

## 🔐 Security

### Implemented
- ✅ **HTTPS** everywhere
- ✅ **Row Level Security** (Supabase RLS)
- ✅ **Secure authentication** (Supabase Auth)
- ✅ **No secrets in code** (.gitignore, environment variables)
- ✅ **Content Security Policy** headers
- ✅ **XSS protection** (sanitized inputs)
- ✅ **CORS** properly configured

### Key Management
- Android signing keys NOT in repository
- VAPID keys in Vercel environment variables
- Supabase keys (anon public key safe for client)
- See [SECURITY_GUIDE.md](SECURITY_GUIDE.md) for details

### CI/CD Security
- npm audit (dependency vulnerabilities)
- TruffleHog (secret scanning)
- .gitignore validation
- Automated security checks on every push

---

## 🧪 Testing

### Manual Testing
```bash
# Check deployment readiness
npm run check-ready

# Lint code
npm run lint

# Security audit
npm run audit

# Lighthouse CI
npm run lighthouse
```

### iOS Testing
See [IOS_PWA_GUIDE.md](IOS_PWA_GUIDE.md):
- Install PWA to Home Screen
- Test audio playback
- Test background playback
- Test lock screen controls
- Test push notifications (iOS 16.4+)

### Android Testing
See [ANDROID_BUILD_GUIDE.md](ANDROID_BUILD_GUIDE.md):
- Build TWA with Bubblewrap
- Test deep links
- Test app shortcuts
- Upload to Play Store Internal Testing

---

## 📱 Mobile Support

### iOS (PWA)
- **iOS 14+** - Full PWA support
- **iOS 16.4+** - Web Push notifications
- **Fullscreen mode** - No Safari UI
- **Audio unlock gesture** - Auto-handles Safari restrictions
- **Background audio** - Wake Lock API
- **Lock screen controls** - Media Session API

### Android (TWA)
- **Android 6+ (SDK 23+)** - Minimum support
- **Android 14 (SDK 34)** - Target version
- **Trusted Web Activity** - Native app wrapper
- **Deep linking** - Opens directly in app
- **App shortcuts** - Random station, Favorites
- **Adaptive icons** - Material You themed icons

---

## 🚀 Deployment

### Vercel (Automatic)
Deployment triggers on every push to `master`:
1. Code pushed to GitHub
2. Vercel auto-deploys
3. CI/CD runs tests
4. Site live at https://grulya-fm.vercel.app

### Android (Manual)
1. Generate signing key
2. Build AAB: `npm run build:android`
3. Upload to Play Console
4. See [QUICK_START.md](QUICK_START.md)

### iOS (User-Installed PWA)
1. Users visit site in Safari
2. Share → Add to Home Screen
3. PWA installed

---

## 📈 Roadmap

### v1.1 (Planned)
- [ ] Equalizer controls
- [ ] Podcast support
- [ ] Social sharing
- [ ] Sleep timer fade out
- [ ] Station recommendations

### v1.2 (Future)
- [ ] Chromecast support
- [ ] CarPlay integration
- [ ] Android Auto
- [ ] Multi-room sync
- [ ] Lyrics display

---

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create feature branch (`git checkout -b feature/YourFeature`)
3. Commit changes (`git commit -m 'Add YourFeature'`)
4. Push to branch (`git push origin feature/YourFeature`)
5. Open Pull Request

**Before submitting:**
- Run `npm run lint`
- Run `npm run check-ready`
- Test on iOS and Android
- Update documentation

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file

---

## 👥 Authors

**Created by Grulya Team**

- **Email:** alexandrgreen051@gmail.com
- **GitHub:** [@oleksandr123321123](https://github.com/oleksandr123321123)

---

## 🙏 Acknowledgments

- **Radio Browser API** - Radio station metadata
- **Supabase** - Backend-as-a-Service
- **Vercel** - Hosting & serverless functions
- **Bubblewrap** - TWA generation
- **Community** - 200+ curated radio stations

---

## 📚 Documentation

- **[QUICK_START.md](QUICK_START.md)** - Get started in 5 minutes
- **[SETUP_INSTRUCTIONS.md](SETUP_INSTRUCTIONS.md)** - Final setup steps
- **[ANDROID_BUILD_GUIDE.md](ANDROID_BUILD_GUIDE.md)** - Build for Play Store (45 pages)
- **[IOS_PWA_GUIDE.md](IOS_PWA_GUIDE.md)** - iOS PWA setup & testing
- **[SECURITY_GUIDE.md](SECURITY_GUIDE.md)** - Security best practices
- **[PLAY_STORE_LISTING.md](PLAY_STORE_LISTING.md)** - Store content (ru/en)

---

## 🌟 Star History

If you like this project, please give it a ⭐ on GitHub!

[![Star History Chart](https://api.star-history.com/svg?repos=oleksandr123321123/GrulyaFM&type=Date)](https://star-history.com/#oleksandr123321123/GrulyaFM&Date)

---

**Made with ❤️ using [Claude Code](https://claude.com/claude-code)**

🎵 **Open the world of radio with GrulyaFM!** 🌍
