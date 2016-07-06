/*
 * https://github.com/gruntjs/grunt-contrib-clean
 */
module.exports = function( grunt ) {
	return {
		jsMainMap: [ "<%= grunt.configGlobal.assetPath %>resources/js/main*.map" ],
		phantomcss: [ "test/visual/results/" ],
		scss: [ "src/main/webapp/resources/scss/vendor" ],
		vendor: [ "src/main/webapp/resources/js/vendor" ],
		target: [ "<%= grunt.configGlobal.targetPath %>" ],
		assets: [ "<%= grunt.configGlobal.assetPath %>" ],
		tmp: [ "<%= grunt.configGlobal.tmpPath %>" ]
	};
};