import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/republic.css';

const NavMenuShop = () => {


        return(
                  <Navbar expand="lg">
                    <Navbar.Brand href="#home"><img class="logo-img" alt="logo-img" src="../../Images/logo.png" /></Navbar.Brand>
                  <Form inline>
                    <Form.Control type="text" placeholder="Search Shops" className="mr-sm-2" id="navmenuform" />
                    <Button variant="outline-success" id="search-btn"><img className="search-img" src="../../../Images/icons8-search.gif" alt="search-icon" /></Button>
                    </Form>
                  </Navbar>
        );
    }
    
    export default NavMenuShop;