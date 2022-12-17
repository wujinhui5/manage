"use strict";(self["webpackChunkmanagement"]=self["webpackChunkmanagement"]||[]).push([[902],{9103:function(e,t,a){a.d(t,{Z:function(){return c}});var s=function(){var e=this,t=e._self._c;return t("el-card",{staticClass:"operate-container",attrs:{shadow:"never"}},[t("div",{staticClass:"title"},[t("i",{staticClass:"el-icon-search"}),t("span",[e._v("筛选搜索")]),t("el-button",{staticClass:"fr",attrs:{type:"primary",size:"small"},on:{click:e.handleSearch}},[e._v("搜索")]),t("el-button",{staticClass:"btn-reset fr",attrs:{size:"small"},on:{click:e.handleReset}},[e._v(" 重置 ")])],1),e._t("default")],2)},r=[],l={methods:{handleSearch(){this.$emit("handleSearch")},handleReset(){this.$emit("handleReset")}}},o=l,n=a(1001),i=(0,n.Z)(o,s,r,!1,null,"40da735d",null),c=i.exports},114:function(e,t,a){a.d(t,{Z:function(){return c}});var s=function(){var e=this,t=e._self._c;return t("el-card",{staticClass:"operate-container",attrs:{shadow:"never"}},[t("i",{staticClass:"el-icon-tickets"}),t("span",[e._v("数据列表")]),e._t("default")],2)},r=[],l={},o=l,n=a(1001),i=(0,n.Z)(o,s,r,!1,null,"3cadd859",null),c=i.exports},902:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"manage-user"},[t("search",{on:{handleReset:e.handleResetSearch,handleSearch:e.handleSearch}},[t("el-input",{staticClass:"search",attrs:{placeholder:"请输入用户uid或名称",clearable:""},model:{value:e.queryList.key,callback:function(t){e.$set(e.queryList,"key",t)},expression:"queryList.key"}},[t("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1),t("add",[t("AddAcount",{on:{updata:e.getUsers}})],1),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.usersData,border:""}},[t("el-table-column",{attrs:{prop:"index",label:"编号",width:"60",align:"center"}}),t("el-table-column",{attrs:{prop:"uid",label:"uid",align:"center"}}),t("el-table-column",{attrs:{prop:"name",label:"用户名",align:"center"}}),t("el-table-column",{attrs:{prop:"role",label:"权限",align:"center"}}),t("el-table-column",{attrs:{label:"操作",width:"145",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[e.$store.state.user.uid!=e.usersData[a.$index].uid?[t("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.handleChangeManager(a.row)}}},[e._v("修改")]),t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDeleteAcount(a.row.uid)}}},[e._v("删除")])]:[e._v("我")]]}}])})],1),t("el-dialog",{attrs:{title:"修改管理员信息",visible:e.changeInfoDialogVisible},on:{"update:visible":function(t){e.changeInfoDialogVisible=t}}},[t("el-form",{attrs:{model:e.changeInfoDialogForm}},[t("el-form-item",{attrs:{label:"用户名","label-width":"120px"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.changeInfoDialogForm.name,callback:function(t){e.$set(e.changeInfoDialogForm,"name",t)},expression:"changeInfoDialogForm.name"}})],1),t("el-form-item",{attrs:{label:"权限","label-width":"120px"}},[t("el-select",{attrs:{placeholder:"请选择管理员权限"},model:{value:e.changeInfoDialogForm.role,callback:function(t){e.$set(e.changeInfoDialogForm,"role",t)},expression:"changeInfoDialogForm.role"}},[t("el-option",{attrs:{label:"admin",value:"admin"}}),t("el-option",{attrs:{label:"userManager",value:"userManager"}}),t("el-option",{attrs:{label:"shopManager",value:"shopManager"}})],1)],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.changeInfoDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.completeChange}},[e._v("确 定")])],1)],1),t("el-pagination",{attrs:{"current-page":e.queryList.currentPage,"page-size":e.queryList.pageSize,layout:"prev, pager, next, jumper",total:e.total},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){return e.$set(e.queryList,"currentPage",t)},"update:current-page":function(t){return e.$set(e.queryList,"currentPage",t)}}})],1)},r=[],l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"add-acount"},[t("el-button",{staticClass:"new",attrs:{size:"mini",type:"primary"},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("添加")]),t("el-dialog",{attrs:{title:"修改管理员信息",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[t("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"status-icon":""}},[t("el-form-item",{attrs:{label:"用户名","label-width":"120px",prop:"name"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"权限","label-width":"120px",prop:"role"}},[t("el-select",{attrs:{placeholder:"请选择管理员权限"},model:{value:e.form.role,callback:function(t){e.$set(e.form,"role",t)},expression:"form.role"}},[t("el-option",{attrs:{label:"admin",value:"admin"}}),t("el-option",{attrs:{label:"userManager",value:"userManager"}}),t("el-option",{attrs:{label:"shopManager",value:"shopManager"}})],1)],1),t("el-form-item",{attrs:{label:"密码","label-width":"120px",prop:"password"}},[t("el-input",{attrs:{placeholder:"请输入密码","show-password":""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),t("el-form-item",{attrs:{label:"重复密码","label-width":"120px",prop:"passwordAgain"}},[t("el-input",{attrs:{placeholder:"请重复密码","show-password":""},model:{value:e.form.passwordAgain,callback:function(t){e.$set(e.form,"passwordAgain",t)},expression:"form.passwordAgain"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.completeAdd}},[e._v("注 册")])],1)],1)],1)},o=[],n=a(7991),i={data(){let e=(e,t,a)=>{t!=this.form.password?a(new Error("两次输入密码不一致")):a()};return{form:{},rules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"}],role:[{required:!0,message:"请选择管理员权限",trigger:"blur"}],password:[{required:!0,message:"请输入10-20位包含数字、字母、特殊字符的密码",trigger:"blur"},{pattern:/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\w_]).{10,20}$/,message:"请输入10-20位包含数字、字母、特殊字符的密码",trigger:"blur"}],passwordAgain:[{required:!0,message:"请再次输入密码",trigger:"blur"},{validator:e,trigger:"blur"}]},dialogFormVisible:!1}},methods:{completeAdd(){this.$refs.form.validate((e=>{e&&((0,n.su)(this.form).then((e=>{let t=JSON.parse(e.data);200===t.meta.status?(this.$emit("updata"),this.$message.success(t.meta.msg)):this.$message.error(t.meta.msg)})).catch((e=>{this.$message.error(e)})),this.dialogFormVisible=!1,this.form={})}))}}},c=i,u=a(1001),d=(0,u.Z)(c,l,o,!1,null,"48cb9761",null),m=d.exports,h=a(114),g=a(9103);const p={currentPage:1,pageSize:5,key:""};var f={components:{AddAcount:m,Add:h.Z,Search:g.Z},data(){return{usersData:[],total:0,changeInfoDialogVisible:!1,createAcountVisible:!1,changeInfoDialogForm:{},queryList:{...p},search:""}},created(){this.getUsers()},methods:{getUsers(){(0,n.xE)(this.queryList).then((e=>{let t=JSON.parse(e.data);if(200===t.meta.status){let{list:e,total:a}=t.data;this.usersData=e,this.total=a}else this.$message.error(t.meta.msg)})).catch((e=>{this.$message.error(e)}))},handleCurrentChange(e){this.queryList.currentPage=e,this.getUsers()},handleSearch(){this.queryList.currentPage=1,this.getUsers()},handleResetSearch(){this.queryList={...p}},handleChangeManager(e){this.changeInfoDialogForm={...e},this.changeInfoDialogVisible=!0},completeChange(){(0,n.A0)(this.changeInfoDialogForm).then((e=>{let t=JSON.parse(e.data);200===t.meta.status?(this.$message.success(t.meta.msg),this.getUsers()):this.$message.error(t.meta.msg)})).catch((e=>{this.$message.error(e)})),this.changeInfoDialogVisible=!1},handleDeleteAcount(e){this.$confirm("此操作将永久删除该管理员, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.updateDeleteAcount(e)})).catch((()=>{}))},updateDeleteAcount(e){(0,n.Q3)(e).then((e=>{let t=JSON.parse(e.data);200===t.meta.status?(this.$message.success(t.meta.msg),this.getUsers()):this.$message.error(t.meta.msg)})).catch((e=>{this.$message.error(e)}))}}},b=f,v=(0,u.Z)(b,s,r,!1,null,"0ad8c36e",null),w=v.exports}}]);
//# sourceMappingURL=902.ebededee.js.map