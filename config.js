import a from "./app.json";
import a_dev from "./app_dev.json";
import {hex} from "./lib/react";

let boardURL = "http://localhost:14281/new";

const load = (src,a)=> {
    let o = Object.create(src||{});
    o.domain = a.domain;
    o.tls = a.tls;
    o.version = a.version;
    //o.env = a.env;
    o.api = {
        "url": a.api.url,
        "key": a.api.key,
        "secret": a.api.secret
    };
    o.api_ex = {
        "url": a.api_ex.url,
        "key": a.api_ex.key,
        "secret": a.api_ex.secret
    };
    return o;
};

let config = load({board_url:""},a);
if (process.env.NODE_ENV == 'development') {
    config = load({
        board_url: boardURL,
        env: "dev"
    }, a_dev);
}

export default config;

// AES私钥
export const aesKey = hex("md5","qkto009988");
