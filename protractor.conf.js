exports.config = {
    // path to the selenium server jar. Update version number accordingly!
    seleniumServerJar: 'node_modules/protractor/selenium/selenium-server-standalone-2.48.2.jar',

    // select all end to end tests
    specs: ['AppVeyor-Protractor-test-app/*e2e.spec.js'],

    baseUrl: 'http://localhost:47602/'
};
