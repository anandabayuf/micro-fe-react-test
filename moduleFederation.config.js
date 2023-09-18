const { dependencies } = require('./package.json');

const MODULE_URL = process.env.REACT_APP_MODULE_URL;

module.exports = {
	name: 'container',
	filename: 'remoteEntry.js',
	exposes: {},
	remotes: {
		usermanagement: `usermanagement@${MODULE_URL}:3001/user-management/remoteEntry.js`,
		otherbankaccount: `otherbankaccount@${MODULE_URL}:3002/other-bank-account/remoteEntry.js`,
		myapproval: `myapproval@${MODULE_URL}:3003/my-approval/remoteEntry.js`,
		calendar: `calendar@${MODULE_URL}:3004/calendar/remoteEntry.js`,
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
