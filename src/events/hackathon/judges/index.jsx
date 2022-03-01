import React from 'react';
import './styles.css';
import '../../../css/style.css';
import '../../../css/bootstrap.css';
import '../../../css/responsive.css';
import Judge1 from '../../../images/events/devhack/mayur.jpeg';
import Judge2 from '../../../images/events/devhack/vineet.png';

const Judges = () => {
	return (
		<React.Fragment>
			<div className="tab inner-column active-tab" id="judge">
				<h2
					style={{
						fontFamily: `'Roboto', sans-serif`,
						fontWeight: `bold`,
					}}
				>
					JUDGES
				</h2>
				<hr></hr>
				<div className="content-box">
					<div className="row" style={{display:'flex',justifyContent:'space-around'}}>
					<div className="col-md-5 py-2" >
							<div className=" border-danger shadow">
								<div className="card-body">
									<img src={Judge1} alt=" " style={{width : '100%', maxWidth : '300px',display:'block',marginLeft:'auto',marginRight:'auto'}}></img>
									<br />
									<h5 className="card-title text-danger" style={{textAlign :'center'}}>Mr.Mayur Patil</h5>
									<p
										className="card-text text-dark mb-1"
										style={{ fontSize: `medium`,textAlign :'center' }}
									>
										<strong>Project Manager,</strong> Cloint India Pvt Ltd
										 <span style={{ color: `#707070` }}></span>
									</p>
									
								</div>
							</div>
						</div>
						<div className="col-md-5 py-2">
							<div className=" border-danger shadow">
								<div className="card-body">
									<img src={Judge2} alt=" " style={{width : '100%', maxWidth : '300px',display:'block',marginLeft:'auto',marginRight:'auto'}}></img>
									{/* <div style={{display: 'flex', flexDirection: 'column'}}> */}
									<br />
									<h5 className="card-title text-danger" style={{textAlign: 'center'}}>Mr.Vinit Shahdeo</h5>
									
									<p
										className="card-text text-dark mb-1"
										style={{ fontSize: `medium`,textAlign:'center' }}
									>
										<strong>Software Engineer,</strong> Postman
										 <span style={{ color: `#707070` }}></span>
									</p>
									{/* </div> */}
									
								</div>
							</div>
						</div>
						{/* <div className="col-md-5 py-2">
							<div className=" border-danger shadow">
								<div className="card-body">
									<h4 className="card-title text-danger">Dr. Deepak K T</h4>
									<p
										className="card-text text-dark mb-1"
										style={{ fontSize: `medium` }}
									>
										<strong>Assistant Professor, ECE Department</strong> IIIT
										Dharwad <span style={{ color: `#707070` }}></span>
									</p>
								</div>
							</div>
						</div> */}
						<div className="col-md-0.5 text-center flex-column d-none d-sm-flex">
							<span className="badge badge-pill bg-danger"> </span>
						</div>
						{/* <div className="col-md-5 py-2">
							<div className="border-danger shadow">
								<div className="card-body">
									<h4 className="card-title text-danger">
										<strong></strong>Dr. Uma M
									</h4>
									<p
										className="card-text text-dark mb-1"
										style={{ fontSize: `medium` }}
									>
										<strong>Dean R&D KLE Tech Hubli</strong>
										<span style={{ color: `#707070` }}></span>
									</p>
								</div>
							</div>
						</div> */}
					</div>
				
				</div>
			</div>
		</React.Fragment>
	);
};

export default Judges;
