const { dependencies } = require('./package.json');

module.exports = {
	name: 'usermanagement',
	filename: 'remoteEntry.js',
	exposes: {
		'./user-management': './src/lib/pages/user-management',
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
