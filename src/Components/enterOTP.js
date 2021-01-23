import React from 'react';
import '../css/login.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const EnterOTP = () => {

    const history = useHistory();

        return(
            <div className="loginDiv">
                <img src="../../Images/logo.png" alt="login-img" />
                <Form>
                     <Form.Group controlId="formBasicPassword">
                          <Form.Control type="text" placeholder="Enter OTP" />
                     </Form.Group>

                    <Button variant="primary" type="submit" onClick={() => history.push('/register')}>
                           VERIFY OTP
                    </Button>

                </Form>
            </div>
        );
    }


export default withRouter(EnterOTP);