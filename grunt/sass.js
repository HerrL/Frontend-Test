/*
 * https://github.com/gruntjs/grunt-contrib-sass
 */
function createFileList(grunt, minified) {

	var files = [],
		options = {};

	options.src = "<%= grunt.configGlobal.tmpPath %>resources/scss/styles.scss";
	if (minified) {
		options.dest = "<%= grunt.configGlobal.targetPath%>resources/css/styles.min.css";
	}
	else {
		options.dest = "<%= grunt.configGlobal.targetPath%>resources/css/styles.css";
	}
	files.push(options);

	return files;
}

module.exports = function(grunt) {

	var tasks = {
		options: {
			quiet: true,
			unixNewlines: true,
			cacheLocation: "build/sass-cache"
		},
		devExpanded: {
			options: {
				noCache: false,
				update: true,
				style: "expanded"
			}
		},
		devMinified: {
			options: {
				noCache: false,
				update: true,
				style: "compressed"
			}
		},
		expanded: {
			options: {
				noCache: true,
				style: "expanded"
			}
		},
		minified: {
			options: {
				noCache: true,
				style: "compressed"
			}
		}
	};

	tasks.devExpanded.files = createFileList(grunt, false);
	tasks.devMinified.files = createFileList(grunt, true);
	tasks.expanded.files = createFileList(grunt, false);
	tasks.minified.files = createFileList(grunt, true);

	return tasks;
};
