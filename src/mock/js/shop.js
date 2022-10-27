import shops from "../json/shops"
import NProgress from 'nprogress'

let id = "1000"

export default {

    // 获取商品数据
    getShops: option => {
        NProgress.done()
        for (let k in shops) {
            // 根据不同商家返回不同的商品
            if (option.body === k) {
                return JSON.stringify({
                    meta: {
                        status: 200,
                        msg: '获取商品数据成功！'
                    },
                    data: shops[k]
                })
            }
        }
        return JSON.stringify({
            meta: {
                status: 999,
                msg: "权限错误"
            }
        })
    },

    // 下架商品
    deleteShop: option => {
        let data = JSON.parse(option.body)
        let currentShops = shops[data.uid]
        for (let i in currentShops) {
            if (data.shopId === currentShops[i].id) {
                currentShops.splice(i, 1)
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
        let currentShops = shops[data.uid]
        for (let i in currentShops) {
            if (data.shopId === currentShops[i].id) {
                currentShops[i] = data.new
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
        let currentShops = shops[data.uid]
        if (!currentShops) {
            return JSON.stringify({
                meta: {
                    status: 999,
                    msg: '添加失败，请稍后再试！'
                }
            })
        }
        data.new.id = id
        let date = new Date()
        let date1 = [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-')
        let date2 = [date.getHours(), date.getMinutes(), date.getSeconds()].join(':')
        data.new.dateOnSale = [date1, date2].join(' ')
        id = String(parseInt(id) + 1)
        currentShops.unshift(data.new)

        return JSON.stringify({
            meta: {
                status: 200,
                msg: '添加完成！'
            }
        })
    }
}