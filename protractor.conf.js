exports.config = {
    capabilities: {
      'browserName': 'internet explorer',
      'platform': 'ANY',
    },

    // select all end to end tests
    specs: ['AppVeyor-Protractor-test-app/*e2e.spec.js'],

    baseUrl: 'http://localhost:47602/'
};
