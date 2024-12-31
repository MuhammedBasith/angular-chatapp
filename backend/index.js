import { createServer } from 'http';
import { Server } from 'socket.io';

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Socket.io server is running\n');
});

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.emit('message', 'Welcome to the Socket.io server!');

    socket.on('message', (msg) => {
        console.log(`Received: ${msg}`);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(4000, () => {
    console.log('Server is listening on port 4000');
});
