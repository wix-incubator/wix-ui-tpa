import * as tpaResponse from './fakeTPAInitResponse.json';

window.postMessage(JSON.stringify(tpaResponse), '*');