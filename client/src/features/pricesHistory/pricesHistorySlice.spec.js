import priceTickersReducer, { update } from './pricesHistorySlice'
import { TICKERS } from '../../constants'
import { HISTORY_LIMIT } from './pricesHistorySlice'

describe('pricesHistory reducer', () => {
  it('should handle initial state', () => {
    expect(priceTickersReducer(undefined, { type: 'unknown' })).toEqual({})
  })

  const price = 1234
  const lastTradeTime = '12:34'
  const newTickers1 = TICKERS.map((ticker) => ({
    ticker,
    price,
    lastTradeTime,
  }))
  const stateVariant = TICKERS.reduce(
    (acc, ticker) => ({
      ...acc,
      [ticker]: [{ price, lastTradeTime }],
    }),
    {},
  )

  it('should handle first update (while state object has not keys)', () => {
    const actual = priceTickersReducer({}, update(newTickers1))
    expect(actual).toEqual(stateVariant)
  })

  it('should handle update existing keys', () => {
    const [ticker] = Object.keys(stateVariant)
    const price = 1234
    const actual = priceTickersReducer(
      stateVariant,
      update([{ ticker, price, lastTradeTime }]),
    )
    expect(actual[ticker]).toEqual([
      ...stateVariant[ticker],
      { price, lastTradeTime },
    ])
  })

  it('should handle update and do not exceed the limit', () => {
    const [key] = TICKERS
    const initialState = {
      [key]: new Array(HISTORY_LIMIT).fill({ price, lastTradeTime }),
    }
    const newTicker = { ticker: key, price: 101, lastTradeTime: '01:01' }
    const actual = priceTickersReducer(initialState, update([newTicker]))
    expect(actual[key].length).toEqual(HISTORY_LIMIT)
    expect(actual[key][HISTORY_LIMIT - 1]).toEqual({
      price: 101,
      lastTradeTime: '01:01',
    })
  })
})
