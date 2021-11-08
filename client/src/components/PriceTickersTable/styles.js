import { makeStyles } from '@material-ui/core/styles'

import { TRANSITION_DELAY } from '../../constants'

const transition = `transform ${TRANSITION_DELAY}ms`

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    padding: '0 1em',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      padding: '0 0.5em',
    },
  },
  progress: { color: theme.palette.warning.dark },
  name: { fontWeight: 700 },
  price: {
    fontWeight: 600,
    transition,
  },
  arrow: { transition },
  changes: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'end',
    fontSize: '0.7em',
    height: '100%',
  },
  changePercent: { transition },
  change: { transition },
  increased: { color: 'green' },
  decreased: { color: 'red' },
}))

export default useStyles
