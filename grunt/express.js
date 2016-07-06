
module.exports = function( grunt ) {
	return {
		all: {
			options: {
				bases: [ grunt.configGlobal.inplaceWebappPath ],
				port: 8080,
				hostname: "0.0.0.0",
				livereload: true
			}
		}
	};
};
