/**
 * Copyright 2009-2019 @ to2.net
 * name : std.js.js
 * author : jarrysix (jarrysix#gmail.com)
 * date : 2019-06-07 10:34
 * description :
 * history :
 */


import {hex} from "./crypto";

// 接口客户端
export function HttpApiClient(server, key, secret, signType, prod, prodVersion, errorHandler) {
    this.opts = {
        server: server,
        key: key,
        secret: secret,
        signType: signType,
        prod: prod,
        prodVersion: prodVersion,
        errorHandler: errorHandler,
        printLog: false,
    };
    // 开启日志
    this.logOn = function () {
        this.opts.printLog = true;
        return this;
    };
    this.sign = function (signType, str) {
        return hex(signType, str);
    };
    // 发送请求
    this.post = function (api, params, success, fail, timeout) {
        // 附加参数
        if (params instanceof Object) {
            params["api"] = api;
            params["key"] = this.opts.key;
            params["sign_type"] = this.opts.signType;
            params["product"] = this.opts.prod;
            params["version"] = this.opts.prodVersion;
        }
        // 排序拼接参数
        let data = this._getSortedQuery(params);
        let sign = this.sign(this.opts.signType, data + this.opts.secret).toLowerCase();
        data += `&sign_type=${this.opts.signType}&sign=${sign}`;
        this._sendPost(this.opts.server, api, data, success, fail, timeout);
    };

    // 生成有序请求参数data
    this._getSortedQuery = function (params) {
        let keys = Object.keys(params);
        keys.sort();
        let i = 0;
        let buffer = "";
        for (let k = 0; k < keys.length; k++) {
            let key = keys[k];
            if (key === "sign" || key === "sign_type") continue;
            if (i++ > 0) buffer += "&";
            let value = params[key];
            value = value instanceof Object
                ? JSON.stringify(value)
                : escape(params[key]);
            buffer += key + "=" + value;
        }
        return buffer
    };
    // 错误提示
    this._error = function (callback, errMsg, errCode, url) {
        let handler = callback || this.opts.errorHandler;
        if (handler && handler instanceof Function) {
            handler(errMsg, errCode, url);
        } else {
            console.log(`[ API][ LOG]:Except on api - ${url} # ${errCode}. message: ${errMsg}`);
        }
        return false;
    };
    // 回调响应
    this._callback = function (api, response, success, fail) {
        //console.log(`BODY: ${response}`)
        if (response[0] === '#') {
            let arr = response.substring(1).split("#");
            return this._error(fail, arr[1], arr[0], api);
        }
        if (success) {
            if (response[0] === "{" || response[0] === "[") {
                success(JSON.parse(response), api);
                return;
            }
            success(response, api)
        }
    };

    // HTTP POST
    this._sendPost = function (url, api, data, success, fail, timeout) {
        if (this.opts.printLog) console.log(new Date().toLocaleTimeString(),
            "[ API][ LOG]: send request :", url, data);
        let f = fetch(url, {
            method: "POST",
            body: data,
            headers: {
                "credentials": "include",
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8 ;Access-Control-Allow-Origin:*",
            },
        });
        let req = !timeout ? f : new Promise(function (resolve, reject) {
            setTimeout(() => reject(new Error("request timeout")), timeout);
            f.then(resolve, reject)
        });
        req.then((rsp) => {
            if (!rsp.ok) throw new Error(rsp.statusText || (() => {
                switch (rsp.status) {
                    case 500:
                        return "Internal server _error";
                    case 404:
                        return "Not found";
                    case 405:
                        return "Not allow method";
                }
                return "Status:" + rsp.status;
            })());
            return rsp.text();
        }).then((chunk) => {
            if (this.opts.printLog) console.log(new Date().toLocaleTimeString(),
                "[ API][ LOG]: called api : ", url, ", response : ", chunk);
            this._callback(api, chunk, success, fail);
        }).catch((err) => {
            this._error(fail, err.message, -1, api);
        });
    };
}

export function fetchRequest(url, opt, timeout) {
    let f = fetch(url, opt);
    let req = !timeout ? f : new Promise(function (resolve, reject) {
        setTimeout(() => reject(new Error("request timeout")), timeout);
        f.then(resolve, reject);
    });
    return req.then((rsp) => {
        if (!rsp.ok) throw new Error(rsp.statusText || (() => {
            switch (rsp.status) {
                case 500:
                    return "Internal server error";
                case 404:
                    return "Not found";
                case 405:
                    return "Not allow method";
            }
            return "Status:" + rsp.status;
        })());
        return rsp;
    });
}

function basicRequest(url, opt, dataType, success, fail, timeout) {
    return fetchRequest(url, opt, timeout).then((rsp) => {
        return dataType === "json" ? rsp.json() : rsp.text();
    }).then((chunk) => {
        success(chunk)
    }).catch((err) => {
        if (fail) {
            fail(err.message, url);
        } else {
            console.log(`[ fetch][ error]: ${err.message},url:${url}`)
        }
    });
}

export function fetchPost(url, data, success, fail, timeout) {
    let opt = {
        method: "POST",
        body: data,
        headers: {
            "credentials": "include",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8 ;Access-Control-Allow-Origin:*",
        },
    };
    return basicRequest(url, opt, "json", success, fail, timeout);
}

export function fetchGet(url, success, fail, timeout) {
    let opt = {
        method: "GET",
        headers: {
            "credentials": "include",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8 ;Access-Control-Allow-Origin:*",
        },
    };
    return basicRequest(url, opt, "json", success, fail, timeout);
}

export function fetchUpload(url, fields, success, fail) {
    let fd = new FormData();
    for (let k in fields) fd.append(k, fields[k]);
    let opt = {
        method: "POST",
        body: fd,
        mode: "cors",
        headers: {
            "credentials": "include",
        },
    };
    return basicRequest(url, opt, "json", success, fail, 0);
}