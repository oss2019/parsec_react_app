import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import EventBackground from '../../components/eventsBackground';
import LazyLoad from 'react-lazyload';
import Routes from '../../routes'
import Header from '../../components/Header';

const EventPage  = () => {
	return (
		<React.Fragment>
			{/* <LazyLoad> */}
      <EventBackground />
      <Header active={2} />
				{/* <Router>
					<Routes />
				</Router> */}
				{/* <Footer /> */}
			{/* </LazyLoad> */}
		</React.Fragment>
	);
}

export default EventPage;
