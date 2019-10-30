/**
 * Copyright 2009-2019 @ to2.net
 * name : time.js
 * author : jarrysix (jarrysix#gmail.com)
 * date : 2019-06-08 18:19
 * description :
 * history :
 */
import {number} from "prop-types";

// 默认时间格式
export const DefaultTimeFormat = "yyyy/MM/dd HH:mm:ss";

// 格式化时间
export function dateFormat(d, fmt) {
    if(typeof(d)=="number")d = unixTime(d);
    fmt = fmt||DefaultTimeFormat;
    let o = {
        "M+": d.getMonth() + 1, //月份
        "d+": d.getDate(), //日
        "h+": d.getHours() % 12 == 0 ? 12 : d.getHours() % 12, //小时
        "H+": d.getHours(), //小时
        "m+": d.getMinutes(), //分
        "s+": d.getSeconds(), //秒
        "q+": Math.floor((d.getMonth() + 3) / 3), //季度
        "S": d.getMilliseconds() //毫秒
    };
    let week = {
        "0": "/u65e5",
        "1": "/u4e00",
        "2": "/u4e8c",
        "3": "/u4e09",
        "4": "/u56db",
        "5": "/u4e94",
        "6": "/u516d"
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1)
            ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468")
            : "") + week[d.getDay() + ""]);
    }
    for (let k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1)
                ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
};


export function unix(d) {
    return Date.parse(d || new Date()) / 1000;
}

export function unixTime(unix,nano){
    return new Date(unix * 1000 + (nano||0));
}

export function toDate(s){
    return new Date(s.replace(/\\-/,"/"));
}

// 将秒转换为时间.如7201 -> [2,0,1]
export function calcTime(s){
    return [Math.floor(s/3600),Math.floor((s%3600)/60),s%60];
}

// 返回填充0的字符串
export function fillZero(arr){
    let a = [];
    arr.map((it)=>a.push(Math.abs(it)>9?it.toString():(it < 0 ?"-0":"0")+Math.abs(it)));
    return a;
}
// 获取时间戳(毫秒)
export function millUnix(d) {
    return (d || new Date()).getTime();
}

// 分割时分秒
export function splitTime(startTime){
    let l = startTime.length;
    return [
        startTime.substring(0, l - 4),
        startTime.substring(l - 4, l - 2),
        startTime.substring(l - 2, l)];
}


// 计算多久以前
export function evalAgoTime(agoTime) {
    let duration = unix() - agoTime
    let f = (d, unit) => parseInt(d) + unit + "以前";
    if (duration < 60) return f(duration, "秒");
    if (duration < 3600) return f(duration / 60, "分钟");
    if (duration < 86400) return f(duration / 3600, "小时");
    if (duration < 86400 * 7) return f(duration / 86400, "天");
    if (duration < 86400 * 30) return f(duration / (86400 * 7), "周");
    if (duration < 86400 * 30 * 365) return f(duration / (86400 * 30), "月");
    return f(duration / (86400 * 365), "年");
}

// 获取时间戳(秒)
Date.prototype.unix = function (d) {
    return unix(d);
};
Date.prototype.millUnix = function (d) {
    return millUnix(d);
};
Date.prototype.format = function (d, fmt) {
    return dateFormat(d, fmt);
};
