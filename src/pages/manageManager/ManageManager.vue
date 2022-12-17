<template>
  <div class="manage-user">
    <!-- 搜索 -->
    <search @handleReset="handleResetSearch" @handleSearch="handleSearch">
      <el-input
        class="search"
        placeholder="请输入用户uid或名称"
        v-model="queryList.key"
        clearable
      >
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </search>
    <!-- 添加管理员-->
    <add><AddAcount @updata="getUsers" /></add>
    <!-- 管理员列表 -->
    <el-table :data="usersData" style="width: 100%" border>
      <el-table-column prop="index" label="编号" width="60"  align="center"></el-table-column>
      <el-table-column prop="uid" label="uid" align="center"> </el-table-column>
      <el-table-column prop="name" label="用户名" align="center"> </el-table-column>
      <el-table-column prop="role" label="权限" align="center"> </el-table-column>
      <el-table-column label="操作" width="145" align="center">
        <template slot-scope="scope">
          <template v-if="$store.state.user.uid != usersData[scope.$index].uid">
            <!-- 修改管理员信息弹窗 -->
            <el-button
              size="mini"
              @click="handleChangeManager(scope.row)"
              >修改</el-button
            >
            <!-- 删除管理员 -->
            <el-button
              size="mini"
              type="danger"
              @click="handleDeleteAcount(scope.row.uid)"
              >删除</el-button
            >
          </template>
          <template v-else>我</template>
        </template>
      </el-table-column>
    </el-table>
    <!-- 修改管理员信息对话框 -->
    <el-dialog title="修改管理员信息" :visible.sync="changeInfoDialogVisible">
      <el-form :model="changeInfoDialogForm">
        <el-form-item label="用户名" label-width="120px">
          <el-input
            v-model="changeInfoDialogForm.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="权限" label-width="120px">
          <el-select
            v-model="changeInfoDialogForm.role"
            placeholder="请选择管理员权限"
          >
            <el-option label="admin" value="admin"></el-option>
            <el-option label="userManager" value="userManager"></el-option>
            <el-option label="shopManager" value="shopManager"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="changeInfoDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="completeChange">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 分页 -->
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="queryList.currentPage"
      :page-size="queryList.pageSize"
      layout="prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import AddAcount from "./components/AddAcount";
import Add from "@/components/tableListAddBox";
import Search from "@/components/tableFilter";
import { getUsersApi, deleteUserApi, changeUserInfoApi } from "@/utils";

const defaultQueryList = {
  currentPage: 1,
  pageSize: 5,
  key: "",
};
export default {
  components: { AddAcount, Add, Search },
  data() {
    return {
      usersData: [],
      total: 0,
      changeInfoDialogVisible: false,
      createAcountVisible: false,
      changeInfoDialogForm: {},
      queryList: { ...defaultQueryList },
      search: "",
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    // 获取管理员列表
    getUsers() {
      getUsersApi(this.queryList)
        .then((res) => {
          let data = JSON.parse(res.data);
          if (data.meta.status === 200) {
            let { list, total } = data.data;
            this.usersData = list;
            this.total = total;
          } else {
            this.$message.error(data.meta.msg);
          }
        })
        .catch((err) => {
          this.$message.error(err);
        });
    },
    // 切换页码
    handleCurrentChange(page) {
      this.queryList.currentPage = page;
      this.getUsers()
    },
    // 搜索
    handleSearch() {
      this.queryList.currentPage = 1;
      this.getUsers();
    },
    // 重置搜索条件
    handleResetSearch() {
      this.queryList = { ...defaultQueryList };
    },
    // 点击修改用户信息
    handleChangeManager(manager) {
      this.changeInfoDialogForm = { ...manager };
      this.changeInfoDialogVisible = true;
    },
    // 确定修改
    completeChange() {
      changeUserInfoApi(this.changeInfoDialogForm)
        .then((res) => {
          let data = JSON.parse(res.data);
          if (data.meta.status === 200) {
            this.$message.success(data.meta.msg);
            this.getUsers();
          } else {
            this.$message.error(data.meta.msg);
          }
        })
        .catch((err) => {
          this.$message.error(err);
        });
      this.changeInfoDialogVisible = false;
    },
    // 删除确认
    handleDeleteAcount(uid) {
      this.$confirm("此操作将永久删除该管理员, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.updateDeleteAcount(uid);
        })
        .catch(() => {});
    },
    // 删除管理员账号
    updateDeleteAcount(uid) {
      deleteUserApi(uid)
        .then((res) => {
          let data = JSON.parse(res.data);
          if (data.meta.status === 200) {
            this.$message.success(data.meta.msg);
            this.getUsers();
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

<style lang="less" scoped>
.change-user-info {
  float: left;
  margin-right: 5px;
}
</style>