"use strict"

// https://blog.csdn.net/YYAANNGGLLI/article/details/86223237
// https://www.cnblogs.com/SamWeb/p/11370747.html


import React from "react";
import {Switch} from "react-router-dom";
import {AuthenticationWrapper} from "../../components/AuthenticationWrapper/AuthenticationWrapper";
import {Context} from "./state";

AuthenticationWrapper.contextType = Context;
const Provider = Context.Provider;
export default class Main extends React.Component{
    render() {
        return <Provider>
            <AuthenticationWrapper>
                haha
        </AuthenticationWrapper>
        </Provider>
    }
}
