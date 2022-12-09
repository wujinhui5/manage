<template>
  <el-table
    class="my-tips"
    :data="tableData"
    border
    style="width: 100%"
    :span-method="objectSpanMethod"
  >
    <el-table-column prop="roles" label="权限"> </el-table-column>
    <el-table-column prop="acount" label="账号"> </el-table-column>
    <el-table-column prop="password" label="密码"> </el-table-column>
  </el-table>
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
  methods: {
    objectSpanMethod({ rowIndex, columnIndex }) {
      if (columnIndex === 2) {
        if (rowIndex === 0) {
          return {
            rowspan: 4,
            colspan: 1,
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0,
          };
        }
      }
    },
  },
};
</script>