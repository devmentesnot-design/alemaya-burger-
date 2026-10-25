const fs = require('fs');

const srcPath = 'C:\\Users\\Lenovo\\Downloads\\alemaya_qr_poster_generator_fixed_export (1).html';
let html = fs.readFileSync(srcPath, 'utf8');

// Find bgData = 'data:image/...' and replace
const bgDataStartStr = "const bgData = '";
const bgDataIdx = html.indexOf(bgDataStartStr);
if (bgDataIdx !== -1) {
  const afterBgData = bgDataIdx + bgDataStartStr.length;
  const endQuoteIdx = html.indexOf("';", afterBgData);
  const bgDataFull = html.substring(bgDataIdx, endQuoteIdx + 2);
  console.log('Found bgData at idx:', bgDataIdx, ', total length:', bgDataFull.length);
  html = html.replace(bgDataFull, "const bgData = '/poster_bg.png';");
  console.log('Replaced bgData variable');
}

// Find img src="data:image/..." and replace (if present separately)
const imgSrcStr = 'src="data:image/';
const imgSrcIdx = html.indexOf(imgSrcStr);
if (imgSrcIdx !== -1) {
  const endIdx = html.indexOf('"', imgSrcIdx + imgSrcStr.length);
  const imgSrcFull = html.substring(imgSrcIdx, endIdx + 1);
  html = html.replace(imgSrcFull, 'src="/poster_bg.png"');
  console.log('Also replaced img src attr');
}

if (!fs.existsSync('public')) {
  fs.mkdirSync('public', { recursive: true });
}
fs.writeFileSync('public/qr-generator.html', html);
console.log('Saved public/qr-generator.html, size:', fs.statSync('public/qr-generator.html').size, 'bytes');
