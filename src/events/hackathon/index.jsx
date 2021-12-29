import React from 'react';
import Header from '../../components/Header';
import './styles.css';
import '../../css/style.css';
import '../../css/bootstrap.css';
import '../../css/responsive.css';
import Overview from "../hackathon_overview";
import Timeline from "../hackathon_timeline";
import Ctf from "../ctf";
import Themes from "../hackathon_themes";
import Judges from "../hackathon_judges";
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import hackathonBackground from '../../images/events/devhack/devhack_banner.png';


const Hackathon = () => {
	return (
		<React.Fragment>
			<div className="page-wrapper">
                            
        {/* <div className="preloader"></div> */}
        <Header />
        
        <section className="page-title"
        style={{backgroundImage: `url(${hackathonBackground})`}}
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
                                        <div><Link to={"hackathon_overview"}>Overview</Link></div>
                                    </li>
                                    <li className="tab-btn" data-tab="#timeline">
                                        <div><Link to={"hackathon_timeline"}>Timeline</Link></div>
                                    </li>
                                    <li className="tab-btn" data-tab="#theme">
                                        <div><Link to={"hackathon_themes"}>Themes</Link></div>
                                    </li>
                                    <li className="tab-btn" data-tab="#judge">
                                        <div><Link to={"hackathon_judges"}>Judges</Link></div>
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
                                                                  href="#"
                                                                //  target="_blank"
                                                                    className="theme-btn btn-style-one btn-rounded mb-4"
                                                                    // style={{pointerEvents: `none`}}
                                                                    >COMING SOON</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                

                                                <div className="image-column col-lg-11 col-sm-12 col-sm-12">
                                                    <div className="image-box wow fadeIn">
                                                        <figure className="image">
                                                          <img src="../../images/resource/project.jpg"
                                                                alt="" style={{maxWidth:`600px`,maxHeight:`400px`,
                                                                              margin:`auto`}}>
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
                                                            {' '} Duration: 36 hours     Team Size: 4
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
                       </div>
                    </div>
                </div>
            </div>
        </section>
			<Footer />
        </div>
	</React.Fragment>
	);
};

export default Hackathon;
