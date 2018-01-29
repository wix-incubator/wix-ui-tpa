module.exports.wixApply = function (func, ...args) {
  return `"${func}(${args.map((arg) => arg.replace(/"/g, '')).join(', ')})"`;
};
