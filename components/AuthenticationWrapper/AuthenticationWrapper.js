"use strict"

import React from "react";
import {withRouter} from "react-router-dom";
import BoardUserContext from "../../board/state";


 class AuthenticationWrapper extends React.Component {
     //static contextType = BoardUserContext;
     // 在函数组件中可用: const {isLogin} = React.useContext(UserContext)
     constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        };
        this.hasLogin = () => {
            this.setState({isLogin: true});
        };
    }

    componentWillMount() {
        //this.hasLogin();
        const {isLogin} = this.context;
        if(!isLogin){
            this.props.history.push("/login");
        }
        //this.hasLogin();
        //let t = this.ctx;
        //const {store} = this.context;
        // if (!store.checkLogin()) {
        //     http.jsonPost(fn.api("/check_session"), {}, function (r) {
        //         if (!r.code) {
        //             store.isLogin = true;
        //             store.sessionID = r["SessionId"];
        //             store.user = {
        //                 userId: r["UserId"],
        //                 isSuper: r["SuperUser"] == "1"
        //             };
        //             t.hasLogin();
        //         } else {
        //             t.props.history.push("/login");
        //         }
        //     }, function (err) {
        //         console.log(`[ XHR][ Check]: check session error : ${err}`);
        //         t.props.history.push("/login");
        //     });
        // } else {
        //     this.hasLogin();
        // }
    }

    render() {
        return <React.Fragment>
            { this.state.isLogin ? this.props.children : null}
        </React.Fragment>
    }
}

const c =  withRouter(AuthenticationWrapper);
c.class = AuthenticationWrapper;
export default c;

