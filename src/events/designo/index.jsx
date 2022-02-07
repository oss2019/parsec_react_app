import React, { lazy, Suspense, useState, useEffect } from 'react';
import Header from '../../components/Header';
import './styles.css';
import '../../css/style.css';
import '../../css/bootstrap.css';
import '../../css/responsive.css';
import Footer from '../../components/Footer';
import EventsBackground from '../../components/eventsBackground';
import { useMediaQuery } from 'react-responsive';
const Designo = () => {
	const isTabletorMobile = useMediaQuery({ query: '(max-width: 550px)' });
	const isTab = useMediaQuery({ query: '(max-width:1026px)' });
	const isMobile = useMediaQuery({ query: '(max-width:425px)' });
	const issm = useMediaQuery({ query: '(max-width:400px)' });
	return (
		<React.Fragment>
			<div className="page-wrapper">
				<EventsBackground />
				<div className="preloader"></div>

				<Header active={2} />
				<section
					className="page-title"
					style={{ overflow: 'visible', paddingRight: 0, padding: '0' }}
				>
					<img
						src={`${
							isTabletorMobile
								? 'https://drive.google.com/uc?id=1UakKxDKirQ--bDuv-mPnRs6XrdiigoNg'
								: 'https://drive.google.com/uc?id=1WsL7m1qJEjHTeB6NxXN7L83lRGA5oSqq'
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
						style={{ background: `rgba(34, 40, 49, 0.87)` }}
					>
						<div className="row clearfix">
							<h1
								className="mx-auto mt-5"
								style={{ color: `#ce41af`, textAlign: `center` }}
							>
								DESIGNÕ
							</h1>
							<h2
								className="mx-auto mt-5"
								style={{ color: `#ce41af`, textAlign: `center` }}
							>
								CAD MODELING COMPETITION
							</h2>

							<div className="form-column col-lg-12 col-md-12 col-sm-12">
								<div style={{ padding: `40px`, paddingBottom: `0px` }}>
									<div className="title-box">
										<div
											className="text"
											style={{ color: `#ffffff`, fontSize: `20px` }}
										>
											<strong>PARSEC 2.0</strong> came up with DESIGNÕ(3D
											modeling or CAD) that allows engineers and designers to
											build realistic computer models of parts and assemblies.
											These models can be then 3D Printed or CNC machined as
											well as used to run complex simulations. A wide range of
											parameters can be simulated such as strength or
											temperature resistance before any physical models have
											been created, enabling a much faster and cheaper workflow.
										</div>
									</div>
									<div
										className="row justify-content-center align-items-center"
										style={{ margin: `auto` }}
									>
										<div className="btn-box" style={{ textAlign: `center` }}>
											<a
												href="https://dare2compete.com/competition/designo-parsec-a-paradigm-shift-indian-institute-of-technology-iit-dharwad-262181"
												target="_blank"
												className="theme-btn btn-style-one btn-rounded mb-4"
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
									<div
										className="row justify-content-center align-items-center"
										style={{ margin: `auto` }}
									></div>
								</div>
							</div>

							<br></br>

							<div
								className="form-column col-lg-12 col-md-12 col-sm-12"
								style={{ padding: `40px` }}
							>
								<div
									className=" border-danger"
									style={{
										border: '2px solid #ed6286',
										borderRadius: '8px',
										overflow: 'hidden',
									}}
								>
									<div
										style={{
											backgroundColor: `rgba(9, 11, 56,0.5)`,
											fontFamily: `'Roboto', sans-serif`,
											fontSize: `large`,
											fontWeight: `bold`,
										}}
										className="card-body text-center text-danger"
									>
										<div className="row">
											<div className="col-md-6" style={{ color: `#ed6286` }}>
												Duration: 2 Days
											</div>
											<div className="col-md-6" style={{ color: `#ed6286` }}>
												Team Size: Max 2
											</div>
										</div>
									</div>
								</div>
								<br />
								<br />
								<p
									style={{
										fontFamily: `FontAwesome, sans-serif`,
										fontSize: `large`,
										color: `#ffffff`,
									}}
								>
									The teams are required to draft and design their own prototype
									Model and make a detailed analysis of their model and present
									the same during the final day.
								</p>

								<p
									style={{
										fontFamily: `FontAwesome, sans-serif`,
										fontSize: `large`,
										color: `#ffffff`,
									}}
								>
									<strong>
										The event starts at 2:00 PM on 5th March, 2022.
									</strong>
								</p>

								<br />
								<p style={{ fontSize: `large`, color: `#ffffff` }}>
									<strong>Rules : </strong>
								</p>
								<ul
									className="list-style-four"
									style={{ fontSize: `large`, color: `#ed6286` }}
								>
									<li style={{ color: `#ed6286` }}>
										Preferred Software: AutoCAD, Inventor, Pro E Wildfire, Pro E
										Creo, Catia, SolidWorks, NX CAD, Abaqus, ANSYS, MCS Adams,
										Altair- Hyper Mesh
									</li>
									<li style={{ color: `#ed6286` }}>
										The teams can perform dynamic simulation, stress analysis,
										flow/thermal analysis, and mechanical simulation
									</li>
									<li style={{ color: `#ed6286` }}>
										Preferred submission file types <strong>CAD model</strong>:
										step, obj, iges sldprt and sldasm{' '}
										<strong>Draft file</strong>: slddrw and/or pdf
									</li>
									<li style={{ color: `#ed6286` }}>
										Only one entry per team is allowed
									</li>

									<li style={{ color: `#ed6286` }}>
										Decision of the judges will be final and binding
									</li>
								</ul>

								<p
									className="font-weight-bold"
									style={{
										fontFamily: `FontAwesome`,
										fontSize: `large`,
										color: `#ffffff`,
									}}
								>
									<strong>The presentation may include</strong>
								</p>

								<ul
									className="list-style-four"
									style={{ fontSize: `large`, color: `#ed6286` }}
								>
									<li style={{ color: `#ed6286` }}>
										A 3-D CAD model of the design in multiple views
									</li>
									<li style={{ color: `#ed6286` }}>
										Feasibility /Marketability/ Cost Effectiveness/Material
										Selection, assembly (if required) model
									</li>
									<li style={{ color: `#ed6286` }}>
										Any rough sketches you created before modeling
									</li>
									<li style={{ color: `#ed6286` }}>
										Animations/Simulations/Any Creative Audio-Visual Aids with
										which model can be well presented and explained
									</li>

									<li style={{ color: `#ed6286` }}>
										Results of the analysis and design-optimization
									</li>
								</ul>
								<br />

								<p
									style={{ fontSize: `large`, color: `#ffffff` }}
									className="font-weight-bold"
								>
									Still have queries? Join us on our Telegram{' '}
									<a
										href="https://t.me/parsec_cad"
										style={{
											color: `#ed6286`,
											textDecoration: `None`,
										}}
										target={'_blank'}
										rel="noreferrer"
									>
										channel
									</a>{' '}
									and we'll try our best to answer all your doubts.
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default Designo;
