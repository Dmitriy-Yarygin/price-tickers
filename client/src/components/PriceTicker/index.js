import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'

import { remove } from '../../features/displayList/displayListSlice'
import ArrowAndChanges from '../ArrowAndChanges'
import useStyles from './styles'
import { TRANSITION_DELAY } from '../../constants'
import CloseIcon from '@material-ui/icons/Close'

const PriceTicker = ({ ticker, ...otherProps }) => {
  const classes = useStyles()
  const [animate, setAnimate] = useState()
  const [tickerChanges, setTickerChanges] = useState({})
  const { price, change } = tickerChanges
  const dispatch = useDispatch()

  useEffect(() => {
    if (price !== otherProps.price) {
      if (price === undefined) {
        setTickerChanges(otherProps)
      } else if (!animate) {
        setAnimate(true)
      } else {
        setTimeout(() => {
          setTickerChanges(otherProps)
          setAnimate(false)
        }, TRANSITION_DELAY)
      }
    }
  }, [animate, otherProps, price])

  const removeTicker = () => dispatch(remove(ticker))

  return (
    <div className={classes.root}>
      <div className={classes.nameAndPrice}>
        <span className={classes.name}>{ticker}</span>
        <span
          style={animate ? { transform: 'rotateX(90deg)' } : {}}
          className={classNames(classes.price, {
            [classes.increased]: Number(change) > 0,
            [classes.decreased]: Number(change) < 0,
          })}
        >
          {price}
        </span>
      </div>
      <ArrowAndChanges
        change={otherProps.change}
        changePercent={otherProps.change_percent}
      />
      <button className={classes.closeBtn} type="button" onClick={removeTicker}>
        <CloseIcon />
      </button>
    </div>
  )
}
export default PriceTicker
