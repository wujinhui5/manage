import Mock from 'mockjs'

import userApi from "./js/user.js"
import shopApi from "./js/shop.js"
import customerApi from "./js/customers.js"

Mock.mock('http://127.0.0.1:8081/login', 'post', userApi.login)
Mock.mock('http://127.0.0.1:8081/logout', 'post', userApi.logout)

Mock.mock('http://127.0.0.1:8081/get/user', 'post', userApi.getInfo)
Mock.mock('http://127.0.0.1:8081/get/users', 'post', userApi.getUsers)
Mock.mock('http://127.0.0.1:8081/user/create', 'post', userApi.createUser)
Mock.mock('http://127.0.0.1:8081/user/change', 'post', userApi.changeUserInfo)
Mock.mock('http://127.0.0.1:8081/user/delete', 'post', userApi.deleteUser)
Mock.mock('http://127.0.0.1:8081/user/name/change', 'post', userApi.changeUserName)
Mock.mock('http://127.0.0.1:8081/user/headportrait/change', 'post', userApi.changeHeadPortrait)

Mock.mock('http://127.0.0.1:8081/get/customers', 'post', customerApi.getCustomer)
Mock.mock('http://127.0.0.1:8081/customer/change', 'post', customerApi.changeCustomerInfo)
Mock.mock('http://127.0.0.1:8081/customer/delete', 'post', customerApi.deleteCustomer)
Mock.mock('http://127.0.0.1:8081/customer/status/change', 'post', customerApi.changeStatus)

Mock.mock('http://127.0.0.1:8081/get/shops', 'post', shopApi.getShops)
Mock.mock('http://127.0.0.1:8081/shop/delete', 'post', shopApi.deleteShop)
Mock.mock('http://127.0.0.1:8081/shop/change', 'post', shopApi.changeShopInfo)
Mock.mock('http://127.0.0.1:8081/shop/create', 'post', shopApi.createShop)

