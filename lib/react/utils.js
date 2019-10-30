/**
 *
 * Copyright 2009-2019 @ to2.net
 * name : utils
 * author : jarrysix (jarrysix#gmail.com)
 * date : 2019-07-31 08:22
 * description :
 * history :
 */

export function intToAmount(i,pow){
    const num = (parseFloat(i)/100).toFixed(pow||2);
    return isNaN(num) ? 0 : num;
}

export function dynamicPagingSize(unit,offset){
    const height = document.documentElement.offsetHeight + (offset||0);
    return parseInt((height / unit).toFixed(0));
}