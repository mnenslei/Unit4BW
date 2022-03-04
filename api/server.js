const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const router = require('./router')

//Server

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())

//Routes
server.use('/api', router);

//Error handling

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    customError: 'ERROR YOU ARE WRONG!',
    message: err.message,
    stack: err.stack
  });
});

module.exports = server
