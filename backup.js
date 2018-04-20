const libs = require('./libs');

if (!libs.vscodeInstalled()) {
  return console.info('Detect VSCode failed.');
}

let extensions = libs.getList();
if (!extensions) return console.info('Failed to get extension list.');

extensions = extensions && extensions.trim().split('\n');
libs.saveExtensionList(extensions);

console.info('Found total', extensions.length, ' extension(s).');
console.info('Extension list saved at extensions.jsno');