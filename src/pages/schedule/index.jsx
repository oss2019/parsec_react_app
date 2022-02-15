import React from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import evtTitle from '../../images/_events/evtTitle.jpg';

const TimelineComp = ({circleColor, title, description, date}) => {
	return (
		<VerticalTimelineElement
			className="vertical-timeline-element--work"
			date={date}
			iconStyle={{ background: circleColor, color: '#fff' }}
		>
			<h3 style={{textAlign: 'center'}}>{title}</h3>
			<p style={{textAlign: 'center'}}>{description}
			</p>
		</VerticalTimelineElement>
	);
}

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
						title="Title"
						date="3rd March 2022 12:00 PM"
						description="alkdfj alsdfkj aldfj aldfkjadlfadfj aldfja dlfjasdlf ajdfla kdsjflasdfjalsdkfj alsdfkj adsflkajds flakdsfj "
					/>
					<TimelineComp
						circleColor="rgb(233, 30, 99)"
						title="Title"
						date="3rd March 2022 12:00 PM"
						description="alkdfj alsdfkj aldfj aldfkjadlfadfj aldfja dlfjasdlf ajdfla kdsjflasdfjalsdkfj alsdfkj adsflkajds flakdsfj "
					/>
					<TimelineComp
						circleColor="rgb(33, 150, 243)"
						title="Title"
						date="3rd March 2022 12:00 PM"
						description="alkdfj alsdfkj aldfj aldfkjadlfadfj aldfja dlfjasdlf ajdfla kdsjflasdfjalsdkfj alsdfkj adsflkajds flakdsfj "
					/>
					<TimelineComp
						circleColor="rgb(233, 30, 99)"
						title="Title"
						date="3rd March 2022 12:00 PM"
						description="alkdfj alsdfkj aldfj aldfkjadlfadfj aldfja dlfjasdlf ajdfla kdsjflasdfjalsdkfj alsdfkj adsflkajds flakdsfj "
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
