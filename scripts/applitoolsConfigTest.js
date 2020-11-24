const { execSync } = require('child_process');

const PULL_REQUEST_PARENT_HASH_INDEX = 2;
const HEAD_HASH_INDEX = 0;

function getHeadHash() {
    return execSync('git rev-parse --verify HEAD').toString();
}

function getParentsHashArray() {
    const headCommitHash = getHeadHash();
    return execSync(`git rev-list --parents -n 1 ${headCommitHash}`)
        .toString()
        .split(' ');
}

function getPRHeadHash() {
    const parentsHashArr = getParentsHashArray();
    const isPullRequest = parentsHashArr.length === 3;
    const parentHashIndex = isPullRequest
        ? PULL_REQUEST_PARENT_HASH_INDEX
        : HEAD_HASH_INDEX;
    return parentsHashArr[parentHashIndex].trim();
}

function getBatchId() {
    let batchId;
    try {
        batchId = getPRHeadHash();
    } catch (e) {
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        console.log(JSON.stringify(e, null, 2));
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        batchId = process.env.BUILD_VCS_NUMBER;
    }
    return batchId;
}

console.log('BATCH ID:');
console.log('=========');
console.log(getBatchId());
console.log('=========');
