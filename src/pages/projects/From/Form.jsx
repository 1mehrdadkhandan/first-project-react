import Joi from 'joi';
import React, { Component } from 'react'
import { FormMessage } from './element';
import { ToastContainer } from 'react-toastify';
import { Input } from '../../../components/Input/element';
import { Submition } from '../../../components/Submition';
import Validate from '../../../components/validate/Validate';
const info = {
    email: '',
    name: '',
    message: '',
    phoneNumber: ''
};
class FormInput extends Validate {
    schema = Joi.object({
        name: Joi.string().max(32).required(),
        message: Joi.string().min(3).required(),
        phoneNumber: Joi.number().min(10).required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    })
    state = {
        info,
        errorMessage: ''
    }
    handelChage = (e) => {
        let stateCopy = { ...this.state.info }
        console.log(stateCopy[e.target.id])
        stateCopy[e.target.id] = e.target.value
        console.log(stateCopy[e.target.id])
        this.setState({ info: stateCopy })
    }
    setValue = () => {
        this.setState({ info })
    }



    render() {
        return (
            <FormMessage them={this.props.them} onSubmit={(e) => {
                this.validateForm(e, 'send message SucssesFuly')
            }}>
                <Input
                    label='Email'
                    them={this.props.them}
                    type="email"
                    name='email'
                    value={this.state.info.email}
                    handelChage={this.handelChage}
                />
                <Input
                    them={this.props.them}
                    label='name'
                    type="text"
                    name='name'
                    value={this.state.info.name}
                    handelChage={this.handelChage}
                />
                <Input
                    them={this.props.them}
                    label='Message'
                    type="text"
                    name='message'
                    value={this.state.info.message}
                    handelChage={this.handelChage}
                />
                <Input
                    them={this.props.them}
                    label='Phone Number'
                    type="text"
                    name='phoneNumber'
                    value={this.state.info.phoneNumber}
                    handelChage={this.handelChage}
                />
                <Submition

                    them={this.props.them}
                    value='Send'
                    type='submit' />
                <ToastContainer />
            </FormMessage>
        );
    }
}

export default FormInput