/**
 * Created by hao.cheng on 2017/4/16.
 */

import React from 'react';
import { Input } from 'antd';
import List from '../components/List';
import './PetManage.less';
export default class PetManage extends React.Component {
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
                title: '价值区间',
                key: 'cost',
                dataIndex: 'cost',
            },
            {
                title: '预定消耗积分',
                key: 'estimate_integral',
                dataIndex: 'estimate_integral',
            },
            {
                title: '实时消耗积分',
                key: 'real_integral',
                dataIndex: 'real_integral',
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
                title: '拆分方式',
                key: 'split_way',
                dataIndex: 'split_way',
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
