import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import Routes from './routes';
import ReactGA from 'react-ga';
const TRACKING_ID = 'UA-219555754-1'; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {

	return (
		<div>
			<LazyLoad>
        {/* <Background /> */}
        {/* <EventPage /> */}
				<Router>
					<Routes />
				</Router>
				{/* <Footer /> */}
			</LazyLoad>
		</div>
	);
}

export default App;
