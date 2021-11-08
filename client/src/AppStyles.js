import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  app: {
    minHeight: '100vh',
    height: '100%',
    background: theme.palette.success.light,
  },
  wrapper: {
    maxWidth: '1200px',
    margin: '0 1em',
    [theme.breakpoints.up('lg')]: {
      margin: 'auto',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '0 5px',
    },
  },
  header: {
    margin: 0,
    padding: 20,
    textAlign: 'center',
    color: theme.palette.primary.dark,
    [theme.breakpoints.down(800)]: {
      fontSize: 22,
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'left',
      paddingRight: 50,
    },
  },
}))

export default useStyles
