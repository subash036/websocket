const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
  console.log("Client connected!!!");
  socket.on('private message', msg => {
    console.log("🚀 ~ file: index.js ~ line 12 ~ io.on ~ msg", msg);
    socket.emit('get message', 'Message from server!!!' + msg);
  });
  
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
