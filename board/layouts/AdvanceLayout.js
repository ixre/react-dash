import {Icon, Layout, Menu} from 'antd';
import React from "react";
import "./advance_layout.css";
import BoardUserContext from "../state";
import {PropTypes} from "prop-types";

const {Header, Content, Sider} = Layout;
const SubMenu = Menu.SubMenu;

let Logo = (props) => {
    return <div className="logo">
        <Icon className="logo-icon" type="compass"/>
        <span className="logo-txt">管理后台</span>
        <i className="logo-version"></i>
    </div>;
};

function GroupNav({menu}){
   return <div className="nav">
       <ul>
           {menu.map((it,n)=>(
              <li><span>{it.title}</span></li>
           ))}
       </ul>
   </div>
}

function UserBar({user}){
   return  <div className="user">
       欢迎您：<span className="username" field="userName" name="field_userName">{user.name}</span>
       &nbsp;&nbsp;
       <span className="btn-logout">退出</span>
   </div>;
}


export class AdvanceLayout extends React.Component {
    static contextType = BoardUserContext;
    constructor(props) {
        super(props);
        this.state = {
            isSuper : false,
            collapsed: false,
            name: "",
            version: "",
            // User info
            user: {
                name: "admin"
            }
        };
    }

    static propTypes = {
        menu:PropTypes.array,
    };

    componentDidMount() {
        // 控制管理员和普通用户显示
        let store = this.context;
        //let isSuper = store.user.isSuper;
        //this.setState({isSuper:isSuper});
        // 获取系统信息
        let t = this;
        // http.jsonPost(fn.api("/initial"), {}, function (r) {
        //     t.setState({
        //         name: r["sys_name"],
        //         version: r["version"],
        //         user: r["user"]
        //     });
        // });
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    assignUrl = (href) => {
        this.props.history.push(href);
    };

    render() {
        const {menu} = this.props;
        return (
            <div>
                <div className="a-header">
                    <Logo />
                    <GroupNav menu={menu}/>
                   <UserBar user={{name:"jarry"}}/>
                </div>
            </div>
        );
    }
}


