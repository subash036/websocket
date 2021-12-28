const socket = require('socket.io-client')('http://127.0.0.1:3000', {
    reconnection: true,
    reconnectionDelay: 10000
});

socket.on('connect', (data) => {
    console.log('Connected to Socket');
});

socket.on('get message', (data) => {
    console.log("-----------------received event data from the socket io server\n" + data);
});
socket.emit('private message', "This is private message");
//either 'io server disconnect' or 'io client disconnect'
socket.on('disconnect', (reason) => {
    console.log("client disconnected");
    if (reason === 'io server disconnect') {
        // the disconnection was initiated by the server, you need to reconnect manually
        console.log("server disconnected the client, trying to reconnect");
        socket.connect();
    } else {
        console.log("trying to reconnect again with server");
    }
    // else the socket will automatically try to reconnect
});

socket.on('error', (error) => {
    console.log(error);
});