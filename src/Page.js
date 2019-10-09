import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import Login from './components/pages/Login';
import App from './App';
import { getCookie } from './utils/cookie';

export default () => {
    console.log(getCookie('hash_token'), 777);
    let component = (<Redirect to="/app/dashboard/index" push/>);
    if (!getCookie('hash_token') || getCookie('hash_token') === null) {
        component = (<Redirect to="/login" push/>)
    };
    return (
    <Router>
        <Switch>
            <Route exact path="/" render={() => component}/>
            <Route path="/app" component={App}/>
            <Route path="/404" component={NotFound}/>
            <Route path="/login" component={Login}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>)
};
