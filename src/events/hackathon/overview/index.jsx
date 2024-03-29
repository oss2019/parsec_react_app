import React from "react";
import Button from 'react-bootstrap/Button';

import "./styles.css";
import "../../../css/style.css";
import "../../../css/bootstrap.css";
import "../../../css/responsive.css";
const Overview = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <React.Fragment>
      <div className="inner-column tab active-tab" id="introduction">
        <section className="login-section">
          <div className="auto-container p-0">
            <div className="login-form">
              <div className="row clearfix">
                <h1
                  className="mx-auto mt-5"
                  style={{
                    color: `#12114a`,
                    textAlign: `center`,
                  }}
                >
                  About Event
                </h1>
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
                        DevHack 3.0, the second edition of the annual hackathon
                        of IIT Dharwad is back -{" "}
                        <i>bigger, better and bolder!</i> We have always
                        believed that engineers and researchers have the power
                        to revolutionize the world by transforming their
                        inspiring ideas into solutions that positively impact
                        the society. Prove your worth in this 36-hour hackathon
                        by ideating, innovating and hacking meaningful solutions
                        to real life problems.
                      </p>
                    </div>
                    <div
                      className="row justify-content-center align-items-center"
                      style={{
                        margin: `auto`,
                        paddingBottom: `20px`,
                      }}
                    >
                      {/* <div className="btn-box" style={{ textAlign: `center` }}>
												<a
													href="#"
													//  target="_blank"
													className="theme-btn btn-style-one btn-rounded mb-4"
													// style={{pointerEvents: `none`}}
												>
													COMING SOON
												</a>
											</div> */}
                      {/* <div>

											</div> */}
                      {/* <div
                        class="apply-button"
                        data-hackathon-slug="devhack"
                        data-button-theme="light"
                        style={{ height: "44px", width: "312px" }}
                      />
                      <div
                        className="padding"
                      /> */}
                      <br/>
                      <Button
                        variant="outline-primary"
                        style={{ width: '18rem' }}
                      >
                        <a href="/participation" target="_blank">Get Certificates</a>
                      </Button>
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
                  className="row justify-content-center align-items-center col-lg-12"
                  style={{ margin: "auto" }}
                >


                  <p
                    style={{
                      color: "#000",
                      fontSize: "20px",
                      textShadow: "2px 2px 2px rgba(0,0,0,0.4)",
                      textAlign: "center",
                    }}
                  >
                    {/* Registrations Closes on 9th February ! */}
                  </p>
                  {/* <h5 style="color:#ed6286;padding-top:20px;text-shadow: 1px 1px 2px black, 0 0 1em #e1ecc4, 0 0 0.2em #ed6286;padding-bottom:20px">
                  Registration ends on 8th February 2020.
                </h5> */}
                </div>

                {/* <x-sign
                  style={{
                    fontSize: "30px",
                    margin: "auto",
                    paddingBottom: "0px",
                    textAlign: "center",
                    color: "black",
                  }}
                >
                  Prizes Worth &#8377; 11,23,000
                </x-sign> */}

                <div
                  className="form-column col-lg-12 col-md-12 col-sm-12"
                  style={{ padding: `40px` }}
                >
                  <div
                    className=" border-danger"
                    style={{
                      border: "2px solid #dc3545",
                      borderRadius: "8px",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: `'Roboto', sans-serif`,
                        fontSize: `large`,
                        fontWeight: `bold`,
                      }}
                      className="card-body text-center text-danger"
                    >
                      {" "}
                      Duration: 36 hours
                    </div>
                    <div
                      style={{
                        fontFamily: `'Roboto', sans-serif`,
                        fontSize: `large`,
                        fontWeight: `bold`,
                      }}
                      className="card-body text-center text-danger"
                    >
                      Team Size: 4
                    </div>
                  </div>
                  <br />

                  <ul className="list-style-four mb-0">
                    <li style={{ color: `#12114a` }}>
                      Contest starts:
                      <strong> 8:00 PM on 4th March, 2022 </strong>
                    </li>
                    <li style={{ color: `#12114a` }}>
                      Code of Conduct to be followed.
                    </li>
                    {/* <li style={{ color: `hsl(241, 63%, 18%)` }}>
											Carry fully charged laptops.
										</li> */}
                    {/* <li style={{ color: `#12114a` }}>
											Food and mattresses for power naps will be provided
										</li> */}
                    {/* <li style={{ color: `#12114a` }}>
                      Separate judging for Hardware and Software hacks
                    </li> */}
                  </ul>
                  <br />
                  <br />
                  <p
                    className="text-justify"
                    style={{
                      color: `#383434`,
                      fontSize: `large`,
                    }}
                  >
                    Still have queries? Join us on our Telegram{" "}
                    <a
                      href="https://t.me/parseciitdh"
                      style={{
                        color: `#12114a`,
                        textDecoration: `None`,
                      }}
                      target="_blank"
                    >
                      channel
                    </a>{" "}
                    and we'll try our best to answer all your doubts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Overview;
