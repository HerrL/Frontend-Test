/*
 * https://github.com/gruntjs/grunt-contrib-uglify
 */

function uglifyConfig( grunt, config ) {

	var main = {},
		plugin = {};

	main.src = "<%= grunt.configGlobal.targetPath %>resources/js/main.js";
	main.dest = "<%= grunt.configGlobal.targetPath %>resources/js/main.min.js";
	config.main = main;
	plugin.src = "<%= grunt.configGlobal.targetPath %>resources/js/plugins.js";
	plugin.dest = "<%= grunt.configGlobal.targetPath %>resources/js/plugins.min.js";
	config.plugins = plugin;

}


module.exports = function( grunt ) {

	var config = {
			options: {
				compress: {
					drop_console: true
				},
				preserveComments: "some",
				report: "min",
				sourceMap: true,
				nameCache: "build/uglify-cache.json"
			}
		};

	uglifyConfig( grunt, config );

	return config;
};
