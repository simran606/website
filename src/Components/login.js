import React from 'react';
import '../css/login.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
// import ShopProfile from './shopProfile';
// import {Redirect} from 'react-router';


const Login = () => {

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
                     
                    <Button  variant="primary" type="submit" onClick={() => history.push('/app') } >
                           LOGIN
                    </Button>

                    <Button variant="primary" type="submit" onClick={() => history.push('/forgotpass')} >
                           FORGOT PASSWORD ?
                    </Button>

                    <Button variant="primary" type="submit" id="btn-sign" onClick={() => history.push('/enterphn')}>
                           DON'T HAVE AN ACCOUNT ?<br />
                            SIGN UP
                    </Button>

                </Form>
            </div>
        );
    }

export default withRouter(Login) ;