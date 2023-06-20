import React from "react";
import './login.css'
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="container">
            <div className="row">

                <form className="form">
                    <h1>LOGIN</h1>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                    <span>don't have an account ? <Link className="link-span" to="/register">Sign up</Link></span>
                </form>
            </div>
        </div>
    );
};

export default Login;
