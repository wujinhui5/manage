<template>
  <el-button size="mini" type="danger" @click="deleteAcount">删除</el-button>
</template>

<script>
import { deleteUserApi } from "../../../../utils";

export default {
  props: ["uid"],
  methods: {
    // 删除管理员账号
    deleteAcount() {
      deleteUserApi(this.uid)
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

<style>
</style>