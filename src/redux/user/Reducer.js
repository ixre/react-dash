import { LOGIN_IN, LOGIN_OUT } from './Action';
import { setCookie, delCookie } from '../../utils/cookie';
import immutable from 'immutable';

export default function user (state = {}, action) {
    state = immutable.fromJS({});
    switch (action.type) {
        case LOGIN_IN: {
            setCookie('hash_token', 2222222222222);
            state = state.set('token', 2222222222222);
            break;
        }
        case LOGIN_OUT: {
            console.log('退出登录')
            delCookie('hash_token');
            state = state.remove('token');
            break;
        }
        default:
    }
    return state;
}
