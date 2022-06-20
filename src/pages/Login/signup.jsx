import { Link, Navigate } from 'react-router-dom';
import { BackDrop } from '../../components/BackDrop/BackDrop'
import { Submition } from '../../components/Submition';
import { Contuiner, LinkRoute, Title, Wapper } from './Elements';
import Form from './Form';
import Joi from 'joi'
import { ToastContainer } from 'react-toastify';
const info = {
  password: '',
  username: '',
  email: '',
  phonenumber: '',
}
class Signup extends Form {
  state = {
    showB: 'true',
    changeRouter: false,
    info,
    error: {}
 }
 schema = Joi.object({
  username: Joi.string().min(6).required().pattern(new RegExp('^[a-z0-9]{3,30}$')).trim(),
  password: Joi.string().min(8).required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).label('pattern in not valid'),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  phonenumber: Joi.number().min(10).required()
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
              <Title them={this.props.them}> SIGN UP </Title>
              <ToastContainer />

              <form onSubmit={(e) => {
                this.validateForm(e, 'SignUp sucssesfuly')
              }}>
                {this.userName()}
                {this.PassWord()}
                {this.emailE()}
                {this.phoneNumber()}
                <Submition

                  them={this.props.them}
                  value='Sign up'
                  type='submit' />
              </form>
              <LinkRoute them={this.props.them}> Do you have an account? <Link to="/signin"> Login </Link> </LinkRoute>
            </Wapper>
          </Contuiner>

        </BackDrop>

      </>
    )
  }
}

export default Signup