import {Icon, Layout, Menu} from 'antd';
import React from "react";
import "./advance_layout.css";
import BoardUserContext from "../state";
import {PropTypes} from "prop-types";
import {Close} from "styled-icons/evil/Close";


let Logo = (props) => {
    return <div className="logo">
        <Icon className="logo-icon" type="compass"/>
        <span className="logo-txt">管理后台</span>
        <i className="logo-version"></i>
    </div>;
};

// 分组导航
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

// 子菜单导航
function SubNav({data, group, width,onClick}) {
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
                                <div className="fn" onClickCapture={()=>onClick(c)}>{title}</div>
                            </li>;
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
            frames:[],

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

    show(t){
        let {frames} = this.state;
        let exists = false;
        frames.map((it)=>{
            if(it.url == t.url){
                exists = true;
                it.active = true;
            }else {
                it.active = false;
            }
        });
        if(!exists) frames.push(t);
        this.setState({frames:frames});
    }

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
    pageNavClick({title,code,url}){
        this.show({title,url:"http://board.super4bit.co"+url,closable:true,code,active:true});
    }
    activeTab(t){
        this.show({url:t.url});
    }
    closeTab(t){
        const {url} = t;
        let {frames} = this.state;
        frames.map((it)=>{
            if(it.url == url){
                const index = frames.indexOf(it);
                frames.splice(index, 1);
                this.setState({frames:frames});
            }
        });
    }

    render() {
        const {menu} = this.props;
        const {groupCode,frames} = this.state;
        return (
            <div className="flex-box">
                <div className="a-header">
                    <Logo/>
                    <GroupNav menu={menu} onClick={this.groupNavClick.bind(this)}/>
                    <UserBar user={{name: "jarry"}}/>
                </div>
                <div className="a-main">
                    <SubNav width={200} data={menu} group={groupCode || "home"} onClick={this.pageNavClick.bind(this)}/>
                    <div className="a-frames">
                        <div className="a-tabs t2-pa-tabs page-tabs">
                            <ul>
                                {frames.map((it,n)=>{
                                    const {title,active} = it;
                                    return <li key={"tab"+n} className={active?"current":""}>
                                        <span className="tab-title" onClickCapture={this.activeTab.bind(this,it)}>{title}</span>
                                        <span className="close-btn" onClickCapture={this.closeTab.bind(this,it)}><Close color="#666" size={14}/></span>
                                    </li>;
                                })}
                            </ul>
                        </div>
                        <div className="a-ie7">针对IE7优化</div>
                        <div className="a-page-frames">
                            <div className="frames">
                                {frames.map((it,n)=>{
                                    const {active,url} = it;
                                    return <div key={"tab"+n} className={"frame"+(active?" current":"")}>
                                            <iframe frameBorder="0" src={url}></iframe>
                                    </div>;
                                })}
                            </div>
                            <div className="page-frame-shadow hidden">这是为支持分列右侧拖动</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


