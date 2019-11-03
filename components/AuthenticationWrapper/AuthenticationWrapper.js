"use strict"

import React from "react";
import {withRouter} from "react-router-dom";
import {fetchPost} from "../../lib/react";
import boardURLS from "../../board/urls";


 class AuthenticationWrapper extends React.Component {
     //static contextType = BoardUserContext;
     // 在函数组件中可用: const {isLogin} = React.useContext(UserContext)
     constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        };
    }

    componentWillMount() {
        const store = this.context;
        fetchPost(boardURLS.CHECK_SESSION,{},(rsp)=>{
            if(store.saveSession(rsp)) {
                this.setState({isLogin:true});
            }else{
                this.props.history.push("/login?return="+this.props.history.path);
            }
        },(err)=>{
            console.log(`[ XHR][ Check]: check session error : ${err}`);
            this.props.history.push("/login");
        });
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

