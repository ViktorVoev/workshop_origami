import React from 'react';
import './Login.css';

function Login() {
    return <div className="Login">
        <form>
            <div className="form-control">
                <label>Email</label>
                <input type="text"></input>
            </div>
            <div className="form-control">
                <label>Password</label>
                <input type="Password"></input>
            </div>
            <div className="form-control">
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
}

export default Login