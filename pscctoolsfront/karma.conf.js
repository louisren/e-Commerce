// Karma configuration

module.exports = function (config) {
	config.set({
		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: 'webapp',

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['qunit', 'openui5'],

		openui5: {
			path: 'http://localhost:8080/resources/sap-ui-core.js',
		},

		client: {
			openui5: {
				config: {
					theme: 'sap_belize',
					language: 'EN',
					bindingSyntax: 'complex',
					compatVersion: 'edge',
					async: true,
					resourceroots: { 'pscctoolsfront.TsApp': './base' },
				},
				tests: ['pscctoolsfront/TsApp/test/integration/AllJourneys'],
			},
			clearContext: false,
			qunit: {
				showUI: true,
			},
		},

		// list of files / patterns to load in the browser
		files: [{ pattern: '**', included: false, served: true, watched: true }],

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress'],

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// level of browser logging
		browserConsoleLogOptions: {
			level: 'error',
		},

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Chrome'],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,
	})
}
