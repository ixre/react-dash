import React from "react";
import {Switch,Route} from "react-router-dom";
import {Index} from "./feature/home/Index";
import {AdvanceLayout} from "./layouts/AdvanceLayout";
import {menu} from "./menu";

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AdvanceLayout className="app-container" menu={menu}>
                <Switch>
                    {/*<Route exact path='/' component={Index}/>*/}
                    <Route path='/home' component={Index}/>
                    {/*<LazyRoute path='/dashboard' component={Dashboard}/>*/}
                    {/*<LazyRoute path='/domain' component={Domain}/>*/}
                    {/*<LazyRoute path='/users' component={Users}/>*/}
                    {/*<Route path='/home/next' component={Next}/>*/}
                    {/*<LazyRoute path='/profile/edit' component={EditProfile}/>*/}
                </Switch>
            </AdvanceLayout>
        );
    }
}