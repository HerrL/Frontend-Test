/*
 * https://github.com/gruntjs/grunt-contrib-concat
 */

module.exports = function( grunt ) {

	var config = {},
		processFunction = function( src ) {
			src = src.replace( /(^|\n)[ \t]*"use strict";?\s*/g, "$1" );
			src = grunt.util.normalizelf( src );
			var result = src.split( grunt.util.linefeed ).map( function( line ) {
				return "\t" + line;
			} ).join( grunt.util.linefeed );
			return result;
		},
		mainConf = {},
		pluginConf = {};

	mainConf.options = {};
	mainConf.options.banner = "<%= grunt.configGlobal.jsBanner %>";
	mainConf.options.footer = "<%= grunt.configGlobal.jsFooter %>";
	mainConf.options.process = processFunction;
	mainConf.options.seperator = ";";

	mainConf.src = [ grunt.configGlobal.tmpPath + "resources/js/main/**/*.js" ];
	mainConf.dest = grunt.configGlobal.targetPath + "resources/js/main.js";
	config.main = mainConf;

	pluginConf.src = [ grunt.configGlobal.tmpPath + "resources/js/plugins/**/*.js" ];
	pluginConf.dest = grunt.configGlobal.targetPath + "resources/js/plugins.js";
	config.plugin = pluginConf;

	return config;
};
