import React from 'react';
import './Register.css';
import withForm from '../shared/hocs/withFrom';
import * as yup from 'yup';
import userService from '../services/user-service';


class Register extends React.Component {

    usernameOnChangeHandler = this.props.controlChangeHandlerFactory('username');
    passwordOnChangeHandler = this.props.controlChangeHandlerFactory('password');
    rePasswordOnChangeHandler = this.props.controlChangeHandlerFactory('rePassword');

    submitHandler = () => {
        const errors = this.props.getFormErrorState();
        if (!!errors) { return; }
        const data = this.props.getFormState();
        console.log(this.props);
        userService.register(data).then(() => {
            alert('YES!')
        })
        // this.props.runValidations()
        // .then(formData => console.log(formData))
    }

    getFirstImputError = name => {
        const errorState = this.props.getFormErrorState();
        return errorState && errorState[name] && errorState[name][0];
    }

    render() {
        
        const { username, password, rePassword } = this.props.getFormState();
        const usernameError = this.getFirstImputError('username');
        const passwordError = this.getFirstImputError('password');
        const rePasswordError = this.getFirstImputError('rePassword');

    return <div className="Register">
        <form>
            <div className="form-control">
                <label>Useranme</label>
                <input type="text" onChange={this.usernameOnChangeHandler} value={username}></input>
                {usernameError && <div className="error">{usernameError}</div>}
            </div>
            <div className="form-control">
                <label>Password</label>
                <input type="Password" onChange={this.passwordOnChangeHandler} value={password}></input>
                {passwordError && <div className="error">{passwordError}</div>}
            </div>
            <div className="form-control">
                <label>Re-password</label>
                <input type="Password" onChange={this.rePasswordOnChangeHandler} value={rePassword}></input>
                {rePasswordError && <div className="error">{rePasswordError}</div>}
            </div>
            <div className="form-control">
                <button type="button" onClick={this.submitHandler}>Register</button>
            </div>
        </form>
    </div>
    }
}

const initialFormState = {
    username: '',
    password: '',
    rePassword: ''
}

const schema = yup.object({
    username: yup.string('Username must be a String')
    .required('Username is required')
    .min(4, 'Username must be more than 4 chars'),
    password: yup.string('Password must be a String')
    .required('Password is required')
    .min(6, 'Password must be more than 6 chars'),
    rePassword: yup.string('Password must be a String')
    .oneOf([yup.ref("password"), null], "Password don't match!")
    .required('RePassword is required')
    .min(6, 'RePassword must be more than 6 chars')
  });

export default withForm(Register, initialFormState, schema)