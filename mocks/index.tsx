import * as tpaResponse from './wix-tpa-fake-response.json';

window.postMessage(JSON.stringify(tpaResponse), '*');

window.addEventListener('message', console.log);
