import { Input } from "../../../components/Input/element";
import Joi from 'joi'
import Validate from '../../../components/validate/Validate'
class Form extends Validate {

    createObjSchema = (e) => {
        // get object schema
        const obj = this.schema._ids._byKey.entries()
        const newSchema = {}
        // create new object
        for (const item of obj) {
            newSchema[item[0]] = item[1].schema
        }
        //  create schema for one input
        const createSchema = Joi.object({ [e]: newSchema[e] })
        // return 
        return createSchema
    }
    validate = (e) => {
        // console.log(e.id)
        const newSchema = this.createObjSchema(e.target.id)
        const objValue = { [e.target.id]: e.target.value }
        const { error, value } = newSchema.validate(objValue)
        const copyState = { ...this.state.error }
        copyState[e.target.id] = error

        if (e.type === 'blur') {
            this.setState({ error: copyState })
        }
        if (!error) {
            this.setState({ error: copyState })
        }

    }
    handelChage = (e) => {
        this.validate(e)
        const copyState = { ...this.state.info }
        copyState[e.target.id] = e.target.value
        this.setState({ info: copyState })
    }
    PassWord = () => {
        return (
            <Input
                error={this.state.error.password}
                them={this.props.them}
                type='password'
                name="password"
                value={this.state.info.password}
                handelChage={this.handelChage}
                label='Password'
            />
        )
    }
    userName = () => {
        return (
            <Input
                error={this.state.error.username}
                them={this.props.them}
                type='text'
                name="username"
                value={this.state.info.username}
                handelChage={this.handelChage}
                label='Username'
            />
        )
    }
    emailE = () => {
        return (
            <Input
                error={this.state.error.email}
                them={this.props.them}
                type='text'
                name="email"
                value={this.state.info.email}
                handelChage={this.handelChage}
                label='Email'
            />
        )
    }
    phoneNumber = () => {
        return (
            <Input

                error={this.state.error.phonenumber}
                them={this.props.them}
                type='text'
                name="phonenumber"
                value={this.state.info.phonenumber}
                handelChage={this.handelChage}
                label='Phone Number'
            />
        )
    }
    submition = () => {

    }


}

export default Form;