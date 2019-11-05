/**
 * Copyright 2009-2019 @ to2.net
 * name : menu.js
 * author : jarrysix (jarrysix#gmail.com)
 * date : 2019-11-04 15:53
 * description :
 * history :
 */

export const menu =[
    {
        "title": "首页", "code": "home", "type": "menu", "children": [
            {
                "title": "欢迎使用", "code": "home:welcome", "type": "menu", "children": [
                    {"title": "后台管理中心首页", "code": "home:dashboard", "type": "normal", "url": "/dashboard"},
                    {"title": "欢迎首页", "code": "home:welcome:index", "type": "menu", "url": "/main/summary"}
                ]
            },
            {
                "title": "门户设置", "code": "sys:portal", "type": "menu", "children": [
                    {
                        "title": "导航设置",
                        "type": "menu",
                        "code": "comm:portalNavTypeList",
                        "url": "/comm/portalNavTypeList"
                    }
                ]
            }
        ]
    },
    {
        "title": "商户", "code": "merchant", "icon": "fa fa-diamond", "type": "menu", "children": [
            {
                "title": "商户管理", "type": "menu", "code": "merchant:group", "children": [
                    {"title": "商户列表", "type": "menu", "code": "merchant:list", "url": "/merchant/list"},
                    {
                        "title": "企业认证", "type": "menu", "code": "merchant:enterpriseAuthorizeList", "url":
                            "/merchant/enterpriseAuthorizeList"
                    },
                    {
                        "title": "商户申请审核", "type": "menu", "code": "merchant:signUpReviewList", "url":
                            "/merchant/signUpReviewList"
                    }
                ]
            },
            {
                "title": "商店管理", "type": "menu", "children": [
                    {
                        "title": "商铺列表",
                        "type": "menu",
                        "code": "shop:onlineShopList",
                        "url": "/shop/shopList?shop_type=1"
                    },
                    {
                        "title": "门店列表",
                        "type": "menu",
                        "code": "shop:offlineShopList",
                        "url": "/shop/shopList?shop_type=2"
                    }
                ]
            }
        ]
    },
    {
        "code": "goods", "title": "商品", "icon": "fa fa-share-alt", "type": "menu", "children": [
            {
                "title": "商品类目", "type": "menu", "code": "goods:category", "children": [
                    {"title": "品牌管理", "type": "menu", "code": "pro:proBrandList", "url": "/pro/proBrandList"},
                    {"title": "产品模型", "type": "menu", "code": "pro:proModelList", "url": "/pro/proModelList"},
                    {"title": "分类管理", "type": "menu", "code": "pro:categoryTree", "url": "/pro/categoryTree"},
                    {"title": "分类数据", "code": "pro:categoryJson", "url": "/pro/categoryJson"},
                    {"title": "标签管理", "type": "menu", "code": "sale:tagList", "url": "/sale/tagList"}
                ]
            },
            {
                "title": "商品管理", "type": "menu", "code": "goods:item", "children": [
                    {"title": "商品列表", "type": "menu", "code": "item:itemList", "url": "/item/itemList"},
                    {"title": "上架审核", "type": "menu", "code": "item:reviewList", "url": "/item/reviewList"}
                ]
            }]
    },
    {
        "title": "销售", "code": "sale", "icon": "fa fa-shopping-cart", "type": "menu", "children": [
            {
                "title": "订单管理", "type": "menu", "code": "sale:order", "children": [
                    {"title": "线上订单", "type": "menu", "code": "order:list", "url": "/order/list"},
                    {"title": "线下订单", "type": "menu", "code": "offline:offlineList", "url": "/offline/offlineList"},
                    {
                        "title": "售后订单",
                        "type": "menu",
                        "code": "after_sales:afterList",
                        "url": "/after_sales/afterList"
                    }
                ]
            },
            {
                "title": "促销管理", "type": "menu", "code": "sale:prom", "children": [
                    {"title": "优惠券管理", "type": "menu", "code": "prom:list:coupon", "url": "/prom/list?flag=1"},
                    {"title": "商品返现", "type": "menu", "code": "prom:list:back", "url": "/prom/list?flag=2"}
                ]
            },
            {
                "title": "其他", "type": "menu", "code": "sale:other", "children": [
                    {"title": "买家分组", "type": "menu", "code": "sale:buyerGroup", "url": "/sale/buyerGroup"}
                ]
            }
        ]
    },
    {
        "title": "会员", "code": "member", "icon": "fa fa-user", "type": "menu", "children": [
            {
                "title": "会员管理", "type": "menu", "code": "member:member", "children": [
                    {"title": "会员列表", "type": "menu", "code": "member:list", "url": "/member/list"},
                    {
                        "title": "实名认证",
                        "type": "menu",
                        "code": "member:trustReviewList",
                        "url": "/member/trustReviewList"
                    },
                    {"title": "会员升级记录", "type": "menu", "code": "member:levelUpLog", "url": "/member/levelUpLog"}
                ]
            },
            {
                "title": "会员设置", "type": "menu", "code": "member:setting", "children": [
                    {"title": "会员等级", "type": "menu", "code": "member:levelList", "url": "/member/levelList"}
                ]
            }]
    },
    {
        "title": "内容", "code": "content", "icon": "fa fa-file-text", "type": "menu", "children": [
            {
                "title": "内容管理", "type": "menu", "code": "content:content", "children": [
                    {"title": "页面管理", "type": "menu", "code": "content:page_list", "url": "/content/page_list"},
                    {
                        "title": "文章管理",
                        "type": "menu",
                        "code": "articleCategoryList",
                        "url": "/content/articleCategoryList"
                    }
                ]
            },
            {
                "title": "广告管理", "type": "menu", "code": "content:ad", "children": [
                    {"title": "广告组", "type": "menu", "code": "ad:groupList", "url": "/ad/groupList"},
                    {"title": "广告管理", "type": "menu", "code": "ad:adList", "url": "/ad/adList"}
                ]
            }
        ]
    },
    {
        "title": "财务", "code": "finance", "icon": "fa fa-jpy", "type": "menu", "children": [
            {
                "title": "财务管理", "type": "menu", "code": "finance:finance", "children": [
                    {
                        "title": "订单付款",
                        "type": "menu",
                        "code": "order:waitPaymentList",
                        "url": "/order/waitPaymentList"
                    },
                    {"title": "提现申请", "type": "menu", "code": "member:takeOutList", "url": "/member/takeOutList"},
                    {
                        "title": "{{.Map.AliasGrow}}",
                        "type": "menu",
                        "code": "person_finance:earnings_account",
                        "url":
                            "/person_finance/earnings_account"
                    }
                ]
            }
        ]
    },
    {
        "title": "报表", "type": "menu", "code": "chart", "children": [
            {
                "title": "每日报表", "type": "menu", "code": "chart:day", "children": [
                    {
                        "title": "升级报表",
                        "type": "menu",
                        "code": "sys:dailyLevel",
                        "url": "/sys/dailyLevel",
                        "children": []
                    },
                    {
                        "title": "注册报表",
                        "type": "menu",
                        "code": "sys:newreg",
                        "url": "/sys/newreg",
                        "children": []
                    }]
            }
        ]
    },
    {
        "code": "config", "title": "设置", "icon": "fa fa-cogs", "type": "menu", "children": [
            {
                "title": "系统管理", "type": "menu", "code": "sys:sys", "children": [
                    {"title": "平台设置", "type": "menu", "code": "sys:platformConf", "url": "/sys/platformConf"},
                    {"title": "注册设置", "type": "menu", "code": "sys:registerPerm", "url": "/sys/registerPerm"},
                    {
                        "title": "快递管理",
                        "type": "menu",
                        "code": "express:providerList",
                        "url": "/express/providerList"
                    },
                    {
                        "title": "二维码模板",
                        "type": "menu",
                        "code": "comm:qrTemplate",
                        "url": "/comm/qrTemplate?action=all"
                    }
                ]
            },
            {
                "title": "微信管理", "type": "menu", "code": "sys:wx", "children": [
                    {"title": "接入设置", "type": "menu", "code": "sys:wxApi", "url": "/sys/wxApi"}
                ]
            },
            {
                "title": "消息系统", "type": "menu", "code": "sys:mss", "children": [
                    {
                        "title": "邮件模板",
                        "type": "menu",
                        "code": "mss:mailTemplateList",
                        "url": "/mss/mailTemplateList"
                    },
                    {"title": "消息设置", "type": "menu", "code": "mss:mssSetting", "url": "/mss/mssSetting"},
                    {"title": "短信接口设置", "type": "menu", "code": "sys:smsApi", "url": "/sys/smsApi"},
                    {"title": "系统通知设置", "type": "menu", "code": "sys:notifyItem", "url": "/sys/notifyItem"},
                    {"title": "发送站内信息", "type": "menu", "code": "mss:sendSiteNotify", "url": "/mss/sendSiteNotify"},
                    {"title": "客服消息", "type": "menu", "code": "mss:serviceMessage", "url": ""}
                ]
            },
            {
                "title": "数据管理", "type": "menu", "code": "sys:data", "children": [
                    {"title": "配送区域管理", "type": "menu", "code": "sys:deliverCover", "url": "/partner/list"}
                ]
            },
            {
                "title": "电脑端设置", "type": "menu", "code": "view:pc", "children": [
                    {"title": "商品楼层", "type": "menu", "code": "sys:portalFloor", "url": "/sys/portalFloor"},
                    {
                        "title": "零售门户底部设置",
                        "type": "menu",
                        "code": "sys:portalPcFooter",
                        "url": "/sys/portalPcFooter"
                    },
                    {
                        "title": "通行证底部设置",
                        "type": "menu",
                        "code": "sys:pcPassportFooter",
                        "url": "/sys/pcPassportFooter"
                    },
                    {
                        "title": "批发中心底部设置",
                        "type": "menu",
                        "code": "sys:pcWholesaleFooter",
                        "url": "/sys/pcWholesaleFooter"
                    }
                ]
            }
        ]
    }
];