# Google Play Store Screenshots Guide

Complete guide for creating professional screenshots for GrulyaFM's Play Store listing.

## 📱 Requirements Summary

### Phone Screenshots (REQUIRED)
- **Minimum**: 2 screenshots
- **Recommended**: 8 screenshots
- **Format**: JPEG or 24-bit PNG (no alpha channel)
- **Aspect Ratio**: 16:9 or 9:16
- **Recommended Size**: 1080×1920 (portrait) or 1920×1080 (landscape)
- **Max File Size**: 8MB per screenshot

### Tablet Screenshots (OPTIONAL but Recommended)
- **7-inch**: 1920×1200 or 1200×1920
- **10-inch**: 2560×1600 or 1600×2560
- **Minimum**: 1 screenshot
- **Recommended**: 4-8 screenshots

## 🎯 Screenshot Strategy

### Essential Screens to Capture

1. **Home/Station List** (MUST HAVE)
   - Shows main screen with radio stations
   - Demonstrates variety of countries/genres
   - Player controls visible

2. **Now Playing** (MUST HAVE)
   - Active playback with metadata
   - Clear station name and track info
   - Player controls prominent

3. **Favorites** (Recommended)
   - Shows saved stations
   - Demonstrates personalization

4. **Search & Filters** (Recommended)
   - Search bar with results
   - Country/genre filters visible

5. **Sleep Timer** (Recommended)
   - Timer UI open
   - Shows time options

6. **Alarm Clock** (Recommended)
   - Alarm setup screen
   - Station selection visible

7. **Settings/Themes** (Optional)
   - Dark and light theme comparison
   - Settings options

8. **History** (Optional)
   - Track history with album art
   - Recently played stations

## 🖼️ Creating Screenshots

### Method 1: Browser DevTools (Easiest)

```bash
# 1. Open Chrome DevTools (F12)
# 2. Toggle device toolbar (Ctrl+Shift+M)
# 3. Select "Responsive" and enter dimensions:

Dimensions: 1080 x 1920 (portrait)
Device Pixel Ratio: 3.0 (for crisp screenshots)

# 4. Navigate to https://grulya-fm.vercel.app
# 5. Capture screenshot:
#    - Press F12 → ... menu → Capture screenshot
#    - Or use Ctrl+Shift+P → "Capture screenshot"
```

**DevTools Settings for Best Quality:**
```
1. Click ... (More tools) → Rendering
2. Enable "Emulate CSS media type" → screen
3. Disable any color vision deficiency emulation
4. Set "Prefers color scheme" to light or dark as needed
```

### Method 2: Android Emulator (Most Accurate)

```bash
# 1. Install Android Studio with emulator
# 2. Create emulator with specs:
Device: Pixel 6 Pro
Resolution: 1440×3120 (scales to 1080×1920)
API Level: 34 (Android 14)

# 3. Launch emulator and open app
# 4. Take screenshot via:
adb exec-out screencap -p > screenshot.png

# Or use built-in screenshot button in emulator toolbar
```

### Method 3: Real Device

```bash
# On most Android devices:
# - Press Power + Volume Down simultaneously
# - Screenshot saved to Pictures/Screenshots/

# Transfer to PC:
adb pull /sdcard/Pictures/Screenshots/screenshot.png ./
```

## 🎨 Screenshot Composition

### Best Practices

#### ✅ DO:
- **Show Real Content**: Use actual station names, not placeholders
- **Active States**: Show playing, buffering, interacting states
- **Diverse Content**: Different countries, genres, languages
- **Consistent Branding**: Use brand colors (#6D78FF)
- **Clear Text**: Ensure all text is readable at Play Store size
- **Highlight Features**: Make key features obvious
- **Use Status Bar**: Show realistic time (10:30 AM, 87% battery)

#### ❌ DON'T:
- Empty states or "No stations found"
- Lorem ipsum or placeholder text
- Personal information (real email addresses, names)
- Competitor branding or station logos without permission
- Low resolution or blurry images
- Inconsistent UI (mixing themes within one screenshot)
- Outdated UI that doesn't match current version

### Recommended Content for Each Screenshot

#### Screenshot 1: Home Screen
```
Content:
- Station list showing 6-8 stations
- Mix of countries (Russia, USA, UK, France, Germany)
- Player controls at bottom (paused state)
- Search bar visible at top
- Favorites, Browse, History tabs visible

Caption idea: "200+ stations from 22 countries"
```

#### Screenshot 2: Now Playing
```
Content:
- Large station logo/icon
- Station name: e.g., "BBC Radio 1"
- Track info: "Artist - Song Title"
- Play button (playing state)
- Progress indicator or visualizer
- Volume slider
- Favorite button (highlighted)

Caption idea: "High-quality streaming with metadata"
```

#### Screenshot 3: Favorites
```
Content:
- 8-10 favorited stations
- Heart icons visible
- Mix of genres and countries
- "Remove from favorites" action visible (swipe?)
- Quick play buttons

Caption idea: "Save your favorite stations"
```

#### Screenshot 4: Search & Filters
```
Content:
- Search bar with query: "jazz" or "BBC"
- Filtered results showing 5-6 stations
- Country filter chips visible (UK, USA, France)
- Genre tags visible (Jazz, Rock, News)
- Clear "X filters applied" indicator

Caption idea: "Powerful search and filters"
```

#### Screenshot 5: Sleep Timer
```
Content:
- Timer modal/bottom sheet open
- Time options: 15m, 30m, 1h, 2h visible
- Currently selected: 30 minutes
- "Set Timer" button prominent
- Background shows station playing
- Timer countdown visible in player

Caption idea: "Fall asleep to your favorite station"
```

#### Screenshot 6: Alarm Clock
```
Content:
- Alarm setup screen
- Time picker showing wake-up time: 7:30 AM
- Station selection: "Europa Plus"
- Days of week selector (Mon-Fri selected)
- Volume slider
- "Save Alarm" button

Caption idea: "Wake up to music"
```

#### Screenshot 7: Dark Theme
```
Content:
- Same screen as Screenshot 1 but in dark theme
- Shows theme consistency
- Beautiful gradient background visible
- All UI elements readable

Caption idea: "Beautiful dark and light themes"
```

#### Screenshot 8: Track History
```
Content:
- History tab showing 6-8 recent tracks
- Album art thumbnails
- Track name, artist, station
- Timestamps (e.g., "2 hours ago")
- Scroll indicator showing more content

Caption idea: "Never forget what you heard"
```

## 🔧 Post-Processing

### Image Optimization

```bash
# Resize if needed (ImageMagick)
magick screenshot.png -resize 1080x1920 -quality 95 screenshot_final.png

# Or use online tools:
# - TinyPNG (https://tinypng.com/) - Compress without quality loss
# - Squoosh (https://squoosh.app/) - Advanced compression options
```

### Adding Device Frames (Optional)

**Tools:**
- [MockUPhone](https://mockuphone.com/) - Free device mockups
- [Screely](https://www.screely.com/) - Browser mockups with shadows
- [Facebook Design Devices](https://design.facebook.com/toolsandresources/devices/) - High-quality frames

**Tips:**
- Use frames sparingly (Play Store shows them small)
- Ensure screenshot is still readable
- Use same device frame for all screenshots
- Popular choices: Pixel 6, Samsung Galaxy S22, iPhone (if showing iOS)

### Adding Captions/Text Overlays (Optional)

Some developers add text overlays to highlight features:

```
Example:
┌────────────────────────────┐
│  [Screenshot]              │
│                            │
│                            │
│  ┌──────────────────────┐ │
│  │ 200+ Radio Stations  │ │ ← Text overlay at bottom
│  │ From 22 Countries    │ │
│  └──────────────────────┘ │
└────────────────────────────┘
```

**Design tips:**
- Semi-transparent background for text
- Brand colors (#6D78FF)
- Large, readable font (min 48px)
- Keep text short (4-8 words max)
- Use system font (Roboto for Android)

**Tools:**
- Figma (free online design tool)
- Canva (templates for app screenshots)
- Photopea (free Photoshop alternative)

## 📋 Screenshot Checklist

Before uploading to Play Store:

### Technical Checks
- [ ] Correct dimensions (1080×1920 for phone)
- [ ] JPEG or 24-bit PNG format
- [ ] No alpha transparency
- [ ] Under 8MB file size
- [ ] High quality, no pixelation
- [ ] Consistent aspect ratio across all screenshots

### Content Checks
- [ ] No placeholder text or lorem ipsum
- [ ] Real station names and content
- [ ] No personal/sensitive information
- [ ] No competitor branding
- [ ] Text is readable at small sizes
- [ ] UI matches current app version
- [ ] Diverse content (various countries/genres)

### Visual Checks
- [ ] Consistent theme across related screenshots
- [ ] Proper lighting/contrast
- [ ] No UI glitches or half-loaded elements
- [ ] Status bar shows reasonable time/battery
- [ ] All text in correct language for localization

## 🌍 Localized Screenshots (Advanced)

For international markets, consider creating localized screenshots:

### Russian (ru-RU)
- Change app language to Russian in settings
- Retake all screenshots with Russian UI
- Use Russian station names prominently (Европа Плюс, Русское Радио)
- Upload to Russian localization in Play Console

### English (en-US)
- Default English UI
- Use international stations (BBC, NPR, KISS FM)
- Upload to English localization

**Other languages** (optional):
- Ukrainian (uk-UA)
- German (de-DE)
- French (fr-FR)
- Spanish (es-ES)

**Note**: Localized screenshots significantly increase conversion rates in non-English markets.

## 📏 Tablet Screenshots

### 7-inch Tablet (1920×1200)

**Layout differences:**
- Two-column layout (station list + player side-by-side)
- More stations visible (10-12 instead of 6-8)
- Larger touch targets
- Wider padding/margins

**Recommended screenshots:**
1. Home screen (landscape, two-column)
2. Now playing with station list visible
3. Search with filters expanded
4. Favorites with album art grid

### 10-inch Tablet (2560×1600)

**Layout differences:**
- Three-column layout potential
- Even more content visible
- Better suited for landscape orientation
- Picture-in-picture player option

## 🎬 Video Preview (Future)

If you want to create a promo video later:

**Content ideas:**
- 30-second tour of main features
- Show station browsing → play → favorite flow
- Demonstrate sleep timer and alarm
- Show theme switching
- Display search and filters in action

**Tools:**
- OBS Studio (free screen recording)
- DaVinci Resolve (free video editing)
- iMovie (Mac)
- Clipchamp (Windows, free)

**Upload**: YouTube unlisted video, then paste URL in Play Console

## 📊 Screenshot Performance Tips

Based on Play Store best practices:

### Order Matters
1. **First screenshot is most important** - Gets largest display
2. Show most compelling feature first (usually Now Playing or Home)
3. Progressive disclosure - Basic → Advanced features

### A/B Testing
After launch, you can test different screenshots:
- Play Console → Store presence → Store listing experiments
- Test different orders, compositions, or added text
- Measure impact on install conversion rate

## 🔗 Example Screenshot Sets

### Minimalist Approach (2 screenshots)
1. Home screen with station list + player
2. Now playing with metadata

**Pros**: Clean, fast to create
**Cons**: Doesn't show all features

### Comprehensive Approach (8 screenshots)
1. Home screen
2. Now playing
3. Favorites
4. Search & filters
5. Sleep timer
6. Alarm clock
7. Dark theme
8. Track history

**Pros**: Shows all features, higher conversion
**Cons**: More work to create and maintain

### Storytelling Approach (5-6 screenshots)
Follow a user journey:
1. Browse stations → 2. Search for jazz → 3. Play station → 4. Add to favorites → 5. Set sleep timer

**Pros**: Shows real usage flow
**Cons**: Requires careful planning

## 📁 File Naming Convention

```
phone_01_home_en.png
phone_02_playing_en.png
phone_03_favorites_en.png
phone_04_search_en.png
phone_05_timer_en.png
phone_06_alarm_en.png
phone_07_dark_en.png
phone_08_history_en.png

phone_01_home_ru.png
phone_02_playing_ru.png
...

tablet_7inch_01_home_en.png
tablet_10inch_01_home_en.png
```

## ✅ Final Checklist

Before uploading to Play Console:

- [ ] At least 2 phone screenshots (recommended 8)
- [ ] Optional: 1+ tablet screenshots
- [ ] All screenshots follow technical requirements
- [ ] Content is accurate and represents current app
- [ ] No sensitive or personal information visible
- [ ] Screenshots tell a clear story about the app
- [ ] Localized versions created (if targeting non-English markets)
- [ ] Files properly named and organized
- [ ] Compressed to reasonable file sizes (<2MB each)
- [ ] Reviewed by team/friends for clarity

---

**Ready to Upload?**

Once screenshots are ready:
1. Go to Play Console → Your App → Store presence → Main store listing
2. Scroll to "Phone screenshots" section
3. Drag and drop your screenshots (they'll be numbered in order)
4. Rearrange by dragging if needed
5. Click "Save" (won't go live until you publish)
6. Repeat for tablet screenshots if you have them
7. Preview how they look in different Play Store layouts

**Need inspiration?** Search Play Store for "radio app" and analyze top apps' screenshots to see what works well.
