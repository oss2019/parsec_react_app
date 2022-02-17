// import React from 'react';
// import {
// 	VerticalTimeline,
// 	VerticalTimelineElement,
// } from 'react-vertical-timeline-component';

// import 'react-vertical-timeline-component/style.min.css';
// import Footer from '../../components/Footer';
// import Header from '../../components/Header';
// import schedule from '../../images/background/schedule.jpg';

// const TimelineComp = ({ circleColor, title, description, date, time }) => {
// 	return (
// 		<VerticalTimelineElement
// 			className="vertical-timeline-element--work"
// 			date={date}
// 			iconStyle={{ background: circleColor, color: '#fff' }}
// 			style={{ paddingTop: '0', background: 'transparent' }}
// 		>
// 			{/* <p style={{ color: '#f20487',textAlign: 'end', margin: '0' }}>{time}</p> */}
// 			<div style={{ width: '300px', background: 'transparent' }}>
// 				<h3 style={{ textAlign: 'center' }}>{title}</h3>
// 				<p style={{ textAlign: 'center', margin: '0', color: '#f20487' }}>
// 					{time}
// 				</p>
// 			</div>
// 		</VerticalTimelineElement>
// 	);
// };

// export default function Schedule() {
// 	return (
// 		<div className="page-wrapper">
// 			<Header active={4} />
// 			<section
// 				className="page-title"
// 				id="page-title"
// 				style={{
// 					// backgroundImage: `url(${schedule})`,
// 					backgroundRepeat: 'no-repeat',
// 					backgroundSize: 'cover',
// 					boxShadow: ' 0 0 230px 0 black inset',
// 				}}
// 			>
// 				<div className="auto-container">
// 					<span className="float-text" id="sec-title-text">
// 						Schedule
// 					</span>
// 					<h1>Central Timeline</h1>
// 					<ul className="bread-crumb clearfix">
// 						<li>
// 							<a href="/" id="sec-title-text">
// 								Home
// 							</a>
// 						</li>
// 						<li id="sec-title-text">Schedule</li>
// 					</ul>
// 				</div>
// 			</section>
// 			<div className="root_container">

// 				{/* <div class="container">
// 					<div class="card_time">
// 						<div class="face face1 card_time1">
// 							<div class="content">
// 								<i class="fab fa-windows"></i>
// 								<h3>Windows</h3>
// 							</div>
// 						</div>
// 						<div class="face face2">
// 							<div class="content">
// 								<p>
// 									{' '}
// 									<b>Instagram:</b>
// 									<a
// 										class="link"
// 										href="https://www.instagram.com/codedesignerworld/"
// 									>
// 										@codedesignerworld
// 									</a>
// 									<br />
// 									Code is Available on{' '}
// 									<b>
// 										<a class="link" href="https://github.com/codedesignerworld">
// 											Github
// 										</a>
// 									</b>
// 								</p>
// 								<a class="btn" href="#" type="button">
// 									Know More
// 								</a>
// 							</div>
// 						</div>
// 					</div>

// 					<div class="card_time">
// 						<div class="face face1 card_time2">
// 							<div class="content">
// 								<i class="fab fa-android"></i>
// 								<h3>Android</h3>
// 							</div>
// 						</div>
// 						<div class="face face2">
// 							<div class="content">
// 								<p>
// 									{' '}
// 									<b>Instagram:</b>
// 									<a
// 										class="link"
// 										href="https://www.instagram.com/codedesignerworld/"
// 									>
// 										@codedesignerworld
// 									</a>
// 									<br />
// 									Code is Available on{' '}
// 									<b>
// 										<a class="link" href="https://github.com/codedesignerworld">
// 											Github
// 										</a>
// 									</b>
// 								</p>
// 								<a class="btn" href="#" type="button">
// 									Know More
// 								</a>
// 							</div>
// 						</div>
// 					</div>

// 					<div class="card_time">
// 						<div class="face face1 card_time3">
// 							<div class="content">
// 								<i class="fab fa-apple"></i>
// 								<h3>Apple</h3>
// 							</div>
// 						</div>
// 						<div class="face face2">
// 							<div class="content">
// 								<p>
// 									{' '}
// 									<b>Instagram:</b>
// 									<a
// 										class="link"
// 										href="https://www.instagram.com/codedesignerworld/"
// 									>
// 										@codedesignerworld
// 									</a>
// 									<br />
// 									Code is Available on{' '}
// 									<b>
// 										<a class="link" href="https://github.com/codedesignerworld">
// 											Github
// 										</a>
// 									</b>
// 								</p>
// 								<a class="btn" href="#" type="button">
// 									Know More
// 								</a>
// 							</div>
// 						</div>
// 					</div>
// 				</div> */}
// 			</div>
// 			{/* <div style={{ backgroundColor: '#efefef', overflow: 'auto' }}>
// 				<br />
// 				<h1 style={{ textAlign: 'center' }}>Parsec: A paradigm shift</h1>
// 				<h1 style={{ textAlign: 'center' }}>(Inaguration)</h1>
// 				<VerticalTimeline>
// 					<TimelineComp
// 						circleColor="rgb(33, 150, 243)"
// 						title="ASCENSUS: QUIZ ROUND"
// 						date="28 FEB 2022"
// 						time="08:00 PM to 11:30 PM"
// 					/>
// 					<TimelineComp
// 						circleColor="rgb(233, 30, 99)"
// 						title="ASCENSUS: CASE ROUND BEGINS"
// 						date="01 MARCH 2022"
// 						time="12:00 AM"
// 					/>
// 					<TimelineComp
// 						circleColor="rgb(33, 150, 243)"
// 						title="DESIGNO: PRELIMS BEGINS"
// 						date="02 MARCH 2022"
// 						time={'12:00 AM'}
// 					/>
// 					<TimelineComp
// 						circleColor="rgb(233, 30, 99)"
// 						title="ASCENSUS: CASE ROUND ENDS"
// 						date="01 MARCH 2022"
// 						time="12:59 PM"
// 					/>
// 					<TimelineComp
// 						circleColor="rgb(33, 150, 243)"
// 						title="GUARDAINS KICKSTARTS"
// 						date="03 MARCH 2022"
// 						time={'02:00 PM'}
// 					/>
// 					<TimelineComp
// 						circleColor="rgb(233, 30, 99)"
// 						title="DESIGNO: PRELIMS ENDS"
// 						date="04 MARCH 2022"
// 						time="12:00 AM"
// 					/>
// 					<TimelineComp
// 						circleColor="rgb(33, 150, 243)"
// 						title="DEVHACK: OPENING CEREMONY"
// 						date="04 MARCH 2022"
// 						time={'04:00 PM'}
// 					/>
// 					<TimelineComp
// 						circleColor="rgb(233, 30, 99)"
// 						title="DEVHACK: ORIENTATION SESSION"
// 						date="04 MARCH 2022"
// 						time="06:00 PM - 7:30 PM"
// 					/>
// 					<TimelineComp
// 						circleColor="rgb(33, 150, 243)"
// 						title="VENIVIDIVICI KICKSOFF"
// 						date="04 MARCH 2022"
// 						time={'08:00 PM'}
// 					/>
// 					<TimelineComp
// 						circleColor="rgb(233, 30, 99)"
// 						title="DEVHACK: IDEATION PHASE"
// 						date="04 MARCH 2022"
// 						time="08:00 PM"
// 					/>
// 					<TimelineComp
// 						circleColor="rgb(33, 150, 243)"
// 						title="GUARDAINS ENDS"
// 						date="05 MARCH 2022"
// 						time={'12:00 AM'}
// 					/>
// 					<TimelineComp
// 						circleColor="rgb(233, 30, 99)"
// 						title="ASCENSUS: PRESENTATION ROUND KICKSOFF"
// 						date="05 MARCH 2022"
// 						time={'06:00 AM'}
// 					/>
// 					<TimelineComp
// 						circleColor="rgb(33, 150, 243)"
// 						title="VENIVIDIVICI ENDS"
// 						date="05 MARCH 2022"
// 						time="08:00 AM"
// 					/>
// 					<TimelineComp
// 						circleColor="rgb(233, 30, 99)"
// 						title="DEVHACK: SPEAKER SESSION"
// 						date="05 MARCH 2022"
// 						time={'09:00 AM - 11:00 AM'}
// 					/>
// 					<TimelineComp
// 						circleColor="rgb(33, 150, 243)"
// 						title="DEVHACK: IDEATION JUDGING BEGINS"
// 						date="05 MARCH 2022"
// 						time="11:30 AM"
// 					/>
// 					<TimelineComp
// 						circleColor="rgb(233, 30, 99)"
// 						title="QUIZ: PRELIMS"
// 						date="05 MARCH 2022"
// 						time={'12:00 PM - 02:00 PM'}
// 					/>
// 					<TimelineComp
// 						circleColor="rgb(33, 150, 243)"
// 						title="DEVHACK: INNOVATION PHASE KIKSOFF"
// 						date="05 MARCH 2022"
// 						time="02:00 PM"
// 					/>
// 					<TimelineComp
// 						circleColor="rgb(233, 30, 99)"
// 						title="DESIGNO: FINALS"
// 						date="05 MARCH 2022"
// 						time={'02:00 PM - 08:00 PM'}
// 					/>
// 					<TimelineComp
// 						circleColor="rgb(33, 150, 243)"
// 						title="DEVHACK: POWER HACKING PHASE KIKSOFF"
// 						date="05 MARCH 2022"
// 						time="10:00 PM"
// 					/>
// 					<TimelineComp
// 						circleColor="rgb(233, 30, 99)"
// 						title="DEVHACK: SUBMISSION OF PROTOTYPE"
// 						date="06 MARCH 2022"
// 						time={'08:00 AM'}
// 					/>
// 					<TimelineComp
// 						circleColor="rgb(33, 150, 243)"
// 						title="QUIZ: FINALS"
// 						date="06 MARCH 2022"
// 						time="10:00 AM - 12:30 PM"
// 					/>
// 					<TimelineComp
// 						circleColor="rgb(233, 30, 99)"
// 						title="DEVHACK: DECLARATION OF TOP 7 TEAMS"
// 						date="06 MARCH 2022"
// 						time={'10:30 AM'}
// 					/>
// 					<TimelineComp
// 						circleColor="rgb(33, 150, 243)"
// 						title="ALGOSTRIKE: FINAL SCOREBAORD RELEASED"
// 						date="06 MARCH 2022"
// 						time="11:30 AM"
// 					/>
// 					<TimelineComp
// 						circleColor="rgb(233, 30, 99)"
// 						title="DEVHACK: SUBMISSION OF PRESENTATION"
// 						date="06 MARCH 2022"
// 						time={'12:15 PM'}
// 					/>
// 					<TimelineComp
// 						circleColor="rgb(33, 150, 243)"
// 						title="DEVHACK: PRESENTATION OF TOP 7 TEAMS"
// 						date="06 MARCH 2022"
// 						time="12:30 PM"
// 					/>
// 					<TimelineComp
// 						circleColor="rgb(233, 30, 99)"
// 						title="DEVHACK: SPEAKER SESSION"
// 						date="06 MARCH 2022"
// 						time={'02:30 PM'}
// 					/>
// 					<TimelineComp
// 						circleColor="rgb(33, 150, 243)"
// 						title="DEVHACK: PRIZE DISTRIBUTION"
// 						date="06 MARCH 2022"
// 						time="03:30 PM"
// 					/>
// 					<TimelineComp
// 						circleColor="rgb(233, 30, 99)"
// 						title="DEVHACK: CLOSING CEREMONY"
// 						date="06 MARCH 2022"
// 						time={'05:30 PM'}
// 					/>
// 					<TimelineComp
// 						circleColor="rgb(33, 150, 243)"
// 						title="ASCENSUS: PRESENTATION ROUND ENDS"
// 						date="07 MARCH 2022"
// 						time="12:00 AM"
// 					/>

// 					<VerticalTimelineElement
// 						iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
// 						// icon={<StarIcon />}
// 					/>
// 				</VerticalTimeline>
// 			</div> */}
// 			<Footer />
// 		</div>
// 	);
// }

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { useState } from 'react';
const timeColor = 'pink';
const Ascensus = () => {
	return (
		<div className="container">
			<div class="card_time">
				<div class="face face1 card_time2">
					<div class="content">
						<h2 style={{ color: 'white' }}>ASCENSUS</h2>
					</div>
				</div>
				<div class="face face2">
					<div class="content">
						<h6>
							<strong>Quiz Round:&nbsp;</strong>
							<span style={{ color: timeColor }}>
								{' '}
								28 FRB 8:00 PM - 11:30 PM
							</span>
							<br />
							<br />
							<strong>Case Round:&nbsp;</strong>
							<span style={{ color: timeColor }}>
								{' '}
								01 MAR 12:00 AM - 12:59 PM
							</span>
							<br />
							<br />
							<strong>Presentation Begins:&nbsp;</strong>
							<span style={{ color: timeColor }}> 05 MAR 06:00 AM</span>
							<br />
							<br />
							<strong>Presentation Ends:&nbsp;</strong>
							<span style={{ color: timeColor }}> 07 MAR 12:00 AM</span>

							<br />
						</h6>
					</div>
				</div>
			</div>
		</div>
	);
};

const Designo = () => {
	return (
		<TimelineItem>
			<TimelineSeparator>
				<TimelineDot />
				<TimelineConnector />
			</TimelineSeparator>
			<TimelineContent>
				<div className="container" style={{ justifyContent: 'flex-end' }}>
					<div class="card_time">
						<div class="face face1 card_time2">
							<div class="content">
								<h2 style={{ color: 'white' }}>DESIGNO</h2>
							</div>
						</div>
						<div class="face face2">
							<div class="content">
								<h6 style={{ textAlign: 'left' }}>
									<strong>Prelims Begins:&nbsp;</strong>
									<span style={{ color: timeColor }}> 2 MAR 12:00 AM</span>
									<br />
									<br />
									<strong>Prelims Ends:&nbsp;</strong>
									<span style={{ color: timeColor }}> 4 MAR 12:00 AM</span>
									<br />
									<br />
									<strong>Finals:&nbsp;</strong>
									<span style={{ color: timeColor }}>
										{' '}
										5 MAR 02:00 PM - 08:00 PM
									</span>
									<br />
								</h6>
							</div>
						</div>
					</div>
				</div>
			</TimelineContent>
		</TimelineItem>
	);
};
const GUARDAINS = () => {
	return (
		<div className="container" style={{ justifyContent: 'flex-start' }}>
			<div class="card_time">
				<div class="face face1 card_time2">
					<div class="content">
						<h2 style={{ color: 'white' }}>GUARDAINS</h2>
					</div>
				</div>
				<div class="face face2">
					<div class="content">
						<h6 style={{ textAlign: 'left' }}>
							<strong>GUARDAINS KICKSOFF:&nbsp;</strong>
							<span style={{ color: timeColor }}> 03 MAR 02:00 PM</span>
							<br />
							<br />
							<strong>GUARDAINS ENDS:&nbsp;</strong>
							<span style={{ color: timeColor }}> 05 MAR 12:00 AM</span>
							<br />
						</h6>
					</div>
				</div>
			</div>
		</div>
	);
};

export default function AlternateTimeline() {
	const [isVisible28, setIsVisible28] = useState(false)
	const [isVisible1, setIsVisible1] = useState(false)
	const [isVisible2, setIsVisible2] = useState(false)
	const [isVisible3, setIsVisible3] = useState(false)
	const [isVisible04, setIsVisible04] = useState(false)
	const [isVisible05, setIsVisible05] = useState(false)
	const [isVisible06, setIsVisible06] = useState(false)
	const [isVisible07, setIsVisible07] = useState(false)
	return (
		<div className="page-wrapper">
			<Header />
			<section
				style={{
					background:
						'url(https://c4.wallpaperflare.com/wallpaper/418/819/597/planets-stars-universe-ringed-planet-wallpaper-preview.jpg)',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					boxShadow: '100px 100px 100px 100px rgba(255,255,255,0.2) inset',
				}}
			>
				<div
					style={{
						width: '100vw',
						height: '100vh',
						overflow: 'scroll',
						// display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						padding: '0 auto',
						position: 'relative',
						paddingBottom: '2%',
						paddingTop: '200px',
					}}
				>
					{/* 28 FEB */}
					<div
						style={{
							width: '60%',
							border: '2px solid white',
							borderRadius: '12px',
							margin: '5px auto',
							position: 'relative',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							cursor: 'pointer',
							flexDirection: 'column',
						}}
						onClick={() => {
							setIsVisible28(!isVisible28);
						}}
					>
						<h2 style={{ color: 'white', margin: '10px auto' }}>28 FEB 2022</h2>
						{isVisible28 && (
							<div
								style={{
									color: 'white',
									transitionDelay: '1s',
									textAlign: 'left',
								}}
							>
								<br />
								<br />
								<h3 style={{ color: 'inherit', textAlign: 'center' }}>
									Events
								</h3>

								<h5 style={{ color: 'inherit' }}>
									ASCENSUS QUIZ ROUND: 08:00 PM TO 11:30 PM
								</h5>
							</div>
						)}
					</div>
					{/* 1 MARCH */}
					<div
						style={{
							width: '60%',
							border: '2px solid white',
							borderRadius: '12px',
							margin: '5px auto',
							position: 'relative',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							cursor: 'pointer',
							flexDirection: 'column',
						}}
						onClick={() => {
							setIsVisible1(!isVisible1);
						}}
					>
						<h2 style={{ color: 'white', margin: '10px auto' }}>
							01 MARCH 2022
						</h2>
						{isVisible1 && (
							<div
								style={{
									color: 'white',
									transitionDelay: '1s',
									textAlign: 'left',
								}}
							>
								<br />
								<br />
								<h3 style={{ color: 'inherit', textAlign: 'center' }}>
									Events
								</h3>

								<h5 style={{ color: 'inherit' }}>
									ASCENSUS CASE ROUND: 12:00 AM TO 12:59 PM
								</h5>
							</div>
						)}
					</div>
					{/* 2 MARHC */}
					<div
						style={{
							width: '60%',
							border: '2px solid white',
							borderRadius: '12px',
							margin: '5px auto',
							position: 'relative',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							cursor: 'pointer',
							flexDirection: 'column',
						}}
						onClick={() => {
							setIsVisible2(!isVisible2);
						}}
					>
						<h2 style={{ color: 'white', margin: '10px auto' }}>
							02 MARCH 2022
						</h2>
						{isVisible2 && (
							<div
								style={{
									color: 'white',
									transitionDelay: '1s',
									textAlign: 'left',
								}}
							>
								<br />
								<br />
								<h3 style={{ color: 'inherit', textAlign: 'center' }}>
									Events
								</h3>

								<h5 style={{ color: 'inherit' }}>
									DESIGNO PRELIMS BEGINS: 12:00 AM
								</h5>
							</div>
						)}
					</div>
{/* 3 MARHC */}
					<div
						style={{
							width: '60%',
							border: '2px solid white',
							borderRadius: '12px',
							margin: '5px auto',
							position: 'relative',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							cursor: 'pointer',
							flexDirection: 'column',
						}}
						onClick={() => {
							setIsVisible3(!isVisible3);
						}}
					>
						<h2 style={{ color: 'white', margin: '10px auto' }}>
							03 MARCH 2022
						</h2>
						{isVisible3 && (
							<div
								style={{
									color: 'white',
									transitionDelay: '1s',
									textAlign: 'left',
								}}
							>
								<br />
								<br />
								<h3 style={{ color: 'inherit', textAlign: 'center' }}>
									Events
								</h3>

								<h5 style={{ color: 'inherit' }}>
									GUARDAINS KICKSTARTS: 02:00 PM
								</h5>
							</div>
						)}
					</div>
{/* 4 MARHC */}
					<div
						style={{
							width: '60%',
							border: '2px solid white',
							borderRadius: '12px',
							margin: '5px auto',
							position: 'relative',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							cursor: 'pointer',
							flexDirection: 'column',
						}}
						onClick={() => {
							setIsVisible04(!isVisible04);
						}}
					>
						<h2 style={{ color: 'white', margin: '10px auto' }}>
							04 MARCH 2022
						</h2>
						{isVisible04 && (
							<div
								style={{
									color: 'white',
									transitionDelay: '1s',
									textAlign: 'left',
								}}
							>
								<br />
								<br />
								<h3 style={{ color: 'inherit', textAlign: 'center' }}>
									Events
								</h3>
								<h5 style={{ color: 'inherit' }}>
									DESIGNO PRELIMS ENDS: 12:00 AM
								</h5>
								<h5 style={{ color: 'inherit' }}>
									DEVHACK OPENING CEREMONY: 04:00 PM
								</h5>
								<h5 style={{ color: 'inherit' }}>
									DEVHACK ORIENTATION SESSION: 06:00 PM TO 7:30 PM
								</h5>
								<h5 style={{ color: 'inherit' }}>
									VENIVIDIVICI KICKSOFF: 08:00 PM
								</h5>
								<h5 style={{ color: 'inherit' }}>
									DEVHACK IDEATION PHASE: 08:00 PM
								</h5>
							</div>
						)}
					</div>
					{/* 05 MARCH */}
					<div
						style={{
							width: '60%',
							border: '2px solid white',
							borderRadius: '12px',
							margin: '5px auto',
							position: 'relative',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							cursor: 'pointer',
							flexDirection: 'column',
						}}
						onClick={() => {
							setIsVisible05(!isVisible05);
						}}
					>
						<h2 style={{ color: 'white', margin: '10px auto' }}>
							05 MARCH 2022
						</h2>
						{isVisible05 && (
							<div
								style={{
									color: 'white',
									transitionDelay: '1s',
									textAlign: 'left',
								}}
							>
								<br />
								<br />
								<h3 style={{ color: 'inherit', textAlign: 'center' }}>
									Events
								</h3>

								<h5 style={{ color: 'inherit' }}>GUARDAINS ENDS: 12:00 AM</h5>
								<h5 style={{ color: 'inherit' }}>
									ASCENSUS PRESENTATION ROUND KICKSOFF: 06:00 AM
								</h5>
								<h5 style={{ color: 'inherit' }}>
									VENIVIDIVICI ENDS: 08:00 AM
								</h5>
								<h5 style={{ color: 'inherit' }}>
									DEVHACK SPEAKER SESSION: 11:00 AM
								</h5>
								<h5 style={{ color: 'inherit' }}>
									DEVHACK IDEATION JUDGING BEGINS: 11:30 AM
								</h5>
								<h5 style={{ color: 'inherit' }}>
									QUIZ PRELIMS: 12:00 PM TO 02:00 PM
								</h5>
								<h5 style={{ color: 'inherit' }}>
									DEVHACK INNOVATION PHASE KICKSOFF: 02:00 PM
								</h5>
								<h5 style={{ color: 'inherit' }}>
									DESIGNO FINALS: 02:00 PM TO 08:00 PM
								</h5>
								<h5 style={{ color: 'inherit' }}>
									DEVHACK POWER HACKING PHASE KICKSOFF: 10:00 PM
								</h5>
							</div>
						)}
					</div>
					{/* 06 MARHC */}
					<div
						style={{
							width: '60%',
							border: '2px solid white',
							borderRadius: '12px',
							margin: '5px auto',
							position: 'relative',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							cursor: 'pointer',
							flexDirection: 'column',
						}}
						onClick={() => {
							setIsVisible06(!isVisible06);
						}}
					>
						<h2 style={{ color: 'white', margin: '10px auto' }}>
							06 MARCH 2022
						</h2>
						{isVisible06 && (
							<div
								style={{
									color: 'white',
									transitionDelay: '1s',
									textAlign: 'left',
								}}
							>
								<br />
								<br />
								<h3 style={{ color: 'inherit', textAlign: 'center' }}>
									Events
								</h3>

								<h5 style={{ color: 'inherit' }}>
									DEVHACK SUBMISSION OF PROTOTYPE: 08:00 PM
								</h5>
								<h5 style={{ color: 'inherit' }}>
									QUIZ FINALS: 10:00 AM TO 12:30 PM
								</h5>
								<h5 style={{ color: 'inherit' }}>
									DEVHACK DECLARATION OF TOP 7 TEAMS: 10:30 AM
								</h5>
								<h5 style={{ color: 'inherit' }}>
									ALGOSTRIKE FINAL SCOREBOARD: 11:30 AM
								</h5>
								<h5 style={{ color: 'inherit' }}>
									DEVHACK SUBMISSION OF PRESENTATION: 12:15 PM
								</h5>
								<h5 style={{ color: 'inherit' }}>
									DEVHACK PRESENTATION OF TOP 7 TEAMS: 12:30 PM
								</h5>
								<h5 style={{ color: 'inherit' }}>
									DEVHACK SPEAKER SESSION: 02:30 PM
								</h5>
								<h5 style={{ color: 'inherit' }}>
									DEVHACK PRIZE DISTRIBUTION: 03:30 PM
								</h5>
								<h5 style={{ color: 'inherit' }}>
									DEVHACK CLOSING CEREMONY: 05:30 PM
								</h5>
							</div>
						)}
					</div>
{/* 07  */}
					<div
						style={{
							width: '60%',
							border: '2px solid white',
							borderRadius: '12px',
							margin: '5px auto',
							position: 'relative',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							cursor: 'pointer',
							flexDirection: 'column',
						}}
						onClick={() => {
							setIsVisible07(!isVisible07);
						}}
					>
						<h2 style={{ color: 'white', margin: '10px auto' }}>
							07 MARCH 2022
						</h2>
						{isVisible07 && (
							<div
								style={{
									color: 'white',
									transitionDelay: '1s',
									textAlign: 'left',
								}}
							>
								<br />
								<br />
								<h3 style={{ color: 'inherit', textAlign: 'center' }}>
									Events
								</h3>

								<h5 style={{ color: 'inherit' }}>
									ASCENSUS PRESENTATION ROUND ENDS: 12:00 AM
								</h5>
							</div>
						)}
					</div>
				</div>
			</section>
			{/* <Footer /> */}
		</div>
	);
}
