const { dependencies } = require('./package.json');

module.exports = {
	name: 'changepassword',
	filename: 'remoteEntry.js',
	exposes: {
		'./change-password': './src/lib/pages/change-password',
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
