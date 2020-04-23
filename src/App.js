import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import CardsPage from './pages/CardsPage';
import LessonPage from "./pages/LessonPage";


const App = () => {
    return  (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={CardsPage} />
                <Route exact path="/lessons" component={LessonPage} />
                <Redirect to="/" />
            </Switch>
        </Router>
    )
};

export default App;
