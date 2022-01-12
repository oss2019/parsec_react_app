import React, { useEffect } from 'react';
import Header from '../../components/Header';
import TitleBackground from '../../images/background/workshop.jpg';
import aiWorkshopImage from '../../images/resource/ml&ai.jpg';
import './styles.css';
import '../../css/bootstrap.css';
import '../../css/style.css';
import '../../css/responsive.css';
import Footer from '../../components/Footer';
import Workshop_comp from './workshop_comp';
// import '../../css/contact.css';

const Workshop = () => {

	return (
		<React.Fragment>
			<div className="page-wrapper" style={{ overflowX: 'hidden' }}>
				<div className="preloader"></div>
				<Header active={3} />
				<section
					className="page-title"
					style={{
						backgroundImage: `url(${TitleBackground})`,
					}}
					id="page-title"
				>
					{/* <img src={TitleBackground} /> */}
					<div className="auto-container">
						<span className="float-text">Workshops</span>
						<h1>Workshops</h1>
						<ul className="bread-crumb clearfix">
							<li>
								<a
									href="/"
									// target="_blank"
									style={{ textDecoration: 'none' }}
								>
									Home
								</a>
							</li>
							<li>Workshops</li>
						</ul>
					</div>
				</section>

				<section className="news-section">
					<div className="auto-container">
						<div className="row">
							<Workshop_comp name = "Demo workshop & Testing" startDate = "Feb 15, 2020, 10:00 AM"
							 			   endDate = "Feb 15, 2020, 10:00 AM" fee = "850" ></Workshop_comp>
						    
							{/* <div
								className="news-block news-block-style col-lg-5 col-md-6 col-sm-12 wow fadeInUp "
								dataWowDelay="400ms"
							>
								<div className="image-box" style = {{paddingTop : '8%', paddingBottom : '3%'}}>
									<figure className="image">
										<a href="#">
											<img src={aiWorkshopImage} alt = "" style={{width : '100%',objectFit:'cover'}}/>
										</a>
									</figure>
								</div>

								<div className="lower-content" style={{ textAlign: 'left' }}>
									<h4>
										<a
											href="#"
											style={{
												fontSize: '25px',
												paddingTop: '5px',
												fontFamily: `-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif`,
												textAlign: 'center',
												textDecoration: 'none',
											}}
										>
											Demo workshop & Testing
										</a>
									</h4>
									<div className="text" style={{ marginBottom: '6px' }}>
										<span
											style={{
												color: '#000',
												fontWeight: '700',
												fontSize: '20px',
											}}
										>
											Start Date:{' '}
										</span>
										<span
											style={{
												color: '#000',
												fontSize: '17px',
												fontWeight: 'normal',
											}}
										>
											Feb 15, 2020, 10:00 AM
										</span>
									</div>
									<div className="text" style={{ marginBottom: '6px' }}>
										<span
											style={{
												color: '#000',
												fontWeight: '700',
												fontSize: '20px',
											}}
										>
											End Date:{' '}
										</span>
										<span
											style={{
												color: '#000',
												fontSize: '17px',
												fontWeight: 'normal',
											}}
										>
											Feb 15, 2020, 10:00 AM
										</span>
									</div>
									<div className="text" style={{ marginBottom: '6px' }}>
										<span
											style={{
												color: '#000',
												fontWeight: '700',
												fontSize: '20px',
											}}
										>
											Fees:{' '}
										</span>
										<span
											style={{
												color: '#000',
												fontSize: '17px',
												fontWeight: 'normal',
											}}
										>
											&#8377; 850
										</span>
									</div>

									<center
										style={{
											height: '50px',
											paddingBottom: '60px',
											paddingTop: '15px',
										}}
									>
										<div className="btn-box">
											<button
												type="button"
												className="btn btn-lg btn-primary"
												disabled
											>
												Coming soon
											</button>
										</div>
										<br />
										<br />
									</center>
								</div>
							</div> */}

							<div className="col-lg-2"></div>
							<workshop_comp name = "Demo workshop & Testing" startDate = "Feb 15, 2020, 10:00 AM"
							 			   endDate = "Feb 15, 2020, 10:00 AM" fee = "850" ></workshop_comp>

							{/* <div
								className="news-block news-block-style col-lg-5 col-md-6 col-sm-12 wow fadeInUp "
								dataWowDelay="400ms"
							>
								<div className="image-box">
									<figure className="image">
										<a href="#">
											<img src={aiWorkshopImage} />
										</a>
									</figure>
								</div>

								<div className="lower-content" style={{ textAlign: 'left' }}>
									<h4>
										<a
											href=""
											style={{
												fontSize: '25px',
												paddingTop: '5px',
												fontFamily: `-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif`,
												textAlign: 'center',
												textDecoration: 'none',
											}}
										>
											Demo workshop & Testing
										</a>
									</h4>
									<div className="text" style={{ marginBottom: '6px' }}>
										<span
											style={{
												color: '#000',
												fontWeight: '700',
												fontSize: '20px',
											}}
										>
											Start Date:{' '}
										</span>
										<span
											style={{
												color: '#000',
												fontSize: '17px',
												fontWeight: 'normal',
											}}
										>
											Feb 15, 2020, 10:00 AM
										</span>
									</div>
									<div className="text" style={{ marginBottom: '6px' }}>
										<span
											style={{
												color: '#000',
												fontWeight: '700',
												fontSize: '20px',
											}}
										>
											End Date:{' '}
										</span>
										<span
											style={{
												color: '#000',
												fontSize: '17px',
												fontWeight: 'normal',
											}}
										>
											Feb 15, 2020, 10:00 AM
										</span>
									</div>
									<div className="text" style={{ marginBottom: '6px' }}>
										<span
											style={{
												color: '#000',
												fontWeight: '700',
												fontSize: '20px',
											}}
										>
											Fees:{' '}
										</span>
										<span
											style={{
												color: '#000',
												fontSize: '17px',
												fontWeight: 'normal',
											}}
										>
											&#8377; 850
										</span>
									</div>

									<center
										style={{
											height: '50px',
											paddingBottom: '60px',
											paddingTop: '15px',
										}}
									>
										<div className="btn-box">
											<button
												type="button"
												className="btn btn-lg btn-primary"
												disabled
											>
												Coming soon
											</button>
										</div>
										<br />
										<br />
									</center>
								</div>
							</div> */}
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default Workshop;
