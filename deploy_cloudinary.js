// ═══════════════════════════════════════════════════════════════════════
// CLOUDINARY ASSET DEPLOYMENT SCRIPT
// Uploads all local food images to Cloudinary account 'xheul1fe'
// and updates database.json and menu-data.js with the live Cloudinary CDN URLs.
// ═══════════════════════════════════════════════════════════════════════

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Load .env
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  const envLines = fs.readFileSync(envPath, 'utf8').split('\n');
  for (const line of envLines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx !== -1) {
      const k = trimmed.slice(0, eqIdx).trim();
      const v = trimmed.slice(eqIdx + 1).trim();
      if (!process.env[k]) process.env[k] = v;
    }
  }
}

const cloudName = process.env.CLOUDINARY_CLOUD_NAME || 'xheul1fe';
const apiKey = process.env.CLOUDINARY_API_KEY || '125892863638399';
const apiSecret = process.env.CLOUDINARY_API_SECRET || '';
const folder = 'alemaya-burger';

const imagesToUpload = [
  'burger_classic.jpg',
  'chicken_sandwich.jpg',
  'pizza_margherita.jpg',
  'pasta_carbonara.jpg',
  'burrito_bowl.jpg',
  'smoothie_tropical.jpg',
  'milkshake_chocolate.jpg',
  'logo.png'
];

async function deployToCloudinary() {
  console.log(`Starting Cloudinary deployment to cloud: ${cloudName}...`);
  const cldMap = {};

  for (const imgName of imagesToUpload) {
    const fullPath = path.join(__dirname, imgName);
    if (!fs.existsSync(fullPath)) {
      console.warn(`File not found: ${imgName}`);
      continue;
    }

    const base64 = fs.readFileSync(fullPath).toString('base64');
    const ext = path.extname(imgName).replace('.', '');
    const dataUri = `data:image/${ext === 'jpg' ? 'jpeg' : ext};base64,${base64}`;

    const timestamp = Math.round(Date.now() / 1000);
    const publicId = path.parse(imgName).name;
    const strToSign = `folder=${folder}&public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
    const signature = crypto.createHash('sha1').update(strToSign).digest('hex');

    const payload = {
      file: dataUri,
      folder,
      public_id: publicId,
      timestamp,
      api_key: apiKey,
      signature
    };

    process.stdout.write(`Uploading ${imgName}... `);
    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.secure_url) {
        console.log(`✅ ${data.secure_url}`);
        cldMap[imgName] = data.secure_url;
      } else {
        console.log(`❌ Failed: ${JSON.stringify(data.error)}`);
      }
    } catch (err) {
      console.log(`❌ Error: ${err.message}`);
    }
  }

  // Update database.json
  const dbPath = path.join(__dirname, 'database.json');
  const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
  let updatedCount = 0;

  db.products = db.products.map(p => {
    if (cldMap[p.image]) {
      updatedCount++;
      return { ...p, image: cldMap[p.image] };
    }
    return p;
  });

  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  console.log(`Updated ${updatedCount} products in database.json with Cloudinary URLs.`);

  // Update menu-data.js
  const menuDataPath = path.join(__dirname, 'menu-data.js');
  const menuDataContent = `const MENU_DATA = {
  restaurant: {
    name: "Alemaya Grill'd",
    tagline: "Healthy Burgers",
    currency: "ETB",
    currencySymbol: "Br",
    serviceCharge: 0.10,
    tax: 0,
    deliveryFee: 0,
    orderTypes: ["Dine-In", "Takeaway", "Delivery"],
    estimatedTime: "15-25 min",
    phone: "+251 900 000 000",
    address: "Alemaya, Ethiopia"
  },
  categories: ${JSON.stringify(db.categories, null, 2)},
  products: ${JSON.stringify(db.products, null, 2)}
};
window.MENU_DATA = MENU_DATA;
`;
  fs.writeFileSync(menuDataPath, menuDataContent, 'utf-8');
  console.log('Synchronized menu-data.js with Cloudinary CDN URLs!');
}

deployToCloudinary();
