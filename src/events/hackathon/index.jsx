import React from "react";
import Header from "../../components/Header";
import './styles.css';
import '../../css/style.css'
import '../../css/bootstrap.css'
import '../../css/responsive.css'

const Hackathon = () => {
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
                      {/* <br></br><br></br> */}
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

                        <div className="content-column col-lg-8 col-md-12 col-sm-12 tabs-content">
                            <div className="inner-column tab active-tab" id="introduction">
                                <section className="login-section"
                                    // style={{backgroundImage:`url(images/background/7.jpg)`,
                                    //         paddingTop:`0px`}}
                                >
                                    <div className="auto-container p-0">
                                        <div className="login-form">
                                            <div className="row clearfix">
                                                <h1 className="mx-auto mt-5" style={{color:`#12114a`, textAlign:`center`}}>About Event</h1>
                                                <div className="form-column col-lg-12 col-md-12 col-sm-12">
                                                    <div style={{padding:`40px`,
                                                                 paddingBottom:`10px`}}>
                                                        <div className="title-box">
                                                            <p className="text-justify"
                                                                style={{color:`#383434`,
                                                                        fontSize:`large`}}>DevHack 3.0, the
                                                                second edition of the annual hackathon of IIT Dharwad is
                                                                back - <i>bigger, better and bolder!</i> We have always
                                                                believed that engineers and researchers have the power
                                                                to revolutionize the world by transforming their
                                                                inspiring ideas into solutions that positively impact
                                                                the society. Prove your worth in this 36-hour hackathon
                                                                by ideating, innovating and hacking meaningful solutions
                                                                to real life problems.</p>
                                                        </div>
                                                        <div className="row justify-content-center align-items-center"
                                                            style={{margin:`auto`,
                                                                paddingBottom:`20px`}}>
                                                            
                                                            <div className="btn-box" style={{textAlign : `center`}}>
                                                                <a 
                                                                //href=""
                                                                //  target="_blank"
                                                                    className="theme-btn btn-style-one btn-rounded mb-4"
                                                                     style={{pointerEvents: `none`}}
                                                                    >COMING SOON</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                

                                                <div className="image-column col-lg-11 col-sm-12 col-sm-12">
                                                    <div className="image-box wow fadeIn">
                                                        <figure className="image">
                                                          <img src="images/resource/project.jpg"
                                                                alt="" style={{maxWidth:`600px`,
                                                                              margin:`auto`}} >
                                                          </img>
                                                        </figure>
                                                    </div>
                                                </div>

                                                <div className="form-column col-lg-12 col-md-12 col-sm-12"
                                                    style={{padding:`40px`}}>
                                                    <div className="card border-danger">
                                                        <div style={{fontFamily: `'Roboto', sans-serif`,
                                                                     fontSize: `large`,
                                                                     fontWeight: `bold`}}
                                                            className="card-body text-center text-danger">
                                                            {' '} Duration: 36 hours {' '} {' '} Team Size: 4
                                                        </div>
                                                    </div>
                                                    <br/>

                                                    <ul className="list-style-four mb-0">
                                                        <li style={{color:`#12114a`}}>Contest starts:
                                                            <strong> 12 Midnight, February 14, 2020 </strong>
                                                        </li>
                                                        <li style={{color:`#12114a`}}>Code of Conduct to be followed.</li>
                                                        <li style={{color:`hsl(241, 63%, 18%)`}}>Carry fully charged
                                                            laptops.</li>
                                                        <li style={{color:`#12114a`}}>Food and mattresses for power naps
                                                            will be provided</li>
                                                        <li style={{color:`#12114a`}}>Separate judging for Hardware and
                                                            Software hacks</li>
                                                    </ul>
                                                    <br/><br/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
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
                            <div className="tab" id="theme">
                                <h2 style={{fontFamily: `'Roboto', sans-serif`,
                                            fontWeight: `bold`}}
                                > 
                                  THEMES 
                                </h2>
                                <hr></hr>
                                <div className="content-box">
                                    <p style={{fontSize: `large`,
                                               color:`#12114a`}}
                                    > 
                                      The hackathon has two main tracks -
                                    <br></br><span className="text-danger">(i) <strong>Hardware</strong>
                                    <br></br>
                                      (ii) 
                                    <strong>Software</strong></span>
                                    <br></br><br></br>
                                        <br></br>
                                        <br></br>
                                        Each hack will be judged and ranked separately in their respective tracks.
                                        <br></br><br></br>
                                        The participants are required to choose from the below given themes and pick up
                                        a
                                        general problem statement
                                        and solve it based on their domain expertise.
                                    </p>
                                    <section className="pricing-section style-four" style={{paddingTop:`10px`}}>
                                        <div className="anim-icons">
                                            <span className="icon icon-circle-1 wow zoomIn"></span>
                                            <span className="icon icon-circle-2 wow zoomIn" data-wow-delay="600ms"></span>
                                            <span className="icon icon-circle-3 wow zoomIn" data-wow-delay="1200ms"></span>
                                            <span className="icon icon-circle-4 wow zoomIn" data-wow-delay="1800ms"></span>
                                        </div>
                                        <div className="auto-container col-lg-12">
                                            <div className="row">
                                                <div className="col-12 col-sm-6 col-lg-3 shadow p-3 mb-5 bg-white rounded">
                                                    <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
                                                        data-wow-delay="300ms">
                                                        <div className="speaker-single-thumb">
                                                            <img src="./images/event/devhack/brain.png" alt=""></img>
                                                        </div>
                                                        <div className="speaker-info">
                                                            <h5 style={{textAlign: `center`}}>Artificial Intelligence
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                {' '}{' '}{' '}{' '}

                                                <div className="col-12 col-sm-6 col-lg-3 shadow p-3 mb-5 bg-white rounded">
                                                    <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
                                                        data-wow-delay="300ms">
                                                        <div className="speaker-single-thumb">
                                                            <img src="./images/event/devhack/idea.png" alt=""></img>
                                                        </div>
                                                        <div className="speaker-info">
                                                            <h5 style={{textAlign: `center`}}>Open Innovation</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                {' '}{' '}{' '}{' '}

                                                
                                                <div
                                                    className="col-12 col-sm-6 col-lg-3 h-25 shadow p-3 mb-5 bg-white rounded">
                                                    <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
                                                        data-wow-delay="300ms">
                                                        <div className="speaker-single-thumb">
                                                            <img src="./images/event/devhack/iot.png" alt=""></img>
                                                        </div>
                                                        <div className="speaker-info">
                                                            <h5 style={{textAlign: `center`}}>IoT</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                {' '}{' '}{' '}{' '}

                                                
                                                <div
                                                    className="col-12 col-sm-6 col-lg-3 h-25 shadow p-3 mb-5 bg-white rounded">
                                                    <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
                                                        data-wow-delay="300ms">
                                                        <div className="speaker-single-thumb">
                                                            <img src="./images/event/devhack/mobility.png" alt=""></img>
                                                        </div>
                                                        <div className="speaker-info">
                                                            <h5 style={{textAlign: `center`}}>Future Mobility</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                {' '}{' '}{' '}{' '}


                                            
                                                <div className="col-12 col-sm-6 col-lg-3 shadow p-3 mb-5 bg-white rounded">
                                                    <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
                                                        data-wow-delay="300ms">
                                                        <div className="speaker-single-thumb">
                                                            <img src="./images/event/devhack/blockchain.png" alt=""></img>
                                                        </div>
                                                        <div className="speaker-info">
                                                            <h5 style={{textAlign: `center`}}>Blockchain</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                {' '}{' '}{' '}{' '}

                                              
                                                <div className="col-12 col-sm-6 col-lg-3 shadow p-3 mb-5 bg-white rounded">
                                                    <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
                                                        data-wow-delay="300ms">
                                                        <div className="speaker-single-thumb">
                                                            <img src="./images/event/devhack/edu.png" alt=""></img>
                                                        </div>
                                                        <div className="speaker-info">
                                                            <h5 style={{textAlign: `center`}}>Edtech</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                {' '}{' '}{' '}{' '}

                                                
                                                <div className="col-12 col-sm-6 col-lg-3 shadow p-3 mb-5 bg-white rounded">
                                                    <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
                                                        data-wow-delay="300ms">
                                                        <div className="speaker-single-thumb">
                                                            <img src="./images/event/devhack/fin.png" alt=""></img>
                                                        </div>
                                                        <div className="speaker-info">
                                                            <h5 style={{textAlign: `center`}}>Fintech</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                {' '}{' '}{' '}{' '}

                                              
                                                <div className="col-12 col-sm-6 col-lg-3 shadow p-3 mb-5 bg-white rounded">
                                                    <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
                                                        data-wow-delay="300ms">
                                                        <div className="speaker-single-thumb">
                                                            <img src="./images/event/devhack/mri.png" alt=""></img>
                                                        </div>
                                                        <div className="speaker-info">
                                                            <h5 style={{textAlign: `center`}}>Health</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                {' '}{' '}{' '}{' '}

                                              
                                                <div className="col-12 col-sm-6 col-lg-3 shadow p-3 mb-5 bg-white rounded">
                                                    <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
                                                        data-wow-delay="300ms">
                                                        <div className="speaker-single-thumb">
                                                            <img src="./images/event/devhack/network.png" alt=""></img>
                                                        </div>
                                                        <div className="speaker-info">
                                                            <h5 style={{textAlign: `center`}}>Security</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                {' '}{' '}{' '}{' '}

                                                
                                                <div className="col-12 col-sm-6 col-lg-3 shadow p-1 mb-5 bg-white rounded">
                                                    <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
                                                        data-wow-delay="300ms">
                                                        <div className="speaker-single-thumb">
                                                            <img src="./images/event/devhack/web.png" alt=""></img>
                                                        </div>
                                                        <div className="speaker-info">
                                                            <h5 style={{textAlign: `center`}}>Web and App Dev</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                {' '}{' '}{' '}{' '}

                                               
                                                <div className="col-12 col-sm-6 col-lg-3 shadow p-1 mb-5 bg-white rounded">
                                                    <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
                                                        data-wow-delay="300ms">
                                                        <div className="speaker-single-thumb">
                                                            <img src="./images/event/devhack/power.jpg" alt=""
                                                                style={{height:`185px`, margin:`auto`}}></img>
                                                        </div>
                                                        <div className="speaker-info">
                                                            <h5 style={{textAlign: `center`}}>Power Efficiency</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                {' '}{' '}{' '}{' '}

                                                
                                                <div className="col-12 col-sm-6 col-lg-3 shadow p-1 mb-5 bg-white rounded">
                                                    <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
                                                        data-wow-delay="300ms">
                                                        <div className="speaker-single-thumb">
                                                            <img src="./images/event/devhack/energy.jpg" alt=""
                                                                style={{height:`185px`, margin:`auto`}}></img>
                                                        </div>
                                                        <div className="speaker-info">
                                                            <h5 style={{textAlign: `center`}}>Sustainable Energy</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                {' '}{' '}{' '}{' '}

                                                
                                                <div className="col-12 col-sm-6 col-lg-3 shadow p-1 mb-5 bg-white rounded">
                                                    <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
                                                        data-wow-delay="300ms">
                                                        <div className="speaker-single-thumb">
                                                            <img src="./images/event/devhack/energy_security.jpg" alt=""
                                                                style={{height:`185px`, margin:`auto`}}></img>
                                                        </div>
                                                        <div className="speaker-info">
                                                            <h5 style={{textAlign: `center`}}>Energy Security</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                {' '}{' '}{' '}{' '}

                                                
                                                <div className="col-12 col-sm-6 col-lg-3 shadow p-1 mb-5 bg-white rounded">
                                                    <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
                                                        data-wow-delay="300ms">
                                                        <div className="speaker-single-thumb">
                                                            <img src="./images/event/devhack/heat.jpg" alt=""
                                                                style={{height:`185px`, margin:`auto`}}></img>
                                                        </div>
                                                        <div className="speaker-info">
                                                            <h5 style={{textAlign: `center`}}>Heat Transfer</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                {' '}{' '}{' '}{' '}

                                                
                                                <div className="col-12 col-sm-6 col-lg-3 shadow p-1 mb-5 bg-white rounded">
                                                    <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
                                                        data-wow-delay="300ms">
                                                        <div className="speaker-single-thumb">
                                                            <img src="./images/event/devhack/fluid.jpg" alt=""
                                                                style={{height:`185px`, margin:`auto`}}></img>
                                                        </div>
                                                        <div className="speaker-info">
                                                            <h5 style={{textAlign: `center`}}>Fluid Mechanics</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                {' '}{' '}{' '}{' '}

                                                
                                                <div className="col-12 col-sm-6 col-lg-3 shadow p-1 mb-5 bg-white rounded">
                                                    <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
                                                        data-wow-delay="300ms">
                                                        <div className="speaker-single-thumb">
                                                            <img src="./images/event/devhack/mechanics.jpg" alt=""
                                                                style={{height:`185px`, margin:`auto`}}></img>
                                                        </div>
                                                        <div className="speaker-info">
                                                            <h5 style={{textAlign: `center`}}>Mechanics</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                {' '}{' '}{' '}{' '}

                                                
                                                <div className="col-12 col-sm-6 col-lg-3 shadow p-1 mb-5 bg-white rounded">
                                                    <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
                                                        data-wow-delay="300ms">
                                                        <div className="speaker-single-thumb">
                                                            <img src="./images/event/devhack/thermo.svg" alt=""
                                                                style={{height:`185px`, margin:`auto`}}></img>
                                                        </div>
                                                        <div className="speaker-info">
                                                            <h5 style={{textAlign: `center`}}>Applied Thermodynamics</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                {' '}{' '}{' '}{' '}
                                            </div>
                                        </div>
                                      
                                    </section>
                                   
                                </div>
                            </div>
                            <div className="tab" id="hardware">
                                <h2 style={{fontFamily: `'Roboto', sans-serif`,
                                            fontWeight: `bold`}}
                                > Hardware Problem Statements 
                                </h2>
                                <hr></hr>
                                <div className="content-box">
                                    <p style={{fontSize: `large`,
                                              color:`#12114a`}}> These are the general ideas to guide you
                                        to develop your hardware hack. However you can hack on your own idea as well.
                                    <div className="btn-box">
                                        <center> <a href="problems.pdf" target="_blank"
                                                className="theme-btn btn-style-one">Hardware Problem Statements</a></center>
                                    </div>
                                    </p>

                                    
                                    <section className="pricing-section style-four" style={{paddingTop:`10px`}}>
                                        <div className="anim-icons">
                                            <span className="icon icon-circle-1 wow zoomIn"></span>
                                            <span className="icon icon-circle-2 wow zoomIn" data-wow-delay="600ms"></span>
                                            <span className="icon icon-circle-3 wow zoomIn" data-wow-delay="1200ms"></span>
                                            <span className="icon icon-circle-4 wow zoomIn" data-wow-delay="1800ms"></span>
                                        </div>
                                    </section>
                                </div>
                            </div>

                            <div className="tab" id="judge">
                                <h2 style={{fontFamily: `'Roboto', sans-serif`,
                                            fontWeight: `bold`}}
                                > 
                                  JUDGES 
                                </h2>
                                <hr></hr>
                                <div className="content-box">
                                    <div className="row">
                                        <div className="col-md-5 py-2">
                                            <div className="card border-danger shadow">
                                                <div className="card-body">
                                                    <h4 className="card-title text-danger">Dr. Deepak K T</h4>
                                                    <p className="card-text text-dark mb-1" style={{fontSize: `medium`}}>
                                                        <strong>Assistant Professor, ECE Department</strong> <br></br>IIIT
                                                        Dharwad<br></br><span style={{color:`#707070`}}></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-0.5 text-center flex-column d-none d-sm-flex">
                                            <span className="badge badge-pill bg-danger">{' '}</span>    
                                        </div>
                                        <div className="col-md-5 py-2">
                                            <div className="card border-danger shadow">
                                                <div className="card-body">
                                                    <h4 className="card-title text-danger"><strong></strong>Dr. Uma M</h4>
                                                    <p className="card-text text-dark mb-1" style={{fontSize: `medium`}}>
                                                        <strong>Dean R&D<br></br>KLE Tech Hubli</strong>
                                                        <br></br><span style={{color:`#707070`}}></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-5 py-2">
                                            <div className="card border-danger shadow">
                                                <div className="card-body">
                                                    <h4 className="card-title text-danger"><strong></strong>Mr. Girish Patil
                                                    </h4>
                                                    <p className="card-text text-dark mb-1"
                                                        style={{fontSize: `medium`,
                                                                color:`#000`}}>
                                                        <strong>GDG Hubli Organiser<br></br>Full Stack Engineer at
                                                            Hashnode</strong><br></br>
                                                        <span style={{color:`#707070`}}></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-0.5 text-center flex-column d-none d-sm-flex">
                                            <span className="badge badge-pill bg-danger">{' '}</span>
                                        </div>
                                        <div className="col-md-5 py-2">
                                            <div className="card border-danger shadow">
                                                <div className="card-body">
                                                    <h4 className="card-title text-danger"><strong></strong>Dr. Vasudev
                                                        Parvati</h4>
                                                    <p className="card-text text-dark mb-1" style={{fontSize: `medium`}}>
                                                        <strong>HOD, ECE Department, SDMCET</strong><br></br>
                                                        <span style={{color:`#707070`}}></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-5 py-2">
                                            <div className="card border-danger shadow">
                                                <div className="card-body">
                                                    <h4 className="card-title text-danger"><strong></strong>Mr. Srikanth
                                                        Vidapanakal</h4>
                                                    <p className="card-text text-dark mb-1"
                                                        style={{fontSize: `medium`, color:`#000`}}>
                                                        <strong>Ola Electric</strong><br></br>
                                                        <span style={{color:`#707070`}}></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-0.5 text-center flex-column d-none d-sm-flex">
                                            <span className="badge badge-pill bg-danger">{' '}</span>
                                        </div>

                                        <div className="col-md-5 py-2"><br></br>
                                            <div className="card border-danger shadow">
                                                <div className="card-body">
                                                    <h4 className="card-title text-danger"><strong></strong>Mr. Bhagat Singh
                                                    </h4>
                                                    <p className="card-text text-dark mb-1" style={{fontSize: `medium`}}>
                                                        <strong>iOS Engineer, PhonePe</strong><br></br>
                                                        <span style={{color:`#707070`}}></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-5 py-2">
                                            <div className="card border-danger shadow">
                                                <div className="card-body">
                                                    <h4 className="card-title text-danger"><strong></strong>Dr. Rajshekar K
                                                    </h4>
                                                    <p className="card-text text-dark mb-1"
                                                        style={{fontSize: `medium`, color:`#000`}}>
                                                        <strong>Assistant Professor<br></br> Computer Science Department<br></br>
                                                            IIT Dharwad</strong><br></br>
                                                        <span style={{color:`#707070`}}></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-0.5 text-center flex-column d-none d-sm-flex">
                                            <br></br>
                                            <span className="badge badge-pill bg-danger">{' '}</span>
                                        </div>
                                        <br></br>
                                        <div className="col-md-5 py-2"><br></br>
                                            <div className="card border-danger shadow">
                                                <div className="card-body">
                                                    <h4 className="card-title text-danger"><strong></strong>Dr. Sudhanshu
                                                        Shukla</h4>
                                                    <p className="card-text text-dark mb-1" style={{fontSize: `medium`}}>
                                                        <strong>Assistant Professor<br></br>Biosciences and Bio engineering
                                                            Department<br></br> IIT Dharwad</strong><br></br>
                                                        <span style={{color:`#707070`}}></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-5 py-2">
                                            <div className="card border-danger shadow">
                                                <div className="card-body">
                                                    <h4 className="card-title text-danger"><strong></strong>Dr. Bharat B
                                                    </h4>
                                                    <p className="card-text text-dark mb-1"
                                                        style={{fontSize: `medium`, color:`#000`}}>
                                                        <strong>Assistant Professor<br></br>Electrical Engineering
                                                            Department<br></br> IIT Dharwad</strong><br></br>
                                                        <span style={{color:`#707070`}}></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-0.5 text-center flex-column d-none d-sm-flex">
                                            <br></br><br></br><br></br>
                                            <span className="badge badge-pill bg-danger">{' '}</span>
                                        </div>
                                        <br></br>
                                        <div className="col-md-5 py-2"><br></br>
                                            <div className="card border-danger shadow">
                                                <div className="card-body">
                                                    <h4 className="card-title text-danger"><strong></strong>Dr. Shreedevi M
                                                    </h4>
                                                    <p className="card-text text-dark mb-1" style={{fontSize: `medium`}}>
                                                        <strong>Assistant Professor<br></br>Mathematics Department<br></br> IIT
                                                            Dharwad</strong><br></br>
                                                        <span style={{color:`#707070`}}></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-5 py-2">
                                            <div className="card border-danger shadow">
                                                <div className="card-body">
                                                    <h4 className="card-title text-danger"><strong></strong>Dr. Ramchandra
                                                        Phawade</h4>
                                                    <p className="card-text text-dark mb-1"
                                                        style={{fontSize: `medium`, color:`#000`}}>
                                                        <strong>Assistant Professor<br></br>Computer Science Department<br></br>
                                                            IIT Dharwad</strong><br></br>
                                                        <span style={{color:`#707070`}}></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-0.5 text-center flex-column d-none d-sm-flex">
                                            <br></br><br></br><br></br>
                                            <span className="badge badge-pill bg-danger">{' '}</span>
                                        </div>
                                        <br></br>
                                        <div className="col-md-5 py-2"><br></br>
                                            <div className="card border-danger shadow">
                                                <div className="card-body">
                                                    <h4 className="card-title text-danger"><strong></strong>Dr. Naveen M B
                                                    </h4>
                                                    <p className="card-text text-dark mb-1" style={{fontSize: `medium`}}>
                                                        <strong>Assistant Professor<br></br>Electrical Engineering
                                                            Department<br></br> IIT Dharwad</strong><br></br>
                                                        <span style={{color:`#707070`}}></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-5 py-2">
                                            <div className="card border-danger shadow">
                                                <div className="card-body">
                                                    <h4 className="card-title text-danger"><strong></strong>Mr. Umesh
                                                        Gayakwad</h4>
                                                    <p className="card-text text-dark mb-1"
                                                        style={{fontSize: `medium`, color:`#000`}}>
                                                        <strong>Assistant Manager<br></br>Tata Marcopolo Motors</strong><br></br>
                                                        <span style={{color:`#707070`}}></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-0.5 text-center flex-column d-none d-sm-flex">
                                            <br></br><br></br><br></br>
                                            <span className="badge badge-pill bg-danger">{' '}</span>
                                        </div>
                                        <br></br>
                                        <div className="col-md-5 py-2"><br></br>
                                            <div className="card border-danger shadow">
                                                <div className="card-body">
                                                    <h4 className="card-title text-danger"><strong></strong>Dr. Amar Gaonkar
                                                    </h4>
                                                    <p className="card-text text-dark mb-1" style={{fontSize: `medium`}}>
                                                        <strong>Assistant Professor<br></br>Mechanical Department<br></br>IIT
                                                            Dharwad</strong><br></br>
                                                        <span style={{color:`#707070`}}></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                    <div className="row">
                                        <div className="col-md-5 py-2">
                                            <div className="card border-danger shadow">
                                                <div className="card-body">
                                                    <h4 className="card-title text-danger"><strong></strong>Dr. Somashekara
                                                        M A</h4>
                                                    <p className="card-text text-dark mb-1"
                                                        style={{fontSize: `medium`, color:`#000`}}>
                                                        <strong>Assistant Professor<br></br>Mechanical Department<br></br> IIT
                                                            Dharwad</strong><br></br>
                                                        <span style={{color:`#707070`}}></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-0.5 text-center flex-column d-none d-sm-flex">
                                            <br></br><br></br><br></br>
                                            <span className="badge badge-pill bg-danger">{' '}</span>
                                        </div>
                                        <br></br>
                                        <div className="col-md-5 py-2"><br></br>
                                            <div className="card border-danger shadow">
                                                <div className="card-body">
                                                    <h4 className="card-title text-danger"><strong></strong>Dr. Gopal Sharan
                                                        Parashari </h4>
                                                    <p className="card-text text-dark mb-1" style={{fontSize: `medium`}}>
                                                        <strong>Assistant Professor<br></br>Humanities and Social Science
                                                            Department<br></br> IIT Dharwad</strong><br></br>
                                                        <span style={{color:`#707070`}}></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-5 py-2">
                                            <div className="card border-danger shadow">
                                                <div className="card-body">
                                                    <h4 className="card-title text-danger"><strong></strong>Mr. Sandeep
                                                        Pareek</h4>
                                                    <p className="card-text text-dark mb-1"
                                                        style={{fontSize: `medium`, color:`#000`}}>
                                                        <strong>Assistant Registrar<br></br> IIT Dharwad</strong><br></br>
                                                        <span style={{color:`#707070`}}></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-0.5 text-center flex-column d-none d-sm-flex">
                                            <br></br><br></br><br></br>
                                            <span className="badge badge-pill bg-danger">{' '}</span>
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

export default Hackathon;