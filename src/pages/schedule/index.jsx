import React from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import evtTitle from '../../images/_events/evtTitle.jpg';

const TimelineComp = ({ circleColor, title, description, date, time }) => {
	return (
		<VerticalTimelineElement
			className="vertical-timeline-element--work"
			date={date}
			iconStyle={{ background: circleColor, color: '#fff' }}
			style={{ paddingTop: '0' }}
		>
			{/* <p style={{ color: '#f20487',textAlign: 'end', margin: '0' }}>{time}</p> */}
			<h3 style={{ textAlign: 'center' }}>{title}</h3>
			<p style={{ textAlign: 'center', margin: '0', color: '#f20487' }}>
				{time}
			</p>
		</VerticalTimelineElement>
	);
};

export default function Schedule() {
	return (
		<div className="page-wrapper">
			<Header active={4} />
			<section
				className="page-title"
				id="page-title"
				style={{
					backgroundImage: `url(${evtTitle})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					boxShadow: ' 0 0 230px 0 black inset',
				}}
			>
				<div className="auto-container">
					<span className="float-text" id="sec-title-text">
						Schedule
					</span>
					<h1>Central Timeline</h1>
					<ul className="bread-crumb clearfix">
						<li>
							<a href="/" id="sec-title-text">
								Home
							</a>
						</li>
						<li id="sec-title-text">Schedule</li>
					</ul>
				</div>
			</section>
			<div style={{ backgroundColor: '#efefef', overflow: 'auto' }}>
				<br />
				<h1 style={{ textAlign: 'center' }}>Parsec: A paradigm shift</h1>
				<VerticalTimeline>
					<TimelineComp
						circleColor="rgb(33, 150, 243)"
						title="ASCENSUS: QUIZ ROUND"
						date="28 FEB 2022"
						time="08:00 PM to 11:30 PM"
					/>
					<TimelineComp
						circleColor="rgb(233, 30, 99)"
						title="ASCENSUS: CASE ROUND BEGINS"
						date="01 MARCH 2022"
						time="12:00 AM"
					/>
					<TimelineComp
						circleColor="rgb(33, 150, 243)"
						title="DESIGNO: PRELIMS BEGINS"
						date="02 MARCH 2022"
						time={'12:00 AM'}
					/>
					<TimelineComp
						circleColor="rgb(233, 30, 99)"
						title="ASCENSUS: CASE ROUND ENDS"
						date="01 MARCH 2022"
						time="12:59 PM"
					/>
					<TimelineComp
						circleColor="rgb(33, 150, 243)"
						title="GUARDAINS KICKSTARTS"
						date="03 MARCH 2022"
						time={'02:00 PM'}
					/>
					<TimelineComp
						circleColor="rgb(233, 30, 99)"
						title="DESIGNO: PRELIMS ENDS"
						date="04 MARCH 2022"
						time="12:00 AM"
					/>
					<TimelineComp
						circleColor="rgb(33, 150, 243)"
						title="DEVHACK: OPENING CEREMONY"
						date="04 MARCH 2022"
						time={'04:00 PM'}
					/>
					<TimelineComp
						circleColor="rgb(233, 30, 99)"
						title="DEVHACK: ORIENTATION SESSION"
						date="04 MARCH 2022"
						time="06:00 PM - 7:30 PM"
					/>
					<TimelineComp
						circleColor="rgb(33, 150, 243)"
						title="VENIVIDIVICI KICKSOFF"
						date="04 MARCH 2022"
						time={'08:00 PM'}
					/>
					<TimelineComp
						circleColor="rgb(233, 30, 99)"
						title="DEVHACK: IDEATION PHASE"
						date="04 MARCH 2022"
						time="08:00 PM"
					/>
					<TimelineComp
						circleColor="rgb(33, 150, 243)"
						title="GUARDAINS ENDS"
						date="05 MARCH 2022"
						time={'12:00 AM'}
					/>
					<TimelineComp
						circleColor="rgb(233, 30, 99)"
						title="ASCENSUS: PRESENTATION ROUND KICKSOFF"
						date="05 MARCH 2022"
						time={'06:00 AM'}
					/>
					<TimelineComp
						circleColor="rgb(33, 150, 243)"
						title="VENIVIDIVICI ENDS"
						date="05 MARCH 2022"
						time="08:00 AM"
					/>
					<TimelineComp
						circleColor="rgb(233, 30, 99)"
						title="DEVHACK: SPEAKER SESSION"
						date="05 MARCH 2022"
						time={'09:00 AM - 11:00 AM'}
					/>
					<TimelineComp
						circleColor="rgb(33, 150, 243)"
						title="DEVHACK: IDEATION JUDGING BEGINS"
						date="05 MARCH 2022"
						time="11:30 AM"
					/>
					<TimelineComp
						circleColor="rgb(233, 30, 99)"
						title="QUIZ: PRELIMS"
						date="05 MARCH 2022"
						time={'12:00 PM - 02:00 PM'}
					/>
					<TimelineComp
						circleColor="rgb(33, 150, 243)"
						title="DEVHACK: INNOVATION PHASE KIKSOFF"
						date="05 MARCH 2022"
						time="02:00 PM"
					/>
					<TimelineComp
						circleColor="rgb(233, 30, 99)"
						title="DESIGNO: FINALS"
						date="05 MARCH 2022"
						time={'02:00 PM - 08:00 PM'}
					/>
					<TimelineComp
						circleColor="rgb(33, 150, 243)"
						title="DEVHACK: POWER HACKING PHASE KIKSOFF"
						date="05 MARCH 2022"
						time="10:00 PM"
					/>
					<TimelineComp
						circleColor="rgb(233, 30, 99)"
						title="DEVHACK: SUBMISSION OF PROTOTYPE"
						date="06 MARCH 2022"
						time={'08:00 AM'}
					/>
					<TimelineComp
						circleColor="rgb(33, 150, 243)"
						title="QUIZ: FINALS"
						date="06 MARCH 2022"
						time="10:00 AM - 12:30 PM"
					/>
					<TimelineComp
						circleColor="rgb(233, 30, 99)"
						title="DEVHACK: DECLARATION OF TOP 7 TEAMS"
						date="06 MARCH 2022"
						time={'10:30 AM'}
					/>
					<TimelineComp
						circleColor="rgb(33, 150, 243)"
						title="ALGOSTRIKE: FINAL SCOREBAORD RELEASED"
						date="06 MARCH 2022"
						time="11:30 AM"
					/>
					<TimelineComp
						circleColor="rgb(233, 30, 99)"
						title="DEVHACK: SUBMISSION OF PRESENTATION"
						date="06 MARCH 2022"
						time={'12:15 PM'}
					/>
					<TimelineComp
						circleColor="rgb(33, 150, 243)"
						title="DEVHACK: PRESENTATION OF TOP 7 TEAMS"
						date="06 MARCH 2022"
						time="12:30 PM"
					/>
					<TimelineComp
						circleColor="rgb(233, 30, 99)"
						title="DEVHACK: SPEAKER SESSION"
						date="06 MARCH 2022"
						time={'02:30 PM'}
					/>
					<TimelineComp
						circleColor="rgb(33, 150, 243)"
						title="DEVHACK: PRIZE DISTRIBUTION"
						date="06 MARCH 2022"
						time="03:30 PM"
					/>
					<TimelineComp
						circleColor="rgb(233, 30, 99)"
						title="DEVHACK: CLOSING CEREMONY"
						date="06 MARCH 2022"
						time={'05:30 PM'}
					/>
					<TimelineComp
						circleColor="rgb(33, 150, 243)"
						title="ASCENSUS: PRESENTATION ROUND ENDS"
						date="07 MARCH 2022"
						time="12:00 AM"
					/>

					<VerticalTimelineElement
						iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
						// icon={<StarIcon />}
					/>
				</VerticalTimeline>
			</div>
			<Footer />
		</div>
	);
}
