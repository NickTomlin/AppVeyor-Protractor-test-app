var browserStackUser = process.BROWSERSTACK_USER;
var browserStackKey = process.BROWSERSTACK_KEY;
var appv = process.APPVEYOR;
console.log(browserStackUser + ' ' + browserStackKey + ' ' + appv);

exports.config = {
    seleniumAddress: 'http://hub.browserstack.com/wd/hub',

    capabilities: {
        'browserstack.user': browserStackUser,
        'browserstack.key': browserStackKey,

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
