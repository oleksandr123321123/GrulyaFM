@echo off
REM GrulyaFM TWA Build Script for Windows
REM This script automates the build process for the Android TWA

echo ========================================
echo GrulyaFM TWA Build Script
echo ========================================
echo.

REM Check if Bubblewrap is installed
where bubblewrap >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Bubblewrap CLI is not installed
    echo Please run: npm install -g @bubblewrap/cli
    pause
    exit /b 1
)

echo [OK] Bubblewrap CLI is installed
echo.

REM Check if Java is installed
where java >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [WARNING] Java JDK is not installed
    echo Bubblewrap will prompt to install JDK automatically
    echo Or you can install manually from: https://adoptium.net/
    echo.
)

REM Step 1: Initialize TWA project (if not already done)
if not exist "android" (
    echo Step 1: Initializing TWA project...
    echo.
    echo Bubblewrap will ask you some questions:
    echo - Install JDK? YES (recommended)
    echo - Install Android SDK? YES (recommended)
    echo.
    bubblewrap init --manifest=twa-manifest.json
    if %ERRORLEVEL% NEQ 0 (
        echo [ERROR] Failed to initialize TWA project
        pause
        exit /b 1
    )
    echo [OK] TWA project initialized
    echo.
) else (
    echo [SKIP] TWA project already initialized
    echo.
)

REM Step 2: Update project (refresh from manifest)
echo Step 2: Updating TWA project...
bubblewrap update
if %ERRORLEVEL% NEQ 0 (
    echo [WARNING] Failed to update TWA project
    echo This is normal if this is the first build
)
echo.

REM Step 3: Build the app bundle
echo Step 3: Building Android App Bundle (.aab)...
echo.
echo This will create: android\app\build\outputs\bundle\release\app-release.aab
echo.
bubblewrap build
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to build app bundle
    echo.
    echo Common issues:
    echo - JDK not installed or wrong version (need JDK 17+)
    echo - Android SDK not installed
    echo - Signing key issues
    echo.
    echo Check the error message above for details
    pause
    exit /b 1
)

echo.
echo ========================================
echo Build Successful!
echo ========================================
echo.
echo Your app bundle is ready at:
echo android\app\build\outputs\bundle\release\app-release.aab
echo.
echo Next steps:
echo 1. Go to Google Play Console
echo 2. Create a new app
echo 3. Upload the .aab file
echo 4. Fill in the store listing (see PLAY_STORE_LISTING.md)
echo 5. Add screenshots (see SCREENSHOTS_GUIDE.md)
echo 6. Submit for review
echo.
pause
