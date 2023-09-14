const { dependencies } = require('./package.json');

const MODULE_URL = process.env.REACT_APP_MODULE_URL;
const PUBLIC_URL = process.env.PUBLIC_URL;

module.exports = {
	name: 'container',
	filename: 'remoteEntry.js',
	exposes: {},
	remotes: {
		usermanagement: `usermanagement@${MODULE_URL}${PUBLIC_URL}/remoteEntry.js`,
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
