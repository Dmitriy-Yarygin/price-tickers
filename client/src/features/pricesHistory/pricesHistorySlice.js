import { createSlice } from '@reduxjs/toolkit'

export const initialState = {}

export const HISTORY_LIMIT = 100

export const pricesHistorySlice = createSlice({
  name: 'pricesHistory',
  initialState,
  reducers: {
    update: (state, { payload }) => {
      payload.forEach(({ ticker, price, lastTradeTime }) => {
        if (state[ticker]) {
          state[ticker].push({ price, lastTradeTime })
          if (state[ticker].length >= HISTORY_LIMIT) {
            state[ticker] = state[ticker].slice(1, HISTORY_LIMIT + 1)
          }
        } else {
          state[ticker] = [{ price, lastTradeTime }]
        }
      })
    },
  },
})

export const { update } = pricesHistorySlice.actions

export const selectPricesHistory = ({ pricesHistory }) => pricesHistory

export const getPriceHistorySelector = (key) => ({ pricesHistory }) =>
  pricesHistory[key]

export default pricesHistorySlice.reducer
