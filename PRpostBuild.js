const fs = require('fs');
const child_process = require('child_process');

console.log('PR publish version - START');

try {
    console.log('Checking if should publish PR version');

    const pr = process.env.VCS_BRANCH_NAME && process.env.VCS_BRANCH_NAME.replace(/\D+/g, '') || false;
    if (process.env.IS_BUILD_AGENT && pr) {
        // console.log('preparing publish');
        // const packageContent = require('../package');
        // const packageCopy = Object.assign({}, packageContent);
        // const version = `${packageContent.version}-pr.${pr}`;
        // console.log('version to be published: ', version);
        // packageContent.version = version;
        // console.log('writing package.json with new version');
        // fs.writeFileSync('../package.json', JSON.stringify(packageContent));
        // console.log('publishing version', version);
        // child_process.execSync('npx yoshi release');
        // console.log('published successfully');
        // console.log('reverting package change');
        // fs.writeFileSync('../package.json', JSON.stringify(packageCopy));
    }

} catch (e) {
    console.log('Failed PR publish', e);
}

console.log('PR publish version - END');
