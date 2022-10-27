<template>
  <div class="change-status">
    <el-button v-if="row.status" size="mini" type="danger" @click="changeStatus"
      >封禁</el-button
    >
    <el-button
      v-if="!row.status"
      size="mini"
      type="success"
      @click="changeStatus"
      >解封</el-button
    >
  </div>
</template>

<script>
import { changeStatusApi } from "../../../utils/customers";

export default {
  props: ["row"],
  methods: {
    changeStatus() {
      changeStatusApi(this.row.uid)
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
    },
  },
};
</script>

<style scoped>
.change-status {
  display: inline-block;
}
</style>