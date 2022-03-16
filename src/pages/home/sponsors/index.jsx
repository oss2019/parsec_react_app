import React from 'react';
import platinumSponsors from './platinumSponsors.json';
import goldSponsors from './goldSponsors.json';
import merchandisePartner from './merchandisePartner.json';
import inkind from './inkind.json';
import industryPartner from './industryPartner.json';
import workshopPartner from './workshopPartner.json';
import silverSponsor from './silver.json';
import associateSponsors from './associatePartners.json'
import titleSponsor from './titleSponsors.json'
import trelix from './trelix.json'
import educationalPartner from './educationPartner.json'
import { useMediaQuery } from 'react-responsive';
const SponsorSec = ({title,sponsorData,padding}) => {
	return (
		<>
			<h1
				className="col-12 text"
				style={{
					color: '#cd7f32',
					marginBottom: '30px',
					textAlign: 'center',
				}}
			>
				{title}
			</h1>
			{sponsorData.map((item, index) => (
				<div
					className="col-12 col-md-6 col-lg-4"
					style={{ margin: '0 10px 0 5px' }}
				>
					<div
						className="single-ticket-pricing-table style-2 active text-center mb-100 wow fadeInUp"
						data-wow-delay="300ms"
						style={{ padding: '0' }}
					>
						<figure
							className="image"
							style={{
								height: '143px',
								border: '#ffffff',
							}}
						>
							<a
								href={`${item.link}`}
								style={{
									pointerEvents: item.link === '' ? 'none' : '',
									// pointerEvents: 'none'
								}}
							>
								<div
									style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										width: '100%',
										height: '100%',
									}}
								>
									<img
										src={`https://drive.google.com/uc?id=${item.image}`}
										alt=""
										style={{
											height: '123px',
											width: 'auto',
											alignItems: 'center',
											padding: padding? `${padding}`:'5px',
										}}
									/>
								</div>
							</a>
						</figure>
					</div>
				</div>
			))}
		</>
	);
}

const Sponsors = () => {
	const isSmall  = useMediaQuery({query: '(max-width: 1007px)'})
	return (
		<section className="sponsor">
			<div className="auto-container">
				<br />
				<br />
				<br />
				<span className="float-text">SPONSORS</span>
				<h1 title="sec-title" style={{ textAlign: 'center' }}>
					Sponsors
				</h1>

				{/* SPONSORS */}
				<section className="our-ticket-pricing-table-area section-padding-100-0">
					<div className="container">
						<div
							className="row"
							style={{ display: 'flex-wrap', justifyContent: 'center' }}
						>
							{/* HIGHLIGHT TITLE SPONSOR */}
							{/* <SponsorSec
								title={'POWERED BY'}
								sponsorData={trelix}
								padding='10px'
								// padding='10px'
							/> */}
							<div>
								<h1
									title="sec-title"
									style={{ textAlign: 'center', color: '#cd7f32' }}
								>
									BROUGHT TO YOU BY
								</h1>

								<div
									style={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										marginTop: '30px',
										marginBottom: '50px',
									}}
								>
									<a
										href="https://enterprisecareers.mcafee.com/"
										style={{
											boxShadow: '-7px -4px 60px 0px rgba(168,168,168,0.2)',
											borderRadius: '8px',
											overflow: 'hidden',
										}}
									>
										<img
											src={`https://drive.google.com/uc?id=1Nu0D39XxN7fgrfWGd_wr27a5AgM8P2Mq`}
											alt=""
											style={{
												// height: '123px',
												// width: 'auto',
												// alignItems: 'center',
												width: '350px',
												height: 'auto',
												borderRadius: '8px',
											}}
										/>
									</a>
								</div>
							</div>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-evenly',
									alignItems: isSmall ? 'center' : 'flex-start',
									flexDirection: isSmall ? 'column' : 'row',
								}}
							>
								<div>
									<h1
										title="sec-title"
										style={{ textAlign: 'center', color: '#cd7f32' }}
									>
										POWERED BY
									</h1>

									<div
										style={{
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											marginTop: '30px',
											marginBottom: '50px',
										}}
									>
										<a
											href="https://cred.club/"
											style={{
												boxShadow: '-7px -4px 60px 0px rgba(168,168,168,0.2)',
												borderRadius: '8px',
												overflow: 'hidden',
											}}
										>
											<img
												src={`https://drive.google.com/uc?id=11s4gQBPhMDSwX6T6bAUEKQgL50C_1AXI`}
												alt=""
												style={{
													// height: '123px',
													// width: 'auto',
													// alignItems: 'center',
													width: '350px',
													height: 'auto',
													borderRadius: '8px',
												}}
											/>
										</a>
									</div>
								</div>

								<div>
									<h1
										title="sec-title"
										style={{ textAlign: 'center', color: '#cd7f32' }}
									>
										IN ASSOCIATION WITH
									</h1>

									<figure
										className="image"
										style={{
											height: '153px',
											border: '#ffffff',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											marginTop: '30px',
											// width: '350px',
											// height: 'auto',
											boxShadow: '-7px -4px 60px 0px rgba(168,168,168,0.2)',
											borderRadius: '8px',
										}}
									>
										<a href="https://dare2compete.com/">
											<div
												style={{
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'center',
													width: '100%',
													height: '100%',
												}}
											>
												<img
													src={`https://drive.google.com/uc?id=1IcgRd99WskgI0VD9120fAMbBvKqU1xx9`}
													alt=""
													style={{
														height: '123px',
														width: 'auto',
														alignItems: 'center',
													}}
												/>
											</div>
										</a>
									</figure>
								</div>

								{/* <SponsorSec
									title={'IN ASSOCIATION WITH'}
									sponsorData={associateSponsors}
								/> */}
							</div>

							<br />
							<br />
							<br />

							{/* HIGHLIGHT ASSOCIATE PARTNER */}
							{/* <SponsorSec
								title={'IN ASSOCIATION WITH'}
								sponsorData={associateSponsors}
							/> */}
							{/* HIGHLIGHT PLATINUM */}
							<SponsorSec title="PLATINUM" sponsorData={platinumSponsors} />
							{/* HIGHLIGHT GOLD */}
							<SponsorSec title="GOLD" sponsorData={goldSponsors} />
							{/* HIGHLIGHT SILVER */}
							<SponsorSec title="SILVER" sponsorData={silverSponsor} />

							{/* HIGHLIGHT INDUSTRIAL LIVE TRAINING AND INTERNSHIP PARTNER */}
							<SponsorSec
								title={'INDUSTRIAL LIVE TRAINING AND INTERNSHIP PARTNER'}
								sponsorData={industryPartner}
							/>

							{/* HIGHLIGHT MERCHANDISE */}
							<SponsorSec
								title="MERCHANDISE PARTNER"
								sponsorData={merchandisePartner}
							/>

							{/* HIGHLIGHT WORKSHOP PARTNER */}
							<SponsorSec
								title={'EDUCATIONAL PARTNER'}
								sponsorData={educationalPartner}
							/>
							<SponsorSec
								title={'WORKSHOP PARTNER'}
								sponsorData={workshopPartner}
							/>
							{/* HIGHLIGHT IN-KIND */}
							<SponsorSec title={'IN-KIND SPONSOR'} sponsorData={inkind} />
						</div>
					</div>
				</section>
				{/* END SPONSORS */}

				<br />
				<br />
				{/* <div className="btn-box" style={{ textAlign: 'center' }}>
					<a
						href="https://drive.google.com/file/d/1bN3DHWDMvaiEYX8YA4N8i_W4uuh2gqzm/view?usp=sharing"
						target="_blank"
						className="theme-btn btn-style-four button"
						style={{
							borderRadius: '8px',
							color: '#ffffff',
						}}
						rel="noreferrer"
					>
						Become a Sponsor
					</a>
				</div> */}
				<br />
				<br />
				<br />
			</div>
		</section>
	);
};

export default Sponsors;
