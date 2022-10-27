import axios from 'axios'
import cookie from 'js-cookie'
import NProgress from 'nprogress'

let service = axios.create({
    baseURL: "http://127.0.0.1:8081/",
    timeout: 5000,
})


axios.defaults.headers.common['authorizationy'] = cookie.get('token')

service.interceptors.request.use(config => {
    NProgress.start()
    return config
}, err => {
    console.log(err)
})

service.interceptors.response.use(res => {
    NProgress.render()
    return res
}, err => {
    return Promise.reject(err)
})

export default service