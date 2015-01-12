exports.config = {
  seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.44.0.jar',
  
  specs: [
    './e2e/*.tests.js'
  ],
  
  baseUrl: 'http://localhost:8080',
  
  multiCapabilities: [
    {'browserName': 'chrome'}
  ]
};
