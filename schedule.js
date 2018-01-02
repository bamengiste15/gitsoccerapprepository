var express = require('express');
var app = express();
server= require('http').createServer(app),
io= require('socket.io').listen(server);
server.listen(3000);
console.log("Listening on port 3000")
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});