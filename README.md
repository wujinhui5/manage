# management
基于vue2+vuex+Element UI+nodejs搭建的后台管理系统

# 功能描述
    登录功能；
    登录鉴权；
    销售数据展示功能；
    用户管理功能；
    商品管理；
    个人信息管理；

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

```
management
├─ .gitignore
├─ babel.config.js
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ index.html
├─ README.md
├─ src
│  ├─ App.vue
│  ├─ assets
│  │  └─ logo.png
│  ├─ components            //公共组件
│  │  └─ MyBreadcrumb.vue
│  ├─ js                    
│  │  └─ login.js           //前置路由守卫
│  ├─ main.js
│  ├─ mock                  //mock模拟数据
│  │  ├─ index.js
│  │  ├─ js
│  │  │  ├─ customers.js
│  │  │  ├─ shop.js
│  │  │  └─ user.js
│  │  └─ json
│  │     ├─ customers.json
│  │     ├─ shops.json
│  │     └─ users.json
│  ├─ pages                 //页面及页面的组件
│  │  ├─ customers
│  │  │  ├─ AllCustomers.vue
│  │  │  └─ components
│  │  │     ├─ ChangeStatus.vue
│  │  │     ├─ ChangeUserInfo.vue
│  │  │     └─ DeleteCustomer.vue
│  │  ├─ HomePage
│  │  │  ├─ components
│  │  │  │  └─ MyCalendar.vue
│  │  │  └─ MyHome.vue
│  │  ├─ interface
│  │  │  ├─ AppInterface.vue
│  │  │  └─ components
│  │  │     ├─ AsideNav.vue
│  │  │     └─ MyHeader.vue
│  │  ├─ login
│  │  │  ├─ AppLogin.vue
│  │  │  └─ components
│  │  │     ├─ LoginForm.vue
│  │  │     └─ MyTips.vue
│  │  ├─ shop
│  │  │  ├─ manage
│  │  │  │  ├─ components
│  │  │  │  │  ├─ AddShop.vue
│  │  │  │  │  ├─ ChangeShopInfo.vue
│  │  │  │  │  └─ DeleteShop.vue
│  │  │  │  └─ ShopManage.vue
│  │  │  └─ saleData
│  │  │     ├─ SalesData.vue
│  │  │     └─ ShopSales.vue
│  │  └─ userAbout
│  │     ├─ manageUser
│  │     │  ├─ components
│  │     │  │  ├─ AddAcount.vue
│  │     │  │  ├─ ChangeUserInfo.vue
│  │     │  │  └─ DeleteAcount.vue
│  │     │  └─ ManageUser.vue
│  │     └─ personalCenter
│  │        ├─ components
│  │        │  ├─ ChangeUname.vue
│  │        │  └─ HeadPortrait.vue
│  │        └─ PersonalCenter.vue
│  ├─ router            //路由器
│  │  └─ index.js
│  ├─ store             //vuex配置的store
│  │  ├─ index.js
│  │  └─ js
│  │     ├─ permission.js
│  │     └─ user.js     
│  └─ utils
│     ├─ customers.js
│     ├─ fetch.js
│     ├─ index.js
│     └─ shop.js
├─ static
│  └─ img
│     └─ headPortrait.jpg
└─ vue.config.js

```