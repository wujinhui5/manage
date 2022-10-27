import fetch from "./fetch.js"

export function getAllCustomersApi() {
    return fetch({
        method: 'post',
        url: "/get/customers",
    })
}

export function deleteCustomerApi(data) {
    return fetch({
        method: 'post',
        url: '/customer/delete',
        data: data
    })
}

export function changeCustomerInfoApi(data) {
    return fetch({
        method: 'post',
        url: '/customer/change',
        data: data
    })
}

export function changeStatusApi(data) {
    return fetch({
        method: 'post',
        url: '/customer/status/change',
        data: data
    })
}