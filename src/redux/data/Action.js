/**
 * @Description:
 * @author 陆佩仪
 * @describe 仅作模拟数据之用
 */
export const GET_HOME_DATA = '@data/GET_HOME_DATA';
export function getHome(payload) {
    return {
        type    : GET_HOME_DATA,
        payload
    }
}
