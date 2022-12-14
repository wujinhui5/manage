import users from '../json/users.json'
import cookie from 'js-cookie'
import NProgress from 'nprogress'

let uid = "0005"
let headPortrait = require("@/../static/img/headPortrait.jpg")

for (let k in users) {
    users[k].headPortrait = headPortrait
}

export default {
    // 登录
    login: option => {
        let loginForm = JSON.parse(option.body)
        let user = users.filter(i => i.uid === loginForm.uid)
        // 这里简单模拟下后台登录验证
        if (!(user == false) && loginForm.password === '12345678a!') {
            return JSON.stringify({
                meta: {
                    msg: "登录成功",
                    status: 200
                },
                data: user[0]
            })
        } else {
            NProgress.done()
            return JSON.stringify({
                meta: {
                    status: 999,
                    msg: '账户或者密码错误！'
                }
            })
        }
    },
    // 获取用户信息
    getInfo: () => {
        // 模拟从请求头获取token
        let token = cookie.get('token')
        NProgress.done()
        for (let i of users) {
            if (token === i.token) {
                return JSON.stringify({
                    meta: {
                        msg: "登录成功",
                        status: 200
                    },
                    data: i
                })
            }
        }
        return JSON.stringify({
            meta: {
                status: 998,
                msg: '登录状态失效！'
            }
        })
    },
    // 登出
    logout: option => {
        let uid = option.body
        console.log(uid + '用户已退出登录！')
        return JSON.stringify({
            meta: {
                status: 200,
                msg: "退出登录成功！"
            }
        })
    },
    // 获取所有管理员信息
    getUsers: option => {
        NProgress.done()
        let { currentPage, pageSize, key } = JSON.parse(option.body)
        let copyUsers = JSON.parse(JSON.stringify(users))
        copyUsers = copyUsers.filter(i => i.uid.indexOf(key) !== -1 || i.name.indexOf(key) !== -1)
        let total = copyUsers.length
        copyUsers = copyUsers.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        copyUsers.forEach((i, index) => {
            delete i.token
            i.index = (currentPage - 1) * pageSize + index + 1
        })
        return JSON.stringify({
            meta: {
                status: 200,
                msg: "获取管理员成功！"
            },
            data: {
                total,
                list: copyUsers
            }
        })
    },
    // 添加管理员
    createUser: (option) => {
        let data = JSON.parse(option.body)
        data.uid = uid
        users.unshift(data)
        uid = "000" + String(parseInt(uid) + 1)

        return JSON.stringify({
            meta: {
                status: 200,
                msg: '添加完成！'
            }
        })
    },
    // 删除管理员账号
    deleteUser: option => {
        let uid = option.body
        for (let i in users) {
            if (users[i].uid === uid) {
                users.splice(i, 1)
                return JSON.stringify({
                    meta: {
                        status: 200,
                        msg: '删除成功！'
                    }
                })
            }
        }
        return JSON.stringify({
            meta: {
                status: 999,
                msg: '删除失败！'
            }
        })
    },
    // 修改其他管理员信息
    changeUserInfo: option => {
        let data = JSON.parse(option.body)
        for (let i in users) {
            if (data.uid === users[i].uid) {
                users[i] = { ...users[i], ...data }
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
    // 修改个人用户名
    changeUserName: option => {
        let data = JSON.parse(option.body)
        for (let i in users) {
            if (data.uid === users[i].uid) {
                users[i].name = data.name
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
    // 修改个人头像
    changeHeadPortrait: option => {
        let data = JSON.parse(option.body)
        for (let i in users) {
            if (data.uid === users[i].uid) {
                users[i].headPortrait = data.headPortrait
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
}