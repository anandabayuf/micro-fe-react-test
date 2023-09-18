const { dependencies } = require('./package.json');

module.exports = {
	name: 'calendar',
	filename: 'remoteEntry.js',
	exposes: {
		'./calendar': './src/lib/pages/calendar',
		'./listEvent': './src/lib/components/calendar/events/listEvent.tsx',
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
