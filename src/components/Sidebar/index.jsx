import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

// import { url } from '../../shared/pdfURL';
// import Logo from '../Logo';

const Sidebar = ({ show, handleClose, active }) => {
	const isTabletorMobile = useMediaQuery({
		query: '(max-width: 1000px)',
	});

	const history = useHistory();

	return (
		<div
			style={{
				left: show ? '0' : '-320px',
				position: 'absolute',
				height: '100vh',
				width: '320px',
				margin: '0',
				padding: '0',
				transition: 'left 0.5s',
				zIndex: 100,
				top: '0px',
				backgroundColor: '#1f003b',
			}}
		>
			<div className="children">
				{isTabletorMobile && (
					<div
						className="gradient-text no-border link"
						onClick={handleClose}
						style={{ margin: '5px 20px' }}
					>
						<i class="fas fa-arrow-left fa-2x" />
					</div>
				)}
				{/* <Logo /> */}
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<p
					className={`elements text link ${active === 1 ? 'violet' : 'white'}`}
					onClick={() => history.push('/')}
				>
					Home
				</p>
				<p
					className={`elements text link ${active === 2 ? 'violet' : 'white'}`}
					onClick={() => history.push('/events')}
				>
					Events
				</p>
				<p
					className={`elements text link ${active === 3 ? 'violet' : 'white'}`}
					onClick={() => history.push('/workshops')}
				>
					Workshop
				</p>
				{/* <p
					className={`elements text link ${active === 4 ? 'violet' : 'white'}`}
					onClick={() => history.push('/schedule')}
				>
					Schedule
				</p>
				<p
					className={`elements text link ${active === 5 ? 'violet' : 'white'}`}
					onClick={() => history.push('/speakers')}
				>
					Speakers
				</p> */}
				<p
					className={`elements text link ${active === 6 ? 'violet' : 'white'}`}
					onClick={() => history.push('/faq')}
				>
					FAQs
				</p>
				<p
					className={`elements text link ${active === 7 ? 'violet' : 'white'}`}
					onClick={() => history.push('/team')}
				>
					Team
				</p>
				<p
					className={`elements text link ${active === 3 ? 'violet' : 'white'}`}
					onClick={() => history.push('/contact')}
				>
					Contact
				</p>

				<div style={{ color: 'white', bottom: 0, position: 'absolute' }} > 
					<div className="contact-info-box">
						<ul className="info-list">
							<br />
							<li>outreach.parsec@iitdh.ac.in</li>
							<br />
							<li>+91 7892128329</li>
						</ul>
						<ul className="social-list clearfix">
							<br />
							<br />
							<li>
								<a href="https://www.facebook.com/parsec.iitdh" target="_blank">
									Facebook
								</a>
							</li>
							<li>
								<a href="https://twitter.com/parsec_iitdh" target="_blank">
									Twitter
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* <a href="#" className="elements text a gradient-text">
					Download as PDF
				</a> */}
			</div>
		</div>
	);
};

export default Sidebar;
