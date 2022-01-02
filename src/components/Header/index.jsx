import React, { useState } from 'react';
import Slide from 'react-reveal/Slide';
import { useMediaQuery } from 'react-responsive';
import { Navbar, Container, Nav, Button, NavLink } from 'react-bootstrap';

// import DownloadButton from '../DownloadAsPDF';
import Sidebar from '../Sidebar';
import Logo from '../Logo';
import './styles.css';

const Header = ({ active }) => {
	const isTabletorMobile = useMediaQuery({
		query: '(max-width: 1000px)',
	});

	const [show, setShow] = useState(false);

	const toggleShow = () => {
		setShow(!show);
	};

	const [hover, setHover] = useState(false);

	const toggleHover = () => {
		setHover(!hover);
	};

	const [hover1, setHover1] = useState(false);

	const toggleHover1 = () => {
		setHover1(!hover1);
	};

	const [hover2, setHover2] = useState(false);

	const toggleHover2 = () => {
		setHover2(!hover2);
	};

	const [hover3, setHover3] = useState(false);

	const toggleHover3 = () => {
		setHover3(!hover3);
	};

	const [hover4, setHover4] = useState(false);
	const toggleHover4 = () => {
		setHover4(!hover4);
	};

	const [hover5, setHover5] = useState(false);
	const toggleHover5 = () => {
		setHover5(!hover5);
	};

	const [hover6, setHover6] = useState(false);
	const toggleHover6 = () => {
		setHover6(!hover6);
	};

	const [hover7, setHover7] = useState(false);
	const toggleHover7 = () => {
		setHover7(!hover7);
	}
	const [hover8, setHover8] = useState(false);
	const toggleHover8 = () => {
		setHover8(!hover8);
	}



	return (
		<div>
			<Slide top delay={100} when={true}>
				<Navbar fixed="top" className="header">
					<Container className="fullWidth">
						<Slide top delay={100} when={true}>
							<Navbar.Brand className="elements">
								<div className="children">
									{isTabletorMobile && (
										<Button
											className="gradient-text no-border link"
											onClick={toggleShow}
										>
											<i className="fas fa-bars fa-2x" />
										</Button>
									)}
									<Logo />
								</div>
							</Navbar.Brand>
						</Slide>
						<Slide top delay={100} when={true}>
							{!isTabletorMobile && (
								<>
									<Nav className="justify-content-end">
										<NavLink
											id="1"
											href="/"
											className={`elements circle-border ${
												active !== 1 && hover
													? 'selected-gradient'
													: 'unselected-gradient'
											}`}
											onMouseEnter={toggleHover}
											onMouseLeave={toggleHover}
										>
											<div
												className={`title a ${
													active === 1 ? 'underline-violet violet' : 'white'
												}`}
											>
												Home
											</div>
										</NavLink>
										<NavLink
											id="2"
											href="/events"
											className={`elements circle-border ${
												active !== 2 && hover2
													? 'selected-gradient'
													: 'unselected-gradient'
											}`}
											onMouseEnter={toggleHover2}
											onMouseLeave={toggleHover2}
										>
											<div
												className={`title a ${
													active === 2 ? 'underline-violet violet' : 'white'
												}`}
											>
												Events
											</div>
										</NavLink>
										<NavLink
											id="3"
											href="/workshops"
											className={`elements circle-border ${
												active !== 3 && hover3
													? 'selected-gradient'
													: 'unselected-gradient'
											}`}
											onMouseEnter={toggleHover3}
											onMouseLeave={toggleHover3}
										>
											<div
												className={`title a ${
													active === 3 ? 'underline-violet violet' : 'white'
												}`}
											>
												Workshops
											</div>
										</NavLink>
										{/* <NavLink
											id="4"
											href="/schedule"
											className={`elements circle-border ${
												active !== 4 && hover4
													? 'selected-gradient'
													: 'unselected-gradient'
											}`}
											onMouseEnter={toggleHover4}
											onMouseLeave={toggleHover4}
										>
											<div
												className={`title a ${
													active === 4 ? 'underline-violet violet' : 'white'
												}`}
											>
												Schedule
											</div>
										</NavLink>
										<NavLink
											id="5"
											href="/speakers"
											className={`elements circle-border ${
												active !== 5 && hover5
													? 'selected-gradient'
													: 'unselected-gradient'
											}`}
											onMouseEnter={toggleHover5}
											onMouseLeave={toggleHover5}
										>
											<div
												className={`title a ${
													active === 5 ? 'underline-violet violet' : 'white'
												}`}
											>
												Speakers
											</div>
										</NavLink> */}
										<NavLink
											id="6"
											href="/faq"
											className={`elements circle-border ${
												active !== 6 && hover6
													? 'selected-gradient'
													: 'unselected-gradient'
											}`}
											onMouseEnter={toggleHover6}
											onMouseLeave={toggleHover6}
										>
											<div
												className={`title a ${
													active === 6 ? 'underline-violet violet' : 'white'
												}`}
											>
												FAQs
											</div>
										</NavLink>
										<NavLink
											id="7"
											href="/team"
											className={`elements circle-border ${
												active !== 7 && hover7
													? 'selected-gradient'
													: 'unselected-gradient'
											}`}
											onMouseEnter={toggleHover7}
											onMouseLeave={toggleHover7}
										>
											<div
												className={`title a ${
													active === 7 ? 'underline-violet violet' : 'white'
												}`}
											>
												Team
											</div>
										</NavLink>
										<NavLink
											id="8"
											href="/contact"
											className={`elements circle-border ${
												active !== 8 && hover8
													? 'selected-gradient'
													: 'unselected-gradient'
											}`}
											onMouseEnter={toggleHover8}
											onMouseLeave={toggleHover8}
										>
											<div
												className={`title a ${
													active === 8 ? 'underline-violet violet' : 'white'
												}`}
											>
												Contact
											</div>
										</NavLink>

										{/* <DownloadButton /> */}
									</Nav>
								</>
							)}
						</Slide>
					</Container>
					<Sidebar show={show} handleClose={toggleShow} active={active} />
				</Navbar>
			</Slide>
		</div>
	);
};

export default Header;
