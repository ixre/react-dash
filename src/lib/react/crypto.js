/**
 * Copyright 2009-2019 @ to2.net
 * name : crypto.js
 * author : jarrysix (jarrysix#gmail.com)
 * date : 2019-06-07 22:41
 * description :
 * history :
 */

// api client library
import {createHash,createCipheriv,createDecipheriv} from "crypto"

export function hex(hash, s) {
    if(hex === "" || hex === undefined)return "";
    return createHash(hash).update(s).digest('hex').toLowerCase();
}



/**
 * aes加密
 * @param data 待加密内容
 * @param key 必须为32位私钥
 * @param iv 向量
 * @returns {string}
 */
export function aesEncrypt(data, key, iv) {
    if(data === "" || data === undefined)return "";
    let cipher = createCipheriv('aes-256-ecb', key, iv || "");
    let chunks = [];
    chunks.push(cipher.update(data, "utf8", "hex"));
    chunks.push(cipher.final("hex"));
    return chunks.join('');
}


/**
 * aes解密
 * @param data 待解密内容
 * @param key 必须为32位私钥
 * @returns {string}
 */
export function aesDecrypt(data, key, iv) {
    if(data === "" || data === undefined)return "";
    let decipher = createDecipheriv('aes-256-ecb', key, iv || "");
    let chunks = [];
    chunks.push(decipher.update(data, "hex", "utf8"));
    chunks.push(decipher.final("utf8"));
    return chunks.join('');
}