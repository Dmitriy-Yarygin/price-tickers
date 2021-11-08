'use strict'
const io = require('socket.io')
const { getQuotes } = require('./helpers')
const { FETCH_INTERVAL } = require('./costants')

function initSocketServer(server) {
  const cors = { origin: '*' }
  io(server, { cors }).on('connection', setListeners)
}

function setListeners(socket) {
  let timer
  let quotes = getQuotes()

  socket.on('start', (delay = FETCH_INTERVAL) => {
    socket.emit('ticker', quotes)
    timer = setInterval(() => {
      quotes = getQuotes(quotes)
      socket.emit('ticker', quotes)
    }, delay)
  })

  socket.on('changeInterval', (delay) => {
    clearInterval(timer)
    timer = setInterval(
      () => {
        quotes = getQuotes(quotes)
        socket.emit('ticker', quotes)
      },
      delay > 500 ? delay : 500,
    )
  })

  socket.on('disconnect', () => clearInterval(timer))
}
module.exports = initSocketServer
