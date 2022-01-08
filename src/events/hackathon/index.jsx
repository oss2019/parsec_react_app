import React, { useState } from 'react';
import Header from '../../components/Header';
import './styles.css';
import '../../css/style.css';
import '../../css/bootstrap.css';
import '../../css/responsive.css';
import Overview from './overview';
import Timeline from './timeline';
import Ctf from '../ctf';
import Themes from './themes';
import Judges from './judges';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import hackathonBackground from '../../images/events/devhack/devhack_banner.png';
import EventsBackground from '../../components/eventsBackground';
const Hackathon = () => {
	const [hack, setHack] = useState(1);
	// const overviewCtrl = () => {
	//     setHack(1);
	// }
	// const timelineCtrl = () => {
	//     setHack(2)
	// }
	// const themesCtrl = () => {
	//     setHack(3)
	// }
	// const judgesCtrl = () => {
	//     setHack(4)
	// }
	const renderCtrl = (q) => {
		setHack(q);
	};
	return (
		<React.Fragment>
			<div className="page-wrapper">
				<div className="preloader"></div>
				{/* <EventsBackground /> */}
				<Header active={2} />

				<section
					className="page-title"
					style={{ backgroundImage: `url(${hackathonBackground})` }}
				>
					<div className="auto-container">
						<ul className="bread-crumb clearfix">
							<li>
								{' '}
								<br></br>
								<br></br>
							</li>
						</ul>
					</div>
				</section>

				<section className="project-section">
					<div className="anim-icons">
						<span className="icon icon-cross-1"></span>
					</div>
					<div className="auto-container">
						<div className="project-tabs tabs-box">
							<div className="row">
								<div className="buttons-column col-lg-4 col-md-12 col-sm-12">
									<div className="inner-column">
										<ul className="tab-buttons tab-btns clearfix">
											{hack === 1 ? (
												<li
													className="tab-btn active-btn"
													data-tab="#introduction"
												>
													<div
														onClick={renderCtrl.bind(this, 1)}
														style={{
															backgroundColor: '#ffff',
														}}
													>
														{/* <Link to={'hackathon_overview'}>Overview</Link> */}
														Overview
													</div>
												</li>
											) : (
												<li className="tab-btn" data-tab="#introduction">
													<div
														onClick={renderCtrl.bind(this, 1)}
														style={{
															backgroundColor: '#f1f2f9',
														}}
													>
														{/* <Link to={'hackathon_overview'}>Overview</Link> */}
														Overview
													</div>
												</li>
											)}
											{hack === 2 ? (
												<li className="tab-btn active-btn" data-tab="#timeline">
													<div
														onClick={renderCtrl.bind(this, 2)}
														style={{
															backgroundColor: '#ffff',
														}}
													>
														{/* <Link to={'hackathon_overview'}>Overview</Link> */}
														Timeline
													</div>
												</li>
											) : (
												<li className="tab-btn " data-tab="#timeline">
													<div
														onClick={renderCtrl.bind(this, 2)}
														style={{
															backgroundColor: '#f1f2f9',
														}}
													>
														{/* <Link to={'hackathon_overview'}>Overview</Link> */}
														Timeline
													</div>
												</li>
											)}
											{hack === 3 ? (
												<li className="tab-btn active-btn" data-tab="#theme">
													<div
														onClick={renderCtrl.bind(this, 3)}
														style={{
															backgroundColor: '#ffff',
														}}
													>
														{/* <Link to={'hackathon_overview'}>Overview</Link> */}
														Themes
													</div>
												</li>
											) : (
												<li className="tab-btn " data-tab="#theme">
													<div
														onClick={renderCtrl.bind(this, 3)}
														style={{
															backgroundColor: '#f1f2f9',
														}}
													>
														{/* <Link to={'hackathon_overview'}>Overview</Link> */}
														Themes
													</div>
												</li>
											)}
											{hack === 4 ? (
												<li className="tab-btn active-btn" data-tab="#judge">
													<div
														onClick={renderCtrl.bind(this, 4)}
														style={{
															backgroundColor: '#ffff',
														}}
													>
														{/* <Link to={'hackathon_overview'}>Overview</Link> */}
														Judges
													</div>
												</li>
											) : (
												<li className="tab-btn " data-tab="#judge">
													<div
														onClick={renderCtrl.bind(this, 4)}
														style={{
															backgroundColor: '#f1f2f9',
														}}
													>
														{/* <Link to={'hackathon_overview'}>Overview</Link> */}
														Judges
													</div>
												</li>
											)}
										</ul>
									</div>
								</div>

								<div className="content-column col-lg-8 col-md-12 col-sm-12 tabs-content">
									{hack === 1 && <Overview />}
									{hack === 2 && <Timeline />}
									{hack === 3 && <Themes />}
									{hack === 4 && <Judges />}
								</div>
							</div>
						</div>
					</div>
				</section>
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Hackathon;
