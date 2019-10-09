import commonFetch from '../commonFetch';
export const LOGING = '@user/LOGING';
export function loginIn(payload, callback) {
    return commonFetch(payload, { type: LOGING, payload }, callback);
    // return {
    //     type    : LOGING,
    //     payload
    // }
}
