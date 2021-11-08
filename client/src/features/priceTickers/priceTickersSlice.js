import { createSlice } from '@reduxjs/toolkit'

export const initialState = []

export const priceTickersSlice = createSlice({
  name: 'priceTickers',
  initialState,
  reducers: {
    update: (state, { payload }) => payload,
  },
})

export const { update } = priceTickersSlice.actions

export const selectPriceTickers = ({ priceTickers }) => priceTickers

export default priceTickersSlice.reducer
