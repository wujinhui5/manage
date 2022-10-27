<template>
  <div class="aside-nav">
    <!-- 控制侧边菜单展开和折叠 -->
    <div class="change-is-collapse" @click="isCollapse = !isCollapse">
      <i class="el-icon-s-unfold" v-if="isCollapse"></i>
      <i class="el-icon-s-fold" v-if="!isCollapse"></i>
    </div>

    <!-- 导航栏 -->
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#313743"
      text-color="#fff"
      :collapse="isCollapse"
      router
    >
      <template v-for="route in navList">
        <!-- 有多级标题时 -->
        <!-- eslint-disable-next-line -->
        <el-submenu v-if="!route.meta.hidden && route.children" :index="route.path">
          <template slot="title">
            <i :class="route.icon"></i>
            <span slot="title">{{ route.name }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="routeChild in route.children"
              :key="routeChild.path"
              :index="route.path + '/' + routeChild.path"
            >
              <i :class="routeChild.icon"></i>
              <span slot="title">{{ routeChild.name }}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <!-- 只有一级标题时 -->
        <!-- eslint-disable-next-line -->
        <el-menu-item v-if="!route.meta.hidden && !route.children" :index="route.path">
          <i :class="route.icon"></i>
          <span slot="title">{{ route.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      isHidden: false,
    };
  },

  computed: {
    // 根据路由生成导航栏目录
    navList: function () {
      return this.$store.state.permission.addRoutes[0].children;
    },
  },
};
</script>

<style scoped>
.aside-nav {
  background-color: rgb(49, 55, 67);
  height: 100%;
  color: #fff;
  user-select: none;
}

.change-is-collapse {
  height: 30px;
  line-height: 30px;
  font-size: 20px;
  text-align: center;
  background: #333;
  cursor: pointer;
}

.el-menu {
  border: 0;
  font-size: 16px;
  font-weight: 700;
  overflow: auto;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

