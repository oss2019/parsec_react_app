import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Header from "../../components/Header";
import './styles.css';
import "../../css/bootstrap.css";
import "../../css/style.css";
import "../../css/responsive.css";

const Certificates = () => {

  const [data, setData] = useState({
    data: false
  });

  const googleSuccess = async (res: any) => {
      const values = res?.profileObj;
      const result = {
          Email: values.email,
          // token: res?.tokenId
      }
      setData({ data: true, ...result });
  }

  const googleFailure = (error: any) => {
      console.log('Something went wrong :(', error);
  }

  return (
    <>
        {!data.data?(
          <div className="center">
            <GoogleLogin
                clientId="289322022105-d6kou0ncpfhvmq4g5a3pu81e94t3ni5c.apps.googleusercontent.com"
                render={(renderProps) => (
                    <Button variant="primary" size="lg" active={renderProps.disabled} onClick={renderProps.onClick}>
                        Google Login
                    </Button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy="single_host_origin"
            />
          </div>
        ):(
          <div className="page-wrapper">
            <div className="preloader"></div>
            <Header bg/>
            <br/><br/><br/><br/><br/><br/>
            {/*<div className="padding-form">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>ID</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>*/}
          </div>
        )}
    </>
  )
}

export default Certificates;
