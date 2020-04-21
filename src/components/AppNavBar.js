import react, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import RegisterModal from './auth/RegisterModal'
import { AppBar, Toolbar, IconButton, MenuIcon, Typography, MenuItem } from '@material-ui/core';

const AppNavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Leet Code Admin
        </Typography>
        <MenuItem> <RegisterModal /></MenuItem>
        <MenuItem> <RegisterModal /></MenuItem>
        <MenuItem> <RegisterModal /></MenuItem>
      </Toolbar>
    </AppBar>
  )
}


const mapStateToProps = state = ({
  isAuthenticated: state.isAuthenticated,
  error: state.error
})

export default connect(mapStateToProps, null)(AppNavBar)