<template>
  <el-button size="mini" type="danger" @click="deleteShop">下架</el-button>
</template>

<script>
import { deleteShopApi } from "../../../../utils/shop";

export default {
  props: ["id"],
  methods: {
    // 下架商品
    deleteShop() {
      let data = {
        shopId: this.id,
        uid: this.$store.state.user.uid,
      };
      deleteShopApi(data)
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
</style>