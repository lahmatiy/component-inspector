// Karma configuration
// Generated on Mon May 23 2016 22:39:36 GMT+0300 (MSK)
var webpackConfig = require('./tests/webpack.config');
module.exports = function (config) {
  var isCI = process.env.TRAVIS;
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      'tests/fakeinject.js',
      'tests/*tests.js'
    ],

    webpack: webpackConfig,
    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {'tests/react-api.tests.js': ['webpack'], 'tests/fakeinject.js': ['webpack']},


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],
    webpackMiddleware: {noInfo: true},

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [isCI ? 'Firefox' : 'Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: isCI,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
};
