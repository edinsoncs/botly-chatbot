'use strict'
var socket = io('http://localhost:3000');


let sock = {

	theme: function(message, type) {

		//Preguntamos si viene desde el backend NODEJS
		if(type) {

			var article = document.createElement('article');
	 		article.setAttribute('class', 'list listed');
	 		article.innerHTML = '<figure class="list__Image"><img src="/img/robot.jpg" alt="" width="30"></figure><div class="list__Details"><p class="title">'+ message +'</p></div>'
		} 

		//El usuario escribira un mensaje con su tema propio
		else {

			var article = document.createElement('article');
	 		article.setAttribute('class', 'list__Yo listed');

	 		article.innerHTML = '<p class="title">'+ message +'</p>'

		}

	 	return article;

	},

	connect: function() {
		socket.on('entry', (data) => {
			var item = sock.theme(data.message, 1);
			getID('chat__Append').appendChild(item);
		});

		socket.on('message_send', (data) => {
			var item = sock.theme(data.message, 1);
			getID('chat__Append').appendChild(item);
		})
	},

	appendView: function(txt) {

		var item = this.theme(txt);
		getID('chat__Append').appendChild(item);
		return true;

	} 

}

sock.connect();

var is_item = 0;

let getID = (e) =>{
	return document.getElementById(e);
}

let activeChat = () => {
	var box = getID('c');
	if(is_item) {
		is_item = 0;
		box.style.opacity = 0;
	} else {
		box.style.opacity = 1;
		is_item = 1;
	}
	
}

let form = (event) => {
	event.preventDefault();
	var m = getID('message').value;

	if(sock.appendView(m)){

		getID('message').value = '';

	}
	
	
	socket.emit('message_entry', {
		txt: m
	});

}