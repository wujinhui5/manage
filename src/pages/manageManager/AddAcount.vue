<template>
  <div class="add-acount">
    <!-- 添加管理员按钮 -->
    <el-button
      class="new"
      size="mini"
      type="primary"
      @click="dialogFormVisible = true"
      >添加</el-button
    >
    <!-- 对话框 -->
    <el-dialog
      title="修改管理员信息"
      :visible.sync="dialogFormVisible"
      :before-close="cancelAdd"
    >
      <el-form :model="form" ref="form" :rules="rules" status-icon>
        <el-form-item label="用户名" label-width="120px" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="权限" label-width="120px" prop="role">
          <el-select v-model="form.role" placeholder="请选择管理员权限">
            <el-option label="admin" value="admin"></el-option>
            <el-option label="userManager" value="userManager"></el-option>
            <el-option label="shopManager" value="shopManager"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="密码" label-width="120px" prop="password">
          <el-input
            placeholder="请输入密码"
            v-model="form.password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item label="重复密码" label-width="120px" prop="passwordAgain">
          <el-input
            placeholder="请重复密码"
            v-model="form.passwordAgain"
            show-password
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelAdd">取 消</el-button>
        <el-button type="primary" @click="completeAdd">注 册</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { createUserApi } from "@/utils";

export default {
  data() {
    let passwordAgainRule = (rule, value, callback) => {
      if (value != this.form.password) {
        callback(new Error("两次输入密码不一致"));
      } else {
        callback();
      }
    };
    return {
      form: {},
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        role: [
          { required: true, message: "请选择管理员权限", trigger: "blur" },
        ],
        password: [
          {
            required: true,
            message: "请输入10-20位包含数字、字母、特殊字符的密码",
            trigger: "blur",
          },
          {
            pattern: /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\w_]).{10,20}$/,
            message: "请输入10-20位包含数字、字母、特殊字符的密码",
            trigger: "blur",
          },
        ],
        passwordAgain: [
          { required: true, message: "请再次输入密码", trigger: "blur" },
          {
            validator: passwordAgainRule,
            trigger: "blur",
          },
        ],
      },
      dialogFormVisible: false,
    };
  },
  methods: {
    // 取消添加
    cancelAdd() {
      this.dialogFormVisible = false;
    },

    // 完成添加
    completeAdd() {
      this.$refs.form.validate((valid) => {
        if (!valid) return;
        createUserApi(this.form)
          .then((res) => {
            let data = JSON.parse(res.data);
            if (data.meta.status === 200) {
              this.$emit("updata");
              this.$message.success(data.meta.msg);
            } else this.$message.error(data.meta.msg);
          })
          .catch((err) => {
            this.$message.error(err);
          });
        this.dialogFormVisible = false;
        this.form = {};
      });
    },
  },
};
</script>