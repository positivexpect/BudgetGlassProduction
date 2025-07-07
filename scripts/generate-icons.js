const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateIcons() {
  const source = path.join(process.cwd(), 'public', 'images', 'budgeticon.png');
  
  // Standard icons
  const iconSizes = [16, 32, 192, 512];
  for (const size of iconSizes) {
    await sharp(source)
      .resize(size, size)
      .toFile(path.join(process.cwd(), 'public', `icon-${size}x${size}.png`));
  }

  // Apple touch icons
  const appleSizes = [120, 152, 180];
  for (const size of appleSizes) {
    await sharp(source)
      .resize(size, size)
      .toFile(path.join(process.cwd(), 'public', `apple-icon-${size}x${size}.png`));
  }

  // Generate favicon.ico (multi-size)
  await sharp(source)
    .resize(32, 32)
    .toFile(path.join(process.cwd(), 'public', 'favicon.ico'));

  // Generate Safari pinned tab SVG
  await sharp(source)
    .resize(512, 512)
    .toFile(path.join(process.cwd(), 'public', 'safari-pinned-tab.svg'));
}

// Generate manifest.json
const manifest = {
  name: 'Budget Glass Company',
  short_name: 'Budget Glass',
  description: 'Richmond\'s Premier Glass Experts Since 1987',
  start_url: '/',
  display: 'standalone',
  background_color: '#ffffff',
  theme_color: '#ffffff',
  icons: [
    {
      src: '/icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'any maskable'
    },
    {
      src: '/icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any maskable'
    }
  ]
};

fs.writeFileSync(
  path.join(process.cwd(), 'public', 'manifest.json'),
  JSON.stringify(manifest, null, 2)
);

generateIcons().catch(console.error); 