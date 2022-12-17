import fetch from "./fetch.js"

export function loginApi(data) {
    return fetch({
        method: "post",
        url: "/login",
        data
    })
}

export function getUserInfoApi() {
    return fetch({
        method: "post",
        url: "/get/user",
    })
}

export function logoutApi(data) {
    return fetch({
        method: 'post',
        url: '/logout',
        data
    })
}

export function getUsersApi(data) {
    return fetch({
        method: 'post',
        url: '/get/users',
        data: data
    })
}

export function createUserApi(data) {
    return fetch({
        method: 'post',
        url: '/user/create',
        data
    })
}

export function changeUserInfoApi(data) {
    return fetch({
        method: 'post',
        url: '/user/change',
        data
    })
}

export function deleteUserApi(data) {
    return fetch({
        method: 'post',
        url: '/user/delete',
        data
    })
}

export function changeUserNameApi(data) {
    return fetch({
        method: 'post',
        url: '/user/name/change',
        data
    })
}

export function changeHeadPortraitApi(data) {
    return fetch({
        method: 'post',
        url: '/user/headportrait/change',
        data
    })
}