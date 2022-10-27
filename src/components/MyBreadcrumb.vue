<template>
  <div class="my-breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="(item, index) in list"
        :to="item.path"
        :key="index"
        >{{ item.name }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  props: ["list"],
};
</script>

<style>
.my-breadcrumb {
  margin-bottom: 5px;
}
</style>