import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    //useHistory 
} from 'react-router-dom';

import Home from './components/Home';

const Routes = () => {
    return ( 
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/chat" />
            </Switch>
        </Router>
     );
}
 
export default Routes;