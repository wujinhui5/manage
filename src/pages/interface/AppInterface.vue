<template>
  <div class="container">
    <!-- 侧边导航 -->
    <div class="aside-nav">
      <AsideNav />
    </div>

    <el-container>
      <!-- 头部 -->
      <el-header height="60px"><MyHeader /> </el-header>
      <!-- 主体 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import AsideNav from "./components/AsideNav";

export default {
  components: { MyHeader, AsideNav },
};
</script>

<style lang="less" scoped>
.container {
  height: 100%;
}

.el-header {
  width: 100%;
  padding: 0;
}

.el-container {
  height: 100%;
}

.aside-nav {
  float: left;
  height: 100%;
}

.el-main {
  padding: 20px;
  color: #333;
}
</style>