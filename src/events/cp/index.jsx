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
	const isSmallDevice = useMediaQuery({ query: '(max-width:1026px)' });
	return (
		<React.Fragment>
			{/* <EventsBackground /> */}
			<div className="page-wrapper">
				{/* <Suspense fallback={<div className="preloader"></div>} /> */}
				<div className="preloader"></div>
				{/* <div className="form-back-drop"></div> */}
				<Header active={2} />
				{/* <section
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
				</section> */}
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
						src="https://drive.google.com/uc?id=1d1yLUmNeyn1vnGsgLY9iSDa0s9NB3bBx"
						style={{ minWidth: '100vw', maxHeight: '70vh' }}
					/>
				</div>
				{/* <div
					style={{
						background: 'linear-gradient(180deg, #8EBBFF 0%, #048DFB 100%)',
						minWidth: '100vw',
						height: '50vh',
						objectFit: 'cover',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<h1 style={{color: 'white', fontSize: '100px'}}>{'<'}ALGOSTRIKE{'>'}</h1>
				</div> */}
				<section
					style={{
						position: 'relative',
						margin: '0',
						// background: 'rgba(34, 40, 49, 0.87)',
						background: '#000000',
					}}
				>
					<div className="login-form auto-container" style={{}}>
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
											An algorithmic programming contest which tests your
											knowledge of various heuristic algorithms. It is an event
											under Parsec'22 IIT Dharwad's annual tech fest and in
											association with Coding Ninjas. The objective of the
											contest is that the participants have to formulate
											solutions to a multitude of fascinating engineering
											problems utilizing heuristic algorithms. Grab this chance
											to bag prizes worth <strong>2 Lakhs!</strong> Get set
											algo!
										</div>
										<br />
										<br />
										<div
											className="row justify-content-center align-items-center"
											style={{ margin: 'auto' }}
										>
											{/* <div className="btn-box text-center">
												<a
													href="https://bit.ly/3GyVYHn"
													className="theme-btn btn-style-four button text-center"
													id="btncs"
													target="_blank"
													style={{
														borderRadius: '8px',
														color: '#ffffff',
														// background: '#f20487',
													}}
												>
													Register Now
												</a>
											</div> */}
											<div className="padding" />
											<div className="btn-box text-center">
												<a
													href="/participation"
													className="theme-btn btn-style-four button text-center"
													id="btncs"
													target="_blank"
													style={{
														borderRadius: '8px',
														color: '#ffffff',
														// background: '#f20487',
													}}
												>
													Get Certificates
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* <div
								className="row justify-content-center align-items-center col-lg-12"
								style={{ margin: 'auto' }}
							>
								<p
									style={{
										color: '#fff',
										fontSize: '20px',
										textShadow: '2px 2px 2px rgba(0, 173, 181,0.7)',
										textAlign: 'center',
									}}
								>
								</p>
							</div> */}

							{/* <x-sign
								style={{
									fontSize: '30px',
									textAlign: 'center',
									margin: 'auto',
									paddingTop: '10px',
									paddingBottom: '10px',
								}}
							>
								Prizes Worth &#8377; 2,00,000
							</x-sign> */}

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
												<div className="col-md-6">Duration: 2 hours</div>
												<div className="col-md-6">Team Size: 1</div>
											</div>
										</div>{' '}
									</div>
								</div>
								<br />
								<ul className="list-style-four">
									<li>Registrations Closes on 5 March 2022 3:00 PM IST</li>
									<li>
										Contest starts:
										<strong> 3:00 PM, March 5, 2022 </strong>
									</li>
									<li></li>
									<li>Code of Conduct to be followed.</li>
									{/* <li>
										Carry fully charged laptops. At least one laptop per team is
										required.
									</li>
									<li>
										Internet connection and charging points will be provided
										during the event.
									</li> */}
									<li>
										For every wrong submission, penalty of 10 minutes would be
										imposed.
									</li>
									{/* <li>
										Teams will be judged on the basis of how optimal their
										solution is compared to the other teams.{' '}
									</li> */}
									<li>
										Participants would be ranked on the basis of their
										submission time and penalties.
									</li>
								</ul>
								<br />
								{/* <br /> */}
								<p
									className="font-weight-bold"
									style={{ fontSize: 'large', color: '#eeeeee' }}
								>
									To know more, head to our{' '}
									<strong
										style={{
											cursor: 'pointer',
										}}
									>
										<a
											href="https://drive.google.com/file/d/1e9DQO-uqzYDn-pbU7fdA3MOryEkEiQIB/view?usp=sharing"
											target={'_blank'}
											style={{
												textDecoration: 'none',
												color: 'rgba(0, 173, 181)',
											}}
										>
											Rulebook
										</a>
									</strong>
									&nbsp; and&nbsp;
									<strong
										style={{
											cursor: 'pointer',
										}}
									>
										<a
											href="https://drive.google.com/file/d/1S5BuGZcQSCHTSX72IXQKlw9Nz5IYSN0J/view?usp=sharing"
											target={'_blank'}
											style={{
												textDecoration: 'none',
												color: 'rgba(0, 173, 181)',
											}}
										>
											Prizes Distributions.
										</a>
									</strong>
									<br />
									Still have queries? Reach out to us on our Telegram{' '}
									<a
										href="https://t.me/+j4lRweNxm200OWNl"
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
