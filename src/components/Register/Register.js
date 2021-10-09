import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="form-login">
            <fieldset className="form-control">
                <legend><h1>
                    Register
                </h1></legend>
                <form onSubmit="">
                    <input type="text" name="" placeholder="name" />
                    <br />
                    <input type="email" name="" placeholder="email" />
                    <br />
                    <input type="password" name="" placeholder="password" />
                    <br />
                    <input type="button" value="Sign UP" />
                </form>
                <p>Already registered? <Link to="/login">Sign IN</Link> </p>
                <br />
                <span>----------------OR------------------</span>
                <p>sign in using</p>
                <button onClick="">Google</button>
                <button onClick="">GitHub</button>
            </fieldset>
        </div>
    );
};

export default Register;