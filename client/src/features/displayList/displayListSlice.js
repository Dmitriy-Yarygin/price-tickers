import { createSlice } from '@reduxjs/toolkit'
import { TICKERS } from '../../constants'

export const displayListSlice = createSlice({
  name: 'displayList',
  initialState: TICKERS,
  reducers: {
    update: (state, action) => [...state, action.payload],
    remove: (state, action) =>
      state.filter((ticker) => ticker !== action.payload),
  },
})

export const { update, remove } = displayListSlice.actions

export const selectDisplayList = ({ displayList }) => displayList

export default displayListSlice.reducer
