import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mov': 'video/quicktime',
  '.pdf': 'application/pdf',
  '.glb': 'model/gltf-binary',
  '.txt': 'text/plain; charset=utf-8'
};

function serveFile(req, res, filePath, ext) {
  const stat = fs.statSync(filePath);
  const total = stat.size;
  const contentType = MIME_TYPES[ext.toLowerCase()] || 'application/octet-stream';

  // Support HTTP Range requests (crucial for video playback & large assets)
  const range = req.headers.range;
  if (range) {
    const parts = range.replace(/bytes=/, '').split('-');
    const partialStart = parts[0];
    const partialEnd = parts[1];

    const start = parseInt(partialStart, 10);
    const end = partialEnd ? parseInt(partialEnd, 10) : total - 1;
    const chunkSize = end - start + 1;

    res.writeHead(206, {
      'Content-Range': `bytes ${start}-${end}/${total}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunkSize,
      'Content-Type': contentType,
      'Cache-Control': 'no-cache'
    });

    const stream = fs.createReadStream(filePath, { start, end });
    stream.pipe(res);
  } else {
    res.writeHead(200, {
      'Content-Length': total,
      'Content-Type': contentType,
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'no-cache'
    });
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  }
}

const server = http.createServer((req, res) => {
  try {
    let reqUrl = req.url.split('?')[0].split('#')[0];
    reqUrl = decodeURIComponent(reqUrl);

    let filePath = path.join(__dirname, reqUrl);

    // If root requested, serve index.html
    if (reqUrl === '/' || reqUrl === '') {
      filePath = path.join(__dirname, 'index.html');
    }

    // Check directory -> try index.html, else if dir.html exists, serve dir.html
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      const idxFile = path.join(filePath, 'index.html');
      if (fs.existsSync(idxFile)) {
        filePath = idxFile;
      } else if (fs.existsSync(filePath + '.html')) {
        filePath = filePath + '.html';
      }
    }

    // Clean URL routing: if /apartments or /contact without .html, try .html
    if (!fs.existsSync(filePath)) {
      if (fs.existsSync(filePath + '.html')) {
        filePath = filePath + '.html';
      }
    }

    // Check if file exists
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath);
      serveFile(req, res, filePath, ext);
      return;
    }

    // Fallback to 404.html
    const notFoundPath = path.join(__dirname, '404.html');
    if (fs.existsSync(notFoundPath)) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      fs.createReadStream(notFoundPath).pipe(res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
  } catch (err) {
    console.error('Server error:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`  ERA RESIDENCE WEB PLATFORM`);
  console.log(`  Engineered by Yuvi | Ph: +91 7481889979`);
  console.log(`  Local server active at: http://localhost:${PORT}`);
  console.log(`=======================================================`);
});
