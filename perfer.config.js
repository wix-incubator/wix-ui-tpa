const jsFiles = [['Spinner.bundle.min.js', 7]];

const cssFiles = [];

const getFiles = (files) =>
  files.map(([name, size]) => ({
    glob: `.perfer/dist/statics/${name}`,
    maxSize: `${size}kb`,
  }));

module.exports = {
  bundleSize: {
    files: [...getFiles(jsFiles), ...getFiles(cssFiles)],
  },
};
