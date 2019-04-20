import React from 'react'
import '../../../node_modules/font-awesome.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './RegisterPage.css'
import '../../assets/css/main.css'
import Select from 'react-select'
import UserServices from '../../services/UserServices'
import RegularUserServices from '../../services/RegularUserServices'
import ChefServices from '../../services/ChefServices'
import NutritionistServices from '../../services/NutritionistServices'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'


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
            errors: [],
            user: {}
        };
        this.userServices = new UserServices();
        this.regularUserServices = new RegularUserServices();
        this.chefServices = new ChefServices();
        this.nutritionistServices = new NutritionistServices();
    }


    handleChange = (selectedRole) => {
        this.setState({selectedRole: selectedRole});
    };

    validateUser = () => {
        const errorsReg = [];
        if(document.getElementById('register_username').value.length===0){
            errorsReg.push('Username cannot be empty.');
        }
        else if(document.getElementById('register_firstname').value.length===0){
            errorsReg.push('First name cannot be empty.');
        }

        if(document.getElementById('register_password').value.length < 6){
            errorsReg.push('Password must be greater than 6 characters');
        }
        else if(document.getElementById('register_verify_password').value
            !== document.getElementById('register_password').value){
            errorsReg.push('Passwords do not match');
        }

        else if(this.state.selectedRole===null){
            errorsReg.push('Please select a role.');
        }
        return errorsReg;
    };

    registerUser = () => {
        this.setState({errors: this.validateUser()});
        this.state.user['username'] = document.getElementById('register_username').value;
        this.userServices.checkUserNameValidity(this.state.user['username']).then(res=>{
            if(res.length!==0){
                // var errors = this.validateUser();
                // Needn't show other errors if username is already taken.
                var errors = [];
                errors.push('Username has been taken.');
                this.setState({errors: errors});
            }
            else{
                this.state.user['firstName'] = document.getElementById('register_firstname').value;
                this.state.user['lastName'] = document.getElementById('register_lastname').value;
                this.state.user['password'] = document.getElementById('register_password').value;
                this.state.user['password'] = document.getElementById('register_verify_password').value;
                this.state.user['role'] = this.state.selectedRole ? this.state.selectedRole.value : 'no';

                if(this.state.user['role']=== 'CHEF'){
                    this.state.user['blogPost'] = document.getElementById('register_chefblog').value;
                    this.chefServices.registerChef(this.state.user);
                }
                if(this.state.user['role']==='NUTRITIONIST'){
                    this.state.user['appointmentLink'] = document.getElementById('register_nutritionistsite')
                        .value;
                    this.nutritionistServices.registerNutritionist(this.state.user);
                }
                if(this.state.user['role']==='REGULAR'){
                    this.regularUserServices.registerRegularUser(this.state.user);
                }
            }
        });
    };

    render(){
        const { selectedOption } = this.state;
        library.add(faExclamation);
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
                                    {this.state.errors.map(error => (
                                        <p className="form-errors" key={error}>
                                            <FontAwesomeIcon className="form-error-icons" icon="exclamation"/>
                                            &nbsp;&nbsp;{error}
                                        </p>
                                    ))}
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
                                        onChange = {this.handleChange}
                                        options={options}
                                    />

                                    {
                                        this.state.selectedRole != null && this.state.selectedRole.value==='CHEF'
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
                                        this.state.selectedRole != null && this.state.selectedRole.value==='NUTRITIONIST'
                                        &&
                                        <input type="text" className="form-control"
                                               placeholder="Your Appointment Link"
                                               required
                                               id="register_nutritionistsite"
                                               onFocus={()=>{this.placeholder = ''}}
                                               onBlur={()=>{this.placeholder = 'Your Appointment Link'}}>
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
