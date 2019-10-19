import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './services/NotFound';
import Login from './services/login/Login';
import App from './App';
import { getCookie } from './utils/cookie';
import { RouteCell } from './routes/RouteCell';
import RouteConfig from './routes/config';
import Main from "./apps/main/app";

export default () => {
    let component = (<Redirect to='/pet/petManage' push />);
    if (!getCookie('hash_token') || getCookie('hash_token') === null) {
        console.log("login")
        component = (<Redirect to='/login' push />)
    };
    return (
    <Router>
        <Switch>
            <Route exact path="/" render={() => component}/>
            <Route path="/main" component={Main}/>
            {/*<App>*/}
            {/*    /!*<Route path='/pet' component={PetManage} />*!/*/}
            {/*    <RouteCell list={ RouteConfig } />*/}
            {/*</App>*/}
            <Route path='/404' component={NotFound}/>
            <Route strict path='/login' component={Login}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>)
};
