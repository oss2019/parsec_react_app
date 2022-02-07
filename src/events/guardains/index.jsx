import React, { lazy, Suspense, useState, useEffect } from 'react';
import Header from '../../components/Header';
import './styles.css';
import '../../css/style.css';
import '../../css/bootstrap.css';
import '../../css/responsive.css';
import Footer from '../../components/Footer';
import EventsBackground from '../../components/eventsBackground';
import { useMediaQuery } from 'react-responsive';
const Guardains = () => {
	const isTabletorMobile = useMediaQuery({ query: '(max-width: 550px)' });
	const isTab = useMediaQuery({ query: '(max-width:1026px)' });
	const isMobile = useMediaQuery({ query: '(max-width:425px)' });
	const issm = useMediaQuery({ query: '(max-width:400px)' });
	return (
		<React.Fragment>
			<EventsBackground />
			<div className="page-wrapper">
				<div className="preloader"></div>

				<Header active={2} />
				<section
					className="page-title"
					style={{ overflow: 'visible', paddingRight: 0, padding: '0' }}
				>
					<img
						src={`${
							isTabletorMobile
								? 'https://drive.google.com/uc?id=18G70T6VzylhWIYkJy8xufkRlEjnUUEAH'
								: 'https://drive.google.com/uc?id=1YARnk_4npbrq111wY9AsRi6TGtkx7RB8'
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
							background: 'rgba(22, 22, 50, 0.8)',

							boxShadow: `1px 1px 2px rgba(0, 0, 0, 0.25), 0 0 35px rgba(0, 0, 0, 0.25), 0 0 15px rgba(0, 0, 0, 0.25)`,
						}}
					>
						<div className="pt-4 row clearfix">
							<h1
								className="px-3 py-2 w-100 text-center"
								style={{
									fontFamily: 'poppins',
									color: 'rgba(43, 171, 214)',
								}}
							>
								GuardAIns
							</h1>
							<h2
								className="px-3 py-2 w-100 text-center"
								style={{
									fontFamily: 'poppins',
									color: 'rgba(43, 171, 214)',
								}}
							>
								AI TOURNAMENT
							</h2>

							<div className="form-column col-lg-12 col-md-12 col-sm-12">
								<div className="py-0 px-2">
									<div className="title-box">
										<div
											className="text"
											style={{
												color: '#c4c4c4',
												fontSize: 'Large',
												fontFamily: `FontAwesome, sans-serif`,
											}}
										>
											GuardAIns is an AI tournament in which participants must
											utilize their knowledge to develop bots that will navigate
											the maze independently in search of the Power stone and
											bring it back to their base. These five Guardians each
											have five unique special powers that will aid in the
											pursuit of the Power Stone.
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
								<div className="border-info">
									<div
										className="row-cols-1"
										style={{
											border: '2px solid #2b75d6',
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
												background: '#2d3645',
											}}
										>
											<div className="row">
												<div className="col-md-6" style={{ color: '#2babd6' }}>
													Duration : 2 Days
												</div>
												<div className="col-md-6" style={{ color: '#2babd6' }}>
													Team Size : 2
												</div>
											</div>
										</div>{' '}
									</div>
								</div>

								<br />

								<p
									style={{
										fontFamily: `FontAwesome, sans-serif`,
										fontSize: `large`,
										color: `#c4c4c4`,
									}}
								>
									An AI tournament in which each participant must guide their
									five guardians over the map in order to uncover the hidden
									power stone.
								</p>

								<p
									style={{
										fontFamily: `FontAwesome, sans-serif`,
										fontSize: `large`,
										color: `#c4c4c4`,
									}}
								>
									Participants will have to devise a Python program to guide
									their troops past the obstacles, traps, and opponents, making
									use of the different talents possessed by each of the
									guardians.
								</p>

								<br />

								<ul className="list-style-four list-style-four1">
									<li
									// style={{color : '#c4c4c4'}}
									>
										Contest starts: 5 March 2022, 2:00 PM
										{/* <strong> - </strong> */}
									</li>
									<li
									// style={{color : '#c4c4c4'}}
									>
										{' '}
										Only python programming language is to be used.
									</li>
									<li
									// style={{color : '#c4c4c4'}}
									>
										{' '}
										Code of conduct to be followed.{' '}
									</li>
									<li
									// style={{color : '#c4c4c4'}}
									>
										The bots will battle against each other, and the game will
										be won by the first player to discover the stone and bring
										it back to their base.
									</li>
								</ul>

								<br />
								<p
									className="font-weight-bold"
									style={{ fontSize: 'large', color: '#c4c4c4' }}
								>
									Still have queries? Reach out to us on our Telegram{' '}
									<a
										href="https://t.me/parsec_guardians"
										target="_blank"
										style={{ color: 'rgba(43, 171, 214)' }}
										rel="noreferrer"
									>
										channel
									</a>{' '}
									and we will try our best to answer all of them.
								</p>
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

export default Guardains;
