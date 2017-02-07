var http = require('http');
var io   = require('socket.io');

var app = http.createServer();
app.listen(3000);

console.log('Server running at http://127.0.0.1:3000/');

// Socket.IO server
var io = io.listen(app);
var isconnect = false;

io.sockets.on('connection', function (socket) {
	setTimeout(function(){
		socket.emit('wechatPayReceived', {"id":"1222","sum":100.05,"status":1,"tradeNumber":"asasasa","tradeTime":"21212121","storeName":"测试店铺"});
	},3000);
	socket.on('disconnect', function () {
	});
});
