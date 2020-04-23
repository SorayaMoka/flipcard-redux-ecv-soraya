import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import DashboardPage from './pages/DashboardPage';
import CardsPage from './pages/CardsPage';


const App = () => {
    return  (
        <Router>
            <Switch>
                <Route exact path="/" component={DashboardPage} />
                <Route exact path="/cards" component={CardsPage} />
                <Redirect to="/" />
            </Switch>
        </Router>
    )
};

export default App;
