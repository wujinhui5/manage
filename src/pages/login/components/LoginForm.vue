<template>
  <div class="login-form">
    <!-- 登录表单 -->
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm">
      <el-form-item prop="uid">
        <el-input
          prefix-icon="el-icon-user-solid"
          v-model="loginForm.uid"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          prefix-icon="el-icon-lock"
          type="password"
          v-model="loginForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="info" @click="reset">重置</el-button>
        <el-button type="info" @click="emitEvent">账号密码</el-button>
      </el-form-item>
    </el-form>
    <MyLogo />
  </div>
</template>

<script>
import MyLogo from "./MyLogo";
import { deounce } from "@/js/limitEventCallback";

export default {
  components: { MyLogo },
  data() {
    return {
      loginForm: {
        uid: "",
        password: "",
      },
      // 密码验证规则
      rules: {
        uid: [{ required: true, message: "请输入管理员账号", trigger: "blur" }],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
      },
    };
  },

  methods: {
    // 登录功能与节流
    loginDeounce: deounce(function () {
      this.$store
        .dispatch("user/login", this.loginForm)
        .then((res) => {
          this.$message.success(res);
          this.$router.push("/");
        })
        .catch((err) => {
          this.$message.error(err);
        });
    }, 1000),
    login() {
      this.$refs.loginForm.validate((valid) => {
        if (!valid) return;
        this.loginDeounce();
      });
    },

    // 重置表单
    reset() {
      this.loginForm.uid = "";
      this.loginForm.password = "";
    },

    // 打开对话框
    emitEvent() {
      this.$emit("openDialog", true);
    },
  },
};
</script>

<style lang="less" scoped>
.login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 164px;
  padding: 100px 20px 50px;
  border-radius: 5px;
  background: #fff;
}
</style>