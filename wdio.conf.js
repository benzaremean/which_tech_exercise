const { TimelineService } = require('wdio-timeline-reporter/timeline-service');

exports.config = {
  runner: 'local',
  specs: ['src/tests/*.spec.js'],
  exclude: [
    // 'path/to/excluded/files'
  ],
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 5,
      browserName: 'chrome'
    }
  ],
  logLevel: 'error',
  bail: 0,
  baseUrl: 'https://which.co.uk',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: ['selenium-standalone', [TimelineService]],
  framework: 'jasmine',
  reporters: [
    'spec',
    [
      'timeline',
      {
        outputDir: './output',
        fileName: 'test-report.html',
        embedImages: true,
        images: {
          quality: 80,
          resize: true,
          reductionRatio: 2
        },
        screenshotStrategy: 'before:click'
      }
    ]
  ],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000,
    expectationResultHandler: function(passed, assertion) {
      // do something
    }
  },

  before: function(capabilities, specs) {
    require('@babel/register');
  }
};
