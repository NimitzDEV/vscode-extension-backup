const shell = require('shelljs');
const fs = require('fs');
const path = require('path');
const extensionFile = path.resolve(__dirname, './extensions.json');

module.exports = {
  vscodeInstalled: () => {
    console.log('Checking VSCode...');
    return !!shell.which('code');
  },
  getList: () => {
    console.info('Getting extension list...');
    return shell.exec('code --list-extensions', {
      silent: true,
    }).stdout;
  },
  saveExtensionList: data => {
    fs.writeFileSync(extensionFile, JSON.stringify(data), {
      encoding: 'utf-8',
    });
  },
  readExtensionList: filename => {
    if (!fs.existsSync(extensionFile)) return false;
    return JSON.parse(fs.readFileSync(extensionFile, { encoding: 'utf-8' }));
  },
  installExtension: name => {
    return shell.exec(`code --install-extension ${name}`, { silent: false })
      .stdout;
  },
};
