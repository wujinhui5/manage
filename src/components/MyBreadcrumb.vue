<template>
  <div class="my-breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="(item, index) in list"
        :to="item.path"
        :key="index"
        >{{ item.name }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        let matched = this.$route.matched.filter((i) => i.name);
        const first = matched[0];
        if (first && first.name !== "首页") {
          matched.unshift({ path: "/home", name: "首页" });
        }
        this.list = matched;
      },
    },
  },
};
</script>

<style lang="less" scoped>
.my-breadcrumb {
  height: 20px;
  line-height: 20px;
}
</style>