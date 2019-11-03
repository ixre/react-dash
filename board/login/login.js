import React, {Fragment} from 'react';
import LoginForm from '../../components/AuthenticationWrapper/LoginForm';
import './login.css';
import Alert from "antd/es/alert";
import {withRouter} from "react-router-dom";
import {Icon} from "antd";
import {fetchPost} from "../../lib/react/http2";
import boardURLS from "../urls";
import {hex} from "../../lib/react";
import BoardUserContext from "../state";


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        document.title = "管理登录";
        this.state = {
            user: "",
            pwd: "",
            err_msg: "",
        };
    }

    handleSubmit = (values, callback) => {
        const store = this.context;
        const data = {
            "user": values.user,
            "pwd": hex("md5", values.password),
            "option":1,
        };
        store.isLogin = true;
        fetchPost(boardURLS.LOGIN, data,  (rsp)=> {
            callback();
            if(store.saveSession(rsp)){
                this.props.history.push("/home");
                this.setState({err_msg:"登录成功"});
            }else {
                this.setState({err_msg: rsp["err_msg"]});
            }

            if (!rsp.ErrCode) {
                store.isLogin = true;
                store.sessionID = rsp.Data["SessionId"];
                // store.user = {
                //     userId:r.data["UserId"],
                //     isSuper: r.data["SuperUser"] == "1"
                // };
                this.props.history.push("/home");
            } else {
                this.setState({err_msg: rsp["err_msg"]});
            }
        },  (r)=> {
            this.setState({err_msg: r || "Oops! Connection timeout"});
            callback();
        });
    }

    render() {
        return <Fragment>
            <br/><br/><br/><br/>
            <div className="mod-login-view">
                <h2><Icon className="logo-icon" type="compass"/>用户登入</h2>

                {this.state.err_msg != "" ?
                    <Alert message={this.state.err_msg} type="warning" showIcon/> :
                    null
                }
                <LoginForm submit={this.handleSubmit} user={this.state.user} pwd={this.state.pwd}/>

                <center><i className="mod-login-account">
                    默认管理账号：admin / 密码：123456
                </i></center>
                <br/>
            </div>

        </Fragment>;
    }
}

LoginPage.contextType = BoardUserContext;
export default withRouter(LoginPage);
