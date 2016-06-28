const webpackConfig = require('./webpack.config');

webpackConfig.entry = {};

const testEntry = './src/components/app/app.module.js';

module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files: [
			testEntry,
			'./node_modules/angular-mocks/angular-mocks.js',
			'./test/**/*.js'
		],
		webpack: webpackConfig,
		exclude: [],
		preprocessors: {
			[testEntry]: ['webpack'],
			'./test/**/*.js': ['babel']
		},
		reporters: ['progress'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['Chrome'],
		customLaunchers: {
			Chrome_travis_ci: {
				base: 'Chrome',
				flags: ['--no-sandbox']
			}
    },
		singleRun: false,
		concurrency: Infinity
	});

	if (process.env.TRAVIS) {
		configuration.browsers = ['Chrome_travis_ci'];
		configuration.singleRun = true;
	}

	config.set(configuration);
};
