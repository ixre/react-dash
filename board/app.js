import React from "react";


export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>hello everyone!</div>;
        // return (
        //     <AppLayout className="app-container">
        //         <Switch>
        //             <Route exact path='/' component={Index}/>
        //             <Route path='/home' component={Index}/>
        //             <LazyRoute path='/dashboard' component={Dashboard}/>
        //             <LazyRoute path='/domain' component={Domain}/>
        //             <LazyRoute path='/users' component={Users}/>
        //             <Route path='/home/next' component={Next}/>
        //             <LazyRoute path='/profile/edit' component={EditProfile}/>
        //         </Switch>
        //     </AppLayout>
        // );
    }
}