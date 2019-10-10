import { PET_PETMANAGE, PET_MEMBER, PET_BLOCK, PET_PURCHASEDATA, PET_SYSTEM, PET_PATH } from './Path';
import PetManage from './PetManage';
import PetPurchaseData from './PetPurchaseData';

export default {
    key: PET_PATH,
    title: '宠物管理',
    icon: 'scan',
    subs: [
        { key: PET_PETMANAGE, title: '宠物管理', component: PetManage },
        { key: PET_PURCHASEDATA, title: '抢购实时数据', component: PetPurchaseData },
        { key: PET_BLOCK, title: '原始区块管理', component: PetManage },
        { key: PET_MEMBER, title: '会员管理', component: PetManage },
        { key: PET_SYSTEM, title: '系统会员', component: PetManage }
    ],
}
