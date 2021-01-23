import React from 'react' ;
import '../css/navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavMenu(){
    return(
        <Navbar expand="lg">
        <Navbar.Brand href="#home"><img class="logo-img" alt="logo-img" src="../../Images/logo.png" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home" id="first" >My Orders</Nav.Link>
            <NavDropdown title="My Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Name</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Email</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mobile Number</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default NavMenu;