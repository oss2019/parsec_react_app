// import * as fs from 'fs';
import Footer from '../../../components/Footer';
import axios from 'axios';
import * as XLSX from 'xlsx';
import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Header from '../../../components/Header';
import ParticipantData from '../../../data/ParticipantData.json';
import './styles.css';
import '../../../css/bootstrap.css';
import '../../../css/style.css';
import '../../../css/responsive.css';
import Background from '../../../images/background/victory.jpg';

const ParticipationCertificates = () => {
	const [data, setData] = useState({
		exists: false,
	});

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
	};

	const googleSuccess = async (res) => {
		const values = res?.profileObj;
		const result = {
			Email: values.email,
			// token: res?.tokenId
		};
		var response;
		// axios(`https://parsec-certificate-backend.herokuapp.com/search?email=${result.Email}`).then((res) => {
		//   response = res.data?.data;
		// }).catch(err => console.log(err));
		// axios(`http://localhost:5000/user/search?email=${result.Email}`).then((res) => {
		//   response = res.data?.data;
		// }).catch(err => console.log(err));
		console.log(result);
		setData({ exists: true, ...result, data: ParticipantData[result.Email] });
	};

	const googleFailure = (error) => {
		console.log('Something went wrong :(', error);
	};

	return (
		<>
			<div className="page-wrapper" style={{ overflowX: 'hidden' }}>
				<Header />

				<section
					className="page-title"
					style={{
						backgroundImage: `url(${Background})`,
					}}
					id="page-title"
				>
					<div className="auto-container">
						<span className="float-text">Certificates</span>
						<h1>Certificates</h1>
						<ul className="bread-crumb clearfix">
							<li>
								<a
									href="/"
									// target="_blank"
									style={{ textDecoration: 'none' }}
								>
									Home
								</a>
							</li>
							<li>Certificates</li>
						</ul>
					</div>
				</section>
				<section
					className="auto-container align-items-center"
					style={{ paddingTop: '0px' }}
				>
					<div className="row ">
						<h1 style={{ textAlign: 'center', paddingTop: '20px' }}>
							Certificates
						</h1>
						{!data.exists ? (
							<div
								className="align-items-center center"
								// style={{ marginTop: '-200px' }}
							>
								<GoogleLogin
									clientId="289322022105-d6kou0ncpfhvmq4g5a3pu81e94t3ni5c.apps.googleusercontent.com"
									render={(renderProps) => (
										<Button
											variant="primary"
											size="lg"
											active={renderProps.disabled}
											onClick={renderProps.onClick}
										>
											Google Login
										</Button>
									)}
									onSuccess={googleSuccess}
									onFailure={googleFailure}
									cookiePolicy="single_host_origin"
								/>
								<br />
								<br />
								<ul className="list-style-four mb-1">
									<li style={{ color: '#000102' }}>
										You can access the certificates through this website for a
										period of next the 10 years
									</li>
									<li style={{ color: '#000102' }}>
										The certificate is available in high resolution A4 size
										format
									</li>
									<li style={{ color: '#000102' }}>
										You can download the certificate anytime
									</li>
									<li style={{ color: '#000102' }}>
										The certificates can be verified anytime
									</li>
									<li style={{ color: '#000102' }}>
										Login with your registered Email ID
									</li>
									<li style={{ color: '#000102' }}>
										In case of any issues, contact +91 9674950307 or
										200020040@iitdh.ac.in.
									</li>
								</ul>
							</div>
						) : (
							<>
								{/* <Header bg />git  */}
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
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
								<div className="padding-form">
									Available Certificates :
									<br />
									{data?.data?.map((res, index) => {
										console.log(res);
										return (
											<>
												<code>
													<a href={res}>Certificate {index + 1}</a>
												</code>
												<br />
											</>
										);
									})}
								</div>
							</>
						)}
					</div>
				</section>
			</div>
			<Footer />
		</>
	);
};

export default ParticipationCertificates;
