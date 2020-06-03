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
  console.log('adler', 'testBase.js:19', 'parentsHashArr', parentsHashArr);
  const isPullRequest = parentsHashArr.length === 3;
  const parentHashIndex = isPullRequest
    ? PULL_REQUEST_PARENT_HASH_INDEX
    : HEAD_HASH_INDEX;
  return parentsHashArr[parentHashIndex].trim();
}

function setApplitoolsId() {
  let batchId;
  try {
    batchId = getPRHeadHash();
  } catch (e) {
    console.log('adler', 'testBase.js:31', 'catched', e);
    batchId = process.env.BUILD_VCS_NUMBER;
  }

  console.log('adler', 'testBase.js:34', 'batchId is', batchId);

  process.env.APPLITOOLS_BATCH_ID = batchId;
}

setApplitoolsId();
