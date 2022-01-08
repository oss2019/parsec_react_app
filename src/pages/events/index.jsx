import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import EventBackground from '../../components/eventsBackground';
// import React, { useEffect } from 'react';
import './styles.css';
import '../../css/bootstrap.css';
import '../../css/style.css';
import '../../css/responsive.css';
import '../../css/counternew.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import parsecLogo from '../../images/logos/parsec-lg.png';
import logoAbout from '../../images/logos/logo-about.jpg';
import parsecSlider from '../../images/main-slider/4.jpg';
import hackathonBg from '../../images/resource/dev-home-bg.png';
import algoBg from '../../images/resource/algo-home-bg.png';
import ctfBg from '../../images/resource/vini-home-bg.png';
import quizBg from '../../images/resource/quiz-home-bg.png';
import cadBg from '../../images/resource/cad-home-bg.png';
import caseStudyBg from '../../images/resource/case-home-bg.png';
import Slide from 'react-reveal/Slide';
import { Card } from 'react-bootstrap';

const EventPage = () => {
	return (
		<React.Fragment>
			<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
					{/* <Button variant="primary">Go somewhere</Button> */}
				</Card.Body>
			</Card>
		</React.Fragment>
		// <React.Fragment>
		// 	<EventBackground />
		// 	<div className="page-wrapper">
		// 		<div className="preloader"></div>
		// 		<Header active={2} />
		// 		<div style={{ width: '100%', height: '150px' }}></div>
		// 		<Card style={{ width: '18rem' }}>
		// 			<Card.Img variant="top" src={cadBg}/>
		// 			<Card.Body>
		// 				<Card.Title>Card Title</Card.Title>
		// 				<Card.Text>
		// 					Some quick example text to build on the card title and make up the
		// 					bulk of the card's content.
		// 				</Card.Text>
		// 				{/* <Button variant="primary">Go somewhere</Button> */}
		// 			</Card.Body>
		// 		</Card>
		// 		{/* <section class="location-section">
		// 				<span class="float-text">Our Events</span>
		// 				<div class="anim-icons">
		// 					<span class="icon icon-dots wow zoomIn"></span>
		// 					<span class="icon icon-dots-2"></span>
		// 					<span class="icon icon-lines"></span>
		// 				</div>
		// 				<section id="events" class="events-section">
		// 					<div class="anim-icons">
		// 						<span class="icon icon-circle-1 wow zoomIn"></span>
		// 						<span
		// 							class="icon icon-circle-2 wow zoomIn"
		// 							data-wow-delay="300ms"
		// 						></span>
		// 						<span
		// 							class="icon icon-circle-3 wow zoomIn"
		// 							data-wow-delay="600ms"
		// 						></span>
		// 						<span
		// 							class="icon icon-circle-4 wow zoomIn"
		// 							data-wow-delay="900ms"
		// 						></span>
		// 					</div>
		// 					<div class="auto-container" style={{ width: '80%' }}>
		// 						<div class="sec-title">
		// 							<h2>Events</h2>
		// 						</div>
		// 						<div class="events-carousel owl-carousel owl-theme">
		// 							<div class="slide-item">
		// 								<div class="row">
		// 									<div class="content-column order-2 col-lg-5 col-md-12 col-sm-12">
		// 										<div class="inner-column">
		// 											<span class="title">Hackathon</span>
		// 											<h2>DevHack 3.0</h2>
		// 											<div class="text mb-3">
		// 												Do you have what it takes to code sleeplessly for 36
		// 												hrs to develop a groundbreaking piece of software?
		// 												Well then, this event's rightly engineered for you.
		// 												Devhack is a 36 hour hackathon attended in teams of
		// 												4 who would be participating within the themes and
		// 												problem statements provided. It's a hackathon where
		// 												the registered team would ideate, design and
		// 												innovate products by using their technical knowledge
		// 												and excel at it.
		// 											</div>
		// 										</div>
		// 									</div>

		// 									<div class="info-column col-lg-7 col-md-12 col-sm-12">
		// 										<div class="inner-column  bg-img">
		// 											<img src={hackathonBg} alt="" class="bg-img" />
		// 										</div>
		// 									</div>
		// 								</div>
		// 							</div>

		// 							<div class="slide-item">
		// 								<div class="row">
		// 									<div class="content-column order-2 col-lg-5 col-md-12 col-sm-12">
		// 										<div class="inner-column">
		// 											<span class="title">Competitive Coding</span>
		// 											<h2>AlgoStrike 2.0</h2>
		// 											<div class="text mb-3">
		// 												For normal people, maestro is a distinguished
		// 												performer of a musical instrument. Although, for us,
		// 												Code Maestro is someone who can interweave data
		// 												structures and algos to solve a problem efficiently.
		// 												Join us at this 3 hour long brainstorming coding
		// 												contest where you can turn yourself into a Code
		// 												Maestro!
		// 											</div>
		// 										</div>
		// 									</div>

		// 									<div class="info-column col-lg-7 col-md-12 col-sm-12">
		// 										<div class="inner-column bg-img">
		// 											<img src={algoBg} alt="" class="bg-img" />
		// 										</div>
		// 									</div>
		// 								</div>
		// 							</div>

		// 							<div class="slide-item">
		// 								<div class="row">
		// 									<div class="content-column order-2 col-lg-5 col-md-12 col-sm-12">
		// 										<div class="inner-column">
		// 											<span class="title">Capture the Flag</span>
		// 											<h2>VeniVidiVici 2.0</h2>
		// 											<div class="text mb-3">
		// 												Test your cybersecurity skills in this{' '}
		// 												<strong>
		// 													jeopardy-style CTF to conquer the flags hidden
		// 													throughout some machines.
		// 												</strong>{' '}
		// 												Solve computer security problems and/or capture and
		// 												defend computer systems by encrypting the codes.{' '}
		// 												<strong>
		// 													{' '}
		// 													Be assured that only knowledge won't suffice.{' '}
		// 												</strong>{' '}
		// 												You'll need a righteous blend of knowledge and
		// 												temperament to crack this one.
		// 											</div>
		// 										</div>
		// 									</div>

		// 									<div class="info-column col-lg-7 col-md-12 col-sm-12">
		// 										<div class="inner-column bg-img">
		// 											<img src={ctfBg} alt="" class="bg-img" />
		// 										</div>
		// 									</div>
		// 								</div>
		// 							</div>

		// 							<div class="slide-item">
		// 								<div class="row">
		// 									<div class="content-column order-2 col-lg-5 col-md-12 col-sm-12">
		// 										<div class="inner-column">
		// 											<span class="title">Sharpen your Mind</span>
		// 											<h2>Quiz</h2>
		// 											<div class="text mb-3">
		// 												Participate in this quiz, which is based on
		// 												technical aspects, where you can test how well you
		// 												are versed with technology you use!
		// 											</div>
		// 										</div>
		// 									</div>

		// 									<div class="info-column col-lg-7 col-md-12 col-sm-12">
		// 										<div class="inner-column bg-img">
		// 											<img src={quizBg} alt="" class="bg-img" />
		// 										</div>
		// 									</div>
		// 								</div>
		// 							</div>

		// 							<div class="slide-item">
		// 								<div class="row">
		// 									<div class="content-column order-2 col-lg-5 col-md-12 col-sm-12">
		// 										<div class="inner-column">
		// 											<span class="title">Design the World</span>
		// 											<h2>Designõ</h2>
		// 											<div class="text mb-3">
		// 												Design and Engineer your own product to solve a real
		// 												life problem and showcase it by creating a 3D model.
		// 												Join us in teams of 2 at this CAD Based product
		// 												design event!
		// 											</div>
		// 										</div>
		// 									</div>

		// 									<div class="info-column col-lg-7 col-md-12 col-sm-12">
		// 										<div class="inner-column bg-img">
		// 											<img src={cadBg} alt="" class="bg-img" />
		// 										</div>
		// 									</div>
		// 								</div>
		// 							</div>

		// 							<div class="slide-item">
		// 								<div class="row">
		// 									<div class="content-column order-2 col-lg-5 col-md-12 col-sm-12">
		// 										<div class="inner-column">
		// 											<span class="title">Show your Skills</span>
		// 											<h2>Ascensus</h2>
		// 											<div class="text mb-3">
		// 												Solve a real life industry problem engineered with
		// 												technical elements in an economically feasible way
		// 												by taking part in this event.
		// 											</div>
		// 										</div>
		// 									</div>

		// 									<div class="info-column col-lg-7 col-md-12 col-sm-12">
		// 										<div class="inner-column bg-img">
		// 											<img src={caseStudyBg} alt="" class="bg-img" />
		// 										</div>
		// 									</div>
		// 								</div>
		// 							</div>
		// 						</div>
		// 					</div>
		// 				</section>
		// 			</section> */}
		// 		<div style={{ width: '100%', height: '150px' }}></div>
		// 		<Footer />
		// 	</div>
		// 	{/* </div> */}
		// </React.Fragment>
	);
};

export default EventPage;
