module.exports = {
	extends: 'eslint:recommended',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'scripts',
		ecmaFeatures: {
			impliedStrict: true
		}
	},
	rules: {
		'global-require': 2,
		'default-case': 2,
		eqeqeq: [2, 'smart'],
		'no-eq-null': 2,
		strict: [2, 'global'],
		'callback-return': 2,
		'no-process-env': 2,
		'no-process-exit': 2,
		'no-var': 2,
		indent: ['error', 'tab', { "SwitchCase": 1 }],
		'prefer-const': 2,
		'no-unused-expressions': 1,
		semi: 2,
		'func-names': 1,
		'prefer-destructuring': 2,
		'object-shorthand': 2,
		quotes: ['error', 'single'],
		'no-buffer-constructor': 2,
		'linebreak-style': 2,
		'max-len': [
			1,
			{
				code: 100,
			}
		]
	},
	globals: {
		__dirname: false
	},
	env: {
		node: true
	}
};
