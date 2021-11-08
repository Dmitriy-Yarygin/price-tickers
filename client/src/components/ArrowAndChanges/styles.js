import { makeStyles } from '@material-ui/core/styles'

import { TRANSITION_DELAY } from '../../constants'

const transition = `transform ${TRANSITION_DELAY}ms`

const useStyles = makeStyles((theme) => ({
  arrow: {
    transition,
  },
  changes: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'end',
    height: '100%',
  },
  changePercent: {
    transition,
    fontSize: '0.7em',
  },
  change: {
    transition,
    fontSize: '0.8em',
  },
  increased: { color: 'green' },
  decreased: { color: 'red' },
}))

export default useStyles
