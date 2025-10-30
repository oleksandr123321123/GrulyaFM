# Adaptive Icon Creation Guide

This guide explains how to create adaptive launcher icons for Android, including monochrome variants for Android 13+ themed icons.

## 📐 Icon Specifications

### Dimensions
- **Full size**: 432×432px (108dp at xxxhdpi)
- **Safe zone**: 288×288px centered (72dp at xxxhdpi)
- **Keyline shapes**: Circle (66dp), Square (56dp), Rounded Square (various radii)

### Layers Required

1. **Foreground** - Your logo/icon with transparency
2. **Background** - Solid color or gradient
3. **Monochrome** (Android 13+) - Single color icon for themed icons

## 🎨 Current Icons

We have these existing icons:
```
icon-1024.png  (1024×1024)  - High resolution
icon-512.png   (512×512)    - PWA standard
icon-192.png   (192×192)    - PWA standard
icon-144.png   (144×144)    - PWA standard
icon-96.png    (96×96)      - Small icon
icon-72.png    (72×72)      - Extra small
```

## 🔧 Quick Setup (Using Existing Icons)

### Option 1: Use icon-512.png as-is

Bubblewrap can automatically use `icon-512.png` for both foreground and background layers:

```json
// In twa-manifest.json
{
  "iconUrl": "https://grulya-fm.vercel.app/icon-512.png",
  "maskableIconUrl": "https://grulya-fm.vercel.app/icon-512.png"
}
```

**Background color**: `#6D78FF` (from manifest theme color)

### Option 2: Create Proper Adaptive Layers (Recommended)

For best visual quality, create separate layers:

#### Foreground Layer (icon-foreground.png)
```
Size: 432×432px
Safe zone: 288×288px (center)
Content: Radio wave icon with transparency
Format: PNG-24 with alpha channel
```

**Design tips:**
- Keep logo within 288×288 safe zone
- Content outside safe zone may be clipped
- Use transparency for background
- Test with different mask shapes (circle, squircle, rounded square)

#### Background Layer
```
Option A: Solid color #6D78FF (easiest)
Option B: Gradient (purple to blue)
Option C: 432×432px PNG with branded background
```

**Recommended**: Use solid color `#6D78FF` for consistency with brand

#### Monochrome Layer (icon-monochrome.png)
```
Size: 432×432px
Safe zone: 288×288px (center)
Content: Same as foreground, but single color
Color: White (#FFFFFF) on transparent background
Format: PNG-24 with alpha channel
```

**Purpose**: Android 13+ themed icons that adapt to system theme (light/dark)

## 🎯 Creating Monochrome Icon

### Method 1: Using ImageMagick (Command Line)

```bash
# Install ImageMagick first (https://imagemagick.org/script/download.php)

# Convert icon-512.png to monochrome white on transparent
magick icon-512.png -alpha set -channel RGB -negate -colorspace Gray -level 0%,100%,0.5 -fill white -colorize 100% icon-monochrome.png

# Resize to 432x432 if needed
magick icon-monochrome.png -resize 432x432 icon-monochrome.png
```

### Method 2: Using Online Tools

1. Go to https://www.photopea.com (free Photoshop alternative)
2. Open `icon-512.png`
3. Remove color:
   - Image → Adjustments → Hue/Saturation
   - Saturation: -100
   - Lightness: +50 (to brighten)
4. Make it white:
   - Image → Adjustments → Brightness/Contrast
   - Brightness: +100
   - Contrast: +50
5. Use Levels (Ctrl+L):
   - Adjust to pure white where icon is
   - Keep transparency
6. Resize to 432×432:
   - Image → Canvas Size → 432×432 (center)
7. Export as PNG-24

### Method 3: Using GIMP (Free)

1. Open `icon-512.png` in GIMP
2. **Desaturate**: Colors → Desaturate → Desaturate
3. **Brighten**: Colors → Brightness-Contrast → Max brightness
4. **Levels**: Colors → Levels → Adjust output to 255 (pure white)
5. **Resize**: Image → Scale Image → 432×432
6. **Export**: File → Export As → PNG

### Method 4: Using Figma/Sketch/Adobe XD (Design Tools)

1. Import `icon-512.png`
2. Apply white color overlay with "Multiply" blend mode
3. Or trace icon as vector and fill with white
4. Export as 432×432 PNG

## 🧪 Testing Adaptive Icons

### Android Studio Image Asset Studio

1. Open Android project in Android Studio (after running `bubblewrap build`)
2. Navigate to `app/res/`
3. Right-click → New → Image Asset
4. **Icon Type**: Launcher Icons (Adaptive and Legacy)
5. **Foreground Layer**:
   - Select "Image" tab
   - Choose your `icon-foreground.png`
   - Adjust scaling if needed
6. **Background Layer**:
   - Choose "Color" and enter `#6D78FF`
   - Or choose "Image" and upload background
7. **Legacy Icon**:
   - Upload `icon-512.png`
8. **Preview all shapes**: Circle, Squircle, Rounded Square, Square
9. **Generate** to create all densities (mdpi, hdpi, xhdpi, xxhdpi, xxxhdpi)

### Online Adaptive Icon Tester

https://adapticon.tooo.io/
1. Upload foreground, background, and monochrome layers
2. Preview all Android mask shapes
3. Test with light/dark themes (for monochrome)
4. Download generated assets if happy with result

## 📁 File Structure After Icon Generation

```
android/app/src/main/res/
├── mipmap-anydpi-v26/
│   ├── ic_launcher.xml          (Adaptive icon config)
│   └── ic_launcher_round.xml    (Rounded variant)
├── mipmap-mdpi/
│   ├── ic_launcher_foreground.png  (48×48)
│   ├── ic_launcher_background.png  (48×48)
│   └── ic_launcher.png             (48×48 legacy)
├── mipmap-hdpi/
│   ├── ic_launcher_foreground.png  (72×72)
│   ├── ic_launcher_background.png  (72×72)
│   └── ic_launcher.png             (72×72 legacy)
├── mipmap-xhdpi/
│   ├── ic_launcher_foreground.png  (96×96)
│   ├── ic_launcher_background.png  (96×96)
│   └── ic_launcher.png             (96×96 legacy)
├── mipmap-xxhdpi/
│   ├── ic_launcher_foreground.png  (144×144)
│   ├── ic_launcher_background.png  (144×144)
│   └── ic_launcher.png             (144×144 legacy)
└── mipmap-xxxhdpi/
    ├── ic_launcher_foreground.png  (192×192)
    ├── ic_launcher_background.png  (192×192)
    └── ic_launcher.png             (192×192 legacy)
```

**For Android 13+ monochrome**:
```
android/app/src/main/res/
└── mipmap-anydpi-v26/
    └── ic_launcher.xml (add monochrome reference)
```

Edit `ic_launcher.xml`:
```xml
<?xml version="1.0" encoding="utf-8"?>
<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
    <background android:drawable="@color/ic_launcher_background"/>
    <foreground android:drawable="@mipmap/ic_launcher_foreground"/>
    <monochrome android:drawable="@mipmap/ic_launcher_monochrome"/>
</adaptive-icon>
```

## 🎨 Design Best Practices

### Safe Zone Rules
- **Critical content**: Must be within 66dp circle (288×288 safe zone)
- **Can bleed**: Content outside safe zone for visual interest
- **Will clip**: Some devices/launchers will mask aggressively

### Color Considerations
- **Foreground**: High contrast with background
- **Background**: Brand color or complementary to foreground
- **Monochrome**: Pure white (#FFFFFF) on transparent works for both themes

### Common Mistakes
❌ Logo too small (doesn't use safe zone effectively)
❌ Complex gradients in foreground (looks bad when masked)
❌ Text in icon (unreadable at small sizes)
❌ Monochrome not visible on light backgrounds
✅ Simple, bold shapes
✅ High contrast
✅ Centered composition
✅ Testing with all mask shapes

## 🚀 Quick Start Commands

### Generate monochrome icon with ImageMagick:
```bash
# From project root
magick icon-512.png -alpha extract -negate icon-monochrome.png
magick icon-monochrome.png -resize 432x432 -gravity center -extent 432x432 icon-monochrome.png
```

### Test adaptive icon:
```bash
# Build and install debug APK
cd C:\Users\alex\Documents\GitHub\GrulyaFM
bubblewrap build
adb install android/app/build/outputs/apk/debug/app-debug.apk

# Check on device home screen
# Try different launchers (Google, Samsung, OnePlus) to see variations
```

## 📚 Resources

- [Android Adaptive Icons Guide](https://developer.android.com/develop/ui/views/launch/icon_design_adaptive)
- [Adaptive Icon Anatomy](https://medium.com/google-design/designing-adaptive-icons-515af294c783)
- [Material Design Icons](https://m3.material.io/styles/icons/designing-icons)
- [Icon Testing Tool](https://adapticon.tooo.io/)
- [ImageMagick Download](https://imagemagick.org/script/download.php)

## ✅ Checklist

Before submitting to Play Store:

- [ ] Foreground layer created (432×432, safe zone respected)
- [ ] Background color or image defined (#6D78FF recommended)
- [ ] Monochrome layer created for Android 13+
- [ ] Tested with all mask shapes (circle, square, rounded square)
- [ ] Tested on light and dark themes (monochrome)
- [ ] Verified icon looks good at all sizes (48dp to 192dp)
- [ ] No jagged edges or pixelation
- [ ] Icon matches brand identity
- [ ] Legacy icon provided for older Android versions

---

**Need Help?**

If your icon doesn't look right:
1. Check safe zone - is content getting clipped?
2. Test background color contrast
3. Try simpler foreground design
4. Use online adaptive icon tester
5. Generate assets with Android Studio Image Asset Studio
