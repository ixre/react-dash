/**
 * Created by hao.cheng on 2017/4/16.
 */

import React from 'react';
import { Input } from 'antd';
import List from '../components/List';
import './OrderList.less';
export default class OrderList extends React.Component {
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
                title: '领养方姓名',
                dataIndex: 'level',
                key: 'level',
            },
            {
                title: '领养方电话',
                key: 'time',
                dataIndex: 'time',
            },
            {
                title: '转让方姓名',
                key: 'cost',
                dataIndex: 'cost',
            },
            {
                title: '转让方电话',
                key: 'estimate_integral',
                dataIndex: 'estimate_integral',
            },
            {
                title: '价值',
                key: 'real_integral',
                dataIndex: 'real_integral',
            },
            {
                title: '结算天数',
                key: 'days',
                dataIndex: 'days',
            },
            {
                title: '结算比例',
                key: 'ratio',
                dataIndex: 'ratio',
            },
            {
                title: '状态',
                key: 'status',
                dataIndex: 'status',
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
