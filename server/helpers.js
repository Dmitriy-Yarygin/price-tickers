'use strict'
const { TICKERS } = require('./costants')

function randomValue(min = 0, max = 1, precision = 0) {
  const random = Math.random() * (max - min) + min
  return random.toFixed(precision)
}

function utcDate() {
  const now = new Date()
  return new Date(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours(),
    now.getUTCMinutes(),
    now.getUTCSeconds(),
  )
}

function getQuotes(prevQuotes = []) {
  return TICKERS.map((ticker, i) => {
    let newQuote = {
      ticker,
      exchange: 'NASDAQ',
      price: randomValue(100, 300, 2),
      change: randomValue(0, 200, 2),
      change_percent: randomValue(0, 1, 2),
      dividend: randomValue(0, 1, 2),
      yield: randomValue(0, 2, 2),
      last_trade_time: utcDate(),
    }
    if (prevQuotes[i] && prevQuotes[i].price) {
      let change = newQuote.price - prevQuotes[i].price
      newQuote.change = change.toFixed(2)
      newQuote.change_percent = (change / prevQuotes[i].price).toFixed(2)
    }
    return newQuote
  })
}

module.exports = { getQuotes }
