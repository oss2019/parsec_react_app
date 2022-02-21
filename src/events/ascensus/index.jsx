import React, { lazy, Suspense, useState, useEffect } from "react";
import Header from "../../components/Header";
import "./styles.css";
import "../../css/style.css";
import "../../css/bootstrap.css";
import "../../css/responsive.css";
import Footer from "../../components/Footer";
import EventsBackground from "../../components/eventsBackground";
import { useMediaQuery } from "react-responsive";
const Ascensus = () => {
  var y = window.pageYOffset;
  // const [up, setUp] = useState(false);
  var up = false;
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.pageYOffset === 0) {
        document.getElementById("bottomNav").style.bottom = "0px";
        document.getElementById("eventdetail").style.bottom = "0px";
      } else {
        document.getElementById("bottomNav").style.bottom = "-100px";
        document.getElementById("eventdetail").style.bottom = "-100px";
      }
    });
  }, []);
  // useEffect(() => {
  //   document.addEventListener("scroll", () => {
  //     var yoffset = window.pageYOffset;
  //     console.log(yoffset, y);
  //     if (yoffset > y) {
  //       y = yoffset;
  //       up = false;
  //     } else {
  //       y = yoffset;
  //       up = true;
  //     }
  //     if (up) {
  //       document.getElementById("bottomNav").style.bottom = "0px";
  //       document.getElementById("eventdetail").style.bottom = "0px";
  //     } else {
  //       document.getElementById("bottomNav").style.bottom = "-100px";
  //       document.getElementById("eventdetail").style.bottom = "-100px";
  //     }
  //   });
  // }, []);
  const isSmallDevice = useMediaQuery({ query: "(max-width:1026px)" });
  return (
    <React.Fragment>
      {/* <EventsBackground /> */}
      <div className="page-wrapper">
        <div className="preloader"></div>
        <Header active={2} />
        <div
          style={{
            marginTop: isSmallDevice ? "55px" : "0",
            background: "#000102",
            top: 0,
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          {/* <img
            src="https://drive.google.com/uc?id=1esMbRcdpk17hITB6ylmAW6GU14abe19Z"
            style={{
              minWidth: "100vw",
              maxHeight: "70vh",
              objectFit: "contain",
            }}
          /> */}

          <div
            style={{
              backgroundImage:
                "url(https://drive.google.com/uc?id=10N3YCO1t1oGCSs2JU8S60inoxIxKnkCO)",
              height: "100vh",
              width: "100vw",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              opacity: "0.9",
              WebkitBoxShadow: "0px 30px 20px 19px green",
              MozBoxShadow: "0px 30px 20px 19px green",
              boxShadow: '0px 30px 20px 19px green '
            }}
          >
            <div
              style={{
                paddingTop: "25vh",
              }}
            >
              <h1
                className="px-3 py-2 w-100 text-center"
                style={{
                  fontFamily: "poppins",
                  color: "#e4e4e4",
                  textShadow:
                    "1px 1px 2px black, 0 0 1em #ffad40, 0 0 0.2em #ffad40",
                  // fontSize: "8em",
                  fontSize : '10vw',
                  letterSpacing: "0.1em",
                }}
              >
                ASCENSUS
              </h1>
              <h2
                className="px-3 py-2 w-100 text-center"
                style={{
                  fontFamily: "poppins",
                  color: "#e4e4e4",
                  fontSize : '4.5vw',
                  // fontSize: "3.5em",
                  // letterSpacing: "0.5em",
                  textShadow:
                    "1px 1px 2px black, 0 0 0.5em #ffad40, 0 0 0.2px #ffad40",
                }}
              >
                CASE STUDY COMPETITION
              </h2>
            </div>
          </div>

          <div
            id="bottomNav"
            style={{
              width: "60%",
              left: "20%",
              color: "white",
              bottom: "0px",
              margin: "auto",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "95vw",
                height: "60px",
                background: "rgba(0,0,0,0.7)",

                border: "1px solid white",
                borderRadius: "5px",
                borderTopRightRadius: "200px",
                borderTopLeftRadius: "200px",
                display: "grid",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  margin: "auto",
                  padding: "auto",
                  textAlign: "center",
                  fontSize : '3vw',
                  // fontSize: "1.4em",
                  textShadow:
                    "1px 1px 2px black, 0 0 0.5em #ffad40, 0 0 0.2px #ffad40",
                }}
              >
                Prizes worth : 10k
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100vw",
            height: "100px",
            background: "black",
          }}
        ></div>
        <section
          style={{
            position: "relative",
            margin: "0",
            width: "100vw",
            // background: 'rgba(34, 40, 49, 0.87)',
            background: "#000",
          }}
        >
          <div className="login-form auto-container">
            <div className="pt-4 row clearfix">
              {/* <h1
                className="px-3 py-2 w-100 text-center"
                style={{
                  fontFamily: "poppins",
                  color: "rgba(255, 173, 64)",
                }}
              >
                ASCENSUS
              </h1>
              <h2
                className="px-3 py-2 w-100 text-center"
                style={{
                  fontFamily: "poppins",
                  color: "rgba(255, 173, 64)",
                }}
              >
                CASE STUDY COMPETITION
              </h2> */}

              <div className="form-column col-lg-12 col-md-12 col-sm-12">
                <div className="py-0 px-2">
                  <div className="title-box">
                    <div
                      className="text"
                      style={{ color: "#eeeeee", fontSize: "20px" }}
                    >
                      The technical club of IIT DHARWAD PARSEC has come up with
                      ASCENSUS - a real-time case study competition that mainly
                      analyzes your business acumen. In the event, participants
                      will be competing against diverse teams across INDIA to
                      exhibit their spirit before judges, which should culminate
                      in an ingenious solution.
                    </div>

                    {/* <x-sign
											style={{
												fontSize: '30px',
												textAlign: 'center',
												margin: 'auto',
												paddingTop: '10px',
											}}
										>
											Prizes Worth &#8377; 1,85,000
										</x-sign> */}
                    <div
                      className="row justify-content-center align-items-center"
                      style={{ margin: "auto", paddingTop: "40px" }}
                    >
                      <div className="btn-box text-center">
                        <a
                          href="https://dare2compete.com/competition/ascensus-parsec-a-paradigm-shift-indian-institute-of-technology-iit-dharwad-262140"
                          className="theme-btn btn-style-four button2 text-center"
                          id="btncs2"
                          target="_blank"
                          style={{
                            borderRadius: "8px",
                            color: "#ffffff",
                            // background: 'rgba(242, 172, 79,0.9)',
                          }}
                        >
                          Register Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="form-column col-lg-12 col-md-12 col-sm-12"
                style={{ padding: "40px" }}
              >
                <div className="border-info">
                  <div
                    className="row-cols-1"
                    style={{
                      border: "2px solid rgb(242, 172, 79)",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      className="card-body text-center text-info"
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "large",
                        fontWeight: "bold",
                        // background: '#393e46',
                        background: "#000",
                      }}
                    >
                      <div
                        className="row"
                        style={{ color: `rgb(242, 172, 79)` }}
                      >
                        <div className="col-md-6">Rounds : 3</div>
                        <div className="col-md-6">Team Size: 2-3 Members</div>
                      </div>
                    </div>{" "}
                  </div>
                </div>

                <br />
                {/* <p>Registrations Closes on 28 Feb'22 05:00 PM IST </p> */}

                <p
                  className="font-weight-bold"
                  style={{ fontSize: "large", color: "#eeeeee" }}
                >
                  <br /> Timeline: The event is being conducted in 3 rounds
                  which include the following:
                </p>
                <p
                  // className="font-weight-bold"
                  style={{ fontSize: "large", color: "#eeeeee" }}
                ></p>

                <ul
                  style={{
                    color: `#707070`,
                  }}
                  className="list-style-four2"
                >
                  <li>
                    <strong>Quiz Round</strong>: 28th February 2022, 20:00 IST
                  </li>
                  <li>
                    <strong>Problem Statement Round</strong>: 1st March 2022 at
                    00:00 IST to 3rd March 2022 at 23:59 IST
                  </li>
                  <li>
                    <strong>Ppt presentation Round:</strong> 6th March 2022 at
                    12:00 IST
                  </li>
                  {/* <li
										style={{
											color: `#707070`,
										}}
									>
										<strong>
											Round one will be a quiz to test your business and
											Management knowledge
										</strong>
									</li>
									<li
										style={{
											color: `#707070`,
										}}
									>
										<strong>
											Round Two will be ppt submission on solution of the given
											problem statement
										</strong>
									</li>
									<li
										style={{
											color: `#707070`,
										}}
									>
										<strong>
											In Round Three, you will be presenting your solution in
											front of the jury
										</strong>
									</li> */}
                </ul>

                <p
                  className="font-weight-bold"
                  style={{ fontSize: "large", color: "#eeeeee" }}
                >
                  Still have queries? Reach out to us on our Telegram{" "}
                  <a
                    href="https://t.me/parsec_casestudy"
                    target={"_blank"}
                    style={{ color: "rgb(242, 172, 79)" }}
                  >
                    channel
                  </a>{" "}
                  and we will try our best to answer all of them.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Ascensus;
