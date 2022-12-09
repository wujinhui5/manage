<template>
  <div class="add-shop">
    <!-- 按钮 -->
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
        <el-form-item label="商品名" label-width="120px" prop="title">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="库存" label-width="120px" prop="inventory">
          <el-input
            v-model.number="form.inventory"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="价格" label-width="120px" prop="price">
          <el-input v-model.number="form.price" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelAdd">取 消</el-button>
        <el-button type="primary" @click="completeAdd">添 加</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { createShopApi } from "@/utils/shop";

export default {
  data() {
    return {
      form: {},
      rules: {
        title: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        price: [
          { required: true, message: "价格不能为空", trigger: "blur" },
          { type: "number", message: "价格必须为数字", trigger: "blur" },
        ],
        inventory: [
          { required: true, message: "库存不能为空", trigger: "blur" },
          { type: "number", message: "库存必须为数字", trigger: "blur" },
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

    // 确认添加
    completeAdd() {
      this.$refs.form.validate((valid) => {
        if (!valid) return;
        let data = {
          uid: this.$store.state.user.uid,
          new: this.form,
        };
        createShopApi(data)
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
  },
};
</script>

<style scoped>
.add-shop {
  display: inline-block;
}
</style>