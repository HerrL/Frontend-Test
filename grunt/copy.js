/*
 * https://github.com/gruntjs/grunt-contrib-copy
 */
function createCopies( grunt ) {

	var files = [],
		copyJsVendor = {},
		copyCommonMainJs = {},
		copyBowerPluginsJs = {},
		copyCommonPluginsJs = {},
		copyJs = {};

	copyJsVendor.expand = true;
	copyJsVendor.cwd = "<%= grunt.configGlobal.assetPath %>/resources/js/vendor/";
	copyJsVendor.src = [ "**/*" ];
	copyJsVendor.dest = "<%= grunt.configGlobal.targetPath %>/resources/js/vendor/";
	copyJsVendor.timestamp = true;
	files.push(copyJsVendor);

	copyBowerPluginsJs.expand = true;
	copyBowerPluginsJs.cwd = "<%= grunt.configGlobal.assetPath %>/resources/js/plugins/";
	copyBowerPluginsJs.src = [ "**/*" ];
	copyBowerPluginsJs.dest = "<%= grunt.configGlobal.tmpPath %>resources/js/plugins/";
	copyBowerPluginsJs.timestamp = true;
	files.push(copyBowerPluginsJs);

	copyCommonMainJs.expand = true;
	copyCommonMainJs.cwd = "<%= grunt.configGlobal.sourcePath %>/resources/js/main/";
	copyCommonMainJs.src = [ "**/*" ];
	copyCommonMainJs.dest = "<%= grunt.configGlobal.tmpPath %>resources/js/main/";
	copyCommonMainJs.timestamp = true;
	files.push(copyCommonMainJs);

	copyCommonPluginsJs.expand = true;
	copyCommonPluginsJs.cwd = "<%= grunt.configGlobal.sourcePath %>/resources/js/plugins/";
	copyCommonPluginsJs.src = [ "**/*" ];
	copyCommonPluginsJs.dest = "<%= grunt.configGlobal.tmpPath %>resources/js/plugins/";
	copyCommonPluginsJs.timestamp = true;
	files.push(copyCommonPluginsJs);

	copyJs.expand = true;
	copyJs.cwd = "src/main/webapp/resources/js/";
	copyJs.src = [ "**/*" ];
	copyJs.dest = "<%= grunt.configGlobal.tmpPath %>/resources/js/";
	copyJs.timestamp = true;
	files.push(copyJs);


	return files;
}


module.exports = function( grunt ) {

	var def =  {
		html: {
			expand: true,
			cwd: "<%= grunt.configGlobal.sourcePath %>pages",
			src: [ "**/*" ],
			dest: "<%= grunt.configGlobal.inplaceWebappPath %>pages/"
		},
		scssvendor: {
			expand: true,
			cwd:  "<%= grunt.configGlobal.assetPath %>resources/scss",
			src: [ "**/* " ],
			dest: "<%= grunt.configGlobal.tmpPath %>resources/scss",
			timestamp: true
		},
		scss: {
			expand: true,
			cwd: "<%= grunt.configGlobal.sourcePath %>resources/scss",
			src: [ "**/* " ],
			dest: "<%= grunt.configGlobal.tmpPath %>resources/scss",
			timestamp: true
		},
		targetToInplaceWebapp: {
			expand: true,
			cwd: "<%= grunt.configGlobal.targetPath %>resources/",
			src: [ "**/* " ],
			dest: "<%= grunt.configGlobal.inplaceWebappPath %>resources/",
			timestamp: true
		}
	};
	def.dist = {};
	def.dist.files = createCopies(grunt);

	return def;
};


