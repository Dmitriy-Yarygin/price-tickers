import priceTickersReducer, { update } from './priceTickersSlice'
import { TICKERS } from '../../constants'

describe('priceTickers reducer', () => {
  const initialState = TICKERS.map((ticker) => ({ ticker }))

  it('should handle initial state', () => {
    expect(priceTickersReducer(undefined, { type: 'unknown' })).toEqual([])
  })

  it('should handle update', () => {
    const newTickers = [{ ticker: 'TESLA' }]
    const [{ ticker }] = priceTickersReducer(initialState, update(newTickers))
    expect(ticker).toEqual(newTickers[0].ticker)
  })
})
