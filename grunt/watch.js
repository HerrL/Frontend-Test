/*
 * https://github.com/gruntjs/grunt-contrib-watch
 * https://github.com/tschaub/grunt-newer
 */

function watchConfig( grunt, config ) {

	config.js.files.push( "<%= grunt.configGlobal.sourcePath %>resources/js/**/*.js" );
	config.sass.files.push("<%= grunt.configGlobal.sourcePath %>resources/scss/**/*.scss");

}

module.exports = function( grunt ) {

	var config = {
		files: [
			"<%= grunt.configGlobal.sourcePath %>",
			"!.git",
			"!.idea",
			"!bower_components",
			"!build",
			"!node_modules"
		],
		gruntfile: {
			files: [ "Gruntfile.js", "grunt/**/*.js" ],
			tasks: [ "newer:jscs:gruntfile", "newer:jshint:gruntfile" ]
		},
		html: {
			options: {
				livereload: true
			},
			files: [ "<%= grunt.configGlobal.sourcePath %>/**/*.html", "<%= grunt.configGlobal.sourcePath %>/**/*.json" ],
			tasks: [ "copy:html" ]
		},
		js: {
			options: {
				interrupt: true
			},
			files: [],
			tasks: [ "copy", "jscs:buildTmp", "jshint:buildTmp", "concat", "uglify", "copy:targetToInplaceWebapp" ]
		},
		sass: {
			options: {
				interrupt: true
			},
			files: [
				"!<%= grunt.configGlobal.sourcePath %>resources/scss/vendor/**/*.scss"
			],
			tasks: [ "copy", "sass:devExpanded", "sass:devMinified", "copy:targetToInplaceWebapp" ]
		}
	};

	watchConfig( grunt, config );

	console.dir(config);

	return config;
};
