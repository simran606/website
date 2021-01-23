import React from 'react';
import '../css/login.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Register = () => {

    const history = useHistory();


        return(
            <div className="loginDiv">
                <img src="../../Images/logo.png" alt="login-img" />
                <Form>
                     <Form.Group controlId="formBasicEmail">
                          <Form.Control type="email" placeholder="Enter email" />
                     </Form.Group>

                     <Form.Group controlId="formBasicPassword">
                          <Form.Control type="password" placeholder="Password" />
                     </Form.Group>

                    <Button variant="primary" type="submit" onClick={() => history.push('/signup')} >
                           REGISTER
                    </Button>

                </Form>
            </div>
        );
    }


export default withRouter(Register);
