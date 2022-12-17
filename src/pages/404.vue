<template>
  <div class="container">
    <h1>很抱歉，页面迷路了！</h1>
    <p>请检查您输入的网址是否正确,或者点击以下按钮返回主页</p>
    <router-link to="/">
      <el-button type="primary" round>返回首页</el-button>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container {
  width: 420px;
  margin: 120px auto;
  h1 {
    color: #666;
  }
  p {
    margin: 20px 0;
    color: #999;
  }
}
</style>