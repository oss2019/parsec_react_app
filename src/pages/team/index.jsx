import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { Row, Col, Card } from 'react-bootstrap';
import teamTitleBackground from '../../images/background/team.jpg';
import Footer from '../../components/Footer';

import overallJrCoordinator from '../../data/overallJrCoordinator.json';
import webTeamData from '../../data/webteam.json';
import contentTeamData from '../../data/contentTeam.json';
import coordinatorTeamData from '../../data/coordinator.json';
import designTeamData from '../../data/designTeam.json';
import eventCoordinators from '../../data/eventCoodinators.json';
import eventManager from '../../data/eventManager.json';
import marketingTeam from '../../data/marketingTeam.json';
import operationsHead from '../../data/operationsHead.json';
import sponsorshipTeam from '../../data/sponsorship.json';
import utilitiesTeam from '../../data/utilitiesTeam.json';
import workshopTeam from '../../data/workshopTeam.json';
import accountsManager from '../../data/accountsManager.json';
import '../../css/bootstrap.css';
import '../../css/style.css';
import '../../css/responsive.css';
import '../../css/team.css';
import './styles.css';
import Header from '../../components/Header';

const TeamMembers = ({ title, teamData, post }) => {
	const delayTime = 300;
	const makeName = (name) => {
		let newName = '';
		let words = name.split(' ');
		for (let i = 0; i < words.length; i++) {
			words[i] = words[i].toLowerCase();
			newName += words[i].charAt(0).toUpperCase() + words[i].slice(1);
			newName += ' ';
		}
		return newName;
	};
	return (
		<>
			<div className="sec-title" style={{ display: 'block' }}>
				<h1>{title}</h1>
			</div>
			<div className="row">
				{teamData.map((data, i) => (
					<div className="col-12 col-sm-6 col-lg-3" key={`${i}`}>
						<Zoom delay={delayTime}>
							{/* <Card delay={600} style={{ border: 0 }}> */}
							<div className="single-speaker-area wow fadeInUp ">
								<div className="speaker-single-thumb" s>
									<img src={`${data.image}`} alt="" />
								</div>

								{(data.facebook !== '' ||
									data.linkedin !== '' ||
									data.instagram !== '' ||
									data.github !== '') && (
									<div className="social-info">
										{data.facebook && (
											<a href={`${data.facebook}`} target="_blank">
												<i className="fab fa-facebook-f"></i>
											</a>
										)}
										{data.instagram !== '' && (
											<a href={`${data.instagram}`} target="_blank">
												<i className="fab fa-instagram"></i>
											</a>
										)}
										{data.github !== '' && (
											<a href={`${data.github}`} target="_blank">
												<i className="fab fa-github"></i>
											</a>
										)}
										{data.linkedin !== '' && (
											<a href={`${data.linkedin}`} target="_blank">
												<i className="fab fa-linkedin-in"></i>
											</a>
										)}
									</div>
								)}
								<div
									className="speaker-info"
									//   style={{ backgroundColor: "transparent" }}
								>
									<h5>{makeName(data.name)}</h5>
									<p style={{ color: 'cyan' }}>{post}</p>
									{data.teamlead == 'true' && (
										<p style={{ color: 'cyan' }}>Team Lead</p>
									)}
								</div>
							</div>
							{/* </Card> */}
						</Zoom>
					</div>
				))}
			</div>
		</>
	);
};

const Team = () => {
	const makeName = (name) => {
		let newName = '';
		let words = name.split(' ');
		for (let i = 0; i < words.length; i++) {
			words[i] = words[i].toLowerCase();
			newName += words[i].charAt(0).toUpperCase() + words[i].slice(1);
			newName += ' ';
		}
		return newName;
	};
	const delayTime = 300;
	return (
		<React.Fragment>
			<div className="page-wrapper">
				<div className="preloader"></div>
				<Header active={7} />
				<section
					className="page-title"
					id="page-title"
					style={{ backgroundImage: `url(${teamTitleBackground})` }}
				>
					<div className="auto-container">
						<span className="float-text">Team</span>
						<h1>Team</h1>
						<ul className="bread-crumb clearfix">
							<li>
								<a href="/">Home </a>
							</li>
							<li>Team</li>
						</ul>
					</div>
				</section>

				<section className="our-speaker-area section-padding-100">
					<div className="auto-container">
						<TeamMembers
							teamData={coordinatorTeamData}
							post={'General Secretary Technical Affairs'}
							title={'Overall Co-ordinator'}
						/>
						<TeamMembers teamData={operationsHead} title={'Operations Head'} />
						<TeamMembers
							teamData={accountsManager}
							title={'Accounts Manager'}
						/>
						<TeamMembers teamData={eventManager} title={'Event Manager'} />
						<TeamMembers
							teamData={overallJrCoordinator}
							title={'Jr. Overall Co-ordinator'}
						/>
						<TeamMembers
							teamData={sponsorshipTeam}
							title={'Sponsorship Management Team'}
						/>
						<TeamMembers teamData={workshopTeam} title={'Workshop Team'} />
						<TeamMembers teamData={marketingTeam} title={'Marketing Team'} />
						<TeamMembers teamData={webTeamData} title={'Web-Ops Team'} />
						<TeamMembers teamData={designTeamData} title={'Design Team'} />
						<TeamMembers teamData={contentTeamData} title={'Content Team'} />
						<TeamMembers teamData={utilitiesTeam} title={'Utilities Team'} />
						{/* <TeamMembers teamData={eventCoordinators} title={'Event Co-ordinators'} /> */}

						{/* Event cordinators */}

						<div className="sec-title" style={{ display: 'block' }}>
							<h1>Event Co-ordinators</h1>
						</div>

						<div className="row">
							<div className="sec-title">
								<h4>Devhack Team</h4>
							</div>
							{/* <FadeIn className="row"> */}
							<div className="row">
								{eventCoordinators.map((data, i) => (
									<>
										{data.post === 'devhack' && (
											<div className="col-12 col-sm-6 col-lg-3" key={`${i}`}>
												<Zoom delay={delayTime}>
													{/* <Card delay={600} style={{ border: 0 }}> */}
													<div className="single-speaker-area wow fadeInUp ">
														<div className="speaker-single-thumb">
															<img src={`${data.image}`} alt="" />
														</div>

														<div className="social-info">
															{data.facebook && (
																<a href={`${data.facebook}`} target="_blank">
																	<i className="fab fa-facebook-f"></i>
																</a>
															)}
															{data.instagram !== '' && (
																<a href={`${data.instagram}`} target="_blank">
																	<i className="fab fa-instagram"></i>
																</a>
															)}
															{data.github !== '' && (
																<a href={`${data.github}`} target="_blank">
																	<i className="fab fa-github"></i>
																</a>
															)}
															{data.linkedin !== '' && (
																<a href={`${data.linkedin}`} target="_blank">
																	<i className="fab fa-linkedin-in"></i>
																</a>
															)}
														</div>
														<div className="speaker-info">
															<h5>{makeName(data.name)}</h5>
															{data.teamlead == 'true' && (
																<p style={{ color: 'cyan' }}>Team Lead</p>
															)}
															{/* <p>General Secretary Technical Affairs</p> */}
														</div>
													</div>
													{/* </Card> */}
												</Zoom>
											</div>
										)}
									</>
								))}
							</div>

							<div className="sec-title">
								<h4>Algostrike Team</h4>
							</div>
							{/* <FadeIn className="row"> */}
							<div className="row">
								{eventCoordinators.map((data, i) => (
									<>
										{data.post === 'algostrike' && (
											<div className="col-12 col-sm-6 col-lg-3" key={`${i}`}>
												<Zoom delay={delayTime}>
													{/* <Card delay={600} style={{ border: 0 }}> */}
													<div className="single-speaker-area wow fadeInUp ">
														<div className="speaker-single-thumb">
															<img src={`${data.image}`} alt="" />
														</div>

														<div className="social-info">
															{data.facebook && (
																<a href={`${data.facebook}`} target="_blank">
																	<i className="fab fa-facebook-f"></i>
																</a>
															)}
															{data.instagram !== '' && (
																<a href={`${data.instagram}`} target="_blank">
																	<i className="fab fa-instagram"></i>
																</a>
															)}
															{data.github !== '' && (
																<a href={`${data.github}`} target="_blank">
																	<i className="fab fa-github"></i>
																</a>
															)}
															{data.linkedin !== '' && (
																<a href={`${data.linkedin}`} target="_blank">
																	<i className="fab fa-linkedin-in"></i>
																</a>
															)}
														</div>
														<div className="speaker-info">
															<h5>{makeName(data.name)}</h5>
															{data.teamlead == 'true' && (
																<p style={{ color: 'cyan' }}>Team Lead</p>
															)}
														</div>
													</div>
													{/* </Card> */}
												</Zoom>
											</div>
										)}
									</>
								))}
							</div>

							<div className="sec-title">
								<h4>VeniVidiVici Team</h4>
							</div>
							{/* <FadeIn className="row"> */}
							<div className="row">
								{eventCoordinators.map((data, i) => (
									<>
										{data.post === 'venividivici' && (
											<div className="col-12 col-sm-6 col-lg-3" key={`${i}`}>
												<Zoom delay={delayTime}>
													{/* <Card delay={600} style={{ border: 0 }}> */}
													<div className="single-speaker-area wow fadeInUp ">
														<div className="speaker-single-thumb">
															<img src={`${data.image}`} alt="" />
														</div>

														<div className="social-info">
															{data.facebook && (
																<a href={`${data.facebook}`} target="_blank">
																	<i className="fab fa-facebook-f"></i>
																</a>
															)}
															{data.instagram !== '' && (
																<a href={`${data.instagram}`} target="_blank">
																	<i className="fab fa-instagram"></i>
																</a>
															)}
															{data.github !== '' && (
																<a href={`${data.github}`} target="_blank">
																	<i className="fab fa-github"></i>
																</a>
															)}
															{data.linkedin !== '' && (
																<a href={`${data.linkedin}`} target="_blank">
																	<i className="fab fa-linkedin-in"></i>
																</a>
															)}
														</div>
														<div className="speaker-info">
															<h5>{makeName(data.name)}</h5>
															{data.teamlead == 'true' && (
																<p style={{ color: 'cyan' }}>Team Lead</p>
															)}
														</div>
													</div>
													{/* </Card> */}
												</Zoom>
											</div>
										)}
									</>
								))}
							</div>

							<div className="sec-title">
								<h4>Designõ Team</h4>
							</div>
							{/* <FadeIn className="row"> */}
							<div className="row">
								{eventCoordinators.map((data, i) => (
									<>
										{data.post === 'designo' && (
											<div className="col-12 col-sm-6 col-lg-3" key={`${i}`}>
												<Zoom delay={delayTime}>
													{/* <Card delay={600} style={{ border: 0 }}> */}
													<div className="single-speaker-area wow fadeInUp ">
														<div className="speaker-single-thumb">
															<img src={`${data.image}`} alt="" />
														</div>

														<div className="social-info">
															{data.facebook && (
																<a href={`${data.facebook}`} target="_blank">
																	<i className="fab fa-facebook-f"></i>
																</a>
															)}
															{data.instagram !== '' && (
																<a href={`${data.instagram}`} target="_blank">
																	<i className="fab fa-instagram"></i>
																</a>
															)}
															{data.github !== '' && (
																<a href={`${data.github}`} target="_blank">
																	<i className="fab fa-github"></i>
																</a>
															)}
															{data.linkedin !== '' && (
																<a href={`${data.linkedin}`} target="_blank">
																	<i className="fab fa-linkedin-in"></i>
																</a>
															)}
														</div>
														<div className="speaker-info">
															<h5>{makeName(data.name)}</h5>
															{data.teamlead == 'true' && (
																<p style={{ color: 'cyan' }}>Team Lead</p>
															)}
														</div>
													</div>
													{/* </Card> */}
												</Zoom>
											</div>
										)}
									</>
								))}
							</div>

							<div className="sec-title">
								<h4>Ascensus Team</h4>
							</div>
							{/* <FadeIn className="row"> */}
							<div className="row">
								{eventCoordinators.map((data, i) => (
									<>
										{data.post === 'ascensus' && (
											<div className="col-12 col-sm-6 col-lg-3" key={`${i}`}>
												<Zoom delay={delayTime}>
													{/* <Card delay={600} style={{ border: 0 }}> */}
													<div className="single-speaker-area wow fadeInUp ">
														<div className="speaker-single-thumb">
															<img src={`${data.image}`} alt="" />
														</div>

														<div className="social-info">
															{data.facebook && (
																<a href={`${data.facebook}`} target="_blank">
																	<i className="fab fa-facebook-f"></i>
																</a>
															)}
															{data.instagram !== '' && (
																<a href={`${data.instagram}`} target="_blank">
																	<i className="fab fa-instagram"></i>
																</a>
															)}
															{data.github !== '' && (
																<a href={`${data.github}`} target="_blank">
																	<i className="fab fa-github"></i>
																</a>
															)}
															{data.linkedin !== '' && (
																<a href={`${data.linkedin}`} target="_blank">
																	<i className="fab fa-linkedin-in"></i>
																</a>
															)}
														</div>
														<div className="speaker-info">
															<h5>{makeName(data.name)}</h5>
															{data.teamlead == 'true' && (
																<p style={{ color: 'cyan' }}>Team Lead</p>
															)}
														</div>
													</div>
													{/* </Card> */}
												</Zoom>
											</div>
										)}
									</>
								))}
							</div>

							<div className="sec-title">
								<h4>Quiz Team</h4>
							</div>
							{/* <FadeIn className="row"> */}
							<div className="row">
								{eventCoordinators.map((data, i) => (
									<>
										{data.post === 'quiz' && (
											<div className="col-12 col-sm-6 col-lg-3" key={`${i}`}>
												<Zoom delay={delayTime}>
													{/* <Card delay={600} style={{ border: 0 }}> */}
													<div className="single-speaker-area wow fadeInUp ">
														<div className="speaker-single-thumb">
															<img src={`${data.image}`} alt="" />
														</div>

														<div className="social-info">
															{data.facebook && (
																<a href={`${data.facebook}`} target="_blank">
																	<i className="fab fa-facebook-f"></i>
																</a>
															)}
															{data.instagram !== '' && (
																<a href={`${data.instagram}`} target="_blank">
																	<i className="fab fa-instagram"></i>
																</a>
															)}
															{data.github !== '' && (
																<a href={`${data.github}`} target="_blank">
																	<i className="fab fa-github"></i>
																</a>
															)}
															{data.linkedin !== '' && (
																<a href={`${data.linkedin}`} target="_blank">
																	<i className="fab fa-linkedin-in"></i>
																</a>
															)}
														</div>
														<div className="speaker-info">
															<h5>{makeName(data.name)}</h5>
															{data.teamlead == 'true' && (
																<p style={{ color: 'cyan' }}>Team Lead</p>
															)}
														</div>
													</div>
													{/* </Card> */}
												</Zoom>
											</div>
										)}
									</>
								))}
							</div>
							<div className="sec-title">
								<h4>GuardAIns Team</h4>
							</div>
							{/* <FadeIn className="row"> */}
							<div className="row">
								{eventCoordinators.map((data, i) => (
									<>
										{data.post === 'guardains' && (
											<div className="col-12 col-sm-6 col-lg-3" key={`${i}`}>
												<Zoom delay={delayTime}>
													{/* <Card delay={600} style={{ border: 0 }}> */}
													<div className="single-speaker-area wow fadeInUp ">
														<div className="speaker-single-thumb">
															<img src={`${data.image}`} alt="" />
														</div>

														{data.linkedin !== '' ||
															data.facebook !== '' ||
															data.github !== '' ||
															(data.instagram !== '' && (
																<div className="social-info">
																	{data.facebook && (
																		<a
																			href={`${data.facebook}`}
																			target="_blank"
																		>
																			<i className="fab fa-facebook-f"></i>
																		</a>
																	)}
																	{data.instagram !== '' && (
																		<a
																			href={`${data.instagram}`}
																			target="_blank"
																		>
																			<i className="fab fa-instagram"></i>
																		</a>
																	)}
																	{data.github !== '' && (
																		<a href={`${data.github}`} target="_blank">
																			<i className="fab fa-github"></i>
																		</a>
																	)}
																	{data.linkedin !== '' && (
																		<a
																			href={`${data.linkedin}`}
																			target="_blank"
																		>
																			<i className="fab fa-linkedin-in"></i>
																		</a>
																	)}
																</div>
															))}
														<div className="speaker-info">
															<h5>{makeName(data.name)}</h5>
															{data.teamlead == 'true' && (
																<p style={{ color: 'cyan' }}>Team Lead</p>
															)}
														</div>
													</div>
													{/* </Card> */}
												</Zoom>
											</div>
										)}
									</>
								))}
							</div>
						</div>

						{/* </FadeIn> */}

						{/* !!!!!!!!! */}
					</div>
				</section>
				<Footer />
			</div>
		</React.Fragment>
	);
};

const row_style = {
	height: '100%',
	margin: 'auto',
	marginTop: '11vh',
	padding: '1%',
	maxWidth: '100%',
	flexGrow: '1',
};

const col_style = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	marginBottom: '2%',
};

export default Team;
