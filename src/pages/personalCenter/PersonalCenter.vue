<template>
  <div class="personal-center">
    <!-- 面包屑 -->
    <MyBreadcrumb :list="breadcrumb" />

    <!-- 表格 -->
    <div class="table">
      <HeadPortrait @updata="updata" />

      <el-table :data="tableData" style="width: 100%" :show-header="false">
        <el-table-column prop="type" width="100"> </el-table-column>
        <el-table-column prop="value"> </el-table-column>
        <el-table-column width="80">
          <template slot-scope="scope">
            <ChangeUname :user="scope.row" @updata="updata" />
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import HeadPortrait from "./components/HeadPortrait";
import MyBreadcrumb from "@/components/MyBreadcrumb";
import ChangeUname from "./components/ChangeUname";

export default {
  components: { MyBreadcrumb, ChangeUname, HeadPortrait },
  data() {
    return {
      breadcrumb: [{ name: "个人中心" }],
    };
  },

  methods: {
    updata() {
      this.$store.dispatch("user/getInfo");
    },
  },
  computed: {
    tableData() {
      return [
        { type: "name", value: this.$store.state.user.name, alterable: true },
        { type: "uid", value: this.$store.state.user.uid },
        { type: "role", value: this.$store.state.user.role },
      ];
    },
  },
};
</script>


<style scoped>
.table {
  width: 600px;
  margin: 0 auto;
  padding: 5px;
  background: #fff;
  border-radius: 4px;
}
</style>