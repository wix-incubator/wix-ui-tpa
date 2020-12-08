const jsFiles = [['Spinner.bundle.min.js', 1]];

const cssFiles = [['Spinner.min.css', 1]];

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
