import { createServer } from 'http';
import { readFileSync } from 'fs';
import { extname, join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = createServer((req, res) => {
  // Remove query parameters from URL
  const urlPath = req.url.split('?')[0];
  let filePath = '.' + urlPath;
  if (filePath === './') filePath = './index.html';

  // Special handling for assetlinks.json (needed for TWA)
  if (urlPath === '/.well-known/assetlinks.json') {
    filePath = './.well-known/assetlinks.json';
  }

  const ext = extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  
  try {
    const content = readFileSync(filePath);
    const headers = { 'Content-Type': contentType };
    if (['text/html','text/javascript','text/css','application/json'].includes(contentType)) {
      headers['Cache-Control'] = 'no-store';
    }
    res.writeHead(200, headers);
    res.end(content, 'utf-8');
  } catch (error) {
    res.writeHead(404);
    res.end('404 Not Found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🎵 GrulyaFM запущен на http://localhost:${PORT}`);
});
