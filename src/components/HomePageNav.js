import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

const HomePageNav = (user) =>
    <div>
        {/*<div className="row align-items-center justify-content-center d-flex">*/}
            {/*<nav id="nav-menu-container">*/}
                {/*<ul className="nav-menu">*/}
                    {/*<li><a href="#">Home</a></li>*/}
                    {/*<li><a href="#">Groceries</a></li>*/}
                    {/*<li><a href="#">Add Recipe</a></li>*/}
                    {/*<li><a href="#">Saved Recipes</a></li>*/}
                {/*</ul>*/}
            {/*</nav>*/}
        {/*</div>*/}
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" class={"navbar-expand-lg"}>
            <Navbar.Brand href="#home">What's Cookin!</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Home</Nav.Link>
                    <Nav.Link href="#pricing">Ingredients</Nav.Link>
                    <Nav.Link href="#pricing">Add Recipes</Nav.Link>
                    <Nav.Link href="#pricing">Favorite Recipes</Nav.Link>
                    <Nav.Link href="#pricing">Explore</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link eventKey={2} href="#memes">
                        {user.name ? 'Username':'User'}
                    </Nav.Link>
                    <Nav.Link href="#deets">Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>



export default HomePageNav;


