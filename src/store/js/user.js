import Cookies from 'js-cookie'
import { loginApi, getUserInfoApi, logoutApi } from '../../utils'

export default {
    namespaced: true,
    state: {
        uid: '',
        name: '',
        role: '',
        headPortrait: '',
        token: Cookies.get('token'),
    },

    mutations: {
        SET_UID(state, val) {
            state.uid = val
        },

        SET_NAME(state, val) {
            state.name = val
        },

        SET_ROLE(state, val) {
            state.role = val
        },

        SET_HEADPORTRAIT(state, val) {
            state.headPortrait = val
        },

        SET_TOKEN(state, val) {
            state.token = val
        }

    },

    actions: {
        // 登录
        login({ commit }, val) {
            return new Promise((resolve, reject) => {
                loginApi(val).then(res => {
                    let data = JSON.parse(res.data)
                    if (data.meta.status === 200) {
                        Cookies.set('token', data.data.token)
                        commit('SET_TOKEN', data.data.token)
                        resolve(data.meta.msg)
                    } else {
                        reject(data.meta.msg)
                    }
                }).catch(err => {
                    reject(err)
                })
            })
        },

        // 获取用户信息
        getInfo({ commit }) {
            return new Promise((resolve, reject) => {
                getUserInfoApi().then(res => {
                    let data = JSON.parse(res.data)
                    if (data.meta.status === 200) {
                        commit('SET_UID', data.data.uid)
                        commit('SET_NAME', data.data.name)
                        commit('SET_ROLE', data.data.role)
                        commit('SET_HEADPORTRAIT', data.data.headPortrait)
                        resolve(data.meta.msg)
                    } else {
                        reject(data.meta.msg)
                    }
                }).catch(err => {
                    reject(err)
                })
            })
        },

        // 登出
        logout({ commit, state }) {
            return new Promise((resolve, reject) => {
                logoutApi(state.uid).then(res => {
                    commit('SET_TOKEN', '')
                    commit("SET_ROLE", '')
                    Cookies.remove('token')
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })

        },

        // 前端登出
        fedLogout({ commit }) {
            commit("SET_TOKEN", '')
            commit("SET_ROLE", '')
            Cookies.remove('token')
        }
    }

}