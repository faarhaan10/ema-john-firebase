import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div  className="form-login">
            <fieldset className="form-control">
                
                <legend><h1>Login</h1></legend>
                <form action="">
                    <input type="email" name="" placeholder="email" />
                    <br />
                    <input type="password" name="" placeholder="password" />
                    <br />
                    <input type="button" value="Sign IN" />
                </form>
                <p>New to ema-jhon? <Link to="/register">Sign UP</Link> </p>
                <br />
                <span>----------------OR------------------</span>
                <p>sign in using</p>
                <button onClick="">Google</button>
                <button onClick="">GitHub</button>
            </fieldset>
        </div>
    );
};

export default Login;