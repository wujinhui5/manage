import Mock from 'mockjs'
import axios from 'axios'
import NProgress from 'nprogress'

// 模拟一下随机数据
Mock.mock('http://text/api', 'post', require('../json/customers'))
let customers
axios({
    url: 'http://text/api',
    method: 'post',
}).then(res => {
    customers = res.data.data
})

export default {

    // 获取用户名单
    getCustomer(option) {
        NProgress.done()
        let { currentPage, pageSize, key } = JSON.parse(option.body)
        let res = customers.filter(i => i.address.indexOf(key) !== -1 || i.name.indexOf(key) !== -1)
        let total = res.length
        res = res.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        return JSON.stringify({
            meta: {
                status: 200,
                msg: "获取用户成功！"
            },
            data: {
                total,
                list:res
            }
        })
    },

    // 删除用户
    deleteCustomer: option => {
        let data = option.body
        for (let i in customers) {
            if (data === customers[i].uid) {
                customers.splice(i, 1)
                return JSON.stringify({
                    meta: {
                        status: 200,
                        msg: '删除用户成功！'
                    }
                })
            }
        }
        return JSON.stringify({
            meta: {
                status: 999,
                msg: '删除用户失败！'
            }
        })
    },

    // 修改用户信息
    changeCustomerInfo: option => {
        let data = JSON.parse(option.body)
        for (let i in customers) {
            if (data.uid === customers[i].uid) {
                customers[i] = data
                return JSON.stringify({
                    meta: {
                        status: 200,
                        msg: '修改完成！'
                    }
                })
            }
        }
        return JSON.stringify({
            meta: {
                status: 999,
                msg: '修改失败，请稍后再试！'
            }
        })
    },

    // 修改用户状态
    changeStatus: option => {
        let uid = option.body
        for (let i = 0; i < customers.length; i++) {
            if (uid === customers[i].uid) {
                customers[i].status = !customers[i].status
                return JSON.stringify({
                    meta: {
                        status: 200,
                        msg: '修改完成！'
                    }
                })
            }
        }
        return JSON.stringify({
            meta: {
                status: 999,
                msg: '修改失败，请稍后再试！'
            }
        })
    }
}