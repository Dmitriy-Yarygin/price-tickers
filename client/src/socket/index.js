import { io } from 'socket.io-client'

import { update } from '../features/priceTickers/priceTickersSlice'
import { update as pricesHistoryUpdate } from '../features/pricesHistory/pricesHistorySlice'

const socketEndpoint = 'http://localhost:4000/'
const socket = io(socketEndpoint)

export function startTicker(dispatch, renewInterval) {
  socket.on('ticker', (tickers) => {
    dispatch(update(tickers))
    dispatch(
      pricesHistoryUpdate(
        tickers.map(({ ticker, price, last_trade_time: lastTradeTime }) => ({
          ticker,
          price: Number(price),
          lastTradeTime,
        })),
      ),
    )
  })
  socket.emit('start', renewInterval * 1000)
}

export function changeRenewInterval(renewInterval) {
  socket.emit('changeInterval', renewInterval * 1000)
}
