import React from 'react'
import '../../node_modules/font-awesome/css/font-awesome.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './RegisterPage.css'
class RegisterPage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <section className="reservation-area section-gap relative">
                    <div className="overlay overlay-bg">
                    </div>
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-6 reservation-left">
                                <h1 className="text-white mb-3">What's Cooking?</h1>
                                <p className="text-white intro-text">Not sure what to cook?</p>
                                <p className="text-white intro-text">Here is your one stop solution to find recipes that
                                    best match the ingredients in hand.
                                    What's Cooking? makes your life easier by helping you decide what to cook based on
                                    the time and
                                    ingredients in hand.
                                    You no longer have to surf various websites to find the "perfect" recipe.
                                </p>
                                <p className="text-white intro-text">
                                    All you need to do is, feed in the time and ingredients
                                    in hand, and then let the application do the job!

                                </p>
                            </div>
                            <div className="col-lg-5 reservation-right">
                                <form className="form-wrap">
                                    <h2 className="mb-3">Register</h2>
                                    <input type="text" className="form-control"
                                           placeholder="Your Username"
                                           required
                                           id="register_username"
                                           onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Your Username'">
                                    </input>

                                    <input type="email" className="form-control"
                                           placeholder="Your Email Address"
                                           onFocus="this.placeholder = ''"
                                           id="register_email"
                                           onBlur="this.placeholder = 'Your Email Address'">
                                    </input>

                                    <input type="password" className="form-control"
                                           placeholder="Your password"
                                           id="register_password"
                                           onFocus="this.placeholder = ''"
                                           onBlur="this.placeholder = 'Your password'">
                                    </input>

                                    <input type="password"
                                           className="form-control"
                                           placeholder="Your Verify Password"
                                           id="register_verify_password"
                                           onFocus="this.placeholder = ''"
                                           onBlur="this.placeholder = 'Your Verify Password'">
                                    </input>

                                    <a className="primary-btn text-uppercase mt-20" style="color: white"
                                       id="sign_up">Register
                                    </a>

                                    <p className="mt-3">Already A Member?
                                        <a href="index.html"
                                           className="sign-in">Sign In
                                        </a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="footer-area">
                    <div className="footer-bottom-wrap">
                        <div className="container">
                            <div className="row footer-bottom d-flex justify-content-between align-items-center">
                                <p className="col-lg-8 col-mdcol-sm-6 -6 footer-text m-0">
                                    Copyright &copy;
                                    <script>document.write(new Date().getFullYear());</script>
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default RegisterPage
