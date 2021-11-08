import { render, screen } from '@testing-library/react'
import App from './App'

import { store } from './app/store'
import { Provider } from 'react-redux'

test('renders header', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  )
  const header = screen.getByText(/price tickers/i)
  expect(header).toBeInTheDocument()
})
