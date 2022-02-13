import React, { useState } from 'react';
import Header from '../../components/Header';
import { useMediaQuery } from 'react-responsive';
import '../../css/style.css';
import '../../css/bootstrap.css';
import '../../css/responsive.css';
import './styles.css';
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
	const isTabletorMobile = useMediaQuery({
		query: '(max-width: 500px)',
	});
	const [hack, setHack] = useState(1);
	const renderCtrl = (q) => {
		setHack(q);
	};
	const isSmallDevice = useMediaQuery({query:'(max-width:1026px)'})
	// React.useEffect(() => {
	// 	const script = document.createElement('script');
	// 	script.src = 'https://apply.devfolio.co/v2/sdk.js';
	// 	script.async = true;
	// 	script.defer = true;
	// 	document.body.appendChild(script);
	// 	return () => {
	// 		document.body.removeChild(script);
	// 	};
	// }, []);
	return (
		<React.Fragment>
			<div className="page-wrapper">
				<div className="preloader"></div>
				{/* <EventsBackground /> */}
				<Header active={2} />

				{/* <section
					className="page-title"
					// id="ptitle"
					style={{ overflow: 'visible', paddingRight: 0 }}
				>
					<img
						src={`${
							isTabletorMobile
								? 'https://drive.google.com/uc?id=1Slj_JDJ9ZxKRnmwHI7PRPJ7hzTeq23gt'
								: 'https://drive.google.com/uc?id=15f75sPjME1b5EAdGTjMxtMRmtMt6pAEb'
						}`}
						id="hack-title"
						style={{
							position: 'absolute',
							top: 0,
							overflow: 'visible',
							height: '50vh',
							marginRight: 0,
							right: 0,
							left: 0,
							width: '100vw',
						}}
					/>
					
				</section> */}
				<div style={{ marginTop: isSmallDevice ? '45px' : '0' }}>
					<img
						src="https://drive.google.com/uc?id=15f75sPjME1b5EAdGTjMxtMRmtMt6pAEb"
						style={{
							minWidth:!isTabletorMobile ? '100vw': '',
							minHeight: isTabletorMobile ? '24vh' : '',
							objectFit: 'cover'
						
						}}
					/>
				</div>
				<section
					className="project-section auto-container"
					// style={{ marginTop: '50vh' }}
				>
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
											{/* {hack === 3 ? (
												<li className="tab-btn active-btn" data-tab="#theme">
													<div
														onClick={renderCtrl.bind(this, 3)}
														style={{
															backgroundColor: '#ffff',
														}}
													>
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
														Judges
													</div>
												</li>
											)}  */}
										</ul>
									</div>
								</div>

								<div className="content-column col-lg-8 col-md-12 col-sm-12 tabs-content">
									{hack === 1 && <Overview />}
									{hack === 2 && <Timeline />}
									{/* {hack === 3 && <Themes />}  */}
									{/* {hack === 4 && <Judges />} */}
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
