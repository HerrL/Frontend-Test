/*
 * https://github.com/gruntjs/grunt-contrib-csslint
 */

function csslintFiles( grunt, config ) {

	var stylesSrc = [];

	stylesSrc.push( grunt.configGlobal.targetPath + "resources/css/styles.css" );

	config.styles.src = stylesSrc;
}

module.exports = function( grunt ) {

	var config = {
		options: {
			"adjoining-classes": false,
			"box-model": false,
			"box-sizing": false,
			"bulletproof-font-face": false,
			"compatible-vendor-prefixes": false,
			"display-property-grouping": false,
			"duplicate-properties": false,
			"floats": false,
			"font-sizes": false,
			"ids": false,
			"important": false,
			"known-properties": false,
			"outline-none": false,
			"qualified-headings": false,
			"shorthand": false,
			"universal-selector": false,
			"unqualified-attributes": false,
			"unique-headings": false,
			"zero-units": false
		},
		styles: {
			src: []
		}
	};

	csslintFiles( grunt, config);

	return config;
};
