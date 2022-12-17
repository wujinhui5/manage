<template>
  <div class="add-shop-container">
    <!-- 进度条 -->
    <div style="margin: 0 auto; width: 400px; margin-bottom: 20px">
      <el-steps :active="active" finish-status="success">
        <el-step title="商品基本信息"></el-step>
        <el-step title="商品图片"></el-step>
      </el-steps>
    </div>
    <ShopBaseInfo v-show="showStatus[0]" @nextStep="nextStep" />
    <ShopPicUpload v-show="showStatus[1]" :form="form" @prevStep="prevStep" />
  </div>
</template>

<script>
const ShopBaseInfo = () => import("./components/ShopBaseInfo");
const ShopPicUpload = () => import("./components/ShopPicUpload");

export default {
  components: { ShopBaseInfo, ShopPicUpload },
  data() {
    return {
      showStatus: [true, false],
      active: 0,
      form: {},
    };
  },
  methods: {
    changeStep() {
      for (let i = 0; i < this.showStatus.length; i++) {
        this.$set(this.showStatus, i, false);
      }
      this.$set(this.showStatus, this.active, true);
    },
    prevStep() {
      this.active--;
      this.changeStep();
    },
    nextStep(form) {
      this.form = form;
      this.active++;
      this.changeStep();
    },
  },
};
</script>

<style scoped>
.add-shop-container {
  margin: 0 auto;
  width: 600px;
}
</style>