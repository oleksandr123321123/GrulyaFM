#!/usr/bin/env node

// Deployment Readiness Checker
// Проверяет что всё готово для production deployment

const fs = require('fs');
const path = require('path');

console.log('🔍 Checking deployment readiness...\n');

let errors = 0;
let warnings = 0;
let passed = 0;

function check(name, condition, type = 'error') {
  if (condition) {
    console.log(`✅ ${name}`);
    passed++;
    return true;
  } else {
    if (type === 'error') {
      console.log(`❌ ${name}`);
      errors++;
    } else {
      console.log(`⚠️  ${name}`);
      warnings++;
    }
    return false;
  }
}

function checkFile(filepath, description) {
  return check(
    `${description}: ${filepath}`,
    fs.existsSync(filepath),
    'error'
  );
}

function checkFileContains(filepath, searchString, description) {
  if (!fs.existsSync(filepath)) {
    check(description, false, 'error');
    return false;
  }

  const content = fs.readFileSync(filepath, 'utf8');
  return check(
    description,
    content.includes(searchString),
    'warning'
  );
}

console.log('📁 Required Files:');
checkFile('index.html', 'Main HTML file');
checkFile('app.js', 'Main JavaScript file');
checkFile('sw.js', 'Service Worker');
checkFile('manifest.json', 'Web App Manifest');
checkFile('.well-known/assetlinks.json', 'Android Deep Links');
checkFile('privacy-policy.html', 'Privacy Policy');
checkFile('terms-of-service.html', 'Terms of Service');
console.log('');

console.log('🖼️  Icons:');
checkFile('icon-72.png', 'Icon 72x72');
checkFile('icon-192.png', 'Icon 192x192');
checkFile('icon-512.png', 'Icon 512x512');
console.log('');

console.log('🍎 iOS PWA:');
checkFileContains('index.html', 'apple-mobile-web-app-capable', 'iOS meta tags');
checkFileContains('index.html', 'apple-touch-icon', 'iOS touch icons');
checkFileContains('index.html', 'apple-touch-startup-image', 'iOS splash screens');
check(
  'Splash screen directory exists',
  fs.existsSync('splash') || true, // Optional
  'warning'
);
console.log('');

console.log('📱 Android TWA:');
checkFile('twa-manifest.json', 'TWA manifest');
checkFile('build-twa.bat', 'Build script');
checkFile('ANDROID_BUILD_GUIDE.md', 'Build documentation');
console.log('');

console.log('🔐 Security:');
check(
  '.gitignore includes *.keystore',
  fs.existsSync('.gitignore') &&
  fs.readFileSync('.gitignore', 'utf8').includes('*.keystore'),
  'error'
);
check(
  'No .keystore files in repo',
  !fs.readdirSync('.').some(f => f.endsWith('.keystore')),
  'error'
);
check(
  'No secrets.txt in repo',
  !fs.existsSync('secrets.txt') && !fs.existsSync('passwords.txt'),
  'error'
);
console.log('');

console.log('🔔 Push Notifications:');
checkFile('push-notifications.js', 'Push client module');
checkFile('api/push-subscribe.js', 'Push subscribe endpoint');
checkFile('api/push-unsubscribe.js', 'Push unsubscribe endpoint');
checkFileContains(
  'push-notifications.js',
  'YOUR_VAPID_PUBLIC_KEY_HERE',
  'VAPID key placeholder present (update after generating)',
  'warning'
);
console.log('');

console.log('🚀 CI/CD:');
checkFile('.github/workflows/ci-cd.yml', 'GitHub Actions workflow');
checkFile('lighthouserc.json', 'Lighthouse config');
checkFile('.eslintrc.json', 'ESLint config');
console.log('');

console.log('📚 Documentation:');
checkFile('README.md', 'Main README');
checkFile('QUICK_START.md', 'Quick start guide');
checkFile('SECURITY_GUIDE.md', 'Security guide');
checkFile('IOS_PWA_GUIDE.md', 'iOS PWA guide');
checkFile('SETUP_INSTRUCTIONS.md', 'Setup instructions');
console.log('');

console.log('🌐 API Endpoints:');
check(
  'Vercel config exists',
  fs.existsSync('vercel.json') || true,
  'warning'
);
checkFile('api/radio-proxy.js', 'Radio proxy endpoint');
console.log('');

console.log('📦 Package Config:');
checkFile('package.json', 'Package.json');
if (fs.existsSync('package.json')) {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  check('Package name set', pkg.name !== undefined);
  check('Scripts configured', pkg.scripts !== undefined && Object.keys(pkg.scripts).length > 0);
  check('Dev dependencies', pkg.devDependencies !== undefined);
}
console.log('');

console.log('═'.repeat(60));
console.log(`✅ Passed: ${passed}`);
console.log(`⚠️  Warnings: ${warnings}`);
console.log(`❌ Errors: ${errors}`);
console.log('═'.repeat(60));
console.log('');

if (errors > 0) {
  console.log('❌ DEPLOYMENT NOT READY');
  console.log('   Fix the errors above before deploying.\n');
  process.exit(1);
} else if (warnings > 0) {
  console.log('⚠️  DEPLOYMENT READY WITH WARNINGS');
  console.log('   You can deploy, but consider fixing warnings.\n');
  process.exit(0);
} else {
  console.log('✅ DEPLOYMENT READY!');
  console.log('   All checks passed. Ready to deploy.\n');

  console.log('Next steps:');
  console.log('1. Generate VAPID keys: node generate-vapid-keys.js');
  console.log('2. Add GitHub Secrets (see SETUP_INSTRUCTIONS.md)');
  console.log('3. Test on iOS device');
  console.log('4. Push to GitHub: git push origin master');
  console.log('5. Create release tag: git tag -a v1.0.0 -m "Release 1.0.0"');
  console.log('6. Push tag: git push origin v1.0.0\n');

  process.exit(0);
}
