import React from 'react'
import '../assets/css/main.css'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'



const HomePageNav = (user) =>
    <div className="container main-menu">
        <div className="row align-items-center justify-content-center d-flex">
            <nav id="nav-menu-container">
                <ul className="nav-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Ingredients</a></li>
                    {(user.type==='CHEF' || user.type==='REGULAR')
                        && <li><a href="#">My Recipes</a></li>}
                    <li><a href="#">Favorite Recipes</a></li>
                    {(user.type==='CHEF' || user.type==='NUTRITIONIST')
                        && <li><a href="#">Endorsed Recipes</a></li>}
                    <li><a href="#">Explore</a></li>
                </ul>
            </nav>
        </div>
        {/*<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">*/}
            {/*<Navbar.Brand href="#home">What's Cookin!</Navbar.Brand>*/}
            {/*<Navbar.Toggle aria-controls="responsive-navbar-nav" />*/}
            {/*<Navbar.Collapse id="responsive-navbar-nav">*/}
                {/*<Nav className="mr-auto">*/}
                    {/*<Nav.Link href="#features">Home</Nav.Link>*/}
                    {/*<Nav.Link href="#pricing">Ingredients</Nav.Link>*/}
                    {/*<Nav.Link href="#pricing">Add Recipes</Nav.Link>*/}
                    {/*<Nav.Link href="#pricing">Favorite Recipes</Nav.Link>*/}
                    {/*<Nav.Link href="#pricing">Explore</Nav.Link>*/}
                {/*</Nav>*/}
                {/*<Nav>*/}
                    {/*<Nav.Link eventKey={2} href="#memes">*/}
                        {/*{user.name ? 'Username':'User'}*/}
                    {/*</Nav.Link>*/}
                    {/*<Nav.Link href="#deets">Logout</Nav.Link>*/}
                {/*</Nav>*/}
            {/*</Navbar.Collapse>*/}
        {/*</Navbar>*/}
    </div>



export default HomePageNav;


