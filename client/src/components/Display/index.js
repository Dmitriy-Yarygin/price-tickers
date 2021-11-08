import { useSelector } from 'react-redux'

import { selectDisplayList } from '../../features/displayList/displayListSlice'
import { selectPriceTickers } from '../../features/priceTickers/priceTickersSlice'
import PriceTicker from '../PriceTicker'
import useStyles from './styles'

function TickersDisplay() {
  const classes = useStyles()
  const priceTickers = useSelector(selectPriceTickers)
  const displayList = useSelector(selectDisplayList)

  return (
    <div className={classes.priceTickersContainer}>
      {priceTickers
        .filter(({ ticker }) => displayList.includes(ticker))
        .map((ticker) => (
          <PriceTicker key={ticker.ticker} {...ticker} />
        ))}
    </div>
  )
}

export default TickersDisplay
