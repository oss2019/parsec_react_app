import React, { lazy, Suspense, useState, useEffect } from "react";
import Header from "../../components/Header";
import "./styles.css";
import "../../css/style.css";
import "../../css/bootstrap.css";
import "../../css/responsive.css";
import Footer from "../../components/Footer";
import EventsBackground from "../../components/eventsBackground";
import { useMediaQuery } from "react-responsive";
const Ascensus = () => {
  const isSmallDevice = useMediaQuery({ query: "(max-width:1026px)" });
  return (
		<React.Fragment>
			{/* <EventsBackground /> */}
			<div className="page-wrapper">
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
						src="https://drive.google.com/uc?id=1esMbRcdpk17hITB6ylmAW6GU14abe19Z"
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
						margin: '0',
						width: '100vw',
						// background: 'rgba(34, 40, 49, 0.87)',
						background: '#000',
					}}
				>
					<div className="login-form auto-container">
						<div className="pt-4 row clearfix">
							<h1
								className="px-3 py-2 w-100 text-center"
								style={{
									fontFamily: 'poppins',
									color: 'rgba(255, 173, 64)',
								}}
							>
								ASCENSUS
							</h1>
							<h2
								className="px-3 py-2 w-100 text-center"
								style={{
									fontFamily: 'poppins',
									color: 'rgba(255, 173, 64)',
								}}
							>
								CASE STUDY COMPETITION
							</h2>

							<div className="form-column col-lg-12 col-md-12 col-sm-12">
								<div className="py-0 px-2">
									<div className="title-box">
										<div
											className="text"
											style={{ color: '#eeeeee', fontSize: '20px' }}
										>
											The technical club of IIT DHARWAD PARSEC has come up with
											ASCENSUS - a real-time case study competition that mainly
											analyzes your business acumen. In the event, participants
											will be competing against diverse teams across INDIA to
											exhibit their spirit before judges, which should culminate
											in an ingenious solution.
										</div>
										<div
											className="row justify-content-center align-items-center"
											style={{ margin: 'auto', paddingTop: '40px' }}
										>
											<div className="btn-box text-center">
												<a
													href="https://dare2compete.com/competition/ascensus-parsec-a-paradigm-shift-indian-institute-of-technology-iit-dharwad-262140"
													className="theme-btn btn-style-four button2 text-center"
													id="btncs2"
													target="_blank"
													style={{
														borderRadius: '8px',
														color: '#ffffff',
														// background: 'rgba(242, 172, 79,0.9)',
													}}
												>
													Register Now
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div
								className="row justify-content-center align-items-center col-lg-12"
								style={{ margin: 'auto' }}
							>
								<p
									style={{
										color: '#fff',
										fontSize: '20px',
										textShadow: '2px 2px 2px rgba(255, 165, 0,0.8)',
										textAlign: 'center',
									}}
								>
									Registrations Closes on 28 Feb'22 05:00 PM IST !
								</p>
								{/* <h5 style="color:#ed6286;padding-top:20px;text-shadow: 1px 1px 2px black, 0 0 1em #e1ecc4, 0 0 0.2em #ed6286;padding-bottom:20px">
                  Registration ends on 8th February 2020.
                </h5> */}
							</div>

							<x-sign
								style={{
									fontSize: '30px',
									textAlign: 'center',
									margin: 'auto',
									paddingTop: '10px',
								}}
							>
								Prizes Worth &#8377; 1,85,000
							</x-sign>

							<div
								className="form-column col-lg-12 col-md-12 col-sm-12"
								style={{ padding: '40px' }}
							>
								<div className="border-info">
									<div
										className="row-cols-1"
										style={{
											border: '2px solid rgb(242, 172, 79)',
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
												// background: '#393e46',
												background: '#000',
											}}
										>
											<div
												className="row"
												style={{ color: `rgb(242, 172, 79)` }}
											>
												<div className="col-md-6">Rounds : 3</div>
												<div className="col-md-6">Team Size: 2-3 Members</div>
											</div>
										</div>{' '}
									</div>
								</div>

								<br />

								<p
									className="font-weight-bold"
									style={{ fontSize: 'large', color: '#eeeeee' }}
								>
									<br /> Timeline: The event is being conducted in 3 rounds
									which include the following:
								</p>
								<p
									// className="font-weight-bold"
									style={{ fontSize: 'large', color: '#eeeeee' }}
								></p>

								<ul
									style={{
										color: `#707070`,
									}}
									className="list-style-four2"
								>
									<li>
										<strong>Quiz Round</strong>: 28th February 2022, 20:00 IST
									</li>
									<li>
										<strong>Problem Statement Round</strong>: 1st March 2022 at
										00:00 IST to 3rd March 2022 at 23:59 IST
									</li>
									<li>
										<strong>Ppt presentation Round:</strong> 6th March 2022 at
										12:00 IST
									</li>
									{/* <li
										style={{
											color: `#707070`,
										}}
									>
										<strong>
											Round one will be a quiz to test your business and
											Management knowledge
										</strong>
									</li>
									<li
										style={{
											color: `#707070`,
										}}
									>
										<strong>
											Round Two will be ppt submission on solution of the given
											problem statement
										</strong>
									</li>
									<li
										style={{
											color: `#707070`,
										}}
									>
										<strong>
											In Round Three, you will be presenting your solution in
											front of the jury
										</strong>
									</li> */}
								</ul>

								<p
									className="font-weight-bold"
									style={{ fontSize: 'large', color: '#eeeeee' }}
								>
									Still have queries? Reach out to us on our Telegram{' '}
									<a
										href="https://t.me/parsec_casestudy"
										target={'_blank'}
										style={{ color: 'rgb(242, 172, 79)' }}
									>
										channel
									</a>{' '}
									and we will try our best to answer all of them.
								</p>
							</div>
						</div>
					</div>
				</section>
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Ascensus;
