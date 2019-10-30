/**
 * Copyright 2009-2019 @ to2.net
 * name : std.js.js
 * author : jarrysix (jarrysix#gmail.com)
 * date : 2019-06-07 10:34
 * description :
 * history :
 */

export function postMessage(message){
    (window.ReactNativeWebView||window).postMessage(message);
}