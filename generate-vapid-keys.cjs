#!/usr/bin/env node

// Script to generate VAPID keys for Web Push
// Run: node generate-vapid-keys.js

console.log('📧 Generating VAPID keys for Web Push...\n');

// Check if web-push is installed
try {
  const webpush = require('web-push');

  // Generate VAPID keys
  const vapidKeys = webpush.generateVAPIDKeys();

  console.log('✅ VAPID keys generated successfully!\n');
  console.log('═'.repeat(80));
  console.log('📋 COPY THESE TO VERCEL ENVIRONMENT VARIABLES:');
  console.log('═'.repeat(80));
  console.log('\n1. Go to: https://vercel.com/[your-project]/settings/environment-variables\n');
  console.log('2. Add these variables:\n');

  console.log('Variable Name: VAPID_PUBLIC_KEY');
  console.log('Value:');
  console.log(vapidKeys.publicKey);
  console.log('');

  console.log('Variable Name: VAPID_PRIVATE_KEY');
  console.log('Value:');
  console.log(vapidKeys.privateKey);
  console.log('');

  console.log('Variable Name: VAPID_SUBJECT');
  console.log('Value: mailto:support@grulya-fm.vercel.app');
  console.log('');

  console.log('═'.repeat(80));
  console.log('📝 UPDATE push-notifications.js:');
  console.log('═'.repeat(80));
  console.log('\nReplace this line in push-notifications.js:\n');
  console.log('const VAPID_PUBLIC_KEY = \'YOUR_VAPID_PUBLIC_KEY_HERE\';');
  console.log('\nWith:\n');
  console.log(`const VAPID_PUBLIC_KEY = '${vapidKeys.publicKey}';`);
  console.log('');

  console.log('═'.repeat(80));
  console.log('⚠️  SECURITY WARNING:');
  console.log('═'.repeat(80));
  console.log('\n- Public key: Can be in code (client-side)');
  console.log('- Private key: ONLY in Vercel Environment Variables (server-side)');
  console.log('- NEVER commit private key to Git!');
  console.log('- Add to .gitignore: vapid-keys.txt\n');

  // Save to file for reference (but don't commit!)
  const fs = require('fs');
  const output = `# VAPID Keys for GrulyaFM Web Push
# Generated: ${new Date().toISOString()}
#
# ⚠️  DO NOT COMMIT THIS FILE TO GIT!
# Add to .gitignore: vapid-keys.txt

Public Key (client-side, OK to commit in code):
${vapidKeys.publicKey}

Private Key (server-side ONLY, add to Vercel Environment Variables):
${vapidKeys.privateKey}

Subject (server-side, add to Vercel Environment Variables):
mailto:support@grulya-fm.vercel.app

---

Vercel Environment Variables:
VAPID_PUBLIC_KEY=${vapidKeys.publicKey}
VAPID_PRIVATE_KEY=${vapidKeys.privateKey}
VAPID_SUBJECT=mailto:support@grulya-fm.vercel.app

---

Update push-notifications.js:
const VAPID_PUBLIC_KEY = '${vapidKeys.publicKey}';
`;

  fs.writeFileSync('vapid-keys.txt', output);
  console.log('💾 Keys saved to: vapid-keys.txt');
  console.log('   (This file is in .gitignore, safe to keep locally)\n');

  console.log('✅ Done! Follow the instructions above to set up Web Push.\n');

} catch (error) {
  if (error.code === 'MODULE_NOT_FOUND') {
    console.error('❌ Error: web-push module not found\n');
    console.log('Install it with:\n');
    console.log('  npm install web-push\n');
    console.log('Or install all dev dependencies:\n');
    console.log('  npm install\n');
    process.exit(1);
  } else {
    console.error('❌ Error generating VAPID keys:', error.message);
    process.exit(1);
  }
}
