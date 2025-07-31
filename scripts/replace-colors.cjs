const fs = require('fs');
const path = require('path');

const COLOR_MAP = [
  // Indigo and blue to black/white/gray
  [/indigo-\d{3}/g, 'black'],
  [/indigo/g, 'black'],
  [/blue-\d{3}/g, 'gray-900'],
  [/blue/g, 'gray-900'],
  [/bg-indigo-\d{3}/g, 'bg-black'],
  [/bg-indigo/g, 'bg-black'],
  [/text-indigo-\d{3}/g, 'text-black'],
  [/text-indigo/g, 'text-black'],
  [/border-indigo-\d{3}/g, 'border-black'],
  [/border-indigo/g, 'border-black'],
  [/hover:bg-indigo-\d{3}/g, 'hover:bg-gray-900'],
  [/hover:bg-indigo/g, 'hover:bg-gray-900'],
  [/hover:text-indigo-\d{3}/g, 'hover:text-black'],
  [/hover:text-indigo/g, 'hover:text-black'],
  [/text-blue-\d{3}/g, 'text-gray-900'],
  [/text-blue/g, 'text-gray-900'],
  [/bg-blue-\d{3}/g, 'bg-white'],
  [/bg-blue/g, 'bg-white'],
  [/border-blue-\d{3}/g, 'border-white'],
  [/border-blue/g, 'border-white'],
  [/hover:bg-blue-\d{3}/g, 'hover:bg-gray-100'],
  [/hover:bg-blue/g, 'hover:bg-gray-100'],
];

function replaceColorsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let replaced = false;
  COLOR_MAP.forEach(([regex, replacement]) => {
    if (regex.test(content)) {
      content = content.replace(regex, replacement);
      replaced = true;
    }
  });
  if (replaced) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (/\.(js|jsx|ts|tsx)$/.test(file)) {
      replaceColorsInFile(fullPath);
    }
  });
}

// Run on ./src
walk(path.join(__dirname, '..', 'src'));
console.log('Color replacement complete.');