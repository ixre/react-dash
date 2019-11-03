import React from "react";

// 是否登录
export class LoginState{
    isLogin = false;
    sessionId = "";
    nickName = "";
    userCode = "";

    // 保存用户会话
    saveSession(rsp) {
        const {ErrCode, Data} = rsp;
        if (!ErrCode) {
            this.isLogin = true;
            this.sessionId = Data["SessionId"];
            this.nickName = Data["NickName"] || "-";
            this.userCode = Data["UserCode"]||"";
            // this.user = {
            //     userId:Data["UserId"],
            //     isSuper: Data["SuperUser"] == "1"
            // };
            return true;
        }
        return false;
    }
};

// 用户状态上下文
const BoardUserContext = React.createContext(LoginState);
export default BoardUserContext;