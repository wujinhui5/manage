<template>
  <div class="add-completed">
    <p>商品添加成功！</p>
    <el-button
      ><router-link to="/shop/add">添加更多商品</router-link></el-button
    >
    <el-button
      ><router-link to="/shop/manage">查看商品列表</router-link></el-button
    >
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.add-completed {
  margin: 0 auto;
  width: 300px;
  p {
    margin-bottom: 20px;
  }
  a {
    color: #000;
  }
}
</style>