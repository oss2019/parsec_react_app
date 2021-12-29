import React from 'react';
import Header from '../../components/Header';
import TitleBackground from '../../images/background/workshop.jpg';
import './styles.css';
import '../../css/bootstrap.css';
import '../../css/style.css';
import '../../css/responsive.css';
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
					id='page-title'
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
							></div>
						</div>
					</div>
				</section>
			</div>
		</React.Fragment>
	);
};

export default Workshop;
