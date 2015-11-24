exports.config = {
    capabilities: {
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
