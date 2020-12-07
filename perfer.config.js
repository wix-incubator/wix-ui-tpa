const javascriptFiles = [];

const cssFiles = [];

const getJS = () =>
  javascriptFiles.map(([name, size]) => ({
    maxSize: `${size}kb`,
    glob: `.perfer/dist/statics/${name}`,
  }));

const getCSS = () =>
  cssFiles.map(([name, size]) => ({
    maxSize: `${size}kb`,
    glob: `.perfer/dist/statics/${name}`,
  }));

module.exports = {
  bundleSize: {
    files: [...getJS(), ...getCSS()],
  },
};
