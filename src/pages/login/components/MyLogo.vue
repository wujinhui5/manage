<template>
  <div class="logo-box">
    <div class="logo">
      <img src="@/assets/logo.png" alt="logo" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.logo-box {
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  width: 99px;
  height: 99px;
  padding: 10px;
  border:1px solid rgb(224, 224, 224);
  border-radius: 60px;
  background-color: #fff;
  .logo {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color: rgb(224, 224, 224);
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>