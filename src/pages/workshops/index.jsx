import React, { useEffect } from 'react';
import Header from '../../components/Header';
import TitleBackground from '../../images/background/workshop.jpg';
import aiWorkshopImage from '../../images/resource/ml&ai.jpg';
import './styles.css';
import '../../css/bootstrap.css';
import '../../css/style.css';
import '../../css/responsive.css';
import Footer from '../../components/Footer';
// import '../../css/contact.css';

const Workshop = () => {

	return (
		<React.Fragment>
			<div className="page-wrapper" style={{ overflowX: 'hidden' }}>
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
									href="index.html"
									target="_blank"
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
							<div
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
							</div>

							
							<div className='col-lg-2'></div>

							<div
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
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default Workshop;
