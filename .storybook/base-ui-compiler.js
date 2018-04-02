const sass = require('node-sass');
const importOnce = require('node-sass-import-once');
const fs = require('fs');
const path = require('path');

const outputFile = './storybook-static/assets/base-ui.min.css';

sass.render({
  file: './.storybook/base-ui-loader.scss',
  outputStyle: 'compressed',
  outFile: outputFile,
  includePaths: ['.', 'node_modules'],
  importer: importOnce,
  importOnce: {
    index: false,
    css: false,
    bower: false
  }
}, (error, result) => {
  if (!error) {
    // No errors during the compilation, write this result on the disk
    ensureDirectoryExistence(outputFile);
    fs.writeFileSync(outputFile, result.css);
    console.info('Base-UI compiled successfully');
  } else {
    console.error(error);
  }
});

function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}
