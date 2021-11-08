'use strict'
const express = require('express')
const http = require('http')
const cors = require('cors')
const initSocketServer = require('./sockets')

const PORT = process.env.PORT || 4000

const app = express()
app.use(cors())
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

const server = http.createServer(app)
initSocketServer(server)

server.listen(PORT, () => {
  console.log(`Streaming service is running on http://localhost:${PORT}`)
})
