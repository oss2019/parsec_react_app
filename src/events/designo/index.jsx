import React, { lazy, Suspense, useState, useEffect } from 'react';
import Header from '../../components/Header';
import './styles.css';
import '../../css/style.css';
import '../../css/bootstrap.css';
import '../../css/responsive.css';
import Footer from '../../components/Footer';

const Designo = () => {
  return (
    <React.Fragment>
			<Header />
			<div className="page-wrapper"  >
				{/* <Suspense fallback={<div className="preloader"></div>} /> */}
				<div className="preloader"></div>
				{/* <div className="form-back-drop"></div> */}

				<div className="inner-column tab active-tab" id="introduction" style={{padding:`0px 100px`}}>
				<section
					className="login-section"
				>
					<div className="auto-container p-0">
						<div className="login-form">
							<div className="row clearfix">
                    <h1
													className="px-3 py-2 w-100 text-center"
													style={{
														fontFamily: 'poppins',
														
													}}
												>
													DESIGNO
												</h1>
												<h2
													className="px-3 py-2 w-100 text-center"
													style={{
														fontFamily: 'poppins',
														
													}}
												>
													CAD MODELING COMPETITION
												</h2>
								<div className="form-column col-lg-12 col-md-12 col-sm-12">
									<div
										style={{
											padding: `40px`,
											paddingBottom: `10px`,
										}}
									>
										<div className="title-box">
											<p
												className="text-justify"
												style={{
													color: `#383434`,
													fontSize: `large`,
												}}
											>
												PARSEC 2.0 came up with DESIGNO(3D modeling or CAD) allows engineers and designers
                        to build realistic computer models of parts and assemblies. These models can be then 
                        3D Printed or CNC machined as well as used to run complex simulations. A wide range of 
                        parameters can be simulated such as strength or temperature resistance before any physical
                        models have been created, enabling a much faster and cheaper workflow. 
											</p>
										</div>
										<div
											className="row justify-content-center align-items-center"
											style={{
												margin: `auto`,
												paddingBottom: `20px`,
											}}
										>
											<div className="btn-box" style={{ textAlign: `center` }}>
												<a
													href="##"
                          className="theme-btn btn-style-four button1 text-center"
                          id="btncs1"
                          style={{
                            borderRadius: '8px',
                            color: '#ffffff',
                            // background: 'rgba(242, 172, 79,0.9)',
                          }}
												>
													COMING SOON
												</a>
											</div>
										</div>
									</div>
								</div>

                

								{/* <div className="image-column col-lg-11 col-sm-12 col-sm-12">
									<div className="image-box wow fadeIn">
										<figure className="image">
											<img
												src={project}
												alt=""
												style={{
													// maxWidth: `600px`,
													// maxHeight: `400px`,
													// margin: `auto`,
												}}
											></img>
										</figure>
									</div>
								</div> */}

								<div
									className="form-column col-lg-12 col-md-12 col-sm-12"
									style={{ padding: `40px` }}
								>
									<div
										className=" border-danger"
										style={{ border: '2px solid #dc3545', borderRadius: '8px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
									>
										<div
											style={{
												fontFamily: `'Roboto', sans-serif`,
												fontSize: `large`,
												fontWeight: `bold`,
											}}
											className="card-body text-center text-danger"
										>
											{' '}
											Duration: - 
										</div>
										<div
											style={{
												fontFamily: `'Roboto', sans-serif`,
												fontSize: `large`,
												fontWeight: `bold`,
											}}
											className="card-body text-center text-danger"
										>
											Team Size: Max 2
										</div>
									</div>
									<br />
									

									<ul className="list-style-four1 mb-0">
										<li style={{ color: `#12114a` }}>
                    Preferred Software: AutoCAD, Inventor, Pro E Wildfire, Pro E Creo, Catia, SolidWorks, NX CAD, Abaqus, ANSYS, 
MCS Adams, Altair- Hyper Mesh.
										</li>
										<li style={{ color: `#12114a` }}>
                    The teams can perform dynamic simulation, stress analysis, flow/thermal analysis, and mechanical simulation.
										</li>
                    
										<li style={{ color: `hsl(241, 63%, 18%)` }}>
                    Preferred submission file types	<strong>CAD model</strong>: step, obj, iges sldprt and sldasm <strong>Draft file</strong>: slddrw and/or pdf.

										</li>
										<li style={{ color: `#12114a` }}>
										Only one entry per team is allowed.
										</li>
										<li style={{ color: `#12114a` }}>
                    Decision of the judges will be final and binding.
										</li>
									</ul>
									<br />
                  <p style={{ fontSize: `large`, color:`black` }}>
                  The teams are required to draft and design their own prototype Model and make 
                  a detailed analysis of their model and present the same during the final day. 
									</p>
                  <br/>
                  <p
															style={{
																fontFamily: `FontAwesome, sans-serif`,
																fontSize: `large`,
                                color : `black`
																									}}
														>
															<strong>The presentation may include</strong>
														</p>
									<br />
                  <ul className="list-style-four1 mb-0">
										<li style={{ color: `#12114a` }}>
                     A 3-D CAD model of the design in multiple views.
										</li>
										<li style={{ color: `#12114a` }}>
                    Feasibility /Marketability/ Cost Effectiveness/Material Selection, assembly (if required) model.
										</li>
                    
										<li style={{ color: `hsl(241, 63%, 18%)` }}>
                    Any rough sketches you created before modeling.
										</li>
										<li style={{ color: `#12114a` }}>
                    Animations/Simulations/Any Creative Audio-Visual Aids with which model can be well presented and explained.
										</li>
										<li style={{ color: `#12114a` }}>
										Results of the analysis and design-optimization.
										</li>
									</ul>
									<br />

								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			</div>
			<Footer />
		</React.Fragment>
  )
}

export default Designo;