import { makeStyles } from '@material-ui/core/styles'
import { TRANSITION_DELAY } from '../../constants'

const useStyles = makeStyles((theme) => ({
  priceTickerRow: {
    borderColor: theme.palette.primary.dark,
    borderTop: '2px solid',
  },

  name: {
    fontWeight: 700,
  },
  price: {
    fontWeight: 600,
    transition: `transform ${TRANSITION_DELAY}ms`,
  },
  changes: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100%',
  },
  increased: { color: 'green' },
  decreased: { color: 'red' },
}))

export default useStyles
