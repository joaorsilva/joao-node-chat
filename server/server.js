const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname,'..','public');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('createMessage', (message) => {
        console.log('createMessage',message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text
        });
    });

    socket.on('disconnect', (socket) => {
        console.log('User was disconnected');
    });
});


server.listen(port,() => {
    console.log(`Server started at port ${port}`);
});
