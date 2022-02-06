import React from 'react';
import './styles.css';
import '../../css/bootstrap.css';
import '../../css/style.css';
import '../../css/responsive.css';
import { useMediaQuery } from 'react-responsive';
import useRoutetracker from '../../components/Tracker/hooks/useRouteTracker';
import ReactGA from 'react-ga'

const WorkshopComp = ({
	title,
	registrationLink,
	startDate,
	endDate,
	fee,
	venue,
	imageId,
	pdfLink,
	trackingLabelForKnowMore,
	trackingLabelForRegistration
}) => {
	const isMobile = useMediaQuery({
		query: '(max-width: 425px)',
    });
    const fntsizeStyles = {
        fontSize: '13px'
	}
	// ! Traking for external links of Workhops
	const GARouteTracker = useRoutetracker("External Link")
	return (
		<>
			<div
				class="col-sm-6"
				style={{
					borderRadius: '12px',
					boxShadow: '-1px 1px 1px 1px rgba(0,0,0,0.4)',
					// padding: 0
					width: '30rem',
					margin: '100px 50px',
				}}
			>
				<img
					src={`https://drive.google.com/uc?id=${imageId}`}
					alt=""
					style={{
						width: '100%',
						objectFit: 'cover',
						// borderRadius: '12px',
						marginTop: '-60px',
						padding: 0,
					}}
				/>

				<br />
				<br />
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-start',
						marginLeft: '10px',
					}}
				>
					<h2 style={{ textAlign: 'center', marginBottom: '10px' }}>{title}</h2>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'flex-end',
							justifyContent: 'flex-start',
						}}
					>
						<h4 className="responsiveFont">Start Date:&nbsp;&nbsp;</h4>
						<h5 style={{ fontWeight: 'normal' }} className="responsiveFont">
							{startDate}
						</h5>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'flex-end',
							justifyContent: 'flex-start',
							textAlign: 'start',
						}}
					>
						<h4 className="responsiveFont">End Date:&nbsp;&nbsp;</h4>
						<h5 className="responsiveFont" style={{ fontWeight: 'normal' }}>
							{endDate}
						</h5>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'flex-end',
							justifyContent: 'flex-start',
						}}
					>
						<h4 className="responsiveFont">Venue:&nbsp;&nbsp;</h4>
						<h5 className="responsiveFont" style={{ fontWeight: 'normal' }}>
							{venue}
						</h5>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'flex-end',
							justifyContent: 'flex-start',
						}}
					>
						<h4 className="responsiveFont">Fees:&nbsp;&nbsp;</h4>
						<h5 style={{ fontWeight: 'normal' }} className="responsiveFont">
							&#8377; {fee}
						</h5>
					</div>
					<br />
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					{/* <ReactGA.OutboundLink> */}
						<a
							href={`${pdfLink}`}
							target="_blank"
							// onClick={GARouteTracker.bind(this, `${trackingLabelForKnowMore}`)}
						>
							<div className="btn-box">
								<button type="button" className="btn btn-lg btn-primary">
									Know More
								</button>
							</div>
						</a>
					{/* </ReactGA.OutboundLink> */}
					{/* <ReactGA.OutboundLink> */}
						<a
							href={`${registrationLink}`}
							target="_blank"
							// onClick={GARouteTracker.bind(
							// 	this,
							// 	`${trackingLabelForRegistration}`
							// )}
						>
							<div className="btn-box">
								<button type="button" className="btn btn-lg btn-primary">
									Register Here
								</button>
							</div>
						</a>
					{/* </ReactGA.OutboundLink> */}
				</div>

				<br />
				<br />
			</div>
		</>
	);
};

export default WorkshopComp;
