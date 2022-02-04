import React from 'react';
import platinumSponsors from './platinumSponsors.json';
import goldSponsors from './goldSponsors.json';
import merchandisePartner from './merchandisePartner.json';
import inkind from './inkind.json';
import industryPartner from './industryPartner.json';
import workshopPartner from './workshopPartner.json';
import silverSponsor from './silver.json';
import associateSponsors from './associatePartners.json'
const SponsorSec = ({title,sponsorData}) => {
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
											padding: '5px',
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
							{/* HIGHLIGHT PLATINUM */}
							<SponsorSec title="PLATINUM" sponsorData={platinumSponsors} />
							{/* HIGHLIGHT GOLD */}
							<SponsorSec title="GOLD" sponsorData={goldSponsors} />
							{/* HIGHLIGHT SILVER */}
							<SponsorSec title="SILVER" sponsorData={silverSponsor} />
							{/* HIGHLIGHT ASSOCIATE PARTNER */}
							<SponsorSec
								title={'ASSOCIATE PARTNER'}
								sponsorData={associateSponsors}
							/>
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
				<div className="btn-box" style={{ textAlign: 'center' }}>
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
				</div>
				<br />
				<br />
				<br />
			</div>
		</section>
	);
};

export default Sponsors;
