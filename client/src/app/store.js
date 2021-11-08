import { configureStore } from '@reduxjs/toolkit'
import displayList from '../features/displayList/displayListSlice'
import priceTickers from '../features/priceTickers/priceTickersSlice'
import pricesHistory from '../features/pricesHistory/pricesHistorySlice'

function logger(store) {
  return (next) => (action) => {
    console.log('Middleware triggered:', action)
    next(action)
  }
}

export const store = configureStore({
  reducer: {
    displayList,
    priceTickers,
    pricesHistory,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
