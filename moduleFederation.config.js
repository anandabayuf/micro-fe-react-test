const { dependencies } = require('./package.json');

module.exports = {
	name: 'otherbankaccount',
	filename: 'remoteEntry.js',
	exposes: {
		'./other-bank-account': './src/lib/pages/OtherBankAccount',
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
