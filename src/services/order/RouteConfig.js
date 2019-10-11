import { ORDER_APPEAL, ORDER_LIST, ORDER_TRANSFER, ORDER } from './Path';
import OrderList from './page/OrderList';

export default {
    key: ORDER,
    title: '抢购管理',
    icon: 'scan',
    subs: [
        { key: ORDER_LIST, title: '订单查询', component: OrderList },
        { key: ORDER_APPEAL, title: '申诉处理', component: OrderList },
        { key: ORDER_TRANSFER, title: '待转让订单', component: OrderList },
    ],
}
