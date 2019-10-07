import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import user from "./user/Reducer";
export default combineReducers({
    routing: routerReducer,
    reduxAsyncConnect,
    user
});

