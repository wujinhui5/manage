<template>
  <div class="shop-base-info">
    <el-form :model="form" ref="form" :rules="rules" status-icon>
      <el-form-item label="商品名" label-width="80px" prop="title">
        <el-input v-model="form.title" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="库存" label-width="80px" prop="inventory">
        <el-input v-model.number="form.inventory" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="价格" label-width="80px" prop="price">
        <el-input v-model.number="form.price" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div class="next">
      <el-button type="primary" @click="handleNext"
        >下一步，上传商品图片</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: "",
        inventory: null,
        price: null,
      },
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
    };
  },
  methods: {
    handleNext() {
      this.$refs.form.validate((valid) => {
        if (!valid) return;
        this.$emit("nextStep", this.form);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.shop-base-info {
  position: relative;
  .next {
    position: absolute;
    left: 50%;
    margin: 20px 0 0 10px;
  }
}
</style>