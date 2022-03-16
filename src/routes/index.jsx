import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Cp from '../events/cp';
import Ctf from '../events/ctf';
import Hackathon from '../events/hackathon';
import Ascensus from '../events/ascensus';
import Designo from '../events/designo';
import Quiz from '../events/quiz';
import Workshop from '../pages/workshops';
import Schedule from '../pages/schedule';
import Speakers from '../pages/speakers';
import Team from '../pages/team';
// import Overview from '../events/hackathon_overview';
// import Timeline from '../events/hackathon_timeline';
// import Themes from '../events/hackathon_themes';
// import Judges from '../events/hackathon_judges';

import FAQ from '../pages/faq';
import ContactPage from '../pages/contact';
import Home from '../pages/home';
import Sponsers from '../pages/sponsors';
import Travel from '../pages/travel';
import CodeOfConduct from '../pages/codeOfConduct';
import About from '../pages/about';
import Gallery from '../pages/gallery';
import EventLanding from '../pages/eventLanding';
import Certificates from '../pages/certificates';
import Guardains from '../events/guardains';
// import Speakers from '../pages/speakers';

const Routes = () => {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/faq" component={FAQ} />
				<Route exact path="/faq.html">
					<Redirect to="/faq" />
				</Route>
				<Route exact path="/certificates" component={Certificates} />
				<Route exact path="/sponsors" component={Sponsers} />
				<Route exact path="/sponsors.html">
					<Redirect to="/sponsors" />
				</Route>
				<Route exact path="/aboutus" component={About} />
				<Route exact path="/about.html">
					<Redirect to="/aboutus" />
				</Route>
				<Route exact path="/gallery" component={Gallery} />
				<Route exact path="/gallery.html">
					<Redirect to="/gallery" />
				</Route>
				<Route exact path="/codeofconduct" component={CodeOfConduct} />
				<Route exact path="/codeofcounduct.html">
					<Redirect to="/codeofcounduct" />
				</Route>
				<Route exact path="/travel" component={Travel} />
				<Route exact path="/travel.html">
					<Redirect to="/travel" />
				</Route>
				<Route exact path="/contact" component={ContactPage} />
				<Route exact path="/contact.html">
					<Redirect to="/contact" />
				</Route>

				<Route exact path="/events" component={EventLanding} />
				<Route exact path="/events.html">
					<Redirect to="/events" />
				</Route>
				<Route exact path="/team" component={Team} />
				<Route exact path="/team.html">
					<Redirect to="/team" />
				</Route>
				<Route exact path="/cp" component={Cp} />
				<Route exact path="/cp.html">
					<Redirect to="/cp" />
				</Route>
				<Route exact path="/ctf" component={Ctf} />
				<Route exact path="/ctf.html">
					<Redirect to="/ctf" />
				</Route>
				<Route exact path="/hackathon" component={Hackathon} />
				<Route exact path="/hackathon.html">
					<Redirect to="/hackathon" />
				</Route>
				{/* <Route path='/hackathon_overview' component={Overview}/> */}

				<Route exact path="/ascensus" component={Ascensus} />
				<Route exact path="/designo" component={Designo} />
				<Route exact path="/quiz" component={Quiz} />
				<Route exact path="/quiz.html">
					<Redirect to="/quiz" />
				</Route>
				<Route exact path="/workshops" component={Workshop} />
				{/* <Route exact path="/workshops.html">
					<Redirect to="/workshops" />
				</Route> */}
				<Route path="/schedule" component={Schedule} />

				<Route path="/speakers" component={Speakers} />
				{/* <Route path='/hackathon_timeline' component={Timeline}/>
                <Route path='/hackathon_themes' component={Themes} />
                <Route path='/hackathon_judges' component={Judges} /> */}
				{/* <Route path='/students' component={Students}/> */}
				<Route path="/guardains" component={Guardains} />
				<Route render={() => <Redirect to={{ pathname: '/' }} />} />
				{/* <Route path="/speakers" component={Speakers} /> */}
 			</Switch>
		</div>
	);
};

export default Routes;
