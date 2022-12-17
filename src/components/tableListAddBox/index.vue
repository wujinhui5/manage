<template>
  <el-card class="operate-container" shadow="never">
    <i class="el-icon-tickets"></i>
    <span>数据列表</span>
    <!-- 添加数据-->
    <slot></slot>
  </el-card>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.operate-container {
  margin-bottom: 20px;
  &/deep/.el-button {
    float: right;
  }
}
</style>