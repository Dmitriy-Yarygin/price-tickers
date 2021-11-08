import Display from './components/Display'
import Settings from './components/Settings'
import PriceTickersTable from './components/PriceTickersTable'
import useStyles from './AppStyles'

function App() {
  const classes = useStyles()

  return (
    <div className={classes.app}>
      <div className={classes.wrapper}>
        <h1 className={classes.header}>
          Display price tickers data on the UI in realtime
        </h1>
        <Display />
        <PriceTickersTable />
        <Settings />
      </div>
    </div>
  )
}

export default App
