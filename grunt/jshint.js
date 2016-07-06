/*
 * https://github.com/gruntjs/grunt-contrib-jshint
 */

function jsHintConfig( grunt, config ) {

	var source = {
			src: []
		},
		buildTmp = {
			src: []
		};

	source.src.push("<%= grunt.configGlobal.sourcePath %>resources/js/main/**/*.js");
	buildTmp.src.push("<%= grunt.configGlobal.tmpPath %>/resources/js/main/**/*.js");

	config.source.src = source.src;
	config.buildTmp.src = buildTmp.src;
}

module.exports = function( grunt ) {
	var config = {
		options: {
			curly: true,
			eqeqeq: true,
			es3: true,
			immed: true,
			indent: 4,
			latedef: true,
			newcap: true,
			noarg: true,
			sub: true,
			undef: true,
			unused: false,
			boss: true,
			eqnull: true,

			browser: true,
			jquery: true

		},
		gruntfile: {
			options: {
				node: true
			},
			src: [ "Gruntfile.js", "grunt/**/*.js" ]
		},
		source: {
			options: {
				devel: true,
				globalstrict: true,
				jquery: true
			}
		},
		buildTmp: {
			options: {
				devel: true,
				globalstrict: true,
				jquery: true
			}
		},
		phantomcss: {
			options: {
				globals: {
					casper: true,
					phantomcss: true
				}
			},
			src: [ "test/visual/src/**/*.js" ]
		}
	};

	jsHintConfig( grunt, config );

	return config;
};
