exports.config = {
    seleniumAddress: 'http://hub.browserstack.com/wd/hub',

    capabilities: {
        'browserstack.user': process.env.BROWSERSTACK_USER,
        'browserstack.key': process.env.BROWSERSTACK_KEY,

        // Needed for testing localhost
        'browserstack.local': 'true',

        // Settings for the browser you want to test
        // (check docs for difference between `browser` and `browserName`
        'browserName': 'Chrome',
        'browser_version': '46.0',
        'os': 'Windows',
        'os_version': '7',
        'resolution': '1280x1024'
    },

    // select all end to end tests
    specs: ['AppVeyor-Protractor-test-app/*e2e.spec.js'],

    baseUrl: 'http://localhost:47602/'
};
