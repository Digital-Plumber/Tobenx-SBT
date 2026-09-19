import { execSync } from 'child_process';
import fs from 'fs';

const html = execSync('git show origin/main:index.html', { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 });

// Let's find what's inside <body ...> ... </body>
const bodyStart = html.indexOf('<body');
const bodyEnd = html.indexOf('</body>');
const body = html.slice(bodyStart, bodyEnd + 7);

// Let's write out the raw body so we can see every element, header, main, footer, etc.
fs.writeFileSync('original_body.html', body, 'utf8');
console.log('Saved original_body.html, length:', body.length);

// Also extract the exact <head> content (meta, title, link, style)
const headStart = html.indexOf('<head');
const headEnd = html.indexOf('</head>');
const head = html.slice(headStart, headEnd + 7);
fs.writeFileSync('original_head.html', head, 'utf8');
console.log('Saved original_head.html, length:', head.length);
