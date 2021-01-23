import React from 'react';
import '../css/login.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const EnterPhno = () => {
   
    const history = useHistory();


        return(
            <div className="loginDiv">
                <img src="../../Images/logo.png" alt="login-img" />
                <Form>
                     <Form.Group controlId="formBasicPassword">
                          <Form.Control type="number" placeholder="Mobile Number" />
                     </Form.Group>

                    <Button variant="primary" type="submit" onClick={() => history.push('/enterotp')}>
                           VERIFY OTP
                    </Button>

                    <Button variant="primary" type="submit" id="btn-sign" onClick={() => history.push('/')}>
                           ALREADY HAVE AN ACCOUNT ?<br />
                            LOGIN
                    </Button>

                </Form>
            </div>
        );
    }


export default withRouter(EnterPhno);