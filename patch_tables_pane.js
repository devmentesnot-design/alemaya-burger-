const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Normalize to LF for easier matching
html = html.replace(/\r\n/g, '\n');

const startMarker = '      <section id="admin-pane-tables" class="admin-subpane">';
const endMarker = '      </section>\n\n      <div class="scroll-bottom-spacer"></div>';

const startIdx = html.indexOf(startMarker);
const endIdx = html.indexOf(endMarker);

if (startIdx === -1 || endIdx === -1) {
  console.error('Markers not found!', { startIdx, endIdx });
  // Debug: show context around section
  const idx = html.indexOf('admin-pane-tables');
  if (idx !== -1) console.log('Context:', JSON.stringify(html.substring(idx - 10, idx + 60)));
  process.exit(1);
}

const replacement = `      <section id="admin-pane-tables" class="admin-subpane" style="padding:0;overflow:hidden;">
        <iframe
          src="/qr-generator.html"
          id="qr-generator-frame"
          style="width:100%;height:calc(100vh - 120px);min-height:600px;border:none;display:block;"
          title="QR Poster Generator"
        ></iframe>
      </section>

      <div class="scroll-bottom-spacer"></div>`;

const endOfEnd = endIdx + endMarker.length;
const newHtml = html.substring(0, startIdx) + replacement + html.substring(endOfEnd);

fs.writeFileSync('index.html', newHtml);
console.log('Done. Replaced chars', startIdx, '->', endOfEnd, '(', endOfEnd - startIdx, 'chars removed)');
