import React, {Component} from 'react'
import '../../../node_modules/font-awesome.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './LoginPage.css'
import '../../assets/css/main.css'
import {Redirect} from 'react-router-dom'



class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {},
            successfulLogin: false
        };
    }

    loginUser = () => {
        const user = {};
        user.username = document.getElementById('login_username').value;
        user.password = document.getElementById('login_password').value;
        this.setState({user: user, successfulLogin: true});
        console.log(this.state.user);
    };


    render(){
        if(this.state.successfulLogin === true){
            return <Redirect to={{pathname: '/home', state: { user: this.state.user}}}/>
        }
        return (
            <div id="login-page">
                <section className="reservation-area section-gap">
                    <div className="overlay overlay-bg">
                    </div>
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-5 margin-auto bg-white reservation-right">
                                <form className="form-wrap" action="#">
                                    <h2 className="mb-3">Sign In</h2>
                                    <label>Enter username:</label>
                                    <input type="text" className="form-control mb-3"
                                           name="username" id="login_username"
                                           placeholder=" Your username"
                                           required
                                           onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Your username'">
                                    </input>
                                    <label>Enter password:</label>
                                    <input type="password" className="form-control"
                                           name="password"
                                           id="login_password" placeholder="Your password"
                                           required
                                           onFocus="this.placeholder = ''"
                                           onBlur="this.placeholder = 'Your password'">
                                    </input>
                                    <a className="primary-btn text-uppercase mt-20" id="login_user"
                                       style={{color: 'white'}} onClick={this.loginUser}>Sign In</a>
                                    <p className="mt-3">If you have not registered yet,&nbsp;
                                        <a className="text-primary font-weight-bold"
                                        href="/register"
                                        style={{color: 'white'}}>Sign Up</a> now</p>
                                    <p className="text-center mt-3 font-weight-bold text-danger"
                                       id="loading"
                                       style ={{display: 'none'}}>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default LoginPage;
