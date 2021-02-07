const applyStyleMethod = (func, ...args) => {
    const unquotedArgs = args.map(arg => arg.replace(/"/g, '')).join(', ');
    return `"${func}(${unquotedArgs})"`;
};

const createStyleFunc = func => (...args) => applyStyleMethod(func, ...args);

module.exports.applyStyleMethod = applyStyleMethod;

module.exports.fallback = createStyleFunc('fallback');
module.exports.zeroAsTrue = createStyleFunc('zeroAsTrue');
module.exports.color = createStyleFunc('color');
module.exports.applyUnit = createStyleFunc('unit');
module.exports.applyOpacity = createStyleFunc('opacity');
module.exports.calculate = createStyleFunc('calculate');
module.exports.string = createStyleFunc('string');
module.exports.font = createStyleFunc('font');
module.exports.join = createStyleFunc('join');
module.exports.withoutOpacity = createStyleFunc('withoutOpacity');
module.exports.darken = createStyleFunc('darken');
module.exports.smartContrast = createStyleFunc('smartContrast');
module.exports.number = createStyleFunc('number');
module.exports.unit = createStyleFunc('unit');
