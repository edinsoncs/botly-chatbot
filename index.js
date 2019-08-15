const express = require('express');
const app = express();
const path = require('path');
const bodyParser  = require('body-parser');

let server = require('http').createServer(app);
let io = require('socket.io')(server);
var socket_conect = require('./socket');

let p = require('./config/port');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.get('/', (req, res, next) => {
	res.render('index');
});


socket_conect(io);
server.listen(p.show(), () => {
	console.log('Server Run . Iniciado');
});
