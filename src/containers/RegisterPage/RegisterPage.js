import React from 'react'
import '../../../node_modules/font-awesome.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './RegisterPage.css'
import '../../assets/css/main.css'
import Select from 'react-select'
import RegularUserServices from '../../services/RegularUserServices'

const options = [
    { value: 'REGULAR', label: 'Foodie' },
    { value: 'CHEF', label: 'Chef' },
    { value: 'NUTRITIONIST', label: 'Nutritionist' }
];

const customStyles = {


    option: (provided, state) => ({
        ...provided,
        color: '#686868',
        fontSize: '13px',
        fontWeight: '300',
    }),
    container: (provided, state) => ({
        ...provided,
        marginBottom: '17'
    }),
    placeholder: (provided, state) => ({
        ...provided,
        color: '#747474',
        fontSize: '13px',
        fontWeight: '300',
    }),

    valueContainer: (provided, state) => ({
        ...provided,
        color: '#747474',
        fontSize: '13px',
        fontWeight: '300',
    }),

};

class RegisterPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedRole: null,
            error: null,
            user: {}
        }
        this.regularUserServices = new RegularUserServices();
    }


    handleChange = (selectedRole) => {
        this.setState({ selectedRole });
    };

    registerUser = () => {
        this.state.user['username'] = document.getElementById('register_username').value;
        this.state.user['firstName'] = document.getElementById('register_firstname').value;
        this.state.user['lastName'] = document.getElementById('register_lastname').value;
        this.state.user['password'] = document.getElementById('register_password').value;
        this.state.user['password'] = document.getElementById('register_verify_password').value;
        this.state.user['role'] = this.state.selectedRole ? this.state.selectedRole.value : 'no';
        if(this.state.user['role']=== 'CHEF'){
            this.state.user['blogPost'] = document.getElementById('register_chefblog').value;
        }
        if(this.state.user['role']==='NUTRITIONIST'){
            this.state.user['nutritionist'] = document.getElementById('register_nutritionistsite').value;
        }
        if(this.state.user['role']==='REGULAR'){
            this.regularUserServices.registerRegularUser(this.state.user);
        }

    };

    render(){
        const { selectedOption } = this.state;
        return(
            <div id="register-page">
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
                                    {this.state.error!=null && <p>Error: {this.state.error}</p>}
                                    <input type="text" className="form-control"
                                           placeholder="Your Username"
                                           required
                                           id="register_username"
                                           onFocus={()=>{this.placeholder = ''}} onBlur={()=>{this.placeholder = 'Your Username'}}>
                                    </input>
                                    <input type="text" className="form-control"
                                           placeholder="Your First Name"
                                           required
                                           id="register_firstname"
                                           onFocus={()=>this.placeholder = ''} onBlur={()=>this.placeholder = 'Your First Name'}>
                                    </input>
                                    <input type="text" className="form-control"
                                           placeholder="Your Last Name"
                                           required
                                           id="register_lastname"
                                           onFocus={()=>this.placeholder = ''} onBlur={()=>this.placeholder = 'Your Last Name'}>
                                    </input>

                                    <input type="email" className="form-control"
                                           placeholder="Your Email Address"
                                           onFocus={()=>this.placeholder = ''}
                                           id="register_email"
                                           onBlur={()=>this.placeholder = 'Your Email Address'}>
                                    </input>

                                    <input type="password" className="form-control"
                                           placeholder="Your password"
                                           id="register_password"
                                           onFocus={()=>this.placeholder = ''}
                                           onBlur={()=>this.placeholder = 'Your password'}>
                                    </input>

                                    <input type="password"
                                           className="form-control"
                                           placeholder="Your Verify Password"
                                           id="register_verify_password"
                                           onFocus={()=>this.placeholder = ''}
                                           onBlur={()=>this.placeholder = 'Your Verify Password'}>
                                    </input>

                                    <Select
                                        placeholder={'Who Are You'}
                                        styles={customStyles}
                                        value={selectedOption}
                                        onChange={this.handleChange}
                                        options={options}
                                    />

                                    {
                                        this.state.selectedRole != null && this.state.selectedRole.value==='chef'
                                        &&
                                        <input type="text" className="form-control"
                                               placeholder="Your Blog Page"
                                               required
                                               id="register_chefblog"
                                               onFocus={()=>{this.placeholder = ''}}
                                               onBlur={()=>{this.placeholder = 'Your Blog Page'}}>
                                        </input>
                                    }

                                    {
                                        this.state.selectedRole != null && this.state.selectedRole.value==='nutritionist'
                                        &&
                                        <input type="text" className="form-control"
                                               placeholder="Your Site"
                                               required
                                               id="register_nutritionistsite"
                                               onFocus={()=>{this.placeholder = ''}}
                                               onBlur={()=>{this.placeholder = 'Your Site'}}>
                                        </input>
                                    }
                                    <a className="primary-btn text-uppercase mt-20" style={{color: 'white'}}
                                       id="sign_up" onClick={this.registerUser}>Register
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
            </div>
        )
    }
}

export default RegisterPage
