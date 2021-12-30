import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Events from '../pages/events';
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
// import Students from '../pages/Students';

const Routes = () => {
    return (
        <div>
            <Switch>
                {/* <Route exact path='/' component={Events} /> */}
                <Route path='/events' component={Events} />
                <Route path='/team' component={Team}/>
                <Route path='/cp' component={Cp}/>
                <Route path='/ctf' component={Ctf}/>
                <Route path='/hackathon' component={Hackathon} />
                <Route path='/ascensus' component={Ascensus}/>
                <Route path='/designo' component={Designo}/>
                <Route path='/quiz' component={Quiz} />
                <Route path='/workshops' component={Workshop} />
                <Route path='/schedule' component={Schedule} />
                <Route path='/speakers' component={Speakers} />
                
                {/* <Route path='/students' component={Students}/> */}
            </Switch>
        </div>
    )
}

export default Routes;
