import { combineReducers } from 'redux'
import user from './user/Reducer';
import data from './data/Reducer';

/**
 * @Description: 注册各业务reducer，可在各页面获取reducer数据
 */
export const makeRootReducer = (asyncReducers) => {
    return combineReducers({
        user,
        data,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
