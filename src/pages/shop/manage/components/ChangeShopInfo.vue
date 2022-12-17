<template>
  <div class="change-shop-info">
    <!-- 按钮 -->
    <el-button size="mini" @click="changeUser">修改</el-button>

    <!-- 对话框 -->
    <el-dialog
      title="修改管理员信息"
      :visible.sync="dialogFormVisible"
      :before-close="cancelChange"
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
        <el-button @click="cancelChange">取 消</el-button>
        <el-button type="primary" @click="completeChange">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { changeShopInfoApi } from "../../../../utils/shop";

export default {
  props: ["currentShop"],
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
    // 点击修改用户信息按钮
    changeUser() {
      this.form = { ...this.currentShop };
      this.dialogFormVisible = true;
    },

    // 取消修改
    cancelChange() {
      this.dialogFormVisible = false;
    },

    // 确定修改
    completeChange() {
      this.$refs.form.validate((valid) => {
        if (!valid) return;
        let form = this.form;
        delete form["state"];
        let data = {
          shopId: form.shopId,
          new: form,
        };
        changeShopInfoApi(data)
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
.change-user-info {
  display: inline-block;
  width: 56px;
}
</style>