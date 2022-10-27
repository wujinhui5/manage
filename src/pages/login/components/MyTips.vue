<template>
  <div class="my-tips">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="acount" label="账号"> </el-table-column>
      <el-table-column prop="password" label="密码"> </el-table-column>
      <el-table-column prop="roles" label="权限"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { acount: "0001", password: "12345678a!", roles: "admin" },
        { acount: "0002", password: "12345678a!", roles: "shopManager" },
        { acount: "0003", password: "12345678a!", roles: "shopManager" },
        { acount: "0004", password: "12345678a!", roles: "userManager" },
      ],
    };
  },
};
</script>

<style scoped>
.my-tips {
  float: left;
  width: 400px;
  height: 380px;
  margin: 50px 0 0 50px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 4px;
  background: #fff;
}
</style>