<template>
  <div class="all-customer">
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

    <!-- 表格 -->
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>数据列表</span>
    </el-card>
    <el-table
      :data="
        targetUsers.slice(
          (pagingData.currentPage - 1) * pagingData.pageSize,
          pagingData.currentPage * pagingData.pageSize
        )
      "
      :row-class-name="isBanned"
      border
    >
      <el-table-column label="出生日期" prop="date"> </el-table-column>
      <el-table-column label="姓名" prop="name"> </el-table-column>
      <el-table-column label="地址" prop="address"> </el-table-column>
      <el-table-column label="操作" width="199">
        <template slot-scope="scope">
          <!-- 修改用户信息 -->
          <ChangeStatus :row="scope.row" @updata="getAllCustomer" />
          <ChangeUserInfo
            :currentCustomer="scope.row"
            @updata="getAllCustomer"
          />
          <DeleteCustomer :uid="scope.row.uid" @updata="getAllCustomer" />
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      @current-change="changePage"
      :current-page.sync="pagingData.currentPage"
      :page-size="pagingData.pageSize"
      layout="prev, pager, next, jumper"
      :total="targetUsers.length"
    >
    </el-pagination>
  </div>
</template>

<script>
import ChangeUserInfo from "./components/ChangeUserInfo";
import DeleteCustomer from "./components/DeleteCustomer";
import ChangeStatus from "./components/ChangeStatus";
import { getAllCustomersApi } from "../../utils/customers";

export default {
  components: { ChangeUserInfo, DeleteCustomer, ChangeStatus },
  data() {
    return {
      breadcrumb: [{ name: "首页", path: "/" }, { name: "用户管理" }],
      users: [],
      search: "",
      pagingData: {
        currentPage: 1,
        pageSize: 10,
      },
    };
  },

  computed: {
    // 根据搜索关键词过滤Users
    targetUsers: function () {
      return this.users.filter((user) => {
        return (
          user.address.indexOf(this.search) != -1 ||
          user.name.indexOf(this.search) != -1 ||
          user.uid.indexOf(this.search) != -1
        );
      });
    },
  },

  methods: {
    // 获取用户列表
    getAllCustomer() {
      getAllCustomersApi()
        .then((res) => {
          let data = JSON.parse(res.data);
          if (data.meta.status === 200) {
            this.users = data.data;
          } else {
            this.$message.error(data.meta.msg);
          }
        })
        .catch((err) => {
          this.$message.error(err);
        });
    },

    // 换页功能
    changePage(currentPage) {
      this.pagingData.currentPage = currentPage;
    },

    // 根据数据添加类名
    isBanned(value) {
      if (!value.row.status) {
        return "banned";
      }
      return "";
    },
  },

  //获取数据
  created() {
    this.getAllCustomer();
  },
};
</script>

<style lang="less" scoped>
.all-customer {
  background: #fff;
  margin-top: 5px;
  padding: 5px;
  border-radius: 4px;
  .operate-container {
    margin-bottom: 20px;
  }
  .search {
    width: 300px;
    margin-right: 20px;
  }
  .el-table {
    .change-customer {
      margin-right: 5px;
    }
    .change-status {
      margin-right: 5px;
    }
    .banned {
      text-decoration: line-through;
      color: #999;
    }
  }
}
</style>