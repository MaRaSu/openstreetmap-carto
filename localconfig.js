const process = require('process');

exports.LocalConfig = function (localizer, project) {
	localizer.where('center').then([61.50240, 23.8090, 13]);
	localizer.where('Layer').if({ 'Datasource.type': 'postgis' }).then({
		"Datasource.dbname": "gis",
		"Datasource.password": "renderer",
		"Datasource.user": "renderer",
		"Datasource.host": "postgres-osm"
	});
	// You can also do it in pure JS
	//project.mml.bounds = [1, 2, 3, 4];
};