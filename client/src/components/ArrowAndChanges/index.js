import { useEffect, useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import useStyles from './styles'
import { TRANSITION_DELAY } from '../../constants'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'

const animationTimeout = TRANSITION_DELAY

const ArrowAndChanges = (props) => {
  const classes = useStyles()
  const [animate, setAnimate] = useState()
  const [tickerChanges, setTickerChanges] = useState({})
  const { change, changePercent } = tickerChanges

  useEffect(() => {
    if (change !== props.change) {
      if (change === undefined) {
        setTickerChanges(props)
      } else if (!animate) {
        setAnimate(true)
      } else {
        setTimeout(() => {
          setTickerChanges(props)
          setAnimate(false)
        }, animationTimeout)
      }
    }
  }, [animate, props, change])

  const isIncreased = Number(change) > 0
  const isDecreased = Number(change) < 0
  const commonClasses = {
    [classes.increased]: isIncreased,
    [classes.decreased]: isDecreased,
  }
  const animatedNumbersStyle = animate ? { transform: 'rotateX(90deg)' } : {}
  const animatedArrowStyle =
    (isIncreased && { transform: 'rotate(-45deg)' }) ||
    (isDecreased && { transform: 'rotate(45deg)' }) ||
    {}

  return (
    <>
      <ArrowRightAltIcon
        style={animatedArrowStyle}
        className={classNames(classes.arrow, commonClasses)}
      />
      <div className={classNames(classes.changes, commonClasses)}>
        {changePercent && (
          <span style={animatedNumbersStyle} className={classes.changePercent}>
            {changePercent} %
          </span>
        )}
        <span style={animatedNumbersStyle} className={classes.change}>
          {change}
        </span>
      </div>
    </>
  )
}

ArrowAndChanges.propTypes = {
  change: PropTypes.string.isRequired,
  changePercent: PropTypes.string.isRequired,
}

export default ArrowAndChanges
