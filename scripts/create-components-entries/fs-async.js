const util = require('util');
const fs = require('fs');

module.exports.exists = util.promisify(fs.exists);
module.exports.mkdir = util.promisify(fs.mkdir);
module.exports.rmdir = util.promisify(fs.rmdir);
module.exports.writeFile = util.promisify(fs.writeFile);
module.exports.symlink = util.promisify(fs.symlink);