import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import '../Styles/Contact.css'
export default function Contact() {
    return (
        <div>

            <Nav />

            <div className="main">

                <div className="container">




                    <div className="left">

                        <div className="left-container">

                            <h1 className='heading-1-top'>Contact us</h1>

                            <h2 className='heading-2-Down'>Need to get in touch with us ? Either fill out the form with your inquiry or find the department email you'd like to contact below</h2>

                        </div>

                    </div>





                    <div className="right">

                        <div className="right-container">

                            <div className="form-container">

                                <div className="form-up-section">

                                    <div className="first">

                                        <label >First Name</label><br />
                                        <input type="text" className='first-name' id="" />

                                    </div>

                                    <div className="last">

                                        <label >Last Name</label><br />
                                        <input type="text" className='last-name' id="" />

                                    </div>

                                </div>

                                <div className="form-middle-section">

                                    <div className="email">

                                        <label >Email </label> <br />

                                        <input type="email" className='email-field' id="" />

                                    </div>

                                </div>

                                <div className="form-bottom-section">

                                    <div className="suggestion">

                                        <label >What can we help you with ?</label><br />
                                        <input type='text' className='text-field' value="" />

                                    </div>
                                </div>

                                <div className="btn">
                                    <button>Submit</button>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>




        </div>
    )
}


