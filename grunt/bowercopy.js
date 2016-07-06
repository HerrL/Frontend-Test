/*
 * https://github.com/timmywil/grunt-bowercopy
 */


module.exports = function( grunt ) {

	var result =  {
		options: {
			// Bower components folder will be removed afterwards or not
			clean: false,
			destPrefix: "<%= grunt.configGlobal.assetPath %>resources/"
		},
		"jquery-legacy": {
			files: {
				"js/vendor/jquery-legacy": "jquery-legacy/dist/*"
			}
		},
		"jquery": {
			files: {
				"js/vendor/jquery": "jquery-modern/dist/*"
			}
		},
		"modernizr": {
			files: {
				"js/vendor/modernizr": "modernizr-min/modernizr.min.js"
			}
		},
		"normalize-scss": {
			files: {
				"scss/vendor/normalize-scss": "normalize-scss/_normalize.scss"
			}
		},
		"bourbon": {
			files: {
				"scss/vendor/bourbon": "bourbon/dist/*"
			}
		},
		"neat": {
			files: {
				"scss/vendor/neat": "neat/app/assets/stylesheets"
			}
		}
	};
	return result;
};
