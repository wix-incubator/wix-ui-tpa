import { defaultPlugins } from 'wix-style-processor/dist/es/src/defaultPlugins';

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

Object.keys(defaultPlugins).map(funcName => {
    console.log('adler', 'styles.js:17', funcName);
    var name = funcName === 'color' ? 'applyColor' : funcName;
    module.exports[name] = createStyleFunc(defaultPlugins[func]);
});

// module.exports.fallback = createStyleFunc('fallback');
// module.exports.zeroAsTrue = createStyleFunc('zeroAsTrue');
// module.exports.applyColor = createStyleFunc('color');
// module.exports.unit = createStyleFunc('unit');
// module.exports.opacity = createStyleFunc('opacity');
// module.exports.calculate = createStyleFunc('calculate');
// module.exports.string = createStyleFunc('string');
// module.exports.font = function () {
//     var args = Array.prototype.slice.call(arguments, 0);
//     return applyStyleFunc('font', args);
// };
// module.exports.join = createStyleFunc('join');
// module.exports.withoutOpacity = createStyleFunc('withoutOpacity');
// module.exports.darken = createStyleFunc('darken');

module.exports.fallback = defaultPlugins['fallback'];
module.exports.zeroAsTrue = defaultPlugins['zeroAsTrue'];
module.exports.applyColor = defaultPlugins['color'];
module.exports.unit = defaultPlugins['unit'];
module.exports.opacity = defaultPlugins['opacity'];
module.exports.calculate = defaultPlugins['calculate'];
module.exports.string = defaultPlugins['string'];
module.exports.font = defaultPlugins['font'];
module.exports.join = defaultPlugins['join'];
module.exports.withoutOpacity = defaultPlugins['withoutOpacity'];
module.exports.darken = defaultPlugins['darken'];
