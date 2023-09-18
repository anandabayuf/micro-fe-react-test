const { dependencies } = require('./package.json');

module.exports = {
	name: 'forgotpassword',
	filename: 'remoteEntry.js',
	exposes: {
		'./forgot-password': './src/lib/pages/forgot-password',
	},
	remotes: {},
	shared: {
		...dependencies,
		react: {
			singleton: true,
			import: 'react',
			shareScope: 'default',
			requiredVersion: dependencies.react,
		},
		'react-dom': {
			singleton: true,
			requiredVersion: dependencies['react-dom'],
		},
	},
};
