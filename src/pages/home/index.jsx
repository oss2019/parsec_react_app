import React, { useEffect } from 'react';
import './styles.css';
import '../../css/counternew.css';
import '../../css/bootstrap.css';
import '../../css/style.css';
import '../../css/responsive.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import parsecLogo from '../../images/logos/parsec-lg.png';
import logoAbout from '../../images/logos/logo-about.jpg';

import EventCarousel from './eventsCarousel';
// import Typewriter from 'typewriter-effect';

import { Typewriter } from '@chrisfieldsii/react-use-typewriter';
import '@chrisfieldsii/react-use-typewriter/dist/index.css';
const Home = () => {
	useEffect(() => {
		function getTimeRemaining(endtime) {
			// 'use strict';
			var t = Date.parse(endtime) - Date.parse(new Date());
			//document.write(endtime.getTimezoneOffset());
			//document.write(t/1000);
			//document.write(t/1000+(endtime.getTimezoneOffset()));
			var use = t / 1000 + endtime.getTimezoneOffset() * 60;
			//var use =( t / 1000);
			var seconds = Math.floor(use % 60);
			var minutes = Math.floor((use / 60) % 60);
			var hours = Math.floor((use / (60 * 60)) % 24);
			var days = Math.floor(use / (60 * 60 * 24));
			return {
				total: t,
				days: days,
				hours: hours,
				minutes: minutes,
				seconds: seconds,
			};
		}

		function initializeClock(id, endtime) {
			// 'use strict';
			var clock = document.getElementById(id);
			var daysSpan = clock.querySelector('.days');
			var hoursSpan = clock.querySelector('.hours');
			var minutesSpan = clock.querySelector('.minutes');
			var secondsSpan = clock.querySelector('.seconds');

			function updateClock() {
				var t = getTimeRemaining(endtime);

				daysSpan.innerHTML = t.days;
				hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
				minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
				secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

				if (t.total <= 0) {
					clearInterval(timeinterval);
				}
			}

			updateClock();
			var timeinterval = setInterval(updateClock, 1000);
		}
		//var deadline = "17/01/2020";
		var date1 = new Date('2022-03-04T18:30:00Z');
		var date2 = new Date();
		//document.write(date2.getHours());
		//document.write(date1.getHours());
		var seconds = date1.getTime() - date2.getTime(); //1440516958
		var deadline = new Date(Date.parse(new Date()) + seconds);
		initializeClock('clockdiv', deadline);

		(function ($) {
			// 'use strict';

			//Hide Loading Box (Preloader)
			function handlePreloader() {
				if ($('.preloader').length) {
					$('.preloader').delay(200).fadeOut(500);
				}
			}

			//Update Header Style and Scroll to Top
			function headerStyle() {
				if ($('.main-header').length) {
					var windowpos = $(window).scrollTop();
					var siteHeader = $('.main-header');
					var scrollLink = $('.scroll-to-top');
					if (windowpos >= 1) {
						siteHeader.addClass('fixed-header');
						scrollLink.fadeIn(300);
					} else {
						siteHeader.removeClass('fixed-header');
						scrollLink.fadeOut(300);
					}
				}
			}

			headerStyle();
			//About Carousel
			// if ($('.about-carousel').length) {
			// 	$('.about-carousel').owlCarousel({
			// 		animateOut: 'slideOutDown',
			// 		animateIn: 'zoomIn',
			// 		loop: true,
			// 		margin: 30,
			// 		nav: true,
			// 		smartSpeed: 500,
			// 		autoHeight: true,
			// 		autoplay: true,
			// 		autoplayTimeout: 5000,
			// 		navText: [
			// 			'<span class="fa fa-chevron-left"></span>',
			// 			'<span class="fa fa-chevron-right"></span>',
			// 		],
			// 		responsive: {
			// 			0: {
			// 				items: 1,
			// 			},
			// 			600: {
			// 				items: 1,
			// 			},
			// 			1024: {
			// 				items: 1,
			// 			},
			// 		},
			// 	});
			// }

			//Events Carousel
			// if ($('.events-carousel').length) {
			// 	$('.events-carousel').owlCarousel({
			// 		animateOut: 'slideOutDown',
			// 		animateIn: 'fadeInUp',
			// 		loop: true,
			// 		margin: 0,
			// 		nav: true,
			// 		smartSpeed: 700,
			// 		autoHeight: true,
			// 		mouseDrag: false,
			// 		autoplay: true,
			// 		autoplayTimeout: 10000,
			// 		navText: [
			// 			'<span class="fa fa-angle-left"></span>',
			// 			'<span class="fa fa-angle-right"></span>',
			// 		],
			// 		responsive: {
			// 			0: {
			// 				items: 1,
			// 			},
			// 			600: {
			// 				items: 1,
			// 			},
			// 			1024: {
			// 				items: 1,
			// 			},
			// 		},
			// 	});
			// }

			/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

			$(window).on('scroll', function () {
				headerStyle();
			});

			/* ==========================================================================
   When document is loading, do
   ========================================================================== */

			$(window).on('load', function () {
				handlePreloader();
			});
		})(window.jQuery);
	}, []);

	return (
		<React.Fragment>
			<div class="page-wrapper">
				<div class="preloader"></div>
				<Header active={1} />
				<section
					id="vantajs"
					class="banner-section-two "
					style={{
						backgroundImage: `url(https://drive.google.com/uc?id=1IPc-P88_oDVRg1NKQgUWdBCB18tACY1Q)`,
					}}
				>
					<div class="night">
						<div class="shooting_star"></div>
						<div class="shooting_star"></div>
						<div class="shooting_star"></div>
						<div class="shooting_star"></div>
						<div class="shooting_star"></div>
						<div class="shooting_star"></div>
						<div class="shooting_star"></div>
						<div class="shooting_star"></div>
					</div>
					<div class="auto-container">
						<div class="content-box">
							<div
								class="title-box text-center"
								style={{ alignItems: 'center' }}
							>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<div
									style={{
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'center',
										width: '100%',
										flex: 1,
										justifyContent: 'center',
									}}
								>
									<div style={{ width: '100%' }}>
										<img
											class="col-md-5 img-fluid"
											src={parsecLogo}
											id="bg-img"
										/>
									</div>
								</div>
								<br />
								<h4 class="ml12 text-white mt-5">
									<span
										class="ml12 letter"
										id="intro-title"
										style={{ fontSize: '1.5rem', fontWeight: '450' }}
									>
										<Typewriter
											loop
											cursor
											cursorStyle="|"
											typeSpeed={90}
											deleteSpeed={90}
											delaySpeed={1000}
											words={['ANNUAL TECHFEST OF IIT DHARWAD']}
											// onLoop={(loopCount) =>

											// }
										/>
									</span>
								</h4>
							</div>
						</div>
					</div>
				</section>

				{/* <section class="about-section">
					<span class="float-text">Parsec</span>
					<div class="auto-container">
						<div class="sec-title">
							<h2>About Parsec</h2>
						</div>

						<div class="about-carousel owl-carousel owl-theme">
							<div class="slide-item clearfix">
								<div class="image-box">
									<figure class="image" style={{ boxShadow: 'none' }}>
										<img src={logoAbout} alt="" />
									</figure>
								</div>
								<div class="content-box" style={{ marginTop: '20px' }}>
									<div class="inner-box">
										<span class="title"></span>
										<h3></h3>
										<div class="text">
											PARSEC 2022, the second edition of the Technology Festival
											of IIT Dharwad, aims to bring together the unparalleled
											experience of magnificent technologists and the innate
											curiosity of passionate students by providing a common
											platform to showcase their expertise and hone their
											skills. While there is no doubt that technology has taken
											magnanimous leaps in the past few decades, this fest
											ambitiously aspires to see it progress in parsecs in the
											near future.{' '}
										</div>
										<div class="btn-box">
											<a
												href="/aboutus"
												// target="_blank"
												class="theme-btn btn-style-one"
											>
												View More
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section> */}
				<br />
				<br />
				<br />
				<br />
				<section style={{ margin: '60px' }} className="home-about-sec">
					<div className="auto-container ">
						<div>
							<img src={logoAbout} />

							<div className="text">
								PARSEC 2022, the second edition of the Technology Festival of
								IIT Dharwad, aims to bring together the unparalleled experience
								of magnificent technologists and the innate curiosity of
								passionate students by providing a common platform to showcase
								their expertise and hone their skills. While there is no doubt
								that technology has taken magnanimous leaps in the past few
								decades, this fest ambitiously aspires to see it progress in
								parsecs in the near future.{' '}
							</div>
						</div>

						<div
							className="home-btn-container"
							style={{
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							<div className=" home-btn-box" style={{}}>
								<a
									// style={{
									// 	backgroundColor: '#f20587',
									// 	color: '#ffff',
									// 	position: 'relative',
									// 	width: 'max-content',
									// 	padding: '15px 35px',
									// 	fontSize: '18px',
									// 	fontWeight: 400,
									// 	borderRadius: '8px',
									// }}
									className="theme-btn btn-style-one"
								>
									View More
								</a>
							</div>
						</div>
					</div>
				</section>

				<br />
				<br />
				<br />
				<br />

				<section
					class="about-us-countdown-area section-padding-100-0"
					id="about"
				>
					<div class="countdown-up-area">
						<div class="auto-container">
							<div id="clockdiv" class="row align-items-center">
								<div class="col-12 col-md-3">
									<div
										class="countdown-content-text mb-100 wow fadeInUp"
										data-wow-delay="300ms"
									>
										<h6 style={{ textAlign: 'left' }}>4th March</h6>
										<h4 style={{ fontWeight: '450', textAlign: 'left' }}>
											Coming in...
										</h4>
									</div>
								</div>

								<div class="col-12 col-md-2">
									<div
										class="countdown-timer mb-100 wow fadeInUp mx-auto"
										data-wow-delay="300ms"
										style={{
											height: '160px',
											width: '160px',
											border: '2px solid rgba(35, 43, 107, 1)',
										}}
									>
										<span
											class="days"
											style={{ fontWeight: '900', fontSize: '55px' }}
										></span>

										<h3>
											<span
												style={{
													textAlign: 'center',
													color: '#5e577c',
													fontSize: '20px',
												}}
											>
												Days
											</span>
										</h3>
									</div>
								</div>
								<div class="col-12 col-md-2">
									<div
										class="countdown-timer mb-100 wow fadeInUp mx-auto"
										data-wow-delay="300ms"
										style={{
											height: '160px',
											width: '160px',
											border: '2px solid rgba(35, 43, 107, 1)',
										}}
									>
										<span
											class="hours"
											style={{ fontWeight: '900', fontSize: '55px' }}
										></span>

										<h3>
											<span
												style={{
													textAlign: 'center',
													color: '#5e577c',
													fontSize: '20px',
												}}
											>
												Hours
											</span>
										</h3>
									</div>
								</div>
								<div class="col-12 col-md-2">
									<div
										class="countdown-timer mb-100 wow fadeInUp mx-auto"
										data-wow-delay="300ms"
										style={{
											height: '160px',
											width: '160px',
											border: '2px solid rgba(35, 43, 107, 1)',
										}}
									>
										<span
											class="minutes"
											style={{ fontWeight: '900', fontSize: '55px' }}
										></span>

										<h3>
											<span
												style={{
													textAlign: 'center',
													color: '#5e577c',
													fontSize: '20px',
												}}
											>
												Minutes
											</span>
										</h3>
									</div>
								</div>
								<div class="col-12 col-md-2">
									<div
										class="countdown-timer mb-100 wow fadeInUp mx-auto"
										data-wow-delay="300ms"
										style={{
											height: '160px',
											width: '160px',
											border: '2px solid rgba(35, 43, 107, 1)',
										}}
									>
										<span
											class="seconds"
											style={{ fontWeight: '900', fontSize: '55px' }}
										></span>

										<h3>
											<span
												style={{
													textAlign: 'center',
													color: '#5e577c',
													fontSize: '20px',
												}}
											>
												Seconds
											</span>
										</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* <EventCarousel /> */}
				{/* lasdjfaldsfjasdfkasldfja */}
				<section class="location-section">
					<span class="float-text">Our Events</span>
					<div class="anim-icons">
						<span class="icon icon-dots wow zoomIn"></span>
						<span class="icon icon-dots-2"></span>
						<span class="icon icon-lines"></span>
					</div>
					<section id="events" class="events-section">
						<div class="anim-icons">
							<span class="icon icon-circle-1 wow zoomIn"></span>
							<span
								class="icon icon-circle-2 wow zoomIn"
								data-wow-delay="300ms"
							></span>
							<span
								class="icon icon-circle-3 wow zoomIn"
								data-wow-delay="600ms"
							></span>
							<span
								class="icon icon-circle-4 wow zoomIn"
								data-wow-delay="900ms"
							></span>
						</div>
						<div class="auto-container" style={{ width: '80%' }}>
							<div class="sec-title">
								<h2>Events</h2>
							</div>
							<EventCarousel />

							{/* <div class="events-carousel owl-carousel owl-theme" >
								<div class="slide-item">
									<div class="row">
										<div class="content-column order-2 col-lg-5 col-md-12 col-sm-12">
											<div class="inner-column">
												<span class="title" >Hackathon</span>
												<h2>DevHack 3.0</h2>
												<div class="text mb-3">
													Do you have what it takes to code sleeplessly for 36
													hrs to develop a groundbreaking piece of software?
													Well then, this event's rightly engineered for you.
													Devhack is a 36 hour hackathon attended in teams of 4
													who would be participating within the themes and
													problem statements provided. It's a hackathon where
													the registered team would ideate, design and innovate
													products by using their technical knowledge and excel
													at it.
												</div>
											</div>
										</div>

										<div class="info-column col-lg-7 col-md-12 col-sm-12">
											<div class="inner-column  bg-img">
												<img src={hackathonBg} alt="" class="bg-img" />
											</div>
										</div>
									</div>
								</div>

								<div class="slide-item">
									<div class="row">
										<div class="content-column order-2 col-lg-5 col-md-12 col-sm-12">
											<div class="inner-column">
												<span class="title">Competitive Coding</span>
												<h2>AlgoStrike 2.0</h2>
												<div class="text mb-3">
													For normal people, maestro is a distinguished
													performer of a musical instrument. Although, for us,
													Code Maestro is someone who can interweave data
													structures and algos to solve a problem efficiently.
													Join us at this 3 hour long brainstorming coding
													contest where you can turn yourself into a Code
													Maestro!
												</div>
											</div>
										</div>

										<div class="info-column col-lg-7 col-md-12 col-sm-12">
											<div class="inner-column bg-img">
												<img src={algoBg} alt="" class="bg-img" />
											</div>
										</div>
									</div>
								</div>

								<div class="slide-item">
									<div class="row">
										<div class="content-column order-2 col-lg-5 col-md-12 col-sm-12">
											<div class="inner-column">
												<span class="title">Capture the Flag</span>
												<h2>VeniVidiVici 2.0</h2>
												<div class="text mb-3">
													Test your cybersecurity skills in this{' '}
													<strong>
														jeopardy-style CTF to conquer the flags hidden
														throughout some machines.
													</strong>{' '}
													Solve computer security problems and/or capture and
													defend computer systems by encrypting the codes.{' '}
													<strong>
														{' '}
														Be assured that only knowledge won't suffice.{' '}
													</strong>{' '}
													You'll need a righteous blend of knowledge and
													temperament to crack this one.
												</div>
											</div>
										</div>

										<div class="info-column col-lg-7 col-md-12 col-sm-12">
											<div class="inner-column bg-img">
												<img src={ctfBg} alt="" class="bg-img" />
											</div>
										</div>
									</div>
								</div>

								<div class="slide-item">
									<div class="row">
										<div class="content-column order-2 col-lg-5 col-md-12 col-sm-12">
											<div class="inner-column">
												<span class="title">Sharpen your Mind</span>
												<h2>Quiz</h2>
												<div class="text mb-3">
													Participate in this quiz, which is based on technical
													aspects, where you can test how well you are versed
													with technology you use!
												</div>
											</div>
										</div>

										<div class="info-column col-lg-7 col-md-12 col-sm-12">
											<div class="inner-column bg-img">
												<img src={quizBg} alt="" class="bg-img" />
											</div>
										</div>
									</div>
								</div>

								<div class="slide-item">
									<div class="row">
										<div class="content-column order-2 col-lg-5 col-md-12 col-sm-12">
											<div class="inner-column">
												<span class="title">Design the World</span>
												<h2>Designõ</h2>
												<div class="text mb-3">
													Design and Engineer your own product to solve a real
													life problem and showcase it by creating a 3D model.
													Join us in teams of 2 at this CAD Based product design
													event!
												</div>
											</div>
										</div>

										<div class="info-column col-lg-7 col-md-12 col-sm-12">
											<div class="inner-column bg-img">
												<img src={cadBg} alt="" class="bg-img" />
											</div>
										</div>
									</div>
								</div>

								<div class="slide-item">
									<div class="row">
										<div class="content-column order-2 col-lg-5 col-md-12 col-sm-12">
											<div class="inner-column">
												<span class="title">Show your Skills</span>
												<h2>Ascensus</h2>
												<div class="text mb-3">
													Solve a real life industry problem engineered with
													technical elements in an economically feasible way by
													taking part in this event.
												</div>
											</div>
										</div>

										<div class="info-column col-lg-7 col-md-12 col-sm-12">
											<div class="inner-column bg-img">
												<img src={caseStudyBg} alt="" class="bg-img" />
											</div>
										</div>
									</div>
								</div>
							</div> */}
						</div>
					</section>
				</section>

				<section
					id="what-you-get"
					class="features-section"
					style={{ backgroundColor: '#12114a', paddingTop: '80px' }}
				>
					<span class="float-text">our feature</span>
					<div class="container">
						<div class="sec-title">
							<h2 style={{ color: '#fff' }}>What You Get</h2>
						</div>

						<div class="row"></div>
					</div>
				</section>
				{/* lasdjfaldsfjasdfkasldfja */}

				<div style={{ backgroundColor: '#12114a' }}>
					<div class="auto-container" style={{ backgroundColor: '#12114a' }}>
						<div class="row">
							<div style={{ height: '100px' }}></div>

							<div
								class="col-lg-4"
								style={{ paddingBottom: '90px', paddingLeft: '40px' }}
							>
								<div class="wrapper">
									<div class="card" style={{ backgroundColor: '#1c86da' }}>
										<h1 style={{ background: '#1c86da' }}>
											<span
												class="enclosed"
												style={{
													backgroundColor: '#1c86da',
													color: '#fff',
													paddingTop: '15px',
												}}
											>
												Experience
											</span>
										</h1>
										<p
											style={{
												fontSize: '18px',
												color: '#fff',
												padding: '20px',
												textTransform: 'none',
											}}
										>
											Participate in events designed to bring out the best in
											you
										</p>
									</div>
								</div>
							</div>

							<div
								class="col-lg-4"
								style={{ paddingBottom: '90px', paddingLeft: '40px' }}
							>
								<div class="wrapper">
									<div class="card" style={{ backgroundColor: '#ed6286' }}>
										<h1 style={{ background: '#ed6286' }}>
											<span
												class="enclosed"
												style={{
													backgroundColor: '#ed6286',
													color: '#fff',
													paddingTop: '15px',
												}}
											>
												Networking
											</span>
										</h1>
										<p
											style={{
												fontSize: '18px',
												color: '#fff',
												padding: '20px',
												textTransform: 'none',
												paddingTop: '0px',
											}}
										>
											Connect with and exchange ideas with participants and also
											the tech speakers
										</p>
									</div>
								</div>
							</div>
							<div
								class="col-lg-4"
								style={{ paddingBottom: '90px', paddingLeft: '40px' }}
							>
								<div class="wrapper">
									<div class="card" style={{ backgroundColor: '#1c86da' }}>
										<h1 style={{ background: '#1c86da' }}>
											<span
												class="enclosed"
												style={{
													backgroundColor: '#1c86da',
													color: '#fff',
													paddingTop: '15px',
												}}
											>
												Goodies
											</span>
										</h1>
										<p
											style={{
												fontSize: '18px',
												color: '#fff',
												padding: '20px',
												textTransform: 'none',
												paddingTop: '0px',
											}}
										>
											Each participant gets goodies! If you manage to win an
											event, you can get even better ones!
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <topScroll /> */}
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Home;
