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

function GroupNav({menu, onClick}) {
    return <div className="nav">
        <ul>
            {menu.map((it, n) => {
                const {code, title} = it;
                return <li key={"g" + n} onClickCapture={() => onClick(code, title, n)}><span>{title}</span></li>
            })}
        </ul>
    </div>;
}

function UserBar({user}) {
    return <div className="user">
        欢迎您：<span className="username" field="userName" name="field_userName">{user.name}</span>
        &nbsp;&nbsp;
        <span className="btn-logout">退出</span>
    </div>;
}

function SubNav({data, group, width}) {
    let g = data.find((it) => it["code"] == group) || {children: []};
    if (g == null) return null;
    return <div className="a-sub-nav" style={{width: width + "px"}}>
        {g.children.map((it, n) => {
            const {title, children} = it;
            return <div key={n} className="nav-group" group-id="demo">
                <div className="nav-group-title">{title}</div>
                <div className="panel">
                    <ul className={"fns fns_" + n}>
                        {children.map((c, n2) => {
                            const {title} = c;
                            return <li key={"nc" + n2}>
                                <div className="fn" url="/order/list">{title}</div>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        })}
    </div>;
}


export class AdvanceLayout extends React.Component {
    static contextType = BoardUserContext;

    constructor(props) {
        super(props);
        this.state = {
            groupCode: "home",

            isSuper: false,
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
        menu: PropTypes.array,
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

    groupNavClick(code) {
        this.setState({groupCode: code});
    }

    render() {
        const {menu} = this.props;
        const {groupCode} = this.state;
        return (
            <div className="flex-box">
                <div className="a-header">
                    <Logo/>
                    <GroupNav menu={menu} onClick={this.groupNavClick.bind(this)}/>
                    <UserBar user={{name: "jarry"}}/>
                </div>
                <div className="a-main">
                    <SubNav width={200} data={menu} group={groupCode || "home"}/>
                    <div className="a-frames">
                        <div className="t2-pa-tabs page-tabs">
                            <ul></ul>
                            <div className="clearfix"></div>
                        </div>
                        <div className="a-ie7">针对IE7优化</div>
                        <div className="a-page-frames">
                            <div className="frames"></div>
                            <div className="page-frame-shadow hidden">这是为支持分列右侧拖动</div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}


