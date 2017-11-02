var Papa = require("./papaparse.min");
//var moment = require("./moment.min");
var lodash = require("./lodash.min");
var moment = require('./moment-business-days');

var fs = require('fs');


var feriados = ["02/11/2017", "15/11/2017"];

moment.locale('br', {
   holidays: feriados,
   holidayFormat: 'DD/MM/YYYY'
});

fs.readFile("./db.csv", "utf8", function(err, data){
	data = Papa.parse(data);
	data_head = [['id','data_processamento','hora_processamento','codigo','cartas','cif']];
	data.data = data_head.concat(data.data);
	data = Papa.unparse(data);

	data = Papa.parse(data, {
		header: true
	});

	data.data = lodash.orderBy(data.data, ['data_processamento'], ['desc']);

	//console.log(data);

	var d0 = moment();
	var d1 = moment().businessAdd(1, 'days');
	var d2 = moment().businessAdd(2, 'days');
	var d3 = moment().businessAdd(3, 'days');

	var result = {
		pgs_cif: [0, 0, 0]
	}

	data.data.forEach(function(row){
		var cif = moment(row.cif, "DD/MM/YYYY");
		if( cif.isSame(d0, "day") ){
			result.pgs_cif[0] += Number(row.cartas);
		} else if ( cif.isSame(d1, "day") ){
			result.pgs_cif[1] += Number(row.cartas);
		} else if ( cif.isSame(d2, "day") ){
			result.pgs_cif[2] += Number(row.cartas);
		} else if ( cif.isSameOrAfter(d3, "day") ){
			result.pgs_cif[3] += Number(row.cartas);
		}
	});

	console.log(result);
});