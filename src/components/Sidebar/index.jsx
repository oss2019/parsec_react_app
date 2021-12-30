import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

// import { url } from '../../shared/pdfURL';
import Logo from '../Logo';

const Sidebar = ({ show, handleClose, active }) => {
	const isTabletorMobile = useMediaQuery({
		query: '(max-width: 1000px)',
	});

	const history = useHistory();

	return (
		<div
			className="background-black"
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
			}}
		>
			<div className="children">
				{isTabletorMobile && (
					<Button
						className="gradient-text no-border elements link"
						onClick={handleClose}
					>
						<i class="fas fa-arrow-left fa-2x" />
					</Button>
				)}
				<Logo />
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
				>
					<a
						href="https://parsec.iitdh.ac.in"
						style={{ outline: 'none', textDecoration: 'none', color: 'white' }}
					>
						Home
					</a>
				</p>
				<p
					className={`elements text link `}
					// onClick={() => history.push('/events')}
				>
					<a
						href="/events"
						style={{
							outline: 'none',
							textDecoration: 'none',
							color: active === 2 ? 'violet' : 'white',
						}}
					>
						Events
					</a>
				</p>
				<p
					className={`elements text link ${active === 3 ? 'violet' : 'white'}`}
					onClick={() => history.push('/workshops')}
				>
					Workshop
				</p>
				<p
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
				</p>
				<p
					className={`elements text link ${active === 6 ? 'violet' : 'white'}`}
				>
					<a
						href="https://parsec.iitdh.ac.in/faq.html"
						style={{ outline: 'none', textDecoration: 'none', color: 'white' }}
					>
						FAQs
					</a>
				</p>
				<p
					className={`elements text link ${active === 7 ? 'violet' : 'white'}`}
					onClick={() => history.push('/team')}
				>
					Team
				</p>
				<p
					className={`elements text link ${active === 8 ? 'violet' : 'white'}`}
				>
					<a
						href="https://parsec.iitdh.ac.in/contact.html"
						style={{ outline: 'none', textDecoration: 'none', color: 'white' }}
					>
						Contact
					</a>
				</p>

				{/* <a href="#" className="elements text a gradient-text">
					Download as PDF
				</a> */}
			</div>
		</div>
	);
};

export default Sidebar;
