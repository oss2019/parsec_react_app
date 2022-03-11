import React from "react";

import "../../css/bootstrap.css";
import "../../css/style.css";
import "../../css/responsive.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Venkat from "../../images/speakers/venkat.png";
import Bhavi from "../../images/speakers/bhavi.png";
import Background from "../../images/background/speaker.jpeg";
import Vinay from '../../images/speakers/Vinay.png'

const Speakers = () => {
  return (
		<React.Fragment>
			<div className="page-wrapper" style={{ overflowX: 'hidden' }}>
				<div className="preloader"></div>
				<Header active={88} />

				{/* <div style={{ marginTop: isSmallDevice ? '45px' : '0' }}>
					<img
						src="https://drive.google.com/uc?id=1eXH6NV9AG3Lz9uk5ibZB9UL5OV1fMDQU"
						style={{ minWidth: '100vw' }}
					/>
				</div> */}
				<section
					className="page-title"
					style={{
						backgroundImage: `url(${Background})`,
					}}
					id="page-title"
				>
					<div className="auto-container">
						<span className="float-text">Speakers</span>
						<h1>Speakers</h1>
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
							<li>Speakers</li>
						</ul>
					</div>
				</section>

				<section className="news-section">
					<div className="auto-container" style={{ padding: '0 auto' }}>
						<div
							class="row"
							style={{
								padding: 'auto',
								display: 'flex-wrap',
								justifyContent: 'center',
							}}
						>
							<div className="content-box">
								<div
									className="row"
									style={{ display: 'flex', justifyContent: 'space-around' }}
								>
									<div className="col-md-5 py-2">
										<div className=" border-danger shadow">
											<div
												className="card-body"
												style={{
													// border: "2px solid #e2e6e9",
													border: '2px solid #e2e6e9',
													borderRadius: '8px',
													borderBottom: 'none',
													borderRight: 'none',
													boxShadow: '3px 3px #282963',

													// display: "flex",
													// flexDirection : 'column'
													// flexWrap : 'wrap'  292354
												}}
											>
												<img
													src={Venkat}
													alt=" "
													style={{
														width: '100%',
														maxWidth: '300px',
														display: 'block',
														marginLeft: 'auto',
														marginRight: 'auto',
													}}
												></img>
												{/* <div style={{display: 'flex', flexDirection: 'column'}}> */}
												<br />
												<h5
													className="card-title text-danger "
													style={{ textAlign: 'center', fontSize: '1.5rem' }}
												>
													Mr. Venkat Krishnapur
												</h5>

												<p
													className="card-text text-dark mb-1"
													style={{ fontSize: `1.3rem`, textAlign: 'center' }}
												>
													<strong>
														Vice President, Engineering & Managing Director,
														Trellix
													</strong>
													<span style={{ color: `#707070` }}></span>
												</p>
												<p
													className="card-text text-dark mb-1"
													style={{ fontSize: `medium`, textAlign: 'center' }}
												>
													<strong>Time : 4:15 PM to 5:15 PM</strong>
												</p>
												<p className="text-dark">
													Having started his career in 1985, he comes with a
													rich experience of 36 plus years in the industry and
													is a veteran in the software/ software assisted
													industry.
												</p>
												{/* </div> */}
											</div>
										</div>
									</div>

									<div className="col-md-5 py-2">
										<div className=" border-danger shadow">
											<div
												className="card-body"
												style={{
													// border: "2px solid #e2e6e9",
													border: '2px solid #e2e6e9',
													borderRadius: '8px',
													borderBottom: 'none',
													borderRight: 'none',
													boxShadow: '3px 3px #282963',

													// display: "flex",
													// flexDirection : 'column'
													// flexWrap : 'wrap'  292354
												}}
											>
												<img
													src={Bhavi}
													alt=" "
													style={{
														width: '100%',
														maxWidth: '300px',
														display: 'block',
														marginLeft: 'auto',
														marginRight: 'auto',
													}}
												></img>
												{/* <div style={{display: 'flex', flexDirection: 'column'}}> */}
												<br />
												<h5
													className="card-title text-danger "
													style={{
														textAlign: 'center',
														fontSize: '1.5rem',
														color: '#1d1836',
													}}
												>
													Mrs. Bhavi
												</h5>

												<p
													className="card-text text-dark mb-1"
													style={{ fontSize: `1.3rem`, textAlign: 'center' }}
												>
													<strong>Senior Engineer, Cred</strong>
													<span style={{ color: `#707070` }}></span>
												</p>
												<p
													className="card-text text-dark mb-1"
													style={{ fontSize: `medium`, textAlign: 'center' }}
												>
													<strong>Contact : bhavi.daftery@cred.club</strong>
												</p>
												<p className="text-dark">
													Bhavi did her B.Tech. from VJTI, Mumbai. She's been
													working on interesting problems (and some
													non-interesting) for the past 8 years. She's a
													Mumbaikar at heart, Isaac Asimov fan, loves travelling
													and painting.
												</p>
												{/* </div> */}
											</div>
										</div>
									</div>

									{/*  */}
									<div className="col-md-5 py-2">
										<div className=" border-danger shadow">
											<div
												className="card-body"
												style={{
													// border: "2px solid #e2e6e9",
													border: '2px solid #e2e6e9',
													borderRadius: '8px',
													borderBottom: 'none',
													borderRight: 'none',
													boxShadow: '3px 3px #282963',

													// display: "flex",
													// flexDirection : 'column'
													// flexWrap : 'wrap'  292354
												}}
											>
												<img
													src={Vinay}
													alt=" "
													style={{
														width: '100%',
														maxWidth: '300px',
														display: 'block',
														marginLeft: 'auto',
														marginRight: 'auto',
													}}
												></img>
												{/* <div style={{display: 'flex', flexDirection: 'column'}}> */}
												<br />
												<h5
													className="card-title text-danger "
													style={{
														textAlign: 'center',
														fontSize: '1.5rem',
														color: '#1d1836',
													}}
												>
													Vinay Manjunath
												</h5>
												<p
													className="card-text text-dark mb-1"
													style={{ fontSize: `1.3rem`, textAlign: 'center' }}
												>
													<strong>Director, Data Science at Envestnet</strong>
													<span style={{ color: `#707070` }}></span>
												</p>
												<p className="text-dark">
													For the past 5 years, as part of Envestnet Yodlee have
													been driving strategic initiatives by leveraging
													financial data and overlaying state of the art models
													on it. Overall have 14 years’ experience in Fintech
													and Financial domain. True believer in the power of
													leveraging data signals to enable customer goals and
													journeys. Currently obsessed with predicting the date
													on which we will be allowed back into our offices.
												</p>
												{/* </div> */}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
			{/* <Header active={5} />
      <h1>Speakers</h1>
      <div className="content-box">
        <div className="row">


        <div className="row">
            <div className="col py-2">
              <div className=" border-danger shadow">
                <div
                  className="card-body"
                  style={{
                    border: "2px solid #e2e6e9",
                    borderRadius: "8px",
                  }}
                  // style={{ border: "2px solid #dc3545", borderRadius: "8px" }}
                >
                  <h3 className="card-title text-danger">General Track</h3>
                  <p
                    className="card-text text-dark"
                    style={{ fontSize: `medium` }}
                  >
                    
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer/> */}
		</React.Fragment>
	);
};

export default Speakers;
