import React from 'react';
import Header from '../../components/Header';
import './styles.css';
import '../../css/style.css';
import '../../css/bootstrap.css';
import '../../css/responsive.css';
import Footer from '../../components/Footer';
import EventsBackground from '../../components/eventsBackground';
import { useMediaQuery } from 'react-responsive';

const Ctf = () => {
	const isSmallDevice = useMediaQuery({
		query: '(max-width:1026px)',
	});

	return (
		<React.Fragment>
			<div className="page-wrapper">
				{/* <EventsBackground /> */}
				<div className="preloader"></div>

				<Header active={2} />
				<div
					style={{
						marginTop: isSmallDevice ? '55px' : '0',
						background: '#000102',
						top: 0,
						display: 'flex',
						alignItems: 'flex-start',
					}}
				>
					<img
						src="https://drive.google.com/uc?id=1GAn_A6lnppbmjMIN-UpaWnr-gxEXotsq"
						style={{
							minWidth: '100vw',
							maxHeight: '70vh',
							objectFit: 'contain',
						}}
					/>
				</div>
				<section
					style={{
						position: 'relative',
						margin: ' 0',
						// background: `rgba(7, 9, 	12, 0.87)`,
						background: '#000102',
					}}
				>
					{/* <canvas></canvas> */}
					<div className="auto-container">
						<div className="project-tabs tabs-box">
							<div
								className="inner-column tab active-tab"
								id="introduction"
								// style={{ background: `rgba(7, 9, 	12, 0.87)` }}
							>
								<section
									className="login-section"
									style={{
										backgroundImage: `url(images/background/7.jpg)`,
										paddingTop: `0px`,
									}}
								>
									<div className="auto-container">
										<div className="login-form">
											<div className="pt-4 row clearfix">
												<h1
													className="px-3 py-2 w-100 text-center text-info"
													style={{ fontFamily: `poppins` }}
												>
													VeniVidiVici
												</h1>
												<h2
													className="px-3 py-2 w-100 text-center text-info"
													style={{ fontFamily: `poppins` }}
												>
													CTF Security Challenge
												</h2>
												<div className="form-column col-lg-12 col-md-12 col-sm-12">
													<div className="py-0 px-2">
														<div className="title-box">
															<div
																className="text"
																style={{ color: `#eeeeee`, fontSize: `20px` }}
															>
																This jeopardy style online CTF (Capture the
																Flag) is all about your team putting its hacking
																skills to the test to capture various flags
																hidden throughout the websites/IPs given to you.
															</div>
														</div>
													</div>
												</div>
												<div
													className="row justify-content-center align-items-center col-lg-12"
													style={{ margin: `auto` }}
												></div>
												<div className="col-lg-4"></div>
												<div
													className="col-lg-4"
													style={{
														maxWidth: `250px`,
														maxHeight: `200px`,
														textAlign: 'center',
														maxWidth: '100%',
													}}
												>
													{/* <br> */}
													{/* <ul className="ul1" style={{ paddingRight: `30px`, textAlign: 'center' }}>
														<a
															// href=" https://parseciitdh.typeform.com/to/FuAQay"
															style={{ textDecoration: 'none' }}
														>
															<li className="li1" style={{maxWidth: '330px'}}>Register Now</li>
														</a>
														<li
															className="li1"
															style={{
																marginRight: `40px`,
																paddingRight: `40px`,
																maxWidth: `330px`,textAlign:'center'
															}}
														>
															<a
																href="https://venividivici.iitdh.ac.in/"
																style={{
																	color: `#ffffff`,
																	width: '100%',
																	textDecoration: 'none',textAlign: 'center'
																}}
															>
																proceed to ctf
															</a>
														</li>
													</ul> */}
													<div
														className="row justify-content-center align-items-center "
														style={{ margin: 'auto', paddingTop: '40px' }}
													>
														<div className="btn-box text-center">
															<a
																href="https://forms.gle/93wrwNAX4EnvMiiSA"
																className="theme-btn btn-style-four button2 text-center"
																id="btncs2"
																style={{
																	borderRadius: '8px',
																	color: '#ffffff',
																	// background: 'rgba(242, 172, 79,0.9)',
																}}
																target="_blank"
															>
																Register Now
															</a>
														</div>
													</div>
												</div>
												<div className="col-lg-4"></div>
												<div
													className="row justify-content-center align-items-center col-lg-12"
													style={{ margin: `auto` }}
												>
													{/* <h5
														style={{
															color: `#3ca2b8`,
															paddingTop: `20px`,
															textShadow: `1px 1px 2px black, 0 0 1em #3ca2b8, 0 0 0.2em #3ca2b8`,
															paddingBottom: `20px`,
															textAlign: `center`,
														}}
													>
														All teams need to register{' '}
														<a
															href="https://venividivici.iitdh.ac.in/"
															style={{
																textDecoration: `None`,
																color: `#f20487`,
															}}
														>
															here
														</a>{' '}
														before proceeding.
													</h5> */}
												</div>

												{/* <div
                          className="row justify-content-center align-items-center col-lg-12"
                          style={{ margin: "auto" }}
                        >

                          <p
                            style={{
                              color: "#fff",
                              fontSize: "20px",
                              textShadow: "2px 2px 2px rgba(255, 165, 0,0.7)",
                              textAlign: "center",
							  paddingTop: '20px'
                            }}
                          >
                            Registrations Closes on 5 March 2022 7:00 AM IST !
                          </p> */}

												{/* </div> */}

												{/* <x-sign
                          style={{
                            fontSize: "30px",
                            textAlign: "center",
                            margin: "auto",
                            paddingTop: "10px",
                            
                          }}
                        >
                          Prizes Worth &#8377; 70,000
                        </x-sign> */}

												<div
													className="form-column col-lg-12 col-md-12 col-sm-12"
													style={{ padding: `30px 40px 40px 40px` }}
												>
													<div
														className="border-info"
														style={{
															border: '2px solid #3ca2b8',
															borderRadius: '8px',
															overflow: 'hidden',
														}}
													>
														<div
															// style={{ background: `rgb(7, 9, 12)` }}
															class="card-body text-center"
														>
															<div className="row">
																<div className="col-md-6 text-info">
																	Duration: 12 hours
																</div>
																<div className="col-md-6 text-info">
																	Team Size: 2
																</div>
															</div>
														</div>
													</div>
													{/* </br> */}
													<p
														style={{
															fontSize: `large`,
															color: `#eeeeee`,
														}}
														className="font-weight-bold"
													>
														This is online CTF security challenge. The event
														starts at
														<strong> 8:00 PM on 4th March, 2022.</strong>
														<br />
														Below are the categories on which the event will be
														based, given so that you'll put up a good fight!
													</p>
													<ul className="list-style-four mb-1	">
														<li>Pwning</li>
														<li>Cryptography</li>
														<li>Web Exploitation</li>
														<li>Reverse Engineering</li>
														<li>Forensics</li>
														<li>Binary Exploitation</li>
													</ul>
													<p
														style={{
															fontSize: `large`,
															color: `#eeeeee`,
														}}
														className="font-weight-bold"
													>
														Each flag awards a certain number of points to the
														team that captures it (points vary from flag to flag
														depending on how hard the exploit is).
													</p>
													<p
														style={{
															fontSize: `large`,
															color: `#eeeeee`,
														}}
														className="font-weight-bold"
													></p>
													<p
														style={{
															fontSize: `large`,
															color: `#eeeeee`,
														}}
														className="font-weight-bold"
													>
														Still have queries? Reach out to us on{' '}
														<a
															href="https://discord.gg/xwaHg8YDKK"
															style={{
																color: `#00adb5`,
																textDecoration: `None`,
															}}
															target="_blank"
														>
															discord
														</a>{' '}
														and we will try our best to answer all of them.
													</p>
												</div>
											</div>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default Ctf;
