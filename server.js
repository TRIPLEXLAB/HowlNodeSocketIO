/**
 * Created by myeongsic on 2017. 6. 26..
 */
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    socket.on('server', function(msg){
        io.emit('client', msg);
    });
});



http.listen(3000, function(){
    console.log('listening on *:3000');
});