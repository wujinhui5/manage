import users from '../json/users.json'
import shops from "../json/shops"
import NProgress from 'nprogress'
import cookie from 'js-cookie'

let id = "1000"

// 验证用户与登录状态
function verifyUser() {
    for (let i of users) {
        if (cookie.get('token') === i.token) {
            return {
                state: true,
                data: i
            }
        }
    }
    return {
        state: false,
        data: JSON.stringify({
            meta: {
                msg: "登录状态失效，请重新登录",
                status: 999
            }
        })
    }
}

export default {

    // 获取商品数据
    getShops: option => {
        NProgress.done()
        let verRes = verifyUser()
        let role
        if (!verRes) {
            return verRes.data
        } else {
            role = verRes.data
        }
        // 根据不同商家返回不同的商品
        let {pageSize, currentPage, state, key } = JSON.parse(option.body)
        let res = role.role === 'admin' ? shops : shops.filter(item => item["storeId"] === role.uid)
        res = res.filter(item => {
            return item["state"].indexOf(state) !== -1 && (item["title"].indexOf(key) !== -1 || item["shopId"].indexOf(key) !== -1)
        })
        let total = res.length
        res = res.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        res.forEach((i, index) => {
            i.imgUrl = require(`@/mock/images/shops/${i.shopId}/${i.shopPic[0]}`)
            i.index = (currentPage - 1) * pageSize + index + 1
        })
        if (!(res == false)) {
            return JSON.stringify({
                meta: {
                    status: 200,
                    msg: '获取商品数据成功！'
                },
                data: res,
                total
            })
        }
        return JSON.stringify({
            meta: {
                status: 200,
                msg: '没有商品，请先添加！'
            },
            data: [],
            total: 0
        })
    },

    // 下架商品
    deleteShop: option => {
        let data = JSON.parse(option.body)
        console.log(data.shopId)
        for (let i in shops) {
            if (data.shopId === shops[i].shopId) {
                shops.splice(i, 1)
                return JSON.stringify({
                    meta: {
                        status: 200,
                        msg: '下架商品成功！'
                    }
                })
            }
        }
        return JSON.stringify({
            meta: {
                status: 999,
                msg: '下架商品失败！'
            }
        })
    },

    // 修改商品信息
    changeShopInfo: option => {
        let data = JSON.parse(option.body)
        for (let i in shops) {
            if (data.shopId === shops[i].shopId) {
                shops[i] = { ...shops[i], ...data.new }
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


    // 添加商品
    createShop: function (option) {
        let data = JSON.parse(option.body)
        // if (!currentShops) {
        //     return JSON.stringify({
        //         meta: {
        //             status: 999,
        //             msg: '添加失败，请稍后再试！'
        //         }
        //     })
        // }
        let newShop = {
            shopPic: [
                "46881335fd2e1f0a.jpg.avif",
                "f3d8ad82ce64412e.jpg.avif"
            ],
            label: [
                "householdAppliance",
                "refrigerator",
                "twoDoorRefrigerator"
            ]
        }
        data.new.shopId = id
        data.new.storeId = data.uid
        let date = new Date()
        let date1 = [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-')
        let date2 = [date.getHours(), date.getMinutes(), date.getSeconds()].join(':')
        data.new.dateOnSale = [date1, date2].join(' ')
        id = String(parseInt(id) + 1)
        shops.unshift({ ...newShop, ...data.new, state: "uncheck" })

        return JSON.stringify({
            meta: {
                status: 200,
                msg: '添加完成！'
            }
        })
    }
}