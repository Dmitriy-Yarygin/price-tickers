import { useSelector } from 'react-redux'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress'

import { selectPriceTickers } from '../../features/priceTickers/priceTickersSlice'
import PriceTickerRow from '../PriceTickerRow'
import useStyles from './styles'

function PriceTickersTable() {
  const classes = useStyles()
  const priceTickers = useSelector(selectPriceTickers)

  return (
    <TableContainer className={classes.wrapper} component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align="center" variant="footer">
              {!priceTickers.length && (
                <CircularProgress className={classes.progress} />
              )}
            </TableCell>
            <TableCell>Ticker</TableCell>
            <TableCell align="left">Track</TableCell>
            <TableCell align="right">Exchange</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Change</TableCell>
            <TableCell align="right">Dividend</TableCell>
            <TableCell align="right">Yield</TableCell>
            <TableCell align="right">Last trade time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {priceTickers.map((row) => (
            <PriceTickerRow key={row.ticker} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default PriceTickersTable
