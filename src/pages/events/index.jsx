import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import EventBackground from '../../components/eventsBackground';
import LazyLoad from 'react-lazyload';
import Routes from '../../routes'
import Header from '../../components/Header';

const EventPage  = () => {
	return (
		<React.Fragment>
      <EventBackground />
			<Header active={2} />
			
			
		</React.Fragment>
	);
}

export default EventPage;
