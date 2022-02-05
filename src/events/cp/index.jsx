import React, { lazy, Suspense, useState, useEffect } from 'react';
import Header from '../../components/Header';
import './styles.css';
import '../../css/style.css';
import '../../css/bootstrap.css';
import '../../css/responsive.css';
import Footer from '../../components/Footer';
import EventsBackground from '../../components/eventsBackground';
// import '../../css/prices.css'
// import '../../css/winners.css'
import { useMediaQuery } from 'react-responsive';
const Cp = () => {
	const isTabletorMobile = useMediaQuery({ query: '(max-width: 550px)' });
	const isTab = useMediaQuery({ query: '(max-width:1026px)' });
	const isMobile = useMediaQuery({ query: '(max-width:425px)' });
	const issm = useMediaQuery({ query: '(max-width:400px)' });
	return (
		<React.Fragment>
			<EventsBackground />
			<div className="page-wrapper">
				{/* <Suspense fallback={<div className="preloader"></div>} /> */}
				<div className="preloader"></div>
				{/* <div className="form-back-drop"></div> */}
				<Header active={2} />
				<section
					className="page-title"
					style={{ overflow: 'visible', paddingRight: 0, padding: '0' }}
				>
					<img
						src={`${
							isTabletorMobile
								? 'https://drive.google.com/uc?id=16D0dyvXdUCcP0U6IN45Xbv2ROWwbwF5z'
								: 'https://drive.google.com/uc?id=1jAlqvXWkDimYfAvLkg0bO19lOpPptWNS'
						}`}
						id="hack-title"
						style={{
							marginTop: isTab
								? isMobile
									? issm
										? '55px'
										: '45px'
									: '60px'
								: '',
							objectFit: 'cover',
							width: '100vw',
							padding: '0',
						}}
					/>
				</section>
				<section style={{ position: 'relative', margin: ' 100px 0' }}>
					<div
						className="login-form auto-container"
						style={{
							background: 'rgba(34, 40, 49, 0.87)',
							boxShadow: `1px 1px 2px rgba(0, 0, 0, 0.25), 0 0 35px rgba(0, 0, 0, 0.25), 0 0 15px rgba(0, 0, 0, 0.25)`,
						}}
					>
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
											An algorithmic programming contest where teams of three
											have to solve an engineering problem by applying heuristic
											algorithms. Participants will have to work on an ingenious
											solution for a problem statement released at the start of
											the event.
										</div>
										<br />
										<br />
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
								style={{ width: '100%' }}
							>
								{/* <div className="card border-info" style={{display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'flex-end'}} >
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
														</div> */}
								<div className="border-info">
									<div
										className="row-cols-1"
										style={{
											border: '2px solid #47aeb5',
											borderRadius: '8px',
											overflow: 'hidden',
										}}
									>
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
												<div className="col-md-6">Duration: 3 hours</div>
												<div className="col-md-6">Team Size: 1</div>
											</div>
										</div>{' '}
									</div>
								</div>

								<br />

								<ul className="list-style-four">
									<li>
										Contest starts:
										<strong> 3:00 PM, March 5, 2022 </strong>
									</li>
									<li>Code of Conduct to be followed.</li>
									<li>
										Carry fully charged laptops. At least one laptop per team is
										required.
									</li>
									<li>
										Internet connection and charging points will be provided
										during the event.
									</li>
									<li>
										Teams will be judged on the basis of how optimal their
										solution is compared to the other teams.{' '}
									</li>
								</ul>

								<br />
								<p
									className="font-weight-bold"
									style={{ fontSize: 'large', color: '#eeeeee' }}
								>
									Still have queries? Reach out to us on our Telegram{' '}
									<a
										href="https://t.me/algostrike"
										target="_blank"
										style={{ color: '#00adb5' }}
										rel="noreferrer"
									>
										channel
									</a>{' '}
									and we will try our best to answer all of them.
								</p>
							</div>
						</div>
					</div>
					{/* </div> */}
					{/* </section> */}
					{/* </div> */}
					{/* </div> */}
					{/* </div> */}
				</section>
			</div>
			<Footer />
		</React.Fragment>
	);
	// }
};

export default Cp;
