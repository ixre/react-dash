import { post } from '../axios/tools';

export default function commonFetch({ url, params }, action, callback) {
    return (dispatch => {
        post({ url, params }, (status) => {
            dispatch(action);
            callback(status);
        });
    })
}
