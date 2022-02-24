import React from 'react';
import Header from '../../components/Header';
import './styles.css';
import '../../css/style.css';
import '../../css/bootstrap.css';
import '../../css/responsive.css';
import quizTitleBackground from '../../images/resource/19629.jpg';
import Footer from '../../components/Footer';
import EventsBackground from '../../components/eventsBackground';
import { useMediaQuery } from 'react-responsive';
const Quiz = () => {
	const isSmallDevice = useMediaQuery({ query: '(max-width:1026px)' });
	return (
		<React.Fragment>
			<div className="page-wrapper">
				<div className="preloader"></div>
				{/* <EventsBackground /> */}

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
						src="https://drive.google.com/uc?id=1Ns9Sv-U6ATfjO4z6UmDzdYLPJvDV3beq"
						style={{
							minWidth: '100vw',
							maxHeight: '70vh',
							objectFit: 'contain',
						}}
					/>
				</div>

				<section
					style={{
						marginTop: '0',
						background: '#000102',
					}}
				>
					<div className="auto-container">
						<div className="row">
							<div className="content-column col-lg-12 col-md-12 col-sm-12 tabs-content">
								<div className="inner-column tab active-tab" id="introduction">
									<section
										className="login-section"
										style={{
											//backgroundImage:`url(images/background/7.jpg)`,
											paddingTop: `0px`,
										}}
									>
										<div className="auto-container">
											<div
												className="login-form"
												style={
													{
														// boxShadow: `1px 1px 2px black, 0 0 35px blue, 0 0 15px darkblue`,
													}
												}
											>
												<div className="row clearfix">
													<h1
														className="mx-auto mt-5"
														style={{ color: `#66b6ff`, textAlign: `center` }}
													>
														Quiz
													</h1>

													<div className="form-column col-lg-12 col-md-12 col-sm-12">
														<div
															style={{ padding: `40px`, paddingBottom: `0px` }}
														>
															<div className="title-box">
																<div
																	className="text"
																	style={{ color: `#ffffff`, fontSize: `20px` }}
																>
																	Under <strong>PARSEC 2022</strong>, the Quiz
																	Club of IIT Dharwad is conducting a
																	<strong> Science and Technology Quiz </strong>{' '}
																	for High School and college students in and
																	around Dharwad-Hubli. The questions are
																	designed to investigate, rather than to simply
																	arrive at an answer, and specifically to
																	promote debate and discussion among teams
																	participating and the judges. The
																	participants' knowledge, expertise in high
																	school science, developments, and current news
																	from the world of Science and Technology will
																	be tested in the Quiz competition.
																</div>
															</div>
															<div
																className="row justify-content-center align-items-center"
																style={{ margin: `auto` }}
															>
																<div
																	className="btn-box"
																	style={{ textAlign: `center` }}
																>
																	<a
																		href="https://dare2compete.com/quiz/technoquiz-parsec-a-paradigm-shift-indian-institute-of-technology-iit-dharwad-262190"
																		target="_blank"
																		className="theme-btn btn-style-two btn-rounded mb-4"
																		// id="btncs"
																		style={{
																			// pointerEvents: `none`,
																			textDecoration: `none`,
																		}}
																	>
																		REGISTER NOW
																	</a>
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
																textShadow: '2px 2px 2px rgba(0, 0, 255,0.8)',
																textAlign: 'center',
															}}
														>
															Registrations Closes on 04 Mar'22 12:00 AM IST !
														</p>
													</div>

													<x-sign
														style={{
															fontSize: '30px',
															textAlign: 'center',
															margin: 'auto',
															paddingTop: '10px',
														}}
													>
														Prizes Worth &#8377; 1,10,000
													</x-sign> */}

													{/* <div className="image-column col-lg-11 col-sm-12 col-sm-12">
														<div
															className="image-box wow fadeIn"
															style={{ paddingTop: `0px` }}
														>
															<figure
																className="image"
																style={{
																	marginLeft: `auto`,
																	marginRight: `auto`,
																}}
															>
																<img
																	src="images/resource/quiz.jpg"
																	className="rounded mx-auto d-block"
																	alt=""
																	style={{ margin: `auto`, maxWidth: `500px` }}
																></img>
															</figure>
														</div>
													</div> */}

													<br></br>

													<div
														className="form-column col-lg-12 col-md-12 col-sm-12"
														style={{ padding: `40px` }}
													>
														<div
															className=""
															style={{
																border: '2px solid #66b6ff',
																borderRadius: '8px',
																overflow: 'hidden',
															}}
														>
															<div
																style={{
																	// backgroundColor: `#090b38`,
																	fontFamily: `'Roboto', sans-serif`,
																	fontSize: `large`,
																	fontWeight: `bold`,
																}}
																className="card-body text-center text-danger"
															>
																<div className="row">
																	<div
																		className="col-md-6"
																		style={{ color: `#66b6ff` }}
																	>
																		Duration: 3 hours
																	</div>
																	<div
																		className="col-md-6"
																		style={{ color: `#66b6ff` }}
																	>
																		Team Size: 2
																	</div>
																</div>
															</div>
														</div>

														<br />
														<p style={{ fontSize: `large`, color: `#ffffff` }}>
															The topics covered in the quiz would be basic
															knowledge of high school science, developments and
															current news from the world of Science and
															Technology.
														</p>
														<ul
															className="list-style-four"
															style={{ fontSize: `large`, color: `#66b6ff` }}
														>
															<li style={{ color: `#66b6ff` }}>
																Quiz starts: 12:30 PM, 5th March, 2022
															</li>
															<li style={{ color: `#66b6ff` }}>
																Students of Standard 9th to 12th and
																Undergraduate are welcome
															</li>
															<li style={{ color: `#66b6ff` }}>
																Participants should belong to the same
																school/college
															</li>
															<li style={{ color: `#66b6ff` }}>
																School/College ID Cards needed for verification
															</li>

															<li style={{ color: `#66b6ff` }}>
																Max. 5 Teams will be selected from a school.
															</li>
														</ul>
														{/* &nbsp; */}
														<p
															style={{
																fontFamily: `FontAwesome, sans-serif`,
																fontSize: `large`,
																color: `#ffffff`,
															}}
														>
															All participants would be competing amongst
															themselves for a chance to participate in the
															finals. Top 8 teams would advance from the
															preliminary round to the finals.
														</p>

														<p
															className="font-weight-bold"
															style={{
																fontFamily: `FontAwesome`,
																fontSize: `large`,
																color: `#ffffff`,
															}}
														>
															<strong>
																Amazing prizes for all the finalists and
																participation certificates for all the
																participants.
															</strong>
														</p>

														<p
															style={{ fontSize: `large`, color: `#ffffff` }}
															className="font-weight-bold"
														>
															Still have queries? Join us on our Telegram{' '}
															<a
																href="https://t.me/parsecquiz"
																style={{
																	color: `#66b6ff`,
																	textDecoration: `None`,
																}}
																target={'_blank'}
															>
																channel
															</a>{' '}
															and we'll try our best to answer all your doubts.
														</p>
													</div>
												</div>
											</div>
										</div>
									</section>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default Quiz;
