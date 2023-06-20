import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="container">
            <div className="row">

                <form className="form">
                    <h1>Register</h1>
                    <div className="mb-3">
                        <label className="form-label">Full name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <input type="file" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                    <span>Already have an account ? <Link className="link-span" to="/">Login</Link></span>
                </form>

            </div>
        </div>
    );
};

export default Register;
