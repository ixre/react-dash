/**
 * @Description:
 * @author 陆佩仪
 * @describe 仅作模拟数据之用
 */
import { post } from '../../axios/tools';
import * as config from "../../axios/config";
export const GET_HOME_DATA = '@data/GET_HOME_DATA';
export function getHome(payload) {
    // post({
    //     url: `https://cors-anywhere.herokuapp.com/${config.GIT_OAUTH}/access_token`,
    //     data: {
    //         client_id: '792cdcd244e98dcd2dee',
    //         client_secret: '81c4ff9df390d482b7c8b214a55cf24bf1f53059',
    //         redirect_uri: 'http://localhost:3006/',
    //         state: 'reactAdmin',
    //     },
    // });

    return {
        type    : GET_HOME_DATA,
        payload
    }
}
