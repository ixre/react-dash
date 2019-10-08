import { setCookie } from '../../utils/cookie';

export const LOGING = '@user/LOGING';
export function LOGIN(payload) {
    setCookie('hash_token', 2222222222222);
    return {
        type    : LOGING,
        payload
    }
}
