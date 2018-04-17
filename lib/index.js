module.exports = {
	tabWidth: 4,
	singleQuote: true,
	trailingComma: 'all', // Requires 'trailing-function-commas' transform which is enabled by default in Babel.
	overrides: [
		{
			files: '*.test.js',
			options: {
				// Prefer 'flow' to 'babylon', as we use Flow in a lot of our projects.
				parser: 'flow',
			},
		},
	],
};
