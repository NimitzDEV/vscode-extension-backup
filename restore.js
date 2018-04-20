const libs = require('./libs');
const extensions = libs.readExtensionList();

if (!extensions) return console.info('No backup file found.');
console.info('Found total', extensions.length, 'extension(s)');

for(let index in extensions) {
  console.info('Installing', extensions[index], '...');
  libs.installExtension(extensions[index]);
}

console.info('Restore finished');