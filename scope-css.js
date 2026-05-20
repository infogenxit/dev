const fs = require('fs');
const css = fs.readFileSync('src/styles/index.css', 'utf8');
const lines = css.split('\n');
let inMedia = false;
const outLines = lines.map(line => {
    if (line.trim().startsWith('@media')) { inMedia = true; return line; }
    if (inMedia && line.trim() === '}') { inMedia = false; return line; }
    
    // We only want to target specific global overrides that break the isolated pages
    // such as button, .primary-btn, section, p, a, h1, h2, etc.
    // Actually, writing a reliable CSS parser in regex is hard.
    return line;
});
fs.writeFileSync('src/styles/index.css', outLines.join('\n'));

