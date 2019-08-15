'use strict';

var Regex = require("regex");
var number = 0;

var obj_users = {};


module.exports = (data) => {

	var message = data.txt;

	console.log('esto es:',data);
	if(number == 0) {


		if(message.length <= 10) {

			number = 1;

			return 'Hola' + message + ' , bienvenido me brindarias tu celular?';

			

		} else {
			number = 0;
			return 'Hola '+ message+' es un nombre invalido :(';
		}

	}


	if(number == 1) {

		if(Number(message)) {
			number = 2;
			return 'Tu celular: ' + message + ' , Es correcto! tu Email?';
		} else {
			number = 1;
			return 'Es invalido!!! :(';
		}

	}


}