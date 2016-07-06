module.exports = function( grunt ) {

	grunt.file.defaultEncoding = "utf-8";

	grunt.configGlobal = {

		assetPath: "build/assets/",
		targetPath: "build/target/",
		tmpPath: "build/tmp/",
		sourcePath: "src/main/webapp/",
		inplaceWebappPath: "build/inplaceWebapp/",

		jsBanner: grunt.file.read( "assets/js/banner.txt" ),
		jsFooter: grunt.file.read( "assets/js/footer.txt" )
	};



	// measures the time each task takes
	require( "time-grunt" )( grunt );

	// this grunt module loads all "grunt-contrib-*" in /node_modules and scans in directory /grunt for tasks
	// those loaded tasks are then referenced in "grunt.registerTask('XXX')"
	require( "load-grunt-config" )( grunt );

	// default task
	grunt.registerTask( "default", [ "clean", "bowercopy", "copy", "jscs:buildTmp", "jshint:buildTmp", "concat", "uglify", "sass:expanded", "sass:minified" ] );

	// custom tasks
	grunt.registerTask( "bowerinstall", [ "bowercopy" ] );

	grunt.registerTask( "server", [ "express", "open", "watch" ]);

};
