var express = require('express')
const { Server } = require('socket.io');
var cors = require('cors')
const { createServer } = require('http')
const app = express();
app.use(cors());

const server = createServer(app);
const io = new Server(server, {cors: {origin: 'http://192.168.5.58:3000',   methods: ['GET', 'POST'],   credentials: true}});

io.on('connection', (socket) => {
  console.log('A user connected');
  
  // Handle chat messages
  socket.on('chat message', (message) => {
    io.emit('chat message', message); // Broadcast the message to all connected clients
  });

    // Handle chat messages
  socket.on('end the round', (message) => {
    io.emit('end the round', message); // Broadcast the message to all connected clients
  });

    // Handle chat messages
  socket.on('laugh track', (message) => {
    io.emit('laugh track', message); // Broadcast the message to all connected clients
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(3001, () => {
  console.log('WebSocket server listening on port 3001');
});