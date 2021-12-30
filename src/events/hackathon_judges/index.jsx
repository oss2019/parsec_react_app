import React from "react";
import Header from "../../components/Header";
import './styles.css';
import '../../css/style.css'
import '../../css/bootstrap.css'
import '../../css/responsive.css'
import { Link} from "react-router-dom";
import Overview from "../hackathon_overview";
import Themes from "../hackathon_themes";
import Timeline from "../hackathon_timeline";

const Judges = () => {
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
                      {/*    */}
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
                                                        <strong>Assistant Professor, ECE Department</strong>  IIIT
                                                        Dharwad <span style={{color:`#707070`}}></span>
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
                                                        <strong>Dean R&D KLE Tech Hubli</strong>
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
                                                    <h4 className="card-title text-danger"><strong></strong>Mr. Girish Patil
                                                    </h4>
                                                    <p className="card-text text-dark mb-1"
                                                        style={{fontSize: `medium`,
                                                                color:`#000`}}>
                                                        <strong>GDG Hubli Organiser Full Stack Engineer at
                                                            Hashnode</strong> 
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
                                                        <strong>HOD, ECE Department, SDMCET</strong> 
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
                                                        <strong>Ola Electric</strong> 
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
                                                    <h4 className="card-title text-danger"><strong></strong>Mr. Bhagat Singh
                                                    </h4>
                                                    <p className="card-text text-dark mb-1" style={{fontSize: `medium`}}>
                                                        <strong>iOS Engineer, PhonePe</strong> 
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
                                                        <strong>Assistant Professor  Computer Science Department 
                                                            IIT Dharwad</strong> 
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
                                                    <h4 className="card-title text-danger"><strong></strong>Dr. Sudhanshu
                                                        Shukla</h4>
                                                    <p className="card-text text-dark mb-1" style={{fontSize: `medium`}}>
                                                        <strong>Assistant Professor Biosciences and Bio engineering
                                                            Department  IIT Dharwad</strong> 
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
                                                        <strong>Assistant Professor Electrical Engineering
                                                            Department  IIT Dharwad</strong> 
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
                                                    <h4 className="card-title text-danger"><strong></strong>Dr. Shreedevi M
                                                    </h4>
                                                    <p className="card-text text-dark mb-1" style={{fontSize: `medium`}}>
                                                        <strong>Assistant Professor Mathematics Department  IIT
                                                            Dharwad</strong> 
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
                                                        <strong>Assistant Professor Computer Science Department 
                                                            IIT Dharwad</strong> 
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
                                                    <h4 className="card-title text-danger"><strong></strong>Dr. Naveen M B
                                                    </h4>
                                                    <p className="card-text text-dark mb-1" style={{fontSize: `medium`}}>
                                                        <strong>Assistant Professor Electrical Engineering
                                                            Department  IIT Dharwad</strong> 
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
                                                        <strong>Assistant Manager Tata Marcopolo Motors</strong> 
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
                                                    <h4 className="card-title text-danger"><strong></strong>Dr. Amar Gaonkar
                                                    </h4>
                                                    <p className="card-text text-dark mb-1" style={{fontSize: `medium`}}>
                                                        <strong>Assistant Professor Mechanical Department IIT
                                                            Dharwad</strong> 
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
                                                        <strong>Assistant Professor Mechanical Department  IIT
                                                            Dharwad</strong> 
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
                                                    <h4 className="card-title text-danger"><strong></strong>Dr. Gopal Sharan
                                                        Parashari </h4>
                                                    <p className="card-text text-dark mb-1" style={{fontSize: `medium`}}>
                                                        <strong>Assistant Professor Humanities and Social Science
                                                            Department  IIT Dharwad</strong> 
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
                                                        <strong>Assistant Registrar  IIT Dharwad</strong> 
                                                        <span style={{color:`#707070`}}></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-0.5 text-center flex-column d-none d-sm-flex">
                                               
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

export default Judges;