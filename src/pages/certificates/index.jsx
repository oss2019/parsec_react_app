import axios from 'axios';
// import readSheet from 'excel-sheets';
import * as XLSX from 'xlsx';
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
    exists: false
  });

  const getData = () => {
    var name;
    const reader = new FileReader();
    reader.onload = (evt) => { // evt = on_file_select event
        /* Parse data */
        const bstr = evt.target.result;
        const wb = XLSX.read(bstr, {type:'binary'});
        /* Get first worksheet */
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        /* Convert array of arrays */
        const data = XLSX.utils.sheet_to_csv(ws, {header:1});
        /* Update state */
        console.log("Data>>>"+data);
    };
    reader.readAsBinaryString(f);
  }

  const googleSuccess = async (res) => {
      const values = res?.profileObj;
      const result = {
          Email: values.email,
          // token: res?.tokenId
      }
      // var response;
      // axios(`https://parsec-certificate-backend.herokuapp.com/search?email=${result.Email}`).then((res) => {
      //   response = res;
      // }).catch(err => console.log(err));
      setData({ exists: true, ...result, /*data: response*/ });
  }

  const googleFailure = (error) => {
      console.log('Something went wrong :(', error);
  }

  return (
    <>
        {!data.exists?(
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
            {data}
          </div>
        )}
    </>
  )
}

export default Certificates;
