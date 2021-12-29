import React from 'react';
import '../../css/footer.css';
import '../../css/style.css';
import '../../css/bootstrap.css';
import '../../css/responsive.css';
// import './styles.css';
import FooterLogo from '../../images/logos/logo-footer.png';

const Footer = () => {
	return (
		<React.Fragment>
			<footer className="pt-5 pb-4" id="contact">
				<div
					className="container"
					style={{
						height: 'fit-content',
					}}
				>
					<div className="row">
						<div className="col-lg-3 col-md-6 col-sm-6 my-auto">
							<a href="index.html" target="_blank">
								<img src={FooterLogo} alt="footer-logo" />
							</a>
							<p className="mb-4 mt-4">
								IIT Dharwad Gymkhana, IIT Dharwad, Walmi Campus, Belur, Dharwad,
								Karnataka PIN-580011
							</p>
						</div>

						<div className="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
							<h5 className="mb-4 font-weight-bold text-white">EVENT</h5>
							<ul className="f-address" style={{ paddingLeft: 0 }}>
								<li>
									<div className="row">
										<div className="col-12">
											<a
												className="mb-0"
												href="hackathon.html"
												style={{
													textDecoration: 'none',
													pointerEvents: 'none',
												}}
											>
												DevHack 3.0
											</a>
											<br />
											<a
												className="mb-0"
												href="ctf.html"
												style={{
													textDecoration: 'none',
													pointerEvents: 'none',
												}}
											>
												VeniVidiVici 2.0
											</a>
											<br />
											<a
												className="mb-0"
												href="cp.html"
												style={{
													textDecoration: 'none',
													pointerEvents: 'none',
												}}
											>
												Algostriken 2.0
											</a>
											<br />

											<a
												className="mb-0"
												href="quiz.html"
												style={{
													textDecoration: 'none',
													pointerEvents: 'none',
												}}
											>
												Quiz
											</a>
											<br />
											<a
												className="mb-0"
												href="#"
												style={{
													textDecoration: 'none',
													pointerEvents: 'none',
												}}
											>
												Designõ
											</a>
											<br />
											<a
												className="mb-0"
												href="#"
												style={{
													textDecoration: 'none',
													pointerEvents: 'none',
												}}
											>
												Ascensus
											</a>
											<br />
										</div>
									</div>
								</li>
							</ul>
						</div>

						<div className="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4 text-left">
							<h5 className="mb-4 font-weight-bold text-white">SUPPORT</h5>
							<ul className="f-address text-left" style={{ paddingLeft: 0 }}>
								<li>
									<div className="row">
										<div className="col-12">
											<a
												className="mb-0"
												href="https://parsec.iitdh.ac.in/travel.html"
												style={{ textDecoration: 'none' }}
											>
												How to Reach?
											</a>
											<br />
											<a
												className="mb-0"
												href="https://parsec.iitdh.ac.in/sponsors.html"
												style={{ textDecoration: 'none' }}
											>
												Sponsors
											</a>
											<br />
											<a
												className="mb-0"
												href="https://parsec.iitdh.ac.in/gallery.html"
												style={{ textDecoration: 'none' }}
											>
												Gallery
											</a>
											<br />
											<a
												href="https://parsec.iitdh.ac.in/contact.html"
												style={{ textDecoration: 'none' }}
											>
												Contact Us
											</a>
											<br />
											<a
												href="https://parsec.iitdh.ac.in/about.html"
												style={{ textDecoration: 'none' }}
											>
												About Us
											</a>
											<br />
											<a
												href="https://parsec.iitdh.ac.in/code_of_conduct.html"
												style={{ textDecoration: 'none' }}
											>
												Code Of Conduct
											</a>
											<br />
										</div>
									</div>
								</li>
							</ul>
						</div>

						<div className="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4 text-left">
							<h5 className="mb-4 font-weight-bold text-white">SOCIAL MEDIA</h5>

							<ul className="social-pet mt-4 mb-4" style={{ paddingLeft: '0' }}>
								<li>
									<a
										href="https://www.facebook.com/parsec.iitdh"
										target="_blank"
										title="Facebook"
										style={{ textDecoration: 'none' }}
									>
										<i className="fab fa-facebook-f"></i>
									</a>
								</li>
								<li>
									<a
										href="https://twitter.com/parsec_iitdh"
										target="_blank"
										title="Twitter"
										style={{ textDecoration: 'none' }}
									>
										<i className="fab fa-twitter"></i>
									</a>
								</li>
								<li>
									<a
										href="https://t.me/joinchat/AAAAAFcfPNde3RmitAKyxg"
										target="_blank"
										style={{
											backgroundColor: '#0088cc',
											textDecoration: 'none',
										}}
										title="Telegram"
									>
										<i className="fab fa-telegram"></i>
									</a>
								</li>

								<li>
									<a
										href="https://www.instagram.com/parsec_iit_dharwad/"
										target="_blank"
										style={{
											background:
												'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
											boxShadow: '0px 3px 10px rgba(0,0,0,.25)',
											textDecoration: 'none',
										}}
										title="instagram"
									>
										<i className="fab fa-instagram"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>

			<section
				className="copyright text-center text-white font-weight-bold"
				style={{ width: '100%', marginTop: 0 }}
			>
				Copyright &copy; 2022 - OSS, Indian Institute of Technology, Dharwad.
				All Rights Reserved.
			</section>
		</React.Fragment>
	);
};

export default Footer;
