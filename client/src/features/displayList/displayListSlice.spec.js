import displayListReducer, { update, remove } from './displayListSlice'
import { TICKERS } from '../../constants'

describe('displayList reducer', () => {
  it('should handle initial state', () => {
    expect(displayListReducer(undefined, { type: 'unknown' })).toEqual(TICKERS)
  })

  it('should handle update', () => {
    const newName = 'NEWONE'
    const actual = displayListReducer(TICKERS, update(newName))
    expect(actual).toEqual([...TICKERS, newName])
  })

  it('should handle remove', () => {
    const [delName] = TICKERS
    let actual = displayListReducer(TICKERS, remove(delName))
    expect(actual).toEqual(TICKERS.slice(1))
  })

  it('should not remove any if ticker absent in state', () => {
    let actual = displayListReducer(TICKERS, remove('NotIn'))
    expect(actual).toEqual(TICKERS)
  })
})
