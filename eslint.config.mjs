import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default [
	{
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]
	},
	{
		languageOptions: { globals: globals.browser }
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		rules: {
			"brace-style": ["error", "1tbs", { "allowSingleLine": true }],
			"use-isnan": "error",
			"comma-dangle": ["error", "never"],
			"comma-spacing": "error",
			"comma-style": "error",
			"curly": ["error", "multi-line", "consistent"],
			"dot-location": ["error", "property"],
			"handle-callback-err": "off",
			"indent": ["error", "tab", { "SwitchCase": 1 }],
			"max-nested-callbacks": ["error", { "max": 4 }],
			"max-statements-per-line": ["error", { "max": 4 }],
			"no-console": "off",
			"no-empty-function": "error",
			"no-floating-decimal": "error",
			"no-multi-spaces": "error",
			"no-multiple-empty-lines": ["error", { "max": 3, "maxEOF": 1, "maxBOF": 0 }],
			"no-trailing-spaces": ["error"],
			"no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
			"@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
			"no-var": "error",
			"object-curly-spacing": ["error", "always"],
			"prefer-const": "error",
			"semi": ["error", "always"],
			"space-in-parens": "error",
			"space-infix-ops": "error",
			"space-unary-ops": "error",
			"spaced-comment": "error",
			"no-lonely-if": "error",
			"no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
			"space-before-blocks": ["error", { "functions": "always", "keywords": "never", "classes": "always" }],
			"space-before-function-paren": ["error", { "anonymous": "never", "named": "never", "asyncArrow": "always" }],
			"keyword-spacing": ["error", {
				"before": true,
				"after": true,
				"overrides": {
					"if": { "after": false },
					"for": { "after": false },
					"while": { "after": false },
					"switch": { "after": false }
				}
			}],
			"yoda": "error"
		}
	}
];