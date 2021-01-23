import React from 'react';
import '../css/signup.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const SignUp = () => {

     const history = useHistory();

        return(
            <div className="signDiv">
            <h1>Enter Your Details</h1>
                <Form>
                     <Form.Group controlId="formBasicName">
                          <Form.Control type="name" placeholder="Name" />
                     </Form.Group>

                     <Form.Group controlId="formBasicNumber">
                          <Form.Control type="text" placeholder="Mobile Number" />
                     </Form.Group>

                     <Form.Group controlId="formBasicNumber">
                          <Form.Control type="text" placeholder="Select Your City" />
                     </Form.Group>

                     <Form.Group controlId="formBasicNumber">
                          <Form.Control type="text" placeholder="Select Your Area" />
                     </Form.Group>

                     <Form.Group controlId="formBasicNumber">
                          <Form.Control type="text" placeholder="Select Your Pincode" />
                     </Form.Group>

                     <Form.Group controlId="formBasicText">
                          <Form.Control type="text" placeholder="Address" />
                     </Form.Group>

                    <Button variant="primary" type="submit" onClick={() => history.push('/app')}>
                           CONFIRM ✓
                    </Button>

                </Form>
            </div>
        );
    }


export default withRouter(SignUp);