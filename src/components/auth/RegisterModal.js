import react, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button, Backdrop } from '@material-ui/core';
import {register} from '../actions/authActions'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const RegisterModal = () => {

  const [open, setOpen] = useState(false)
  const [msg, setMsg] = useState(null)
  const [state, setState] = useState({
    name: "",
    email: "",
    password : ""
  })

  const classes = useStyles();

  const toggle = () => {
    this.setOpen(!open)
  }

  const onInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const onClose = () => {
    this.setState({
      open: false
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const newUser = {
      name : state.name,
      email: state.email, 
      password: state.password
    }
    this.props.register(newUser)
    this.toggle()
  }
  return (
    <div>
      <button
        type="button" onClick={handleOpen}
      >
        Register
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={this.state.modal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Register </h2>
            <div id="transition-modal-description">
              <label htmlFor="name"></label>
              <input type="text" name="name" id="name" placeholder='name' onChange={onInputChange}/>

              <label htmlFor="email"></label>
              <input type="text" name="email" id="email" placeholder='email' onChange={onInputChange}/>

              <label htmlFor="password"></label>
              <input type="text" name="password" id="password" placeholder='password' onChange={onInputChange}/>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  )

}
const mapStateToProps = state = ({
  isAuthenticated: state.isAuthenticated,
  error: state.error
})

export default connect(mapStateToProps, {register})(RegisterModal)