const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const morgan = require('morgan')
const port = process.env.PORT || 5000;
const route = require('./routes')
const db = require('./config/db')
const upload = require('express-fileupload')
var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' }));

var cors = require('cors')
db.connect()
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(morgan('combined'))
app.use(upload())
app.use(cors())
// OK

io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    // const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    // socket.join(user.room);

    socket.emit('message', { user: 'admin', text: `, welcome to room ` });
    // socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    // io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
    }
  })
});

route(app)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})