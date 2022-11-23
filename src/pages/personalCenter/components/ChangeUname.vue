<template>
  <div class="change-user-name" v-if="user.alterable">
    <!-- 按钮 -->
    <el-button size="mini" type="primary" @click="changeUserName"
      >修改</el-button
    >

    <!-- 对话框 -->
    <el-dialog
      title="修改管理员信息"
      :visible.sync="dialogFormVisible"
      :before-close="cancelChange"
    >
      <el-form :model="form">
        <el-form-item label="用户名" label-width="120px">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelChange">取 消</el-button>
        <el-button type="primary" @click="completeChange">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { changeUserNameApi } from "@/utils";

export default {
  props: ["user"],
  data() {
    return {
      form: { name: this.$store.state.user.name },
      dialogFormVisible: false,
    };
  },
  methods: {
    // 修改用户信息
    changeUserName() {
      this.form.name = this.$store.state.user.name;
      this.dialogFormVisible = true;
    },

    // 取消修改
    cancelChange() {
      this.dialogFormVisible = false;
    },

    // 确定修改
    completeChange() {
      let data = {
        uid: this.$store.state.user.uid,
        name: this.form.name,
      };
      changeUserNameApi(data)
        .then((res) => {
          let data = JSON.parse(res.data);
          if (data.meta.status === 200) {
            this.$message.success(data.meta.msg);
            this.$emit("updata");
          } else {
            this.$message.error(data.meta.msg);
          }
        })
        .catch((err) => {
          this.$message.error(err);
        });
      this.dialogFormVisible = false;
    },
  },
};
</script>

<style scoped>
.change-user-name {
  display: inline-block;
}
</style>