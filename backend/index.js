import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 4000 }, () => {
    console.log("Server is listening on port 4000");
});


wss.on("connection", (ws) => {
    console.log("connected");

    ws.on("message", (message) => {
        console.log(`Received: ${message}`);
    });

    ws.send("Welcome to the WebSocket server!");
});

