<template>
  <div class="container">
    <!-- 头部 -->
    <el-header height="60px"><MyHeader /> </el-header>

    <el-container>
      <!-- 侧边导航 -->
      <div class="aside-nav">
        <AsideNav />
      </div>

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

<style scoped>
.container {
  height: 100%;
}

.el-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  padding: 0;
}

.el-container {
  padding-top: 60px;
  height: 100%;
}

.aside-nav {
  float: left;
  height: 100%;
}

.el-main {
  padding: 10px;
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
</style>