import React from "react";
import Header from "../../components/Header";
import './styles.css';
import '../../css/style.css'
import '../../css/bootstrap.css'
import '../../css/responsive.css'

const Timeline = () => {
  return (
    <React.Fragment>
     
    <div className="page-wrapper">
        {/* <div className="preloader"></div> */}
        <Header />
        
        <section className="page-title"
        style={{backgroundImage: `url(images/events/devhack/devhack_banner.png)`}}
         >
            <div className="auto-container">
                <ul className="bread-crumb clearfix">  
                    <li>
                      {' '}
                      <br></br><br></br>
                      </li>
                </ul>
            </div>
        </section>

        <section className="project-section">
            <div className="anim-icons">
                <span className="icon icon-cross-1"></span>
            </div>
            <div className="auto-container">
                <div className="project-tabs tabs-box">
                    <div className="row">
                        <div className="buttons-column col-lg-4 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <ul className="tab-buttons tab-btns clearfix">
                                    <li className="tab-btn active-btn" data-tab="#introduction">
                                        <div>Overview</div>
                                    </li>
                                    <li className="tab-btn" data-tab="#timeline">
                                        <div>Timeline</div>
                                    </li>
                                    <li className="tab-btn" data-tab="#theme">
                                        <div>Themes</div>
                                    </li>
                                    <li className="tab-btn" data-tab="#judge">
                                        <div>Judges</div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="tab" id="timeline">
                                <h2 style={{fontFamily: `'Roboto', sans-serif`,
                                            fontWeight: `bold`}}
                                >
                                         TIMELINE 
                                </h2>
                                <hr/><hr/>
                                <div className="content-box">
                                    <div className="row">
                                        <div className="row">
                                            <div className="col-auto text-center flex-column d-none d-sm-flex">
                                                <div className="row h-50">
                                                    <div className="col border-right">{' '}</div>
                                                    <div className="col">{' '}</div>
                                                </div>
                                                <h5 className="m-2">
                                                    <span className="badge badge-pill bg-light border">{' '}</span>
                                                </h5>
                                                <div className="row h-50">
                                                    <div className="col border-right">{' '}</div>
                                                    <div className="col">{' '}</div>
                                                </div>
                                            </div>
                                            <div className="col py-2">
                                                <div className="card shadow">
                                                    <div className="card-body">
                                                        <div className="float-right text-danger">10:00 PM, February 14, 2020
                                                        </div>
                                                        <h4 className="card-title text-danger">Orientation</h4>
                                                        <p className="card-text text-dark" style={{fontSize: `medium`}}>A
                                                            quick session explaining the rules, guidelines, timeline,
                                                            themes and submission format for the hackathon. Make sure to
                                                            be there on time.</p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-auto text-center flex-column d-none d-sm-flex">
                                                <div className="row h-50">
                                                    <div className="col border-right">{' '}</div>
                                                    <div className="col">{' '}</div>
                                                </div>
                                                <h5 className="m-2">
                                                    <span className="badge badge-pill bg-danger">{' '}</span>
                                                </h5>
                                                <div className="row h-50">
                                                    <div className="col border-right">{' '}</div>
                                                    <div className="col">{' '}</div>
                                                </div>
                                            </div>
                                            <div className="col py-2">
                                                <div className="card border-danger shadow">
                                                    <div className="card-body">
                                                        <div className="float-right text-danger">12:00 Midnight, February
                                                            15, 2020</div>
                                                        <h4 className="card-title text-danger"><strong>Phase 1:</strong>
                                                            Ideation</h4>
                                                        <p className="card-text text-dark mb-1" style={{fontSize: `medium`}}>
                                                            <strong>Behind every great hack, lies a greater
                                                                idea!</strong> In this phase, teams
                                                            are expected to come up with ideas worth hacking.
                                                        </p>
                                                        <button className="btn btn-sm btn-outline-secondary" type="button"
                                                            data-target="#t2_details" data-toggle="collapse">More
                                                            ▼</button>
                                                        <div className="collapse mt-3" id="t2_details">
                                                            <p className="card-text text-dark" style={{fontSize: `medium`}}>
                                                                Ideas can be real life problems around them that they
                                                                are keen to solve or can simply be anything they are
                                                                passionate about and want to see being implemented in
                                                                this world. The timeline merely serves as a guide to
                                                                keep track of time and teams who have already decided on
                                                                the next big change they want to introduce to the world
                                                                are free to start hacking!
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-auto text-center flex-column d-none d-sm-flex">
                                                <div className="row h-50">
                                                    <div className="col border-right">{' '}</div>
                                                    <div className="col">{' '}</div>
                                                </div>
                                                <h5 className="m-2">
                                                    <span className="badge badge-pill bg-light border">{' '}</span>
                                                </h5>
                                                <div className="row h-50">
                                                    <div className="col border-right">{' '}</div>
                                                    <div className="col">{' '}</div>
                                                </div>
                                            </div>
                                            <div className="col py-2">
                                                <div className="card shadow">
                                                    <div className="card-body">
                                                        <div className="float-right text-danger">10:00 AM, February 15, 2020
                                                        </div>
                                                        <h4 className="card-title text-danger">Speaker Session</h4>
                                                        <p className="card-text text-dark" style={{fontSize: `medium`}}>
                                                            Inspiration comes best from experience. Whether you're
                                                            looking for a quick idea or are keen to
                                                            learn about current trends in technology and see the passion
                                                            that drives the industry, make
                                                            sure you don't miss out on our <a href="speakers.html"
                                                                target="_blank">Speaker Session.</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-auto text-center flex-column d-none d-sm-flex">
                                                <div className="row h-50">
                                                    <div className="col border-right">{' '}</div>
                                                    <div className="col">{' '}</div>
                                                </div>
                                                <h5 className="m-2">
                                                    <span className="badge badge-pill bg-danger">{' '}</span>
                                                </h5>
                                                <div className="row h-50">
                                                    <div className="col border-right">{' '}</div>
                                                    <div className="col">{' '}</div>
                                                </div>
                                            </div>
                                            <div className="col py-2">
                                                <div className="card border-danger shadow">
                                                    <div className="card-body">
                                                        <div className="float-right text-danger">2:00 PM, February 15, 2020
                                                        </div>
                                                        <h4 className="card-title text-danger"><strong>Phase 2:</strong>
                                                            Innovation</h4>
                                                        <p className="card-text text-dark mb-1" style={{fontSize: `medium`}}>
                                                            <strong>Let the hacking begin!</strong> In this phase, teams
                                                            are expected to have started protoyping and developing their
                                                            idea.
                                                            As important as an idea can be, transforming it into a
                                                            solution that impacts the world is all the more essential.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-auto text-center flex-column d-none d-sm-flex">
                                                <div className="row h-50">
                                                    <div className="col border-right">{' '}</div>
                                                    <div className="col">{' '}</div>
                                                </div>
                                                <h5 className="m-2">
                                                    <span className="badge badge-pill bg-light border">{' '}</span>
                                                </h5>
                                                <div className="row h-50">
                                                    <div className="col border-right">{' '}</div>
                                                    <div className="col">{' '}</div>
                                                </div>
                                            </div>
                                            <div className="col py-2">
                                                <div className="card border-danger shadow">
                                                    <div className="card-body">
                                                        <div className="float-right text-danger">10:00 PM, February 15, 2020
                                                        </div>
                                                        <h4 className="card-title text-danger"><strong>Phase 3:</strong>
                                                            Power Hacking</h4>
                                                        <p className="card-text text-dark mb-1" style={{fontSize: `medium`}}>
                                                            <strong>Tick-tock Tick-tock!</strong> Make sure you make
                                                            every second count as you build upon your hack
                                                            and go the distance by making it into a minimum viable
                                                            product.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-auto text-center flex-column d-none d-sm-flex">
                                                <div className="row h-50">
                                                    <div className="col border-right">{' '}</div>
                                                    <div className="col">{' '}</div>
                                                </div>
                                                <h5 className="m-2">
                                                    <span className="badge badge-pill bg-danger">{' '}</span>
                                                </h5>
                                                <div className="row h-50">
                                                    <div className="col border-right">{' '}</div>
                                                    <div className="col">{' '}</div>
                                                </div>
                                            </div>
                                            <div className="col py-2">
                                                <div className="card border-danger shadow">
                                                    <div className="card-body">
                                                        <div className="float-right text-danger">6:00 AM, February 16, 2020
                                                        </div>
                                                        <h4 className="card-title text-danger"><strong>Phase 4:</strong>
                                                            Submission</h4>
                                                        <p className="card-text text-dark mb-1" style={{fontSize: `medium`}}>
                                                            <strong> Submit your hack on Devfolio</strong> and let the
                                                            world know what you made for them to be eligible to compete
                                                            for the top positions in <strong>DevHack 3.0</strong>.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-auto text-center flex-column d-none d-sm-flex">
                                                <div className="row h-50">
                                                    <div className="col border-right">{' '}</div>
                                                    <div className="col">{' '}</div>
                                                </div>
                                                <h5 className="m-2">
                                                    <span className="badge badge-pill bg-danger">{' '}</span>
                                                </h5>
                                                <div className="row h-50">
                                                    <div className="col border-right">{' '}</div>
                                                    <div className="col">{' '}</div>
                                                </div>
                                            </div>
                                            <div className="col py-2">
                                                <div className="card border-danger shadow">
                                                    <div className="card-body">
                                                        <div className="float-right text-danger">10:30 AM, February 16, 2020
                                                        </div>
                                                        <h4 className="card-title text-danger"><strong>Phase 5:</strong>
                                                            Submission</h4>
                                                        <p className="card-text text-dark mb-1" style={{fontSize: `medium`}}>
                                                            <strong> Time to impress the Judges!</strong> Top teams will
                                                            present their brilliant hack for the final evaluation in the
                                                            auditorium after 2:00 PM.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    </React.Fragment>
  )
}

export default Timeline;