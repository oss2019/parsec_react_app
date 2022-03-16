// import * as fs from 'fs';
import axios from 'axios';
import * as XLSX from 'xlsx';
import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Header from "../../../components/Header";
import VerificationData from '../../../data/VerificationData.json';
import './styles.css';
import "../../../css/bootstrap.css";
import "../../../css/style.css";
import "../../../css/responsive.css";

const VerificationCertificates = () => {

  const [data, setData] = useState({
    exists: false
  });

  const [ID, setID] = useState('');

  const getData = () => {
    // XLSX.set_fs(fs);
    // var name = excel.name;
    // const reader = new FileReader();
    // reader.onload = (evt) => { // evt = on_file_select event
    //     /* Parse data */
    //     const bstr = evt.target.result;
    //     const wb = XLSX.read(bstr, {type:'binary'});
    //     /* Get first worksheet */
    //     const wsname = wb.SheetNames[0];
    //     const ws = wb.Sheets[wsname];
    //     /* Convert array of arrays */
    //     const data = XLSX.utils.sheet_to_csv(ws, {header:1});
    //     /* Update state */
    //     console.log("Data>>>"+data);
    // };
    // reader.readAsText(excel);
    // var workbook = XLSX.readFile(excel);
    // console.log(workbook);
  }

  const handleSubmit = () => {
      // const values = res?.profileObj;
      // const result = {
      //     Email: values.email,
      //     // token: res?.tokenId
      // }
      // var response;
      // axios(`https://parsec-certificate-backend.herokuapp.com/search?email=${result.Email}`).then((res) => {
      //   response = res.data?.data;
      // }).catch(err => console.log(err));
      // axios(`http://localhost:5000/user/search?email=${result.Email}`).then((res) => {
      //   response = res.data?.data;
      // }).catch(err => console.log(err));
      // console.log(result);
      setData({ exists: true, data: VerificationData[ID] });
  }

  return (
    <>
      <Header bg/>
      {/*<br/><br/><br/><br/><br/><br/>*/}
        {!data.exists?(
          <div className="center">
            <div className="padding-form">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail" onChange={(e) => setID(e.target.value)}>
                  <Form.Label>ID</Form.Label>
                  <Form.Control type="text" placeholder="Enter Certificate ID" />
                </Form.Group>
                <Button variant="primary" onClick={handleSubmit}>
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        ):(
          <>
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
            {data?.data ? (
              <>
                <br/><br/><br/><br/><br/><br/>
                <div className="padding-form">
                  Available Certificate: <code><a href={data?.data}>Certificate</a></code>
                </div>
              </>
            ):(
              <p>
                No Certificates found with the requested ID.
              </p>
            )}
          </>
        )}
    </>
  )
}

export default VerificationCertificates;