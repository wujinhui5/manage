import fetch from './fetch'

export function deleteShopApi(data) {
    return fetch({
        method: 'post',
        url: '/shop/delete',
        data: data
    })
}

export function getShopsApi(data) {
    return fetch({
        method: 'post',
        url: '/get/shops',
        data: data
    })
}

export function changeShopInfoApi(data) {
    return fetch({
        method: 'post',
        url: '/shop/change',
        data: data
    })
}

export function createShopApi(data) {
    return fetch({
        method: 'post',
        url: '/shop/create',
        data: data
    })
}