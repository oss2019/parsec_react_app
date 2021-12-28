import React, { useState } from 'react';
import Slide from 'react-reveal/Slide';
import { useMediaQuery } from 'react-responsive';
import { Navbar, Container, Nav, Button, NavLink } from 'react-bootstrap';

// import DownloadButton from '../DownloadAsPDF';
import Sidebar from '../Sidebar';
// import Logo from '../Logo';
import Logo from '../../images/logos/logo-nav.png';
import '../../css/style.css';
import '../../css/bootstrap.css';
import '../../css/responsive.css';
import './styles.css';
import ScriptTag from 'react-script-tag/lib/ScriptTag';
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
	};
	const [hover8, setHover8] = useState(false);
	const toggleHover8 = () => {
		setHover8(!hover8);
	};

	// !


	// !

	return (
		<React.Fragment>
			<header className="main-header header-style-two">
				<div className="header-upper">
					<div className="outer-container">
						<div className="clearfix">
							<div className="pull-left logo-box">
								<div className="logo">
									<a href="https://parsec.iitdh.ac.in" target={'_blank'}>
										<img src={Logo} />
									</a>
								</div>
							</div>

							<div className="nav-outer clearfix">
								<nav className="main-menu navbar-expand-md">
									<div className="navbar-header">
										<button
											className="navbar-toggler"
											type="button"
											data-target="collapse"
											data-target="#navbarSupportedContent"
											aria-controls="navbarSupportedContent"
											aria-label="Toggle navigation"
										>
											<span className="icon-bar"></span>
											<span className="icon-bar"></span>
											<span className="icon-bar"></span>
										</button>
									</div>

									<div
										className="navbar-collapse collapse scroll-nav clearfix"
										id="navbarSupportedContent"
									>
										<ul class="navigation clearfix">
											<li>
												<a href="https://parsec.iitdh.ac.in" target="">
													Home
												</a>
											</li>
											<li>
												<a href="https://parsec.iitdh.ac.in/about.html">
													About
												</a>
											</li>
											<li class="current">
												<a href="/events">Events</a>
											</li>
											<li class="">
												<a href="/workshops">Workshops</a>
											</li>
											<li>
												<a href="/schedule" target="">
													Schedule
												</a>
											</li>
											<li>
												<a href="/speakers" target="">
													Speakers
												</a>
											</li>
											<li>
												<a href="https://parsec.iitdh.ac.in/gallery.html">
													Gallery
												</a>
											</li>
											<li>
												<a href="https://parsec.iitdh.ac.in/faq.html" target="">
													FAQs
												</a>
											</li>
											<li>
												<a
													href="https://parsec.iitdh.ac.in/team.html"
													target=""
												>
													Team
												</a>
											</li>
											<li>
												<a
													href="https://parsec.iitdh.ac.in/contact.html"
													target=""
												>
													Contact
												</a>
											</li>
										</ul>
									</div>
								</nav>
							</div>
							<div className="outer-box">
								<div className="nav-toggler">
									<button className="nav-btn">
										<span className="icon flaticon-arrows"></span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			{/* ! End main Header */}

			<div className="form-back-drop"></div>

			{/* HIddern bar */}
			<section className="hidden-bar">
				<div className="inner-box">
					<div className="cross-icon">
						<span className="fa fa-times"></span>
					</div>
					<div className="title">
						<h2>Have some queries?</h2>
					</div>

					{/* Appointment form */}

					<div className="appointment-form">
						<form method="post" action="https://formspree.io/oss@iitdh.ac.in">
							<div className="form-group">
								<input
									type="text"
									name="text"
									value=""
									placeholder="Name"
									required
								/>
							</div>
							<div className="form-group">
								<input
									type="email"
									name="email"
									value=""
									placeholder="Email Address"
									required
								/>
							</div>
							<div className="form-group">
								<input
									type="text"
									name="phone"
									value=""
									placeholder="Mobile no."
									required
								/>
							</div>
							<div className="form-group">
								<textarea placeholder="Message" name="message"></textarea>
							</div>
							<div className="form-group">
								<button type="submit" className="theme-btn btn-style-one">
									Submit now
								</button>
							</div>
						</form>
					</div>
					<div className="contact-info-box">
						<ul className="info-list">
							<li>outreach.parsec@iitdh.ac.in</li>
							<li>+91 7892128329</li>
						</ul>
						<ul className="social-list clearfix">
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
			</section>
			<script
				src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
				integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
				crossorigin="anonymous"
			></script>
			<script
				src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
				integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
				crossorigin="anonymous"
			></script>
			<script
				src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
				integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
				crossorigin="anonymous"
			></script>
			<ScriptTag src="../../js/jquery.js"></ScriptTag>
			<ScriptTag src="../../js/popper.min.js"></ScriptTag>
			<ScriptTag src="../../js/bootstrap.min.js"></ScriptTag>
			<ScriptTag src="../../js/jquery-ui.js"></ScriptTag>
			<ScriptTag src="../../js/jquery.mCustomScrollbar.concat.min.js"></ScriptTag>
			<ScriptTag src="../../js/jquery.fancybox.js"></ScriptTag>
			<ScriptTag src="../../js/appear.js"></ScriptTag>
			<ScriptTag src="../../js/owl.js"></ScriptTag>
			<ScriptTag src="../../js/wow.js"></ScriptTag>
			<ScriptTag src="../../js/countdown.js"></ScriptTag>
			<ScriptTag src="../../js/script.js"></ScriptTag>
		</React.Fragment>
	);
};

export default Header;
