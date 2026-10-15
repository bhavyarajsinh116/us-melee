const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.mjs': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.otf': 'font/otf',
    '.eot': 'application/vnd.ms-fontobject',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
    '.pdf': 'application/pdf',
    '.txt': 'text/plain; charset=utf-8'
};

async function handleEmailApi(req, res) {
    if (req.method !== 'POST') {
        res.writeHead(405, { 'Content-Type': 'application/json', 'Allow': 'POST' });
        res.end(JSON.stringify({ message: 'Method not allowed' }));
        return;
    }

    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
        try {
            const payload = JSON.parse(body || '{}');
            const application = payload.application;

            if (!application) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Invalid application data' }));
                return;
            }

            const apiKey = 'a099a0da-75ab-4cf3-83ad-396bce404862';
            const notificationEmail = 'your-email@gmail.com';
            const fromEmail = 'Melee Diamonds <onboarding@resend.dev>';
            const company = application.companyName || 'Unknown Company';

            const emailPayload = {
                from: fromEmail,
                to: [notificationEmail],
                subject: `New B2B Application - ${company}`,
                html: `<h2>New B2B Application Received</h2>
                       <p><strong>Application Number:</strong> ${application.applicationNumber || 'N/A'}</p>
                       <p><strong>Company:</strong> ${company}</p>
                       <p><strong>Contact Name:</strong> ${application.primaryContactName || 'N/A'}</p>
                       <p><strong>Email:</strong> ${application.email || 'N/A'}</p>
                       <p><strong>Tax ID:</strong> ${application.taxRegistrationNumber || 'N/A'}</p>
                       <p><strong>Interest:</strong> ${application.interest || 'N/A'}</p>`
            };

            const response = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(emailPayload)
            });

            const data = await response.json().catch(() => ({}));
            res.writeHead(response.status >= 200 && response.status < 300 ? 200 : response.status, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify(data));
        } catch (err) {
            console.error('Email API Error:', err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Internal server error', detail: err.message }));
        }
    });
}

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    let pathname = decodeURIComponent(parsedUrl.pathname);

    // API route handling for send-email.php
    if (pathname === '/api/send-email.php') {
        return handleEmailApi(req, res);
    }

    // Default to index.html for root
    if (pathname === '/' || pathname === '') {
        pathname = '/index.html';
    }

    let filePath = path.join(ROOT_DIR, pathname);

    // Security check: ensure path is within ROOT_DIR
    const safePath = path.normalize(filePath);
    if (!safePath.startsWith(ROOT_DIR)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('403 Forbidden');
        return;
    }

    fs.stat(safePath, (err, stats) => {
        if (!err && stats.isDirectory()) {
            filePath = path.join(safePath, 'index.html');
        } else if (err && !path.extname(safePath)) {
            // Check if appending .html matches a file
            const htmlPath = `${safePath}.html`;
            if (fs.existsSync(htmlPath)) {
                filePath = htmlPath;
            }
        }

        fs.readFile(filePath, (readErr, content) => {
            if (readErr) {
                if (readErr.code === 'ENOENT') {
                    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                    res.end(`<!DOCTYPE html><html><head><title>404 Not Found</title><style>body{font-family:sans-serif;text-align:center;padding:50px;background:#0d1117;color:#fff;}a{color:#58a6ff;}</style></head><body><h1>404 - Page Not Found</h1><p>Requested: ${pathname}</p><p><a href="/">Return to Home</a></p></body></html>`);
                } else {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end(`500 Server Error: ${readErr.code}`);
                }
                return;
            }

            const ext = path.extname(filePath).toLowerCase();
            const contentType = MIME_TYPES[ext] || 'application/octet-stream';

            res.writeHead(200, {
                'Content-Type': contentType,
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            });
            res.end(content);
        });
    });
});

server.listen(PORT, () => {
    console.log(`\n====================================================`);
    console.log(`💎 Melee Diamonds Web Server is running!`);
    console.log(`🚀 Local URL:  http://localhost:${PORT}`);
    console.log(`🛡️  Admin URL:  http://localhost:${PORT}/admin/index.html`);
    console.log(`====================================================\n`);
});
