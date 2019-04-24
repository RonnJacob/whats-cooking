import React from 'react'
import IngredientService from "../services/IngredientServices";
import UserServices from "../services/UserServices";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import RegularUserServices from "../services/RegularUserServices";
import ChefServices from "../services/ChefServices";
import NutritionistServices from "../services/NutritionistServices";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.userServices = new UserServices();
        this.regularUserServices = new RegularUserServices();
        this.chefServices = new ChefServices();
        this.nutritionistServices = new NutritionistServices();
        const userId = props.match.params['userId'];
        const userType = props.match.params['userType'];
        this.state = {
            userId: userId,
            user: {regularUser: {}, chef: {}, nutritionist: {}},
            userType: userType
        }
    }

    componentDidMount() {
        document.title = "What's Cooking?";
        let currentUser = {};
        this.userServices.findById(this.state.userId)
            .then(user => {
                currentUser = user;
                if (this.state.userType === 'REGULAR')
                    this.regularUserServices.findById(this.state.userId)
                        .then(user => {
                            currentUser.regularUser = user[0];
                            this.setState({
                                user: currentUser
                            })
                        })
                else if (this.state.userType === 'CHEF')
                    this.chefServices.findById(this.state.userId)
                        .then(user => {
                            currentUser.chef = user[0];
                            this.setState({
                                user: currentUser
                            })
                        })
                else
                    this.nutritionistServices.findById(this.state.userId)
                        .then(user => {
                            currentUser.nutritionist = user[0];
                            this.setState({
                                user: currentUser
                            })
                        })
            })
    }

    render() {
        let updatedName;
        return (
            <div>
                <div>
                    <div id="header">
                        {/*<HomePageNav/>*/}
                    </div>
                    <section className="about-banner relative">
                        <div className="overlay overlay-bg"></div>
                        <div className="container">
                            <div className="row d-flex align-items-center justify-content-center">
                                <div className="about-content col-lg-12">
                                    <h1 className="text-white">
                                        Profile
                                    </h1>
                                    <p className="text-white link-nav"><a href="/home">Home </a> <span
                                        className="lnr lnr-arrow-right"></span>
                                        <a href="#">Profile</a></p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="home-about-area section-gap">
                        <div className="container">
                            <h1 className="mb-5 text-center">Profile</h1>
                            <div className="row">
                                <div className="col-lg-3 home-about-left"></div>
                                <div className="col-lg-6 home-about-left">
                                    <div className="table-responsive">
                                        <table className="groceries table table-bordered table-hover"
                                               id="grocery_table">
                                            <thead>
                                            <tr>
                                                <th>Info</th>
                                                <th>Detail</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td className="name-theader">Name</td>
                                                <td className="actions-theader">{this.state.user.firstName}
                                                </td>
                                            </tr>
                                            {
                                                this.state.userType === 'CHEF' &&
                                                <tr>
                                                    <td className="name-theader">Blogpost</td>
                                                    <td className="actions-theader"><a
                                                        href={this.state.user.chef.blogPost}>
                                                        {this.state.user.chef.blogPost}</a>
                                                    </td>
                                                </tr>
                                                ||
                                                this.state.userType === 'NUTRITIONIST' &&
                                                <tr>
                                                    <td className="name-theader">AppointmentLink</td>
                                                    <td className="actions-theader">
                                                        <a href={this.state.user.nutritionist.appointmentLink}>
                                                            {this.state.user.nutritionist.appointmentLink}</a>
                                                    </td>
                                                </tr>
                                            }
                                            </tbody>
                                        </table>
                                    </div>
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
            </div>
        );
    }
}

export default Profile
