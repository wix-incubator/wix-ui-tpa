module.exports.config = {
    specs: ['test/**/*.e2e.ts', 'src/**/*.e2e.ts'],
    baseUrl: `http://localhost:6006/`,
    jasmineNodeOpts: { defaultTimeoutInterval: 120000 },
    onPrepare() {
        browser.ignoreSynchronization = true;
    },
};
