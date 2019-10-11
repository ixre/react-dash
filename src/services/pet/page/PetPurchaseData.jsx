/**
 * Created by hao.cheng on 2017/4/16.
 */

import React from 'react';
import { Input } from 'antd';
import List from '../../components/List';
import './PetManage.less';
export default class PetPurchaseData extends React.Component {
    constructor(props) {
        super();
        this.state = {
            data: [

            ]
        }
    }
    render() {

        const columns = [
            {
                title: '编号',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: '名称',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '级别',
                dataIndex: 'level',
                key: 'level',
            },
            {
                title: '抢购时间',
                key: 'time',
                dataIndex: 'time',
            },
            {
                title: '金额区间',
                key: 'cost',
                dataIndex: 'cost',
            },
            {
                title: '合约天数',
                key: 'days',
                dataIndex: 'days',
            },
            {
                title: '合约比例',
                key: 'ratio',
                dataIndex: 'ratio',
            },
            {
                title: '操作',
                key: 'operate',
                dataIndex: 'operate',
            }
        ];

        return (
            <List
                columns={ columns }
                dataSource={ this.state.data }
            >
                <div>
                    <div className="key_word">关键字:<Input placeholder="请输入搜索关键字" /></div>
                </div>
            </List>
        );
    }
}
