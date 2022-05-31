const path = require('path');
const http = require('http');
var express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '/public/');
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);
app.use(express.static('/public'));
app.get('/public/', function(_req){
  ;

});
server.listen(port, ()=> {
    console.log(`Server is up on port ${port}.`)
io.on('connection', (socket) => {
        console.log('A user just connected.');
        socket.on('disconnect', () => {
            console.log('A user has disconnected.');
        })
    });
});