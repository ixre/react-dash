import React from 'react';
import { Route, Switch } from 'react-router-dom';
import _ from 'lodash';

export const RouteCell = props => {
    const menus = props.list.menus;
    console.log(menus, 'menus')
    const node = menus && menus.map(it => {
        const subs = _.get(it, ['subs']);
        const child = subs && subs.map(c =>{
            return <Route path={c.key} component={c.component} />
        })
        return <Route path={it.key} component={it.component}><Switch>{child}</Switch></Route>
    })
    return node;
}
