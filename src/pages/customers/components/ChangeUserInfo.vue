<template>
  <div class="change-customer">
    <el-button size="mini" type="primary" @click="changeCustomer"
      >修改</el-button
    >
    <el-dialog
      title="修改用户信息"
      :visible.sync="dialogFormVisible"
      :before-close="cancelChange"
    >
      <el-form :model="form" ref="form" :rules="rules" status-icon>
        <el-form-item label="姓名" label-width="120px" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" label-width="120px" prop="address">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动时间" label-width="120px">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form.date"
          ></el-date-picker>
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
import { changeCustomerInfoApi } from "../../../utils/customers";

export default {
  props: ["currentCustomer"],
  data() {
    return {
      index: -1,
      form: {},
      rules: {
        name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        address: [{ required: true, message: "地址不能为空", trigger: "blur" }],
      },
      dialogFormVisible: false,
    };
  },
  methods: {
    // 点击修改按钮
    changeCustomer() {
      this.form = { ...this.currentCustomer };
      this.dialogFormVisible = true;
    },

    // 完成修改
    completeChange() {
      this.$refs.form.validate((valid) => {
        if (!valid) return;
        this.formatDate();
        changeCustomerInfoApi(this.form)
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
      });
    },
    // 取消修改
    cancelChange() {
      this.dialogFormVisible = false;
    },

    formatDate() {
      if (typeof this.form.date != "string") {
        this.form.date = [
          this.form.date.getFullYear(),
          this.form.date.getMonth() + 1,
          this.form.date.getDate(),
        ].join("-");
      }
    },
  },
};
</script>

<style>
.change-customer {
  display: inline-block;
  width: 56px;
}
</style>