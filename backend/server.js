const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const connection = require('./config');

// our localhost port
const port = 4001

const app = express()

// our server instance
const server = http.createServer(app)

// This creates our socket using the instance of the server
const io = socketIO(server)

// This is what the socket.io syntax is like, we will work this later
io.on('connection', socket => {
  console.log('New client connected');
  socket.on('change color', (color) => {
    console.log('Color Changed to: ', color);
    io.sockets.emit('change color', color);
  });

  socket.on('online user', (user) => {
    console.log('online user: ', user);
    socket.userId = user;
    if(user !== undefined){
      const status = 'online';
      connection.query('UPDATE users SET status = ? WHERE id = ?', [status, user], function(err, result){
        if(err) throw err;
        connection.query('SELECT * from users', function(err,rows){
          if(err) throw err;
          console.log('rows: ',rows);
          io.sockets.emit('reload users', rows);
        })
      })
    }
  });
  
  socket.on('disconnect', () => {
    console.log('user disconnected: ', socket.userId);
    if(socket.userId !== undefined){
      const status = 'offline';
      connection.query('UPDATE users SET status = ? WHERE id = ?', [status, socket.userId], function(err, result){
        if(err) throw err;
        connection.query('SELECT * from users', function(err,rows){
          if(err) throw err;
          console.log('rows: ',rows);
          io.sockets.emit('reload users', rows);
        })
      })
    }
  })
})

server.listen(port, () => console.log(`Listening on port ${port}`))