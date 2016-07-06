/*
 * https://github.com/gustavohenke/grunt-jscs
 */

function jsCodeStyle( grunt, config ) {

	var source = {
			src: []
		},
		buildTmp = {
			src: []
		};

	source.src.push("<%= grunt.configGlobal.sourcePath %>resources/js/main/**/*.js");
	buildTmp.src.push("<%= grunt.configGlobal.tmpPath %>/resources/js/main/**/*.js");

	config.source = source;
	config.buildTmp = buildTmp;
}


module.exports = function( grunt ) {
	var config = {
		options: {
			force: false,
			requireCurlyBraces: [
				"if",
				"else",
				"for",
				"while",
				"do",
				"try",
				"catch"
			],
			requireSpaceAfterKeywords: [
				"if",
				"else",
				"for",
				"while",
				"do",
				"switch",
				"return",
				"try",
				"catch"
			],
			requireSpaceBeforeBlockStatements: true,
			requireParenthesesAroundIIFE: true,
			requireSpacesInConditionalExpression: true,
			requireSpacesInFunctionExpression: {
				beforeOpeningCurlyBrace: true
			},
			requireSpacesInAnonymousFunctionExpression: {
				beforeOpeningCurlyBrace: true
			},
			requireSpacesInNamedFunctionExpression: {
				beforeOpeningCurlyBrace: true
			},
			requireSpacesInFunctionDeclaration: {
				beforeOpeningCurlyBrace: true
			},
			requireMultipleVarDecl: true,
			requireBlocksOnNewline: true,
			disallowEmptyBlocks: true,
			requireSpacesInsideObjectBrackets: "allButNested",
			requireSpacesInsideArrayBrackets: "allButNested",
			disallowSpaceAfterObjectKeys: true,
			requireCommaBeforeLineBreak: true,
			requireOperatorBeforeLineBreak: true,
			disallowSpaceAfterPrefixUnaryOperators: [
				"++",
				"--",
				"+",
				"-",
				"~",
				"!"
			],
			disallowSpaceBeforePostfixUnaryOperators: [
				"++",
				"--"
			],
			requireSpaceBeforeBinaryOperators: [
				"=",
				"+",
				"-",
				"/",
				"*",
				"==",
				"===",
				"!=",
				"!=="
			],
			requireSpaceAfterBinaryOperators: [
				"=",
				",",
				"+",
				"-",
				"/",
				"*",
				"==",
				"===",
				"!=",
				"!=="
			],
			requireCamelCaseOrUpperCaseIdentifiers: "ignoreProperties",
			disallowKeywords: [
				"with"
			],
			disallowMultipleLineStrings: true,
			validateQuoteMarks: "\"",
			validateIndentation: "\t",
			disallowMixedSpacesAndTabs: "smart",
			disallowTrailingWhitespace: true,
			disallowTrailingComma: true,
			requireKeywordsOnNewLine: [
				"else"
			],
			requireCapitalizedConstructors: true,
			safeContextKeyword: [
				"that"
			],
			requireDotNotation: true,
			disallowYodaConditions: true,
			validateJSDoc: {
				checkParamNames: true,
				checkRedundantParams: true,
				requireParamTypes: true
			},
			requireSpaceAfterLineComment: true
		},
		gruntfile: {
			src: [ "Gruntfile.js", "grunt/**/*.js" ]
		},
		phantomcss: {
			src: "test/visual/src/**/*.js"
		}
	};

	jsCodeStyle( grunt, config );

	return config;
};
