import { makeStyles } from '@material-ui/core/styles'

import { TRANSITION_DELAY } from '../../constants'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: theme.palette.primary.dark,
    border: '2px solid',
    borderRadius: '0.75em 0 0.75em 0.75em',
    margin: '10px',
    padding: '0 20px',
    height: '50px',
    width: '120px',
    background: 'white',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      padding: 0,
      height: '110px',
      width: '70px',
    },
  },
  nameAndPrice: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
  },
  name: {
    fontWeight: 700,
  },
  price: {
    fontWeight: 600,
    transition: `transform ${TRANSITION_DELAY}ms`,
  },
  increased: { color: 'green' },
  decreased: { color: 'red' },

  closeBtn: {
    position: 'absolute',
    right: '-0.45em',
    top: '-0.3em',
    fontFamily: 'monospace',
    border: 'none',
    borderRadius: '1em',
    background: 'none',
    cursor: 'pointer',
    '&:hover': {
      background: '#d3d3d35e',
    },
    '&>svg': { fontSize: 10 },
  },
}))

export default useStyles
