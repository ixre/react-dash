import petRoute from '../services/pet/RouteConfig';
import orderRoute from '../services/order/RouteConfig';
export default {
    menus: [
        // 菜单相关路由
        petRoute,
        orderRoute,
        // {
        //     key: '/data',
        //     title: '数据查询',
        //     icon: 'scan',
        //     subs: [
        //         { key: '/data/income', title: '收益记录', component: 'PetManage' },
        //         { key: '/data/promotion', title: '推广奖励', component: 'PetManage' },
        //         { key: '/data/team ', title: '推广奖励', component: 'PetManage' },
        //     ],
        // },
    ],
    others: [], // 非菜单相关路由
};
