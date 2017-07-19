
// An example configuration file.

exports.config = {
  // directConnect: true,    // for testing directly against a browser
  // without using a Selenium Server.
  // applies only to chrome and firefox.

  // address of the running server.
  // defaults to http://localhost:4444/wd/hub
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome',
    user: 'user@perfectomobile.com',
    password: 'password',
    platformName: 'Android'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['Zootest.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors: true,   // Use colors in the command line report.
    defaultTimeoutInterval: 30000   // Default time to wait in ms before a test fails.
  }
}