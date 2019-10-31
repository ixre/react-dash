/**
 * Copyright 2009-2019 @ to2.net
 * name : urls
 * author : jarrysix (jarrysix#gmail.com)
 * date : 2019-10-31 17:08
 * description :
 * history :
 */

import config from "../config";

let boardURLS =  {
    LOGIN:"/login"
};

const boardURL = config.board_url||"";
if(boardURL.length > 0) {
    for (let attr in boardURLS) {
        boardURLS[attr] = boardURL + boardURLS[attr];
    }
}
export default boardURLS;
