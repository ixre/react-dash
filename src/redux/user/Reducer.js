import { LOGING } from './Action';
import { setCookie } from '../../utils/cookie';
import immutable from 'immutable';

export default function user (state = {}, action) {
    state = immutable.fromJS({});
    switch (action.type) {
        case LOGING: {
            setCookie('hash_token', 2222222222222);
            state = state.set('token', 2222222222222);
            break;
        }
        default:
    }
    return state;
}
