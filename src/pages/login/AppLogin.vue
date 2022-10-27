<template>
  <div class="app-login">
    <!-- logo和标题 -->
    <div class="logo">
      <img src="../../assets/logo.png" alt="logo" />
      <h3 class="display-none">后台管理系统</h3>
    </div>

    <div class="main">
      <MyTips />
      <!-- 登录表单 -->
      <LoginForm />
    </div>
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm";
import MyTips from "./components/MyTips";

export default {
  components: { LoginForm, MyTips },
};
</script>

<style scoped>
.app-login .logo {
  height: 50px;
  padding: 25px 50px;
}

.app-login .logo img {
  float: left;
  width: 50px;
  height: 50px;
}

.app-login .logo h3 {
  float: left;
  height: 50px;
  font-size: 20px;
  line-height: 50px;
}

.app-login .main {
  min-width: 920px;
  height: 500px;
  background: rgba(40, 145, 139, 0.5);
}

.app-login::after {
  display: block;
  content: "";
  height: 100px;
}
</style>


