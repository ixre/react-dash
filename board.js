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
import AuthenticationWrapper from "./components/AuthenticationWrapper/AuthenticationWrapper";
import App from "./board/app";
import LoginPage from "./board/feature/login/login";
import {LoginState} from "./board/state";
import BoardUserContext from "./board/state";

const store = new LoginState();
AuthenticationWrapper.class.contextType = BoardUserContext;

const renderApp = () => {
    return (<AuthenticationWrapper><App/></AuthenticationWrapper>);
};

const Entry = (props)=> {
    return <React.Suspense fallback="">
        <BoardUserContext.Provider value={store}>
        <Router>
            <Switch>
                <LazyRoute exact path='/login' component={LoginPage}/>
                <Route render={renderApp}/>
            </Switch>
        </Router>
        </BoardUserContext.Provider>
    </React.Suspense>;
};
ReactDOM.render(<Entry/>, document.getElementById("root"));