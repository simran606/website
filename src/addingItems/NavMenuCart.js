import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/republic.css';

class NavMenuCart extends React.Component{

    render(props){
        return(
                  <Navbar expand="lg">
                    <Navbar.Brand href="#home"><img class="logo-img" alt="logo-img" src="../../Images/logo.png" /></Navbar.Brand>
                  <Form inline>
                    <Form.Control type="text" placeholder="Search for Items" className="mr-sm-2" />
                    <Button variant="outline-success"><img className="search-img" src="../../../Images/icons8-search.gif" alt="search-icon" /></Button>
                    </Form>
                  </Navbar>
        );
    }}
    
    export default NavMenuCart;