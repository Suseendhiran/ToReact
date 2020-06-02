import React, { useState } from 'react'
import useForm from './useForm'
import validate from './validateLogin'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MainHome from '../HomeComponent./MainHome';


function LoginfunComp() {

    const { handleChange, handleSubmit, values, errors, noError } = useForm(submit, validate)


    function submit() {
        console.log('Submitted successfully')
    }
    console.log(noError)


    return (
        <div>
            <div id="background"></div>
            <h2>{noError}</h2>
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
                                    <form onSubmit={handleSubmit} className=" " noValidate>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id={`${errors.userName && "inputerror"}`} placeholder="your email" name="userName" value={values.userName} onChange={handleChange} />
                                            {errors.userName && <p className="error">{errors.userName}</p>}
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control " id={`${errors.password && "inputerror"}`} placeholder="password" name="password" value={values.password} onChange={handleChange} />
                                            {errors.password && <p className="error">{errors.password}</p>}
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
            {noError && <Redirect to="/home" />}




        </div>
    )
}

export default LoginfunComp
