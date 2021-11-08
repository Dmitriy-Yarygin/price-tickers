import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IconButton from '@material-ui/core/IconButton'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial'
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline'

import {
  remove,
  update,
  selectDisplayList,
} from '../../features/displayList/displayListSlice'
import { getPriceHistorySelector } from '../../features/pricesHistory/pricesHistorySlice'
import ArrowAndChanges from '../ArrowAndChanges'
import Chart from '../Chart'
import useStyles from './styles'

function PriceTickerRow({ row }) {
  const [open, setOpen] = useState(row.ticker === 'AAPL')
  const classes = useStyles()
  const dispatch = useDispatch()
  const displayList = useSelector(selectDisplayList)
  const priceHistory = useSelector(getPriceHistorySelector(row.ticker))
  const isTickerInList = displayList.includes(row.ticker)

  const time = new Date(row.last_trade_time).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  })

  const handleExpandBtnClick = () => setOpen(!open)
  const changeDisplayList = () =>
    dispatch(isTickerInList ? remove(row.ticker) : update(row.ticker))

  return (
    <>
      <TableRow className={classes.priceTickerRow}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={handleExpandBtnClick}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell className={classes.name} component="th" scope="row">
          {row.ticker}
        </TableCell>
        <TableCell>
          <IconButton
            aria-label={
              isTickerInList
                ? `Remove the ticker from the top display list`
                : `Add the ticker to the top display list`
            }
            size="small"
            onClick={changeDisplayList}
          >
            {isTickerInList ? (
              <RemoveCircleOutlineIcon />
            ) : (
              <FolderSpecialIcon />
            )}
          </IconButton>
        </TableCell>
        <TableCell align="right">{row.exchange}</TableCell>
        <TableCell className={classes.price} align="right">
          {row.price}
        </TableCell>
        <TableCell align="justify" padding="none">
          <div className={classes.changes}>
            <ArrowAndChanges
              change={row.change}
              changePercent={row.change_percent}
            />
          </div>
        </TableCell>
        <TableCell align="right">{row.dividend}</TableCell>
        <TableCell align="right">{row.yield}</TableCell>
        <TableCell align="right">{time}</TableCell>
      </TableRow>

      {open && (
        <TableRow>
          <TableCell colSpan={9} padding="none">
            <Chart priceHistory={priceHistory} />
          </TableCell>
        </TableRow>
      )}
    </>
  )
}

export default PriceTickerRow
