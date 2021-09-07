import React from 'react';
import './Register.css';

function Register() {
    return <div className="Register">
        <form>
            <div className="form-control">
                <label>Email</label>
                <input type="email"></input>
            </div>
            <div className="form-control">
                <label>Password</label>
                <input type="Password"></input>
            </div>
            <div className="form-control">
                <label>Re-password</label>
                <input type="Password"></input>
            </div>
            <div className="form-control">
                <button type="submit">Register</button>
            </div>
        </form>
    </div>
}

export default Register