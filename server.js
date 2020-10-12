//////////////////////////////////////
// Requirements
//////////////////////////////////////
const express = require('express');
const path = require('path');

//////////////////////////////////////
// Initialization
//////////////////////////////////////
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

//////////////////////////////////////
// EXPRESS
//////////////////////////////////////
// Client Use
app.use(express.static(__dirname + '/Client'));

// ROUTES
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'Client', 'index.html'));    
});

//////////////////////////////////////
// SOCKET.IO
//////////////////////////////////////
let connectedUsers = 0;
io.on("connection", (socket) => {
    connectedUsers++;
    io.emit("connectedUsers", {number: connectedUsers});

    socket.on("disconnect", () => {
        connectedUsers--;
        io.emit("connectedUsers", {number: connectedUsers});
    });
});

//////////////////////////////////////
// LISTEN
//////////////////////////////////////
server.listen((process.env.PORT), function(){
    console.log("Server Running on Port: " + (process.env.PORT));
})