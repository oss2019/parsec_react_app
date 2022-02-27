import React from "react";
import "../../../css/style.css";
import "../../../css/bootstrap.css";
import "../../../css/responsive.css";
import { Grid } from "@material-ui/core";

const Tracks = () => {
  return (
		<div>
			<h1 style={{ textAlign: 'center', color: '#12114a' }}>Tracks</h1>
			<hr />
			<hr />

			<div className="content-box">
				<div className="row">
					<div className="row">
						<div className="col py-2">
							<div className=" border-danger shadow">
								<div
									className="card-body"
									style={{
										border: '2px solid #e2e6e9',
										borderRadius: '8px',
									}}
									// style={{ border: "2px solid #dc3545", borderRadius: "8px" }}
								>
									<h3 className="card-title text-danger">General Track</h3>
									<p
										className="card-text text-dark"
										style={{ fontSize: `medium` }}
									>
										Any novel concept that solves a real-world problem.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col py-2">
							<div className=" shadow">
								<div
									className="card-body"
									style={{
										border: '2px solid #e2e6e9',
										borderRadius: '8px',
									}}
								>
									<h3 className="card-title text-danger">Automation Track</h3>
									<p
										className="card-text text-dark"
										style={{ fontSize: `medium` }}
									>
										Innovate by Automating a well used process which can be
										applied in Real Time by using Robotics Process Automation
										(RPA) techniques over the
										<a href="https://clointfusion.com/">&nbsp;clointfusion </a>{' '}
										platform. The end product should have a real life
										application and be realistic.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col py-2">
							<div className=" shadow">
								<div
									className="card-body"
									style={{
										border: '2px solid #e2e6e9',
										borderRadius: '8px',
									}}
								>
									<h3 className="card-title text-danger">VR and AR</h3>
									<p
										className="card-text text-dark"
										style={{ fontSize: `medium` }}
									>
										Virtual reality (VR) and augmented reality (AR) have
										exciting potential in the future of gaming, marketing,
										e-commerce, education, and many other fields. Both
										technologies are known for their enriched experience that
										brings together a virtual world and the real one with
										enhanced, 3-D visuals.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col py-2">
							<div className=" shadow">
								<div
									className="card-body"
									style={{
										border: '2px solid #e2e6e9',
										borderRadius: '8px',
									}}
								>
									<h3 className="card-title text-danger">Space Data Science</h3>
									<p
										className="card-text text-dark"
										style={{ fontSize: `medium` }}
									>
										Spatial Data Science (SDS) is a subset of Data Science that
										focuses on the special of spatial data, using modeling to
										know where and why things happen.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col py-2">
							<div className=" shadow">
								<div
									className="card-body"
									style={{
										border: '2px solid #e2e6e9',
										borderRadius: '8px',
									}}
								>
									<h3 className="card-title text-danger">Polygon</h3>
									<p
										className="card-text text-dark"
										style={{ fontSize: `medium` }}
									>
										Polygon (previously Matic) will be giving away a cash prize
										for the best hack built on top of{' '}
										<strong>Ethereum (Rs.10000)</strong> during the hackathon.
										For teams that integrate Polygon in their hacks as well the
										prize money will be <strong>higher (Rs.15000)</strong> along
										with eligibility for internship/full-time role interviews
										and a chance to land seed funding of upto 5000 USD!. Find
										the resources{' '}
										<a
											href="https://www.notion.so/Welcome-Hackers-bf2d6a097e834170a72b6b4d75913516"
											target="_blank"
											style={{ color: '#12114a' }}
										>
											here.
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col py-2">
							<div className=" shadow">
								<div
									className="card-body"
									style={{
										border: '2px solid #e2e6e9',
										borderRadius: '8px',
									}}
								>
									<h3 className="card-title text-danger">Tezos</h3>
									<p
										className="card-text text-dark"
										style={{ fontSize: `medium` }}
									>
										Tezos is a technology for deploying a blockchain capable of
										modifying its own set of rules with minimal disruption to
										the network through an on-chain governance model. Tezos
										supports smart contracts and offers a platform to build
										decentralized applications. We imagine a world where
										blockchain becomes an integral part of the lives of the
										masses is only possible when the community comes forward to
										build the infrastructure to drive mass adoption. The Tezos
										India Foundation is glad to offer a dedicated bounty, it's
										mentorship and support as a 2020 Devfolio Hackathon Season
										Partner. Find the resources{' '}
										<a
											href="https://www.notion.so/Tezos-Resources-30fed32fe527480aa5b5f557973cc37b"
											target="_blank"
											style={{ color: '#12114a' }}
										>
											here.
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col py-2">
							<div className=" shadow">
								<div
									className="card-body"
									style={{
										border: '2px solid #e2e6e9',
										borderRadius: '8px',
									}}
								>
									<h3 className="card-title text-danger">Celo</h3>
									<p
										className="card-text text-dark"
										style={{ fontSize: `medium` }}
									>
										The Celo Foundation is a non-profit organization based in
										the US that supports the growth and development of the
										open-source Celo Platform. Guided by the Celo community
										tenets, the Foundation contributes to education, technical
										research, environmental health, community engagement, and
										ecosystem outreach—activities that support and encourage an
										inclusive financial system that creates the conditions for
										prosperity for everyone.
									</p>
									<strong style={{ color: '#dc3545' }}>Resources</strong>
									<ol>
										<li>
											<strong style={{ color: '#000', fontSize: '1rem' }}>
												&#8226;&nbsp;
											</strong>
											<a
												href="https://docs.celo.org/v/master/developer-guide/overview"
												target="_blank"
												style={{ color: '#12114a' }}
											>
												Docs
											</a>
										</li>
										<li>
											<strong style={{ color: '#000', fontSize: '1rem' }}>
												&#8226;&nbsp;
											</strong>
											<a
												href="https://docs.celo.org/v/master/developer-guide/start"
												target="_blank"
												style={{ color: '#12114a' }}
											>
												Tutorials
											</a>
										</li>
										<li>
											<strong style={{ color: '#000', fontSize: '1rem' }}>
												&#8226;&nbsp;
											</strong>
											<a
												href="https://celo.org/developers"
												target="_blank"
												style={{ color: '#12114a' }}
											>
												Website
											</a>
										</li>
									</ol>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <h3 style={{ color: "#dc3545" }}>General Track</h3>
      <ol>
        <li>Any innovative idea which deals with real-world problems.</li>
      </ol>
      <hr />
      <h3 style={{ color: "#dc3545" }}>Automation Track</h3>
      <ol>
        <li>
          Track automation or sometimes only automation refers to the recording
          or handling of time-based controlling data in time-based computer
          applications such as digital audio workstations, video editing
          software and computer animation software.
        </li>
      </ol>
      <hr /> */}
			{/* <h3 style={{ color: "#dc3545" }}>VR and AR</h3>
      <ol>
        <li>
          Virtual reality (VR) and augmented reality (AR) have exciting
          potential in the future of gaming, marketing, e-commerce, education,
          and many other fields. Both technologies are known for their enriched
          experience that brings together a virtual world and the real one with
          enhanced, 3-D visuals.
        </li>
      </ol>
      <hr /> */}
			{/* <h3 style={{ color: "#dc3545" }}>Space Data Science</h3>
      <ol>
        <li>
          Spatial Data Science (SDS) is a subset of Data Science that focuses on
          the special of spatial data, using modeling to know where and why
          things happen.
        </li>
      </ol>
      <hr /> */}
			{/* <h3 style={{ color: "#dc3545" }}>Polygon</h3>
      <ol>
        <li>
          Polygon (previously Matic) will be giving away a cash prize for the
          best hack built on top of <strong>Ethereum (Rs.10000)</strong> during
          the hackathon. For teams that integrate Polygon in their hacks as well
          the prize money will be <strong>higher (Rs.15000)</strong> along with
          eligibility for internship/full-time role interviews and a chance to
          land seed funding of upto 5000 USD!. Find the resources{" "}
          <a
            href="https://www.notion.so/Welcome-Hackers-bf2d6a097e834170a72b6b4d75913516"
            target="_blank"
            style={{ color: "#12114a" }}
          >
            here.
          </a>
        </li>
      </ol>
      <hr /> */}
			{/* <h3 style={{ color: "#dc3545" }}>Tezos</h3>
      <ol>
        <li>
          Tezos is a technology for deploying a blockchain capable of modifying
          its own set of rules with minimal disruption to the network through an
          on-chain governance model. Tezos supports smart contracts and offers a
          platform to build decentralized applications. We imagine a world where
          blockchain becomes an integral part of the lives of the masses is only
          possible when the community comes forward to build the infrastructure
          to drive mass adoption. The Tezos India Foundation is glad to offer a
          dedicated bounty, it's mentorship and support as a 2020 Devfolio
          Hackathon Season Partner. Find the resources{" "}
          <a
            href="https://www.notion.so/Tezos-Resources-30fed32fe527480aa5b5f557973cc37b"
            target="_blank"
            style={{ color: "#12114a" }}
          >
            here.
          </a>
        </li>
      </ol>
      <hr /> */}
			{/* <h3 style={{ color: "#dc3545" }}>Celo</h3>
      <ol>
        <li>
          The Celo Foundation is a non-profit organization based in the US that
          supports the growth and development of the open-source Celo Platform.
          Guided by the Celo community tenets, the Foundation contributes to
          education, technical research, environmental health, community
          engagement, and ecosystem outreach—activities that support and
          encourage an inclusive financial system that creates the conditions
          for prosperity for everyone.
        </li>
        <li>
          <strong style={{ color: "#dc3545" }}>Resources</strong>
          <ol>
            <li>
              <strong style={{ color: "#000", fontSize: "1rem" }}>
                &#8226;&nbsp;
              </strong>
              <a
                href="https://docs.celo.org/v/master/developer-guide/overview"
                target="_blank"
                style={{ color: "#12114a" }}
              >
                Docs
              </a>
            </li>
            <li>
              <strong style={{ color: "#000", fontSize: "1rem" }}>
                &#8226;&nbsp;
              </strong>
              <a
                href="https://docs.celo.org/v/master/developer-guide/start"
                target="_blank"
                style={{ color: "#12114a" }}
              >
                Tutorials
              </a>
            </li>
            <li>
              <strong style={{ color: "#000", fontSize: "1rem" }}>
                &#8226;&nbsp;
              </strong>
              <a
                href="https://celo.org/developers"
                target="_blank"
                style={{ color: "#12114a" }}
              >
                Website
              </a>
            </li>
          </ol>
        </li>
      </ol>
      <hr /> */}
		</div>
	);
};

export default Tracks;
