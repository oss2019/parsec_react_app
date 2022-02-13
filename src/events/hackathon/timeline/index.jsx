import React  from 'react';
import './styles.css';
import '../../../css/style.css';
import '../../../css/bootstrap.css';
import '../../../css/responsive.css';
import { useState } from 'react';

const Timeline = () => {
	const [isIdeationVisible, setIsIdeationVisible] = useState(false)
	const handleToggle = () => {
		setIsIdeationVisible(!isIdeationVisible)
	}
	return (
		<React.Fragment>
			<div className="tab inner-column active-tab" id="timeline">
				<h2
					style={{
						fontFamily: `'Roboto', sans-serif`,
						fontWeight: `bold`,
					}}
				>
					TIMELINE
				</h2>
				<hr />
				<hr />
				<div className="content-box">
					<div className="row">
						<div className="row">
							<div className="col-auto text-center flex-column d-none d-sm-flex">
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
								<h5 className="m-2">
									<span className="badge badge-pill bg-danger"> </span>
								</h5>
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
							</div>
							<div className="col py-2">
								<div className=" border-danger shadow">
									<div
										className="card-body"
										style={{ border: '2px solid #dc3545', borderRadius: '8px' }}
									>
										<div className="float-right text-danger">
											4:00 PM, March 4 , 2022
										</div>
										<h4 className="card-title text-danger">
											{/* <strong>Phase 1:</strong> */}
											Opening Ceremony
										</h4>
										<p
											className="card-text text-dark"
											style={{ fontSize: `medium` }}
										>
											A line-up of enthralling performances serving as a prelude
											to Devhack 3.0.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-auto text-center flex-column d-none d-sm-flex">
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
								<h5 className="m-2">
									<span
										className="badge badge-pill bg-light border"
										// style={{ borderRadius: '100%', width: '10%', height: '10%' }}
									>
										{' '}
									</span>
								</h5>
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
							</div>
							<div className="col py-2">
								<div className=" shadow">
									<div
										className="card-body"
										style={{
											border: '2px solid #e2e6e9',
											borderRadius: '8px',
										}}
									>
										<div className="float-right text-danger">
											6:00 PM, March 4, 2022
										</div>
										<h4 className="card-title text-danger">Orientation</h4>
										<p
											className="card-text text-dark"
											style={{ fontSize: `medium` }}
										>
											An informative preamble to Devhack 3.0 comprising details
											regarding the available tracks, their utilization,
											resources, judges, judging criteria and mentors
											accompanied by the welcoming of the participants. An
											interactive line-up of games for networking.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-auto text-center flex-column d-none d-sm-flex">
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
								<h5 className="m-2">
									<span className="badge badge-pill bg-danger"> </span>
								</h5>
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
							</div>
							<div className="col py-2">
								<div className=" border-danger shadow">
									<div
										className="card-body"
										style={{ border: '2px solid #dc3545', borderRadius: '8px' }}
									>
										<div className="float-right text-danger">
											8:00 PM, March 4 , 2022
										</div>
										<h4 className="card-title text-danger">
											<strong>Phase 1:&nbsp;</strong>
											Ideation
										</h4>
										<p
											className="card-text text-dark mb-1"
											style={{ fontSize: `medium` }}
										>
											<strong>
												Behind every great hack, lies a greater idea!
											</strong>{' '}
											In this phase, teams are expected to come up with ideas
											worth hacking.
										</p>
										{!isIdeationVisible && (
											<button
												className="btn btn-sm btn-outline-secondary"
												type="button"
												data-target="#t2_details"
												data-toggle="collapse"
												onClick={handleToggle}
											>
												More ▼
											</button>
										)}
										<div className="collapse mt-3" id="t2_details">
											<p
												className="card-text text-dark"
												style={{ fontSize: `medium` }}
											>
												This is the time for your ideas to shine. Ideas can be
												influenced by the happenings in your surroundings. Your
												strategic idea might be one of the best solutions of the
												problem statement if you plan it suitably. Make this
												opportunity memorable by implementing all the innovative
												ideas you couldn't before.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-auto text-center flex-column d-none d-sm-flex">
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
								<h5 className="m-2">
									<span className="badge badge-pill bg-light border"> </span>
								</h5>
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
							</div>
							<div className="col py-2">
								<div className=" shadow">
									<div
										className="card-body"
										style={{ border: '2px solid #e2e6e9', borderRadius: '8px' }}
									>
										<div className="float-right text-danger">
											9:00 AM, March 5, 2022
										</div>
										<h4 className="card-title text-danger">
											Speaker's Session Begin
										</h4>
										<p
											className="card-text text-dark"
											style={{ fontSize: `medium` }}
										>
											Inspiration comes best from experience. Whether you're
											looking for a quick idea or are keen to learn about
											current trends in technology and see the passion that
											drives the industry, you are at the right place. Gain tips
											to tackle the ever-advancing technology to inspiring
											anecdotes.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-auto text-center flex-column d-none d-sm-flex">
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
								<h5 className="m-2">
									<span className="badge badge-pill bg-danger"> </span>
								</h5>
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
							</div>
							<div className="col py-2">
								<div className=" border-danger shadow">
									<div
										className="card-body"
										style={{ border: '2px solid #dc3545', borderRadius: '8px' }}
									>
										<div className="float-right text-danger">
											2:00 PM, March 5, 2022
										</div>
										<h4 className="card-title text-danger">
											<strong>Phase 2:&nbsp;</strong>
											Innovation
										</h4>
										<p
											className="card-text text-dark mb-1"
											style={{ fontSize: `medium` }}
										>
											<strong>Let the hacking begin!</strong> IIn this Phase,
											teams are expected to have commenced sketching the
											framework and planning its implementation. An idea can
											gain more prominence when it becomes reality. So buckle up
											and get your ideas moving.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-auto text-center flex-column d-none d-sm-flex">
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
								<h5 className="m-2">
									<span className="badge badge-pill bg-light border"> </span>
								</h5>
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
							</div>
							<div className="col py-2">
								<div className=" border-danger shadow">
									<div
										className="card-body"
										style={{ border: '2px solid #e2e6e9', borderRadius: '8px' }}
									>
										<div className="float-right text-danger">
											10:00 PM, March 5, 2022
										</div>
										<h4 className="card-title text-danger">
											<strong>Phase 3:&nbsp;</strong>
											Power Hacking
										</h4>
										<p
											className="card-text text-dark mb-1"
											style={{ fontSize: `medium` }}
										>
											<strong>Tick-tock Tick-tock!</strong>The clock is ticking!
											Keep working on enhancing your hack and developing the
											impeccable version of it before time runs out.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-auto text-center flex-column d-none d-sm-flex">
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
								<h5 className="m-2">
									<span className="badge badge-pill bg-danger"> </span>
								</h5>
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
							</div>
							<div className="col py-2">
								<div className=" border-danger shadow">
									<div
										className="card-body"
										style={{ border: '2px solid #dc3545', borderRadius: '8px' }}
									>
										<div className="float-right text-danger">
											8:00 AM, March 6, 2022
										</div>
										<h4 className="card-title text-danger">
											<strong>Phase 4:&nbsp;</strong>
											Submission of Prototype
										</h4>
										<p
											className="card-text text-dark mb-1"
											style={{ fontSize: `medium` }}
										>
											Time's up! Submit your ingenious hack on
											<strong> Devfolio </strong> on time to be a part of this
											electrifying battle of unconventional ideas and emerge as
											one of the top teams.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-auto text-center flex-column d-none d-sm-flex">
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
								<h5 className="m-2">
									<span className="badge badge-pill bg-danger"> </span>
								</h5>
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
							</div>
							<div className="col py-2">
								<div className=" border-danger shadow">
									<div
										className="card-body"
										style={{ border: '2px solid #dc3545', borderRadius: '8px' }}
									>
										<div className="float-right text-danger">
											10:30 AM, March 6, 2022
										</div>
										<h4 className="card-title text-danger">
											{/* <strong>Phase 5:</strong> */}
											Declaration of top 7 teams
										</h4>
										<p
											className="card-text text-dark mb-1"
											style={{ fontSize: `medium` }}
										>
											Voila, the results are out! The declaration of the top 7
											teams in the thrilling highlight of the event.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-auto text-center flex-column d-none d-sm-flex">
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
								<h5 className="m-2">
									<span className="badge badge-pill bg-danger"> </span>
								</h5>
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
							</div>
							<div className="col py-2">
								<div className=" border-danger shadow">
									<div
										className="card-body"
										style={{ border: '2px solid #dc3545', borderRadius: '8px' }}
									>
										<div className="float-right text-danger">
											12:15 PM, March 6, 2022
										</div>
										<h4 className="card-title text-danger">
											<strong>Phase 5:&nbsp;</strong>
											Submission deadline for presentations
										</h4>
										<p
											className="card-text text-dark mb-1"
											style={{ fontSize: `medium` }}
										>
											Time's up! Submit your presentations on
											<strong> Devfolio </strong> on time to be a part of this
											electrifying battle of unconventional ideas and emerge as
											one of the top teams.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-auto text-center flex-column d-none d-sm-flex">
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
								<h5 className="m-2">
									<span className="badge badge-pill bg-danger"> </span>
								</h5>
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
							</div>
							<div className="col py-2">
								<div className=" border-danger shadow">
									<div
										className="card-body"
										style={{ border: '2px solid #dc3545', borderRadius: '8px' }}
									>
										<div className="float-right text-danger">
											12:30 PM, March 6, 2022
										</div>
										<h4 className="card-title text-danger">
											<strong>Phase 6:&nbsp;</strong>
											Giving presentations in front of judges
										</h4>
										<p
											className="card-text text-dark mb-1"
											style={{ fontSize: `medium` }}
										>
											<strong> Time to impress the Judges!</strong> The top
											teams will present their profound ideas before the judges
											for a concluding evaluation.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-auto text-center flex-column d-none d-sm-flex">
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
								<h5 className="m-2">
									<span className="badge badge-pill bg-danger"> </span>
								</h5>
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
							</div>
							<div className="col py-2">
								<div className=" border-danger shadow">
									<div
										className="card-body"
										style={{ border: '2px solid #dc3545', borderRadius: '8px' }}
									>
										<div className="float-right text-danger">
											2:30 PM, March 6, 2022
										</div>
										<h4 className="card-title text-danger">
											{/* <strong>Phase 5:</strong> */}
											Speaker's Session
										</h4>
										<p
											className="card-text text-dark mb-1"
											style={{ fontSize: `medium` }}
										>
											If you are looking for some inspiration, you are at the
											right place. Gain tips to tackle the ever advancing
											technology to inspiring anecdotes.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-auto text-center flex-column d-none d-sm-flex">
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
								<h5 className="m-2">
									<span className="badge badge-pill bg-danger"> </span>
								</h5>
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
							</div>
							<div className="col py-2">
								<div className=" border-danger shadow">
									<div
										className="card-body"
										style={{ border: '2px solid #dc3545', borderRadius: '8px' }}
									>
										<div className="float-right text-danger">
											3:30 PM, March 6, 2022
										</div>
										<h4 className="card-title text-danger">
											{/* <strong>Phase 5:</strong> */}
											Prize Distribution
										</h4>
										<p
											className="card-text text-dark mb-1"
											style={{ fontSize: `medium` }}
										>
											May the best idea win! The winner will receive exciting
											prizes.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-auto text-center flex-column d-none d-sm-flex">
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
								<h5 className="m-2">
									<span className="badge badge-pill bg-danger"> </span>
								</h5>
								<div className="row h-50">
									<div className="col border-right"> </div>
									<div className="col"> </div>
								</div>
							</div>
							<div className="col py-2">
								<div className=" border-danger shadow">
									<div
										className="card-body"
										style={{ border: '2px solid #dc3545', borderRadius: '8px' }}
									>
										<div className="float-right text-danger">
											5:00 PM, March 6, 2022
										</div>
										<h4 className="card-title text-danger">
											{/* <strong>Phase 5:</strong> */}
											Closing Ceremony
										</h4>
										<p
											className="card-text text-dark mb-1"
											style={{ fontSize: `medium` }}
										>
											This brings the exhilarating event to an end.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Timeline;
