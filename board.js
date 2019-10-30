/**
 * Copyright 2009-2019 @ to2.net
 * name : index.js
 * author : jarrysix (jarrysix#gmail.com)
 * date : 2019-10-21 19:09
 * description :
 * history :
 */

import React from "react";
import ReactDOM from "react-dom";
import "./css/global.css";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import {LazyRoute} from "./components/common";
import {AuthenticationWrapper} from "./components/AuthenticationWrapper/AuthenticationWrapper";
import App from "./board/app";
import LoginPage from "./board/login/login";

const renderApp = () => {
    return (<AuthenticationWrapper>
        <App/>
    </AuthenticationWrapper>);
}

const Entry = (props)=> {
    return <React.Suspense fallback="">
        <Router>
            <Switch>
                <LazyRoute exact path='/login' component={LoginPage}/>
                <Route render={renderApp}/>
            </Switch>
        </Router>
    </React.Suspense>;
};
ReactDOM.render(<Entry/>, document.getElementById("root"));