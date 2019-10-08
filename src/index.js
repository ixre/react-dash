// import React from 'react';
// import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// import Page from './Page';
import * as apis from './axios';
// // import { AppContainer } from 'react-hot-loader';
import { setConfig } from 'redux-alita';
import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './redux/createStore'
import './style/lib/animate.css';
import './style/antd/index.less';
import './style/index.less';
import { Provider } from 'react-redux'
import Page from './Page';

setConfig(apis);

// Store Initialization
// ------------------------------------
console.log(window.__INITIAL_STATE__, '__INITIAL_STATE__')
const store = createStore(window.__INITIAL_STATE__)
console.log(store, 'store')

// Render Setup
// ------------------------------------

ReactDOM.render(
    <Provider store={store}>
        <Page />
    </Provider>,
    document.getElementById('root')
);

// Development Tools
// ------------------------------------
// if (__DEV__) {
//     if (module.hot) {
//         const renderApp = render
//
//         // Setup hot module replacement
//         module.hot.accept([
//                 './components/App',
//                 './routes/index',
//             ], () =>
//                 setImmediate(() => {
//                     ReactDOM.unmountComponentAtNode(MOUNT_NODE)
//                     render()
//                 })
//         )
//     }
// }

serviceWorker.register();
// ------------------------------------
