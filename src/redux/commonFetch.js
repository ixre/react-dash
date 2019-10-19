import { post } from '../axios/tools';

/**
 * @Description: redux公共调接口方法
 * @author 陆佩仪
 * @url 接口地址
 * @params 接口参数
 * @params 接口参数
 * @action 标记
 * @callback 回调
 */
export default function commonFetch({ url, params }, action, callback) {
    return (dispatch => {
        post({ url, params }, (status) => {
            dispatch(action);
            callback(status);
        });
    })
}
