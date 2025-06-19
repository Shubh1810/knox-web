#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_FILE = path.join(__dirname, '../public/knoxlogo.png');
const OUTPUT_DIR = path.join(__dirname, '../public');

// Favicon configurations
const FAVICON_CONFIGS = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-96x96.png', size: 96 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

async function generateFavicons() {
  try {
    // Check if input file exists
    if (!fs.existsSync(INPUT_FILE)) {
      console.error('❌ Input file not found:', INPUT_FILE);
      process.exit(1);
    }

    console.log('🚀 Starting favicon generation...');
    console.log('📁 Input file:', INPUT_FILE);
    console.log('📁 Output directory:', OUTPUT_DIR);

    // Generate all favicon sizes
    for (const config of FAVICON_CONFIGS) {
      const outputPath = path.join(OUTPUT_DIR, config.name);
      
      await sharp(INPUT_FILE)
        .resize(config.size, config.size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png()
        .toFile(outputPath);
      
      console.log(`✅ Generated: ${config.name} (${config.size}x${config.size})`);
    }

    // Generate ICO file for legacy browsers
    const icoPath = path.join(OUTPUT_DIR, 'favicon.ico');
    await sharp(INPUT_FILE)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(icoPath);
    
    console.log('✅ Generated: favicon.ico (32x32)');

    console.log('\n🎉 All favicons generated successfully!');
    console.log('\n📋 Generated files:');
    FAVICON_CONFIGS.forEach(config => {
      console.log(`   - ${config.name}`);
    });
    console.log('   - favicon.ico');

    console.log('\n🔗 Your favicons are now ready for:');
    console.log('   - Browser tabs');
    console.log('   - Social media sharing');
    console.log('   - Mobile app icons');
    console.log('   - PWA installation');

  } catch (error) {
    console.error('❌ Error generating favicons:', error.message);
    process.exit(1);
  }
}

// Run the script
generateFavicons(); 