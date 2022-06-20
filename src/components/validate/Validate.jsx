import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Validate extends Component {

    notify = (er) => {
        console.log(er)
        er.map(item => {
            toast.error(
                `${item.message}`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark'
            });
        })
    }

    validateForm = (e, message) => {
        e.preventDefault()
        const { error, value } = this.schema.validate(this.state.info, { abortEarly: false })

        if (error) {
            console.log(error.datails)
            console.log(error.datails)
            this.notify(error.details, 'error')

            this.setState({ errorMessage: error })
        } else {
            toast.success(
                `${message}`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark'
            });
            console.log(value)
            this.setValue()
        }
    }

}

export default Validate;