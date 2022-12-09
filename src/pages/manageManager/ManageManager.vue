<template>
  <div class="manage-user">
    <!-- 主体 -->
    <div class="main">
      <div class="search-and-new">
        <!-- 搜索 -->
        <el-card class="operate-container" shadow="never">
          <el-input
            class="search"
            placeholder="请输入内容"
            v-model="search"
            clearable
          >
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
          <el-button type="primary">搜索</el-button>
        </el-card>
        <el-card class="operate-container" shadow="never">
          <i class="el-icon-tickets"></i>
          <span>数据列表</span>
          <!-- 添加管理员-->
          <AddAcount @updata="getUsers" />
        </el-card>
      </div>

      <!-- 管理员列表 -->
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column type="index" :index="indexMethod"> </el-table-column>
        <el-table-column prop="uid" label="uid"> </el-table-column>
        <el-table-column prop="name" label="用户名"> </el-table-column>
        <el-table-column prop="role" label="权限"> </el-table-column>
        <el-table-column label="操作" width="138">
          <template slot-scope="scope">
            <template
              v-if="$store.state.user.uid != tableData[scope.$index].uid"
            >
              <!-- 修改管理员信息弹窗 -->
              <ChangeUserInfo :currentUser="scope.row" @updata="getUsers" />
              <DeleteAcount :uid="scope.row.uid" @updata="getUsers" />
            </template>
            <template v-else>我</template>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="pagingData.currentPage"
        :page-size="pagingData.pageSize"
        layout="prev, pager, next, jumper"
        :total="usersData.length"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import ChangeUserInfo from "./ChangeUserInfo";
import AddAcount from "./AddAcount";
import DeleteAcount from "./DeleteAcount";
import { getUsersApi } from "@/utils";

export default {
  components: { ChangeUserInfo, AddAcount, DeleteAcount },
  data() {
    return {
      breadcrumb: [{ name: "首页", path: "/" }, { name: "管理员" }],
      usersData: [],
      changeUserInfoVisible: false,
      createAcountVisible: false,
      currentUser: {
        index: -1,
        data: {},
      },
      pagingData: {
        currentPage: 1,
        pageSize: 10,
      },
      search: "",
    };
  },
  methods: {
    // 获取管理员列表
    getUsers() {
      getUsersApi()
        .then((res) => {
          let data = JSON.parse(res.data);
          if (data.meta.status === 200) {
            this.usersData = data.data;
          } else {
            this.$message.error(data.meta.msg);
          }
        })
        .catch((err) => {
          this.$message.error(err);
        });
    },

    // 列表项编号
    indexMethod(index) {
      return index + 1;
    },

    // 切换页码
    handleCurrentChange(page) {
      this.pagingData.currentPage = page;
    },
  },

  computed: {
    // 根据页码和搜索内容生成列表数据
    tableData: function () {
      let targetUsers = this.usersData.filter((user) => {
        return (
          user.uid.indexOf(this.search) != -1 ||
          user.name.indexOf(this.search) != -1 ||
          user.role.indexOf(this.search) != -1
        );
      });
      return targetUsers.slice(
        (this.pagingData.currentPage - 1) * this.pagingData.pageSize,
        this.pagingData.currentPage * this.pagingData.pageSize
      );
    },
  },
  created() {
    this.getUsers();
  },
};
</script>

<style lang="less" scoped>
.main {
  padding: 5px;
  border-radius: 4px;
  .search-and-new {
    .operate-container {
      margin-bottom: 20px;
    }
    .search {
      margin-right: 20px;
      width: 300px;
    }
    .add-acount {
      float: right;
      margin-top: -4px;
    }
  }
}
.change-user-info {
  float: left;
  margin-right: 5px;
}
</style>