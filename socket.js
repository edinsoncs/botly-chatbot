'use strict'

var logic_message = require('./logic/message');

module.exports = (io) => {

	io.on('connection', (socket) => {
		
		socket.emit('entry', {
			data: 'Bienvenido usuario: ' + socket.id,
			message: 'Hola mi nombre es BOTLY, y te voy a ayudar en lo que pueda ;), cual es tu nombre?'
		});

		socket.on('message_entry', (data) => {
			var log = logic_message(data);
			socket.emit('message_send', {
				data: '',
				message: log
			})
			console.log(data);
		});


		console.log('se conecto un usuario');
	});

}