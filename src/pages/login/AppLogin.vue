<template>
  <div class="app-login">
    <LoginForm @openDialog="openDialog" />
    <div class="shadow"></div>
    <!-- 账号及密码 -->
    <el-dialog title="账号及密码" :visible.sync="dialogTableVisible"
      ><MyTips />
    </el-dialog>
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm";
import MyTips from "./components/MyTips";

export default {
  components: { LoginForm, MyTips },
  data() {
    return {
      dialogTableVisible: false,
    };
  },
  methods: {
    openDialog() {
      this.dialogTableVisible = true;
    },
  },
};
</script>

<style lang="less" scoped>
.app-login {
  position: relative;
  min-width: 920px;
  height: 100vh;
  background: rgba(40, 145, 139, 0.5);
  .shadow {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -2;
    transform: translate(-160px, -147px);
    width: 340px;
    height: 314px;
    &::before {
      display: block;
      content: "";
      width: 340px;
      height: 314px;
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 0.3);
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 120px;
      height: 120px;
      border-radius: 60px;
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
