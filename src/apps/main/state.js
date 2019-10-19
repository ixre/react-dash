import React from "react";

// 是否登录
export class LoginState{
    isLogin = false;
};

// 用户状态上下文
export const Context = React.createContext(new LoginState());