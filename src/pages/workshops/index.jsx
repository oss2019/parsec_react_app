import React, { useEffect } from 'react';
import Header from '../../components/Header';
import TitleBackground from '../../images/background/workshop.jpg';
import './styles.css';
import '../../css/bootstrap.css';
import '../../css/style.css';
import '../../css/responsive.css';
import Footer from '../../components/Footer';
import WorkshopComp from './workshop_comp';
// import '../../css/contact.css';
import { useMediaQuery } from 'react-responsive';
const Workshop = () => {
	const isSmallDevice = useMediaQuery({query:'(max-widht:1026px)'})
	return (
		<React.Fragment>
			<div className="page-wrapper" style={{ overflowX: 'hidden' }}>
				<div className="preloader"></div>
				<Header active={3} />

				{/* <div style={{ marginTop: isSmallDevice ? '45px' : '0' }}>
					<img
						src="https://drive.google.com/uc?id=1eXH6NV9AG3Lz9uk5ibZB9UL5OV1fMDQU"
						style={{ minWidth: '100vw' }}
					/>
				</div> */}
				<section
					className="page-title"
					style={{
						backgroundImage: `url(${TitleBackground})`,
					}}
					id="page-title"
				>
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
					<div className="auto-container" style={{ padding: '0 auto' }}>
						<div
							class="row"
							style={{
								padding: 'auto',
								display: 'flex-wrap',
								justifyContent: 'center',
							}}
						>
							<WorkshopComp
								imageId="1dS5sWrqmjVIIgcY_5P5YjelUn5IZBn_P"
								title="Data Science and Machine Learning using Python"
								startDate="March 5, 2022, 10:00 AM"
								endDate="March 6, 2022, 5:00 PM"
								venue="Zoom"
								fee="799.00"
								registrationLink="https://rzp.io/l/parsec22"
								pdfLink={
									'https://drive.google.com/file/d/1v51v3JI_JQ_cNB2-2XUJdaIe2f4UN8lF/view'
								}
								trackingLabelForKnowMore={'Data Science'}
								trackingLabelForRegistration={'Register Data Science'}
							/>
							<WorkshopComp
								imageId="121LzHkYuBH13mq-lM6O6bxezjtMRnukD"
								title="Data Structures and Algorithms"
								startDate="March 5, 2022, 10:00 AM"
								endDate="March 6, 2022, 5:00 PM"
								venue="Zoom"
								fee="799.00"
								registrationLink="https://rzp.io/l/parsec22"
								pdfLink={
									'https://drive.google.com/file/d/1ImeYN7cN8WTkPLggMOJS6bC4SMS3GY0N/view'
								}
								trackingLabelForKnowMore={'Data Structure'}
								trackingLabelForRegistration={'Register Data Structure'}
							/>
							<WorkshopComp
								imageId="1ThdVu8tM_x23z5d5FIEgTlfq0CP-dSY8"
								title="Ethical Hacking and Cyber Security"
								startDate="March 5, 2022, 10:00 AM"
								endDate="March 6, 2022, 5:00 PM"
								venue="Zoom"
								fee="799.00"
								registrationLink="https://rzp.io/l/parsec22"
								pdfLink={
									'https://drive.google.com/file/d/1_uC_LdO665miJcFvXK1EhX4gMImv0B-p/view'
								}
								trackingLabelForKnowMore={'Ethical Hacking'}
								trackingLabelForRegistration={'Registration Ethical Hacking'}
							/>
							<WorkshopComp
								imageId="1-qiYntGY2gPoPzJO8ZeaE4HsTGJKYKKp"
								title="Blockchain Tech and Application"
								startDate="March 5, 2022, 10:00 AM"
								endDate="March 6, 2022, 4:30 PM"
								venue="Zoom"
								fee="799.00"
								registrationLink="https://rzp.io/l/7Kmit4R9q"
								pdfLink={
									'https://drive.google.com/file/d/1_6iFpliz_oANi3s55YtBz_-coBUwlA64/view'
								}
								trackingLabelForKnowMore={'Blockchain'}
								trackingLabelForRegistration={'Registration Blockchain'}
							/>
						</div>

						{/* <div className="row">
							<Workshop_comp
								title="Data Science and Machine Learning using Python"
								startDate="March 5, 2022, 10:00 AM"
								endDate="March 6, 2022, 5:00 PM"
								venue="Zoom"
								fee="799.00"
								registrationLink="https://rzp.io/l/parsec22"
							></Workshop_comp>
						</div> */}
					</div>
				</section>
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default Workshop;
