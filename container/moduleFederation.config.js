const { dependencies } = require('./package.json');

module.exports = {
	name: 'container',
	filename: 'remoteEntry.js',
	exposes: {},
	remotes: {
		usermanagement: 'usermanagement@http://localhost:3001/remoteEntry.js',
	},
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
