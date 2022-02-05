import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-219555754-1');
const RouteChangeTracker = ({ history }) => {
	history.listen((location, action) => {
		ReactGA.set({ page: location.pathname });
		ReactGA.pageview(location.pathname);
	});

	return <></>;
};

export default withRouter(RouteChangeTracker);
