function applyStyleFunc (func, args) {
    return "\"" + func + "(" + args.map(function (arg) {
        return arg.replace(/"/g, '');
    }).join(', ') + ")\"";
};

function createStyleFunc (func) {
    return function () {
        var args = Array.prototype.slice.call(arguments, 0);
        return applyStyleFunc(func, args);
    };
}

module.exports.fallback = createStyleFunc('fallback');
module.exports.zeroAsTrue = createStyleFunc('zeroAsTrue');
module.exports.applyColor = createStyleFunc('color');
module.exports.unit = createStyleFunc('unit');
module.exports.opacity = createStyleFunc('opacity');
module.exports.calculate = createStyleFunc('calculate');
module.exports.string = createStyleFunc('string');
module.exports.applyFont = createStyleFunc('font');
module.exports.join = createStyleFunc('join');
module.exports.withoutOpacity = createStyleFunc('withoutOpacity');
module.exports.darken = createStyleFunc('darken');
