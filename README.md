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
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-applypatch
│  │  ├─ post-checkout
│  │  ├─ post-commit
│  │  ├─ post-merge
│  │  ├─ post-receive
│  │  ├─ post-rewrite
│  │  ├─ post-update
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-auto-gc
│  │  ├─ pre-commit
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate
│  │  ├─ update
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  ├─ exclude
│  │  └─ refs
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  ├─ main
│  │     │  └─ optimize
│  │     └─ remotes
│  │        └─ origin
│  │           └─ main
│  ├─ objects
│  │  ├─ info
│  │  │  ├─ commit-graph
│  │  │  └─ packs
│  │  └─ pack
│  │     ├─ pack-3cc50d5adbae45c86d988ec6eb8650fb4e80d923.idx
│  │     ├─ pack-3cc50d5adbae45c86d988ec6eb8650fb4e80d923.pack
│  │     ├─ pack-4a385ca8fdd5b5f07e92c607b59f9abc64cf608b.idx
│  │     └─ pack-4a385ca8fdd5b5f07e92c607b59f9abc64cf608b.pack
│  ├─ ORIG_HEAD
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ babel.config.js
├─ dist
│  ├─ favicon.ico
│  ├─ index.html
│  └─ static
│     ├─ css
│     │  ├─ 113.36aac95e.css
│     │  ├─ 383.c87646a3.css
│     │  ├─ 418.695a2065.css
│     │  ├─ 494.644c126b.css
│     │  ├─ 542.5227cacf.css
│     │  ├─ 560.6792f3e0.css
│     │  ├─ 651.d8c898c0.css
│     │  ├─ 699.141f911c.css
│     │  ├─ 760.43a49924.css
│     │  ├─ 838.916338f7.css
│     │  ├─ 859.b7226d25.css
│     │  ├─ 862.e3a1613e.css
│     │  ├─ 902.e54de5d0.css
│     │  ├─ 986.f7fdf4ac.css
│     │  ├─ app.81a2f912.css
│     │  └─ chunk-vendors.86118433.css
│     ├─ fonts
│     │  ├─ element-icons.f1a45d74.ttf
│     │  └─ element-icons.ff18efd1.woff
│     ├─ img
│     │  ├─ 10db8cadb045f3c1.jpg.a7310251.avif
│     │  ├─ 1286fe211af4b99b.jpg.dbec09e0.avif
│     │  ├─ 19b4c42d4d01f449.5f6091bd.jpg
│     │  ├─ 222ad73c4973a363.jpg.ce701d20.avif
│     │  ├─ 3bde6e8393d70920.jpg.09f97623.avif
│     │  ├─ 4299fb46edb1b1fc.jpg.1b6b92f8.avif
│     │  ├─ 46881335fd2e1f0a.jpg.d1df050f.avif
│     │  ├─ 617bd1f57cae239b.08f7a3aa.jpg
│     │  ├─ 747f76f1e4285f4a.jpg.d4c62652.avif
│     │  ├─ 95c87099de5c4685.jpg.30b269c9.avif
│     │  ├─ a287cc5ede3308f0.8a268c53.jpg
│     │  ├─ c028322fbb87758f.1fe5f84b.jpg
│     │  ├─ c562c3531fe38f05.6859c760.jpg
│     │  ├─ d16f17e8f4a6e845.jpg.ffa2d5e5.avif
│     │  ├─ d5f533c025fc53da.jpg.81d847d1.avif
│     │  ├─ dd3984f2c2b82d59.aeccca70.jpg
│     │  ├─ f0ebcdb58bfb0791.jpg.d7666479.avif
│     │  ├─ f3d8ad82ce64412e.jpg.f36a0f20.avif
│     │  └─ headPortrait.96dcfcb9.jpg
│     └─ js
│        ├─ 113.aed48a66.js
│        ├─ 113.aed48a66.js.map
│        ├─ 194.c0522443.js
│        ├─ 194.c0522443.js.map
│        ├─ 27.980f4994.js
│        ├─ 27.980f4994.js.map
│        ├─ 383.91c0d3e5.js
│        ├─ 383.91c0d3e5.js.map
│        ├─ 418.915ddbce.js
│        ├─ 418.915ddbce.js.map
│        ├─ 494.62ba627a.js
│        ├─ 494.62ba627a.js.map
│        ├─ 542.001673fe.js
│        ├─ 542.001673fe.js.map
│        ├─ 560.192fae49.js
│        ├─ 560.192fae49.js.map
│        ├─ 651.4d814d7f.js
│        ├─ 651.4d814d7f.js.map
│        ├─ 699.95575953.js
│        ├─ 699.95575953.js.map
│        ├─ 760.68e7272a.js
│        ├─ 760.68e7272a.js.map
│        ├─ 838.3ed53e5f.js
│        ├─ 838.3ed53e5f.js.map
│        ├─ 859.021c9e38.js
│        ├─ 859.021c9e38.js.map
│        ├─ 862.eb76dbd3.js
│        ├─ 862.eb76dbd3.js.map
│        ├─ 902.ebededee.js
│        ├─ 902.ebededee.js.map
│        ├─ 986.8802c9c8.js
│        ├─ 986.8802c9c8.js.map
│        ├─ 987.bfb16ce4.js
│        ├─ 987.bfb16ce4.js.map
│        ├─ app.4e3dd93b.js
│        ├─ app.4e3dd93b.js.map
│        ├─ chunk-vendors.e0e8e17e.js
│        └─ chunk-vendors.e0e8e17e.js.map
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ index.html
├─ README.md
├─ src
│  ├─ .eslintrc.js
│  ├─ App.vue
│  ├─ assets
│  │  ├─ less
│  │  │  ├─ base.less
│  │  │  ├─ comman.less
│  │  │  └─ elementUi.less
│  │  └─ logo.png
│  ├─ components
│  │  ├─ MyBreadcrumb.vue
│  │  ├─ tableFilter
│  │  │  └─ index.vue
│  │  └─ tableListAddBox
│  │     └─ index.vue
│  ├─ elementUi
│  │  └─ index.js
│  ├─ js
│  │  ├─ limitEventCallback.js
│  │  └─ login.js
│  ├─ main.js
│  ├─ mock
│  │  ├─ images
│  │  │  └─ shops
│  │  │     ├─ 0001
│  │  │     │  ├─ 19b4c42d4d01f449.jpg
│  │  │     │  ├─ 617bd1f57cae239b.jpg
│  │  │     │  ├─ a287cc5ede3308f0.jpg
│  │  │     │  ├─ c028322fbb87758f.jpg
│  │  │     │  ├─ c562c3531fe38f05.jpg
│  │  │     │  └─ dd3984f2c2b82d59.jpg
│  │  │     ├─ 0002
│  │  │     │  ├─ 222ad73c4973a363.jpg.avif
│  │  │     │  ├─ 3bde6e8393d70920.jpg.avif
│  │  │     │  └─ 4299fb46edb1b1fc.jpg.avif
│  │  │     ├─ 0003
│  │  │     │  ├─ 10db8cadb045f3c1.jpg.avif
│  │  │     │  └─ 974054cbaa7f3577.jpg.avif
│  │  │     ├─ 0004
│  │  │     │  ├─ 1286fe211af4b99b.jpg.avif
│  │  │     │  └─ 747f76f1e4285f4a.jpg.avif
│  │  │     ├─ 0005
│  │  │     │  ├─ 95c87099de5c4685.jpg.avif
│  │  │     │  └─ f0ebcdb58bfb0791.jpg.avif
│  │  │     ├─ 0006
│  │  │     │  ├─ d16f17e8f4a6e845.jpg.avif
│  │  │     │  └─ d5f533c025fc53da.jpg.avif
│  │  │     ├─ 0007
│  │  │     │  ├─ 4d27bdb928268dd4.jpg.avif
│  │  │     │  └─ 5e04bd96f6ebda50.jpg.avif
│  │  │     └─ 0008
│  │  │        ├─ 46881335fd2e1f0a.jpg.avif
│  │  │        └─ f3d8ad82ce64412e.jpg.avif
│  │  ├─ index.js
│  │  ├─ js
│  │  │  ├─ customers.js
│  │  │  ├─ shop.js
│  │  │  └─ user.js
│  │  └─ json
│  │     ├─ customers.json
│  │     ├─ shops.json
│  │     └─ users.json
│  ├─ pages
│  │  ├─ 404.vue
│  │  ├─ customers
│  │  │  └─ AllCustomers.vue
│  │  ├─ data
│  │  │  ├─ sales
│  │  │  │  ├─ components
│  │  │  │  │  └─ EchartsContainer.vue
│  │  │  │  └─ index.vue
│  │  │  └─ salesVolume
│  │  │     ├─ components
│  │  │     │  └─ EchartsContainer.vue
│  │  │     └─ index.vue
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
│  │  │     ├─ MyLogo.vue
│  │  │     └─ MyTips.vue
│  │  ├─ manageManager
│  │  │  ├─ components
│  │  │  │  └─ AddAcount.vue
│  │  │  └─ ManageManager.vue
│  │  ├─ personalCenter
│  │  │  ├─ components
│  │  │  │  ├─ ChangeUname.vue
│  │  │  │  └─ HeadPortrait.vue
│  │  │  └─ PersonalCenter.vue
│  │  └─ shop
│  │     ├─ add
│  │     │  ├─ addCompleted.vue
│  │     │  ├─ components
│  │     │  │  ├─ ShopBaseInfo.vue
│  │     │  │  └─ ShopPicUpload.vue
│  │     │  └─ index.vue
│  │     └─ manage
│  │        ├─ components
│  │        │  └─ ChangeShopInfo.vue
│  │        └─ ShopManage.vue
│  ├─ router
│  │  └─ index.js
│  ├─ store
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