import React, { Component } from 'react'
import './myStyles.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export class LoginComponent extends Component {
    render() {
        return (
            <div>
                <div id="background"></div>
                <div className=" container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col">

                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-4">
                            <div className="card  " style={{ width: "333px" }} >
                                <div className="login-card">
                                    <img className="card-img-top rounded-circle   profile" src="https://www.templatebeats.com/files/images/profile_user.jpg" alt="Card image" />
                                    <h4 className="text-center">Login</h4>
                                    <p className="text-center">Sign in to your account</p>
                                    <div className="card-body">
                                        <form className=" ">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="usr" placeholder="your email" name="username" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" id="pwd" placeholder="password" name="password" />
                                            </div>
                                            <div>
                                                <span style={{ width: "48%", textAlign: "left", display: "inline-block" }}>
                                                    <label>
                                                        <input type="checkbox" value="remember-me" /><span>Remember me</span>


                                                    </label>
                                                </span>
                                                <span style={{ width: "50%", textAlign: "right", display: "inline-block" }}>
                                                    <input type="submit" className="btn btn-success btn-block" value="Sign In" /></span>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                                <div id="formFooter">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 ">
                                            <a className="underlineHover" href="#">Connect with</a>

                                        </div>
                                        <div className="col-md-2">
                                            <i className="fab fa-twitter"></i>

                                        </div>
                                        <div className="col-md-2">
                                            <i className="fab fa-facebook"></i>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="col">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginComponent
