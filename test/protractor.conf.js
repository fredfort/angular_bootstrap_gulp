'use strict';

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e/main.js'],
   multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }]
};