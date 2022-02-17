import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import ReactGA from 'react-ga';
const TRACKING_ID = 'UA-219555754-1'; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {

	return (
	
		<div>
				<Router>
					<Routes />
				</Router>
		</div>
	);
}

export default App;
