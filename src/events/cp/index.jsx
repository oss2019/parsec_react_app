import React, { lazy, Suspense, useState, useEffect } from 'react';
import Header from '../../components/Header';
import './styles.css';
import '../../css/style.css';
import '../../css/bootstrap.css';
import '../../css/responsive.css';
import Footer from '../../components/Footer';
// import '../../css/prices.css'
// import '../../css/winners.css'

const Cp = () => {
	// Set loading state to true initially
	// const [loading, setLoading] = useState(true);

	// useEffect(() => {
	// 	// Loading function to load data or
	// 	// fake it using setTimeout;
	// 	const loadData = async () => {
	// 		// Wait for two second
	// 		await new Promise((r) => setTimeout(r, 2000));

	// 		// Toggle loading state
	// 		setLoading((loading) => !loading);
	// 	};

	// 	loadData();
	// }, []);

	// // If page is in loading state, display
	// // loading message. Modify it as per your
	// // requirement.
	// if (loading) {
	// 	return <div className="preloader"></div>;
	// }

	// If page is not in loading state, display page.
	// else {
	// 	return <h1>Home</h1>;
	// }
	// else {
		return (
			<React.Fragment>
				<Header />
				<div className="page-wrapper">
					{/* <Suspense fallback={<div className="preloader"></div>} /> */}
					<div className="preloader"></div>
					{/* <div className="form-back-drop"></div> */}

					<section className="page-title" id="page-title" style={{}}>
						{/* <canvas id="c" style={{position: 'absolute', top: '0px', left: '0px', backgroundColor: 'black'}}></canvas> */}
						<div className="auto-container" style={{}}>
							<div className="project-tabs tabs-box">
								<div
									className="inner-column tab active-tab"
									id="introduction"
									style={{ background: 'rgba(34, 40, 49, 0.87)' }}
								>
									<section
										className="login-section"
										style={{
											backgroundImage: 'url(images/background/7.jpg)',
											paddingTop: '0px',
										}}
									>
										<div className="auto-container">
											<div className="login-form">
												<div className="pt-4 row clearfix">
													<h1
														className="px-3 py-2 w-100 text-center"
														style={{
															fontFamily: 'poppins',
															color: 'rgba(0, 173, 181)',
														}}
													>
														ALGOSTRIKE
													</h1>
													<h2
														className="px-3 py-2 w-100 text-center"
														style={{
															fontFamily: 'poppins',
															color: 'rgba(0, 173, 181)',
														}}
													>
														ALGORITHMIC PROGRAMMING CONTEST
													</h2>

													<div className="form-column col-lg-12 col-md-12 col-sm-12">
														<div className="py-0 px-2">
															<div className="title-box">
																<div
																	className="text"
																	style={{ color: '#eeeeee', fontSize: '20px' }}
																>
																	An algorithmic programming contest where teams
																	of three have to solve an engineering problem
																	by applying heuristic algorithms. Participants
																	will have to work on an ingenious solution for
																	a problem statement released at the start of
																	the event.
																</div>
																<div
																	className="row justify-content-center align-items-center"
																	style={{ margin: 'auto' }}
																>
																	<div className="btn-box text-center">
																		<a
																			href=""
																			className="theme-btn btn-style-four button text-center"
																			id="btncs"
																			style={{
																				borderRadius: '8px',
																				color: '#ffffff',
																				// background: '#f20487',
																			}}
																		>
																			Coming Soon
																		</a>
																	</div>
																</div>
															</div>
														</div>
													</div>

													<div
														className="form-column col-lg-12 col-md-12 col-sm-12"
														style={{ padding: '40px' }}
													>
														<div className="card border-info">
															<div
																className="card-body text-center text-info"
																style={{
																	fontFamily: 'Roboto, sans-serif',
																	fontSize: 'large',
																	fontWeight: 'bold',
																	background: '#393e46',
																}}
															>
																<div className="row">
																	<div className="col-md-6">
																		Duration: 3 hours
																	</div>
																	<div className="col-md-6">Team Size: 1</div>
																</div>
															</div>
														</div>

														<br />

														<ul className="list-style-four">
															<li>
																Contest starts:
																<strong> 9:30 AM, February 16, 2020 </strong>
															</li>
															<li>Code of Conduct to be followed.</li>
															<li>
																Carry fully charged laptops. At least one laptop
																per team is required.
															</li>
															<li>
																Internet connection and charging points will be
																provided during the event.
															</li>
															<li>
																Teams will be judged on the basis of how optimal
																their solution is compared to the other teams.{' '}
															</li>
														</ul>

														<br />
														<p
															className="font-weight-bold"
															style={{ fontSize: 'large', color: '#eeeeee' }}
														>
															Still have queries? Reach out to us on our
															Telegram{' '}
															<a
																href="https://t.me/joinchat/PV9kHhZ3gKWJv7V-nQLrPA"
																target="_blank"
																style={{ color: '#00adb5' }}
															>
																channel
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
	// }
};

export default Cp;
