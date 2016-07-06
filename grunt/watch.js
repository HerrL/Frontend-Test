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
		gruntfile: {
			files: [ "Gruntfile.js", "grunt/**/*.js" ],
			tasks: [ "newer:jscs:gruntfile", "newer:jshint:gruntfile" ]
		},
		html: {
			options: {
				livereload: true
			},
			files: [ "src/main/webapp/**/*.html", "src/main/webapp/**/*.json" ],
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
			tasks: [ "newer:copy", "sass:devExpanded", "sass:devMinified", "newer:copy:targetToInplaceWebapp" ]
		}
	};

	watchConfig( grunt, config );


	return config;
};
