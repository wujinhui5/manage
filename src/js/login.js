import router from '../router'
import store from '../store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 白名单
const whiteList = ['/login']

router.beforeEach((to, from, next) => {
    NProgress.start()
    let user = store.state.user
    // 无token
    if (!user.token) {
        if (whiteList.indexOf(to.path) != -1) {
            next()
        } else {
            next('/login')
            NProgress.done()
        }
    }

    // 有token，但没有用户权限，需要获取用户信息和菜单权限
    if (!user.role) {
        // 获取用户信息
        store.dispatch('user/getInfo').then(() => {
            // 获取菜单权限
            store.dispatch('permission/createAddRoutes', user.role).then(() => {
                router.addRoute(...store.state.permission.addRoutes)
                next(to.path)
            })
        }).catch(() => {
            store.dispatch('user/fedLogout')
            if (to.path != '/login') {
                next('/login')
            }
            next()
            NProgress.done()
        })
    } else {
        if (to.path === '/login') {
            next('/')
        }
        next()
        NProgress.done()
    }
})

router.afterEach(() => {
    NProgress.done()
})