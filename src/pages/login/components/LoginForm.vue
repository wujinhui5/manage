<template>
  <div class="login-form">
    <!-- 登录表单 -->
    <el-form
      :model="loginForm"
      status-icon
      :rules="rules"
      ref="loginForm"
      label-width="60px"
    >
      <el-form-item label="账号" prop="uid">
        <el-input v-model="loginForm.uid" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
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
    // 登录功能
    login() {
      this.$refs.loginForm.validate((valid) => {
        if (!valid) return;
        this.$store
          .dispatch("user/login", this.loginForm)
          .then((res) => {
            this.$message.success(res);
            this.$router.push("/");
          })
          .catch((err) => {
            this.$message.error(err);
          });
      });
    },
  },
};
</script>

<style scoped>
.login-form {
  float: right;
  width: 330px;
  height: 380px;
  margin: 50px 50px 0 0;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 4px;
  background: #fff;
}
</style>