/**
 * @author 陆佩仪
 * 设置cookic
 * @param name
 * @param value
 * @param duration (天）
 */
export function setCookie(name, value, duration = 7) {
    const exp = new Date();
    exp.setTime(exp.getTime() + duration * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${exp.toGMTString()};path=/;`;
}

/**
 * 读取cookies
 * @param name
 * @returns {null}
 */
export function getCookie(name) {
    if (!global.document) return null;
    const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
    const arr = global.document.cookie.match(reg);
    if (arr) {
        return arr[2];
    }
    return null;
}
/**
 * 删除cookies
 * @param name
 */
export function delCookie(name, callback) {
    if (!document) return;
    const exp = new Date();
    exp.setTime(exp.getTime() - 1);
    const cval = getCookie(name);
    if (cval != null) {
        document.cookie = `${name}=${cval};expires=${exp.toGMTString()}`;
        callback && callback();
    }
}
