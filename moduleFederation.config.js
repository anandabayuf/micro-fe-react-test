const { dependencies } = require('./package.json');

module.exports = {
	name: 'myapproval',
	filename: 'remoteEntry.js',
	exposes: {
		'./my-approval': './src/lib/pages/my-approval',
        './my-approval-detail': './src/lib/pages/my-approval/detail',
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
