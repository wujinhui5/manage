<template>
  <div class="MyHeader">
    <!-- 面包屑 -->
    <div class="my-breadcrumb-box fl">
      <MyBreadcrumb :list="breadcrumb" />
    </div>

    <!-- 用户信息及下拉菜单 -->
    <el-dropdown @command="handleCommand" class="fr">
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
import MyBreadcrumb from "@/components/MyBreadcrumb";

export default {
  components: { MyBreadcrumb },
  props: ["isCollapse"],
  data() {
    return {
      breadcrumb: [{ name: "首页", path: "/" }, { name: "管理员" }],
    };
  },
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

<style lang="less" scoped>
.MyHeader {
  min-width: 200px;
  height: 49px;
  padding: 5px;
  border: 1px solid #dcdfe6;
  border-width: 0 0 1px;
  font-size: 14px;
  .my-breadcrumb-box {
    margin-top: 15px;
  }
}
.el-dropdown {
  .user-info {
    float: right;
    height: 50px;
    color: #666;
    .head-portrait {
      float: left;
      width: 50px;
      height: 50px;
      border-radius: 30px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .user-name {
      float: right;
      height: 100%;
      line-height: 49px;
    }
  }
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