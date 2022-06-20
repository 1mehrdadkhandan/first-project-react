import React from 'react'
import { Contuiner, LinkRoute, Title, Wapper } from './Elements'
import { ToastContainer } from 'react-toastify';
import { Submition } from '../../components/Submition';
import { Link, Navigate } from 'react-router-dom';
import { BackDrop } from '../../components/BackDrop/BackDrop'
import Joi from 'joi'
import Form from './Form';
const info = {
  password: '',
  username: '',
}
class Signin extends Form {
  state = {
    showB: 'true',
    changeRouter: false,
    info,
    error: {}
  }
  schema = Joi.object({
    username: Joi.string().min(6).required().pattern(new RegExp('^[a-z0-9]{3,30}$')).trim(),
    password: Joi.string().min(8).required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

  })

  ChangeRoute = () => {

    this.setState({ changeRouter: true })
  }
    setValue = () => {
    this.setState({info})
  }
  render() {

    return (
      <>
        {this.state.changeRouter ? <Navigate to='/' replace={true} /> : null}
        <BackDrop onClick={this.ChangeRoute} show={this.state.showB}>

          <Contuiner onClick={(e) => e.stopPropagation()} them={this.props.them}>
            <Wapper>
              <Title them={this.props.them}> SIGN In </Title>
              <ToastContainer />

              <form onSubmit={(e) => {
                this.validateForm(e, 'SignUp sucssesfuly')
              }}>
                {this.userName()}
                {this.PassWord()}
                <Submition

                  them={this.props.them}
                  value='Sign In'
                  type='submit' />
              </form>
              <LinkRoute them={this.props.them}> Do you have an account? <Link to="/signup"> Register </Link> </LinkRoute>
            </Wapper>
          </Contuiner>
        </BackDrop >

      </>
    )
  }
}

export default Signin