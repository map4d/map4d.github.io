// Docsify 4 prepends the content and route directories to image URLs,
// including URLs that start with a single slash. See core/render/compiler/image.js.
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
function walk(dir) {
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap(entry => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}
let checked = 0;
const failures = [];
for (const file of ['map4d-map', 'map4d-service', 'map4d-map-utils', 'archive'].flatMap(dir => walk(path.join(root, dir)))) {
  if (!file.endsWith('.md')) continue;
  const source = fs.readFileSync(file, 'utf8');
  for (const match of source.matchAll(/!\[[^\]]*\]\(\s*(<[^>]+>|[^\s)]+)(?:\s+[^)]*)?\)/g)) {
    const href = match[1].replace(/^<|>$/g, '');
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(href)) continue;
    checked++;
    // Concatenate rather than path.resolve(dir, href): Docsify does not
    // interpret a single leading slash as a site-root URL for Markdown images.
    const target = path.resolve(path.dirname(file) + '/' + decodeURIComponent(href.split(/[?#]/)[0]));
    if (!target.startsWith(root + path.sep) || !fs.existsSync(target)) {
      const line = source.slice(0, match.index).split('\n').length;
      failures.push(`${path.relative(root, file)}:${line}: ${href}`);
    }
  }
}
if (failures.length) {
  console.error(`${failures.length}/${checked} local Markdown images fail Docsify path resolution:\n${failures.join('\n')}`);
  process.exitCode = 1;
} else {
  console.log(`PASS: ${checked} local Markdown image URLs resolve to existing files (current + archive).`);
}
