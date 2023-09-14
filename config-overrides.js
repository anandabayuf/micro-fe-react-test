const webpack = require('webpack');

const { ModuleFederationPlugin } = require('webpack').container;
const fs = require('fs');
const path = require('path');

module.exports = function override(config) {
	/**
	 * @returns {string}
	 */
	function getPublicPath() {
		let publicPath = 'auto';
		const providedPath = process.env.PUBLIC_URL;
		if (
			providedPath &&
			providedPath.length >= 0 &&
			providedPath.startsWith('http')
		) {
			publicPath = providedPath.endsWith('/')
				? providedPath
				: providedPath + '/';
		}
		return publicPath;
	}

	const fallback = config.resolve.fallback || {};
	Object.assign(fallback, {
		crypto: require.resolve('crypto-browserify'),
		constants: require.resolve('constants-browserify'),
		stream: require.resolve('stream-browserify'),
		assert: require.resolve('assert'),
		http: require.resolve('stream-http'),
		https: require.resolve('https-browserify'),
		os: require.resolve('os-browserify'),
		url: require.resolve('url'),
	});
	config.resolve.fallback = fallback;
	config.plugins = (config.plugins || []).concat([
		new webpack.ProvidePlugin({
			process: 'process/browser.js',
			Buffer: ['buffer', 'Buffer'],
		}),
	]);

	const projectDir = path.resolve(fs.realpathSync(process.cwd()));
	const mfConfigPath = path.resolve(projectDir, 'moduleFederation.config.js');
	if (fs.existsSync(mfConfigPath)) {
		const mfConfig = require(mfConfigPath);
		config.plugins = (config.plugins || []).concat([
			new ModuleFederationPlugin(mfConfig),
		]);
		config.output.publicPath = '/test/user-management';
	}

	return config;
};
