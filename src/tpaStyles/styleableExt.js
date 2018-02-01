module.exports.wixApply = function (func) {
  var args = [].slice.call(arguments, 1);
  return "\"" + func + "(" + args.map(function (arg) {
    return arg.replace(/"/g, '');
  }).join(', ') + ")\"";
};
