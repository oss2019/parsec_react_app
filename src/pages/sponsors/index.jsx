import React from 'react';
import './styles.css';
import '../../css/bootstrap.css';
import '../../css/style.css';
import '../../css/responsive.css';
import '../../css/sponser.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import sponserTitleBg from '../../images/background/sponsor.jpg';
const Sponsers = () => {
	return (
		<React.Fragment>
			<div className="page-wrapper">
				<div className="preloader"></div>

				<Header />

				<section
					className="page-title"
					style={{ backgroundImage: `url(${sponserTitleBg})` }}
				>
					<div class="auto-container">
						<span
							class="float-text"
							id='sec-title-text'
						>
							Sponsors
						</span>
						<h1>Previous Sponsors</h1>
						<ul class="bread-crumb clearfix">
							<li>
								<a
									href="index.html"
									id='sec-title-text'
								>
									Home
								</a>
							</li>
							<li id='sec-title-text'>
								Sponsors
							</li>
						</ul>
					</div>
				</section>
				<section className="our-ticket-pricing-table-area section-padding-100-0">
					<div className="auto-container">
						<div className="row">
							<h1
								className="col-12 text"
								style={{
									color: '#cd7f32',
									marginBottom: '30px',
									textAlign: 'center',
								}}
							>
								PLATINUM
							</h1>
							<div className="col-12 col-md-6 col-lg-4">
								<div
									className="single-ticket-pricing-table style-2 active text-center mb-100 wow fadeInUp"
									data-wow-delay="300ms"
								>
									<figure
										className="image"
										style={{ height: '120px', border: '#fff' }}
									>
										<a href="https://sbi.co.in/">
											<img
												src="https://drive.google.com/uc?id=1whfXN3QBC9ZvXloch8S63o_qc_gOiv3x"
												alt=""
												style={{
													height: '123px',
													width: '250px',
													paddingTop: '50px',
												}}
											/>
										</a>
									</figure>
								</div>
							</div>

							<div className="col-12 col-md-6 col-lg-4">
								<div
									className="single-ticket-pricing-table style-2 active text-center mb-100 wow fadeInUp"
									data-wow-delay="300ms"
								>
									<figure
										className="image"
										style={{ height: '120px', border: '#fff' }}
									>
										<a href="https://github.com">
											<img
												src="https://drive.google.com/uc?id=1GfHHwiPZatGO7aAdm3RUjb9CJz72PcQq"
												alt=""
												style={{
													height: '125px',
													width: '270px',
													paddingTop: '48px',
												}}
											/>
										</a>
									</figure>
								</div>
							</div>
							<div className="col-12 col-md-6 col-lg-4">
								<div
									className="single-ticket-pricing-table style-2 active text-center mb-100 wow fadeInUp"
									data-wow-delay="300ms"
								>
									<figure
										className="image"
										style={{ height: '120px', border: '#fff' }}
									>
										<a href="https://www.canarabank.in/">
											<img
												src="https://drive.google.com/uc?id=101vY9pGJUMkhvEAzX3orPOrgqKOs5sN8"
												alt=""
												style={{
													height: '123px',
													width: '250px',
													paddingTop: '50px',
												}}
											/>
										</a>
									</figure>
								</div>
							</div>
							<div className="col-12 col-md-6 col-lg-4">
								<div
									className="single-ticket-pricing-table style-2 active text-center mb-100 wow fadeInUp"
									data-wow-delay="300ms"
								>
									<figure
										className="image"
										style={{ height: '120px', border: '#fff' }}
									>
										<a href="https://matic.network/">
											<img
												src="https://drive.google.com/uc?id=1aTVohkhlB9YsfMTaPJhwqMOVWEAV0te7"
												alt=""
												style={{
													height: '123px',
													width: '250px',
													paddingTop: '50px',
												}}
											/>
										</a>
									</figure>
								</div>
							</div>
							<div className="col-12 col-md-6 col-lg-4">
								<div
									className="single-ticket-pricing-table style-2 active text-center mb-100 wow fadeInUp"
									data-wow-delay="300ms"
								>
									<figure
										className="image"
										style={{ height: '120px', border: '#fff' }}
									>
										<a href="http://www.kptcl.com/">
											<img
												src="https://drive.google.com/uc?id=1OVf_swK1bCT8LmJBUE67LtlVGcuRktXH"
												alt=""
												style={{
													height: '170px',
													width: '170px',
													paddingTop: '0px',
												}}
											/>
										</a>
									</figure>
								</div>
							</div>
							<div className="col-12 col-md-6 col-lg-4">
								<div
									className="single-ticket-pricing-table style-2 active text-center mb-100 wow fadeInUp"
									data-wow-delay="300ms"
								>
									<figure
										className="image"
										style={{ height: '120px', border: '#fff' }}
									>
										<a href="https://devfolio.co/">
											<img
												src="https://drive.google.com/uc?id=14MVh0ODMnTummYU_gl2L0jXD6ueqDYOi"
												alt=""
												style={{
													height: '115px',
													width: '250px',
													paddingTop: '50px',
												}}
											/>
										</a>
									</figure>
								</div>
							</div>
							<div className="col-12 col-md-6 col-lg-4">
								<div
									className="single-ticket-pricing-table style-2 active text-center mb-100 wow fadeInUp"
									data-wow-delay="300ms"
								>
									<figure
										className="image"
										style={{ height: '130px', border: '#fff' }}
									>
										<a href="https://fold.money">
											<img
												src="https://drive.google.com/uc?id=17dOKPoxQbRsXUH04aH-BCjR4J3554Rzh"
												alt=""
												style={{
													height: '135px',
													width: '270px',
													paddingTop: '48px',
												}}
											/>
										</a>
									</figure>
								</div>
							</div>
							<div className="col-12 col-md-6 col-lg-4"></div>

							<h1
								className="col-12 text-warning"
								style={{
									color: 'gold',
									marginBottom: '30px',
									textAlign: 'center',
								}}
							>
								GOLD
							</h1>
							<div className="col-12 col-md-6 col-lg-4">
								<div
									className="single-ticket-pricing-table style-2 active text-center mb-100 wow fadeInUp"
									data-wow-delay="300ms"
								>
									<figure
										className="image"
										style={{ height: '120px', border: '#fff' }}
									>
										<a href="https://techurate.com/">
											<img
												src="https://drive.google.com/uc?id=1BoUV3O_tYNEX6jK32As9VQL2K-1u0_nW"
												alt=""
												style={{
													height: '120px',
													width: '240px',
													paddingTop: '25px',
												}}
											/>
										</a>
									</figure>
								</div>
							</div>
							<div className="col-12 col-md-6 col-lg-4">
								<div
									className="single-ticket-pricing-table style-2 active text-center mb-100 wow fadeInUp"
									data-wow-delay="300ms"
								>
									<figure
										className="image"
										style={{ height: '120px', border: '#fff' }}
									>
										<a href="https://www.gatsbyjs.org/">
											<img
												src="https://drive.google.com/uc?id=1jQ06nYGrpP-ZN9Xjdu9eET_cOj9U8h3r"
												alt=""
												style={{
													height: '120px',
													width: '250px',
													paddingTop: '45px',
												}}
											/>
										</a>
									</figure>
								</div>
							</div>
							<div className="col-12 col-md-6 col-lg-4">
								<div
									className="single-ticket-pricing-table style-2 active text-center mb-100 wow fadeInUp"
									data-wow-delay="300ms"
								>
									<figure
										className="image"
										style={{ height: '120px', border: '#fff' }}
									>
										<a href="https://www.wolframalpha.com/">
											<img
												src="https://drive.google.com/uc?id=1Fk9kDaFq6pvhckCK-yq66yZ-O2w7J_KA"
												alt=""
												style={{
													height: '140px',
													width: '250px',
													paddingTop: '40px',
												}}
											/>
										</a>
									</figure>
								</div>
							</div>
							<div className="col-12 col-md-6 col-lg-4">
								<div
									className="single-ticket-pricing-table style-2 active text-center mb-100 wow fadeInUp"
									data-wow-delay="300ms"
								>
									<figure
										className="image"
										style={{ height: '120px', border: '#fff' }}
									>
										<a href="http://www.hescom.co.in/">
											<img
												src="https://drive.google.com/uc?id=1ha6vhX9LqJk6BddLyOHsOI-AfW8wsa-c"
												alt=""
												style={{
													height: '170px',
													width: '220px',
													paddingTop: '0px',
												}}
											/>
										</a>
									</figure>
								</div>
							</div>

							<h1
								className="col-12"
								style={{
									color: 'green',
									marginBottom: '30px',
									textAlign: 'center',
								}}
							>
								SILVER
							</h1>
							<div className="col-lg-1"></div>
							<div className="col-12 col-md-6 col-lg-5">
								<div
									className="single-ticket-pricing-table style-2 active text-center mb-100 wow fadeInUp"
									data-wow-delay="300ms"
								>
									<figure
										className="image"
										style={{ height: '120px', border: '#fff' }}
									>
										<a href="https://www.benchmarksolution.com/">
											<img
												src="https://drive.google.com/uc?id=1S8iaglJ1r1C3jf0aab9CkvBU46-yjG4W"
												alt=""
												style={{ height: '170px', paddingTop: '0px' }}
											/>
										</a>
									</figure>
								</div>
							</div>
							<div className="col-12 col-md-6 col-lg-5">
								<div
									className="single-ticket-pricing-table style-2 active text-center mb-100 wow fadeInUp"
									data-wow-delay="300ms"
								>
									<figure
										className="image"
										style={{ height: '120px', border: '#fff' }}
									>
										<a href="https://hashnode.com/">
											<img
												src="https://drive.google.com/uc?id=1B07r4sUunsrwPUOmHKt7KepEjCJUBG_W"
												alt=""
												style={{ height: '120px', paddingTop: '60px' }}
											/>
										</a>
									</figure>
								</div>
							</div>

							<div className="col-lg-1"></div>
							<h1
								className="col-12"
								style={{
									color: '#008080',
									marginBottom: '30px',
									textAlign: 'center',
								}}
							>
								PLATFORM PARTNER
							</h1>
							<div className="col-md-4"></div>
							<div className="col-12 col-md-6 col-lg-4">
								<div
									className="single-ticket-pricing-table style-2 active text-center mb-100 wow fadeInUp"
									data-wow-delay="300ms"
								>
									<figure
										className="image"
										style={{ height: '120px', border: '#fff' }}
									>
										<a href="https://www.hackerearth.com/">
											<img
												src="https://drive.google.com/uc?id=1Asdth8CfmE9TBlBNCM4KpOeDoYo1nvj4"
												alt=""
												// style="height:110px; padding-top:40px"
												style={{ height: '110px', paddingTop: '40px' }}
											/>
										</a>
									</figure>
								</div>
							</div>

							<h1
								className="col-12"
								style={{
									color: '#9c27b0',
									marginBottom: '30px',
									textAlign: 'center',
								}}
							>
								IN-KIND
							</h1>
							<div className="col-12 col-md-6 col-lg-4">
								<div
									className="single-ticket-pricing-table style-2 active text-center mb-100 wow fadeInUp"
									data-wow-delay="300ms"
								>
									<figure
										className="image"
										style={{ height: '120px', border: '#fff' }}
									>
										<a href="http://www.creative-tim.com">
											<img
												src="https://drive.google.com/uc?id=12XNAqRkUkDKdPBTRqQlF_ZimgmdjodkX"
												alt=""
												style={{
													height: '178px',
													width: '200px',
													paddingTop: '8px',
												}}
											/>
										</a>
									</figure>
								</div>
							</div>
							<div className="col-12 col-md-6 col-lg-4">
								<div
									className="single-ticket-pricing-table style-2 active text-center mb-100 wow fadeInUp"
									data-wow-delay="300ms"
								>
									<figure
										className="image"
										style={{ height: '120px', border: '#fff' }}
									>
										<a href="https://www.stickermule.com/supports/parsec-2020">
											<img
												src="https://drive.google.com/uc?id=1XksiZ4X9o-uT0ZGTN9uT9UymjNQpZt-F"
												alt=""
												style={{
													height: '148px',
													width: '250px',
													paddingTop: '8px',
												}}
											/>
										</a>
									</figure>
								</div>
							</div>
							<div className="col-12 col-md-6 col-lg-4">
								<div
									className="single-ticket-pricing-table style-2 active text-center mb-100 wow fadeInUp"
									data-wow-delay="300ms"
								>
									<figure
										className="image"
										style={{ height: '120px', border: '#fff' }}
									>
										<a href="https://balsamiq.cloud/">
											<img
												src="https://drive.google.com/uc?id=1LuRXcCEU1zdDROZpovIrK3AbcVZdTuTs"
												alt=""
												style={{
													height: '122px',
													width: '250px',
													paddingTop: '45px',
												}}
											/>
										</a>
									</figure>
								</div>
							</div>
							<div className="col-12 col-md-6 col-lg-4">
								<div
									className="single-ticket-pricing-table style-2 active text-center mb-100 wow fadeInUp"
									data-wow-delay="300ms"
								>
									<figure
										className="image"
										style={{ height: '120px', border: '#fff' }}
									>
										<a href="https://restdb.io/">
											<img
												src="https://drive.google.com/uc?id=1MLoMAHmlrdPHuJ8s8dJYM3zvugQ4Qsgc"
												alt=""
												style={{
													height: '120px',
													width: '250px',
													paddingTop: '40px',
												}}
											/>
										</a>
									</figure>
								</div>
							</div>
							<div className="col-12 col-md-6 col-lg-4">
								<div
									className="single-ticket-pricing-table style-2 active text-center mb-100 wow fadeInUp"
									data-wow-delay="300ms"
								>
									<figure
										className="image"
										style={{ height: '120px', border: '#fff' }}
									>
										<a href="https://www.bugsee.com/">
											<img
												src="https://drive.google.com/uc?id=1woH_B3Ed9-xSyHeI2f7esLhcPRMRvcob"
												alt=""
												style={{
													height: '145px',
													width: '160px',
													paddingTop: '25px',
												}}
											/>
										</a>
									</figure>
								</div>
							</div>
							<div className="col-12 col-md-6 col-lg-4">
								<div
									className="single-ticket-pricing-table style-2 active text-center mb-100 wow fadeInUp"
									data-wow-delay="300ms"
								>
									<figure
										className="image"
										style={{ height: '120px', border: '#fff' }}
									>
										<a href="https://dev.to/">
											<img
												src="https://drive.google.com/uc?id=13J7CSqy3hO6cc4ROEfCBqkSNr64pmONa"
												alt=""
												style={{
													height: '145px',
													width: '120px',
													paddingTop: '25px',
												}}
											/>
										</a>
									</figure>
								</div>
							</div>
							<div className="col-12 col-md-6 col-lg-4"></div>
							<div className="col-12 col-md-6 col-lg-4">
								<div
									className="single-ticket-pricing-table style-2 active text-center mb-100 wow fadeInUp"
									data-wow-delay="300ms"
								>
									<figure
										className="image"
										style={{ height: '120px', border: '#fff' }}
									>
										<a href="https://www.decathlon.in/">
											<img
												src="https://drive.google.com/uc?id=1vNfKOFfQUz6u8cs5TonThzw4QBM_hOKv"
												alt=""
												style={{
													height: '135px',
													width: '250px',
													paddingTop: '40px',
												}}
											/>
										</a>
									</figure>
								</div>
							</div>
							<div className="col-12 col-md-6 col-lg-4"></div>
							<h1
								className="col-12"
								style={{
									color: '#4c2418',
									marginBottom: '30px',
									textAlign: 'center',
								}}
							>
								STARTUP PARTNER
							</h1>
							<div className="col-12 col-md-6 col-lg-4"></div>
							<div className="col-12 col-md-6 col-lg-4">
								<div
									className="single-ticket-pricing-table style-2 active text-center mb-100 wow fadeInUp"
									data-wow-delay="300ms"
								>
									<figure
										className="image"
										style={{ height: '120px', border: '#fff' }}
									>
										<a href="https://www.deshpandestartups.org/">
											<img
												src="https://drive.google.com/uc?id=1tzP12w0XCjlNkOiJOWIcG-rreILXmxHx"
												alt=""
												style={{
													height: '125px',
													width: '250px',
													paddingTop: '45px',
												}}
											/>
										</a>
									</figure>
								</div>
							</div>
							<div className="col-12 col-md-6 col-lg-4"></div>

							<h1
								className="col-12"
								style={{
									color: '#267fc5',
									marginBottom: '30px',
									textAlign: 'center',
								}}
							>
								COMMUNITY PARTNER
							</h1>
							<div className="col-12 col-md-6 col-lg-4">
								<div
									className="single-ticket-pricing-table style-2 active text-center mb-100 wow fadeInUp"
									data-wow-delay="300ms"
								>
									<figure
										className="image"
										style={{ height: '120px', border: '#fff' }}
									>
										<a href="https://developers.google.com/community/dsc">
											<img
												src="https://drive.google.com/uc?id=1S9FVlnEpC0CtO_dVdWON02qn5WYYZNpP"
												alt=""
												style={{
													height: '130px',
													width: '220px',
													paddingTop: '45px',
												}}
											/>
										</a>
									</figure>
								</div>
							</div>
							<div className="col-12 col-md-6 col-lg-4">
								<div
									className="single-ticket-pricing-table style-2 active text-center mb-100 wow fadeInUp"
									data-wow-delay="300ms"
								>
									<figure
										className="image"
										style={{ height: '120px', border: '#fff' }}
									>
										<a href="http://bit.ly/CR2k20">
											<img
												src="https://drive.google.com/uc?id=1aoGcsEz8ewIQMX-5t8e20p5TcKJretaC"
												alt=""
												style={{
													height: '140px',
													width: '250px',
													paddingTop: '40px',
												}}
											/>
										</a>
									</figure>
								</div>
							</div>

							<div className="col-12 col-md-6 col-lg-4">
								<div
									className="single-ticket-pricing-table style-2 active text-center mb-100 wow fadeInUp"
									style={{ height: '170px' }}
									data-wow-delay="300ms"
								>
									<figure
										className="image"
										style={{ height: '100px', border: '#fff' }}
									>
										<a href="https://www.meetup.com/GDGHubli/">
											<img
												src="https://drive.google.com/uc?id=1tTZZcXMpfJK5D0cyHgVidrWe7_ZrlMa6"
												alt=""
												style={{
													height: '100%',
													width: '100%',
													paddingTop: '60px',
												}}
											/>
										</a>
									</figure>
								</div>
							</div>

							{/*  */}
						</div>
					</div>
				</section>

				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Sponsers;
