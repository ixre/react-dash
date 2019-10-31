import React from "react";

// 是否登录
export class LoginState{
    isLogin = false;
};

// 用户状态上下文
const BoardUserContext = React.createContext(new LoginState());
export default BoardUserContext;