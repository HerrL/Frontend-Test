/*
 * https://github.com/ahmednuaman/grunt-scss-lint
 */

function scssLintConfig( grunt, config, excludedFiles ) {

	var allFiles = [];

	allFiles.push( "<%= grunt.configGlobal.sourcePath %>resources/scss/**/*.scss" );

	config.allFiles = allFiles.concat(excludedFiles);

}

module.exports = function( grunt ) {

	var config = {
			options: {
				config: "scss-lint.yml",
				reporterOutput: "scsslint-errors.xml",
				maxBuffer: 6000 * 1024,
				force: true
			},
			allFiles: [
				"<%= grunt.configGlobal.sourcePath %>resources/scss/**/*.scss"
			]
		},
		excludedFiles = [
			"!<%= grunt.configGlobal.sourcePath %>resources/scss/vendor/**/*.scss"
		];

	scssLintConfig( grunt, config, excludedFiles );

	return config;
};
