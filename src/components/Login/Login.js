import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInWithGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/shop';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            history.push(redirect_url);
        })
    }
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
                <button onClick={handleGoogleSignIn}>Google</button>
                <button>GitHub</button>
            </fieldset>
        </div>
    );
};

export default Login;