import { useRef, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Fade from '@material-ui/core/Fade'

import { startTicker, changeRenewInterval } from '../../socket'
import useStyles from './styles'
import SettingsIcon from '@material-ui/icons//Settings'

function Settings() {
  const isCalledOnceRef = useRef(false)
  const classes = useStyles()
  const dispatch = useDispatch()

  const [anchorEl, setAnchorEl] = useState()
  const [renewInterval, setRenewInterval] = useState(5)

  useEffect(() => {
    if (dispatch && renewInterval && !isCalledOnceRef.current) {
      startTicker(dispatch, renewInterval)
      isCalledOnceRef.current = true
    }
  }, [dispatch, renewInterval])

  const handleRenewIntervalChange = ({ target: { value } }) => {
    changeRenewInterval(value)
    setRenewInterval(value)
  }

  const handleMenuOpenClick = ({ currentTarget }) => setAnchorEl(currentTarget)
  const handleMenuClose = () => setAnchorEl(null)

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="settings-menu"
        aria-haspopup="true"
        onClick={handleMenuOpenClick}
        className={classes.menuBtn}
      >
        <SettingsIcon className={classes.menuBtnIcon} />
      </IconButton>
      <Menu
        id="settings-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        TransitionComponent={Fade}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>
          <FormControl>
            <OutlinedInput
              id="renew-interval-id"
              type="number"
              value={renewInterval}
              onChange={handleRenewIntervalChange}
              endAdornment={
                <InputAdornment position="end">seconds</InputAdornment>
              }
              aria-describedby="renew-interval-helper-text"
              inputProps={{ 'aria-label': 'renew interval', min: 0, max: 60 }}
              classes={{ input: classes.renewIntervalInput }}
            />
            <FormHelperText id="renew-interval-helper-text">
              Renew interval for tickers
            </FormHelperText>
          </FormControl>
        </MenuItem>
      </Menu>
    </div>
  )
}

export default Settings
