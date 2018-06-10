const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message');

const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname,'..','public');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', generateMessage('Admin','Wellcome to chat app'));

    socket.broadcast.emit('newMessage', generateMessage('Admin','New user joined'));

    socket.on('createMessage', (message,callback) => {
        console.log('createMessage',message);
        socket.broadcast.emit('newMessage',{
            from: message.from,
            text: message.text,
            createdAt: new Date()
        });
        callback();
    });

    socket.on('createLocationMessage', (coords, callback) => {
        console.log(coords);
        io.emit('newLocationMessage', generateLocationMessage('User',coords.latitude, coords.longitude));
        callback();
    });

    socket.on('disconnect', (socket) => {
        console.log('User was disconnected');
    });
});


server.listen(port,() => {
    console.log(`Server started at port ${port}`);
});
