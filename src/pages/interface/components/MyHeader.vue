<template>
  <div class="MyHeader">
    <!-- logo和标题 -->
    <div class="logo">
      <img src="../../../assets/logo.png" alt="logo" />
      <h3 class="display-none">后台管理系统</h3>
    </div>

    <!-- 用户信息及下拉菜单 -->
    <el-dropdown @command="handleCommand">
      <span class="user-info el-dropdown-link">
        <!-- 头像 -->
        <div class="head-portrait">
          <img :src="this.$store.state.user.headPortrait" alt="头像" />
        </div>
        <!-- 用户名 -->
        <div class="user-name display-none">
          {{ $store.state.user.name }}
        </div>
      </span>
      <!-- 下拉菜单 -->
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="PersonalCenter">个人中心</el-dropdown-item>
        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  props: ["isCollapse"],
  methods: {
    // 下拉列表按钮触发函数
    handleCommand(command) {
      if (command === "logout") {
        this.logout();
      } else if (command === "PersonalCenter") {
        this.toPersonalCenter();
      }
    },

    // 登出
    logout() {
      this.$store
        .dispatch("user/logout")
        .then((res) => {
          this.$message.success(JSON.parse(res.data).meta.msg);
          location.reload();
        })
        .catch((err) => {
          this.$message.error(err);
        });
    },

    // 前往个人中心
    toPersonalCenter() {
      this.$router.push("/personal");
    },
  },
};
</script>

<style scoped>
.MyHeader {
  background-color: #35495e;
  min-width: 200px;
  height: 50px;
  padding: 5px;
  font-size: 14px;
  color: #fff;
  line-height: 50px;
}

.logo {
  float: left;
  height: 50px;
}

.logo img {
  float: left;
  width: 50px;
  height: 50px;
}

.logo h3 {
  float: left;
  height: 50px;
  font-size: 20px;
}

.el-dropdown {
  float: right;
}

.user-info {
  float: right;
  height: 50px;
  color: #fff;
}

.user-info .head-portrait {
  float: left;
  width: 50px;
  height: 50px;
  border-radius: 30px;
  overflow: hidden;
}

.user-info .head-portrait img {
  width: 100%;
  height: 100%;
}

.user-info .user-name {
  float: right;
  height: 100%;
}

.el-dropdown-link {
  cursor: pointer;
}

@media (max-width: 600px) {
  .display-none {
    display: none !important;
  }
}
</style>