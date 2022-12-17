<template>
  <el-card class="operate-container" shadow="never">
    <div class="title">
      <i class="el-icon-search"></i>
      <span>筛选搜索</span>
      <el-button type="primary" class="fr" @click="handleSearch" size="small"
        >搜索</el-button
      >
      <el-button class="btn-reset fr" @click="handleReset" size="small">
        重置
      </el-button>
    </div>
    <slot></slot>
  </el-card>
</template>

<script>
export default {
  methods: {
    handleSearch() {
      this.$emit("handleSearch");
    },
    handleReset() {
      this.$emit("handleReset");
    },
  },
};
</script>

<style lang="less" scoped>
.operate-container {
    margin-bottom: 20px;
  .title {
    margin-bottom: 20px;
    .btn-reset {
      margin-right: 10px;
    }
  }
  &/deep/.el-input {
    width: 200px;
    margin: 0 10px 10px 0;
  }
}
</style>