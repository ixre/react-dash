import commonFetch from '../commonFetch';

/**
 * @Description: 标记
 */
export const LOGIN_IN = '@user/LOGIN_IN';
export const LOGIN_OUT = '@user/LOGIN_OUT';

/**
 * @Description: 登录
 * @payload 接口参数
 * @callback 回调
 */
export function loginIn(payload, callback) {
    return commonFetch(payload, { type: LOGIN_IN, payload }, callback);
}

/**
 * @Description: 退出登录
 */
export function loginOut(payload, callback) {
    return commonFetch(payload, { type: LOGIN_OUT, payload }, callback);
}
