import React from "react";
import {Switch,Route} from "react-router-dom";
import {Index} from "./feature/home/Index";
import {AdvanceLayout} from "./layouts/AdvanceLayout";
import {menu} from "./menu";



export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.layout.show({title:"欢迎首页",url:"#/home",active:true,closable:false});
    }

    render() {
        return (
            <AdvanceLayout className="app-container" menu={menu} ref={(layout)=>this.layout = layout}>
            </AdvanceLayout>
        );
    }
}