/**
 * Created by hao.cheng on 2017/4/16.
 */

import React from 'react';
import { Table, Pagination, Button } from 'antd';
import './List.less'
import PropTypes from 'prop-types';

export default class List extends React.Component {
    static defaultProps = {
        columns: undefined,
        dataSource: undefined,
    };

    static propTypes = {
        columns: PropTypes.array,
        dataSource: PropTypes.array,
    };
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    key: '1',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                    tags: ['nice', 'developer'],
                }
            ]
        }
    }
    render() {

        const { columns, dataSource } = this.props;
        return (
            <div>
                <div className="head">
                    { this.props.children }
                    <Button type="primary">搜索</Button>
                </div>
                <Table
                    columns={ columns }
                    dataSource={ dataSource }
                    pagination={ false }
                />
                <Pagination
                    showSizeChanger
                    defaultCurrent={1}
                    total={10}
                />
            </div>
        );
    }
}
