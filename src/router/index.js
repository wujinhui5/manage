import Vue from 'vue'
import VueRouter from "vue-router"
const AppLogin = () => import("@/pages/login/AppLogin")
const AppInterface = () => import("@/pages/interface/AppInterface")
const MyHome = () => import("@/pages/HomePage/MyHome")
const AllCustomers = () => import("@/pages/customers/AllCustomers")
const ManageManager = () => import("@/pages/manageManager/ManageManager")
const PersonalCenter = () => import("@/pages/personalCenter/PersonalCenter")
const SalesData = () => import("@/pages/shop/saleData/SalesData")
const ShopSales = () => import("@/pages/shop/saleData/ShopSales")
const ShopManage = () => import("@/pages/shop/manage/ShopManage")

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
    routes: [
        {
            path: '/login',
            component: AppLogin
        }
    ]
})

export const routeMap = [
    {
        path: '/',
        component: AppInterface,
        redirect: '/home',
        icon: 'el-icon-s-home',
        children: [
            {
                path: '/home',
                icon: 'el-icon-s-home',
                name: '首页',
                component: MyHome,
                meta: { hidden: false },
            },

            {
                path: '/salesdata',
                redirect: '/salesdata/sale',
                name: '销售数据',
                icon: 'el-icon-data-board',
                meta: { roles: ['shopManager'], hidden: false },
                component: {
                    render(c) { return c("router-view") }
                },
                children: [
                    {
                        path: 'sale',
                        component: SalesData,
                        icon: 'el-icon-data-line',
                        name: '销量',
                        meta: { roles: ['shopManager'], hidden: false }
                    },

                    {
                        path: 'shopsales',
                        component: ShopSales,
                        icon: 'el-icon-pie-chart',
                        name: '销售额占比',
                        meta: { roles: ['shopManager'], hidden: false }
                    },
                ]
            },

            {
                path: '/cusomers',
                component: AllCustomers,
                icon: 'el-icon-user',
                name: '用户管理',
                meta: { roles: ['userManager', 'admin'], hidden: false }
            },

            {
                path: '/shopmanage',
                component: ShopManage,
                icon: 'el-icon-shopping-bag-2',
                name: '商品管理',
                meta: { roles: ['shopManager'], hidden: false }
            },

            {
                path: '/users',
                component: ManageManager,
                icon: 'el-icon-user-solid',
                name: '管理员',
                meta: { roles: ['admin'], hidden: false }
            },

            {
                path: '/personal',
                component: PersonalCenter,
                meta: { hidden: true }
            }
        ]
    }
]

export default router