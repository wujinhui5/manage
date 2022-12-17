<template>
  <div class="all-customer">
    <!-- 搜索 -->
    <search @handleReset="handleResetSearch" @handleSearch="handleSearch">
      <el-input
        class="search"
        placeholder="请输入用户名或地址"
        v-model="queryList.key"
        clearable
      >
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </search>
    <add></add>
    <!-- 表格 -->
    <el-table :data="users" :row-class-name="isBanned" border>
      <el-table-column label="出生日期" prop="date"> </el-table-column>
      <el-table-column label="姓名" prop="name"> </el-table-column>
      <el-table-column label="地址" prop="address"> </el-table-column>
      <el-table-column label="操作" width="199">
        <template slot-scope="scope">
          <!-- 封禁与解封 -->
          <el-button
            v-if="scope.row.status"
            size="mini"
            type="danger"
            @click="handleChangeStatus(scope.row.uid)"
            >封禁</el-button
          >
          <el-button
            v-if="!scope.row.status"
            size="mini"
            type="success"
            @click="handleChangeStatus(scope.row.uid)"
            >解封</el-button
          >
          <!-- 修改 -->
          <el-button
            size="mini"
            style="margin-right: 10px"
            @click="handleChangeCustomer(scope.row)"
            >编辑</el-button
          >
          <!-- 删除 -->
          <el-button
            type="danger"
            style="margin: 5px 0 0"
            size="mini"
            @click="handleDeleteCustomer(scope.row.uid)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 修改用户信息对话框 -->
    <el-dialog title="修改用户信息" :visible.sync="changeInfoDialogVisible">
      <el-form
        :model="changeInfoDialogForm"
        ref="form"
        :rules="changeInfoDialogFormRules"
        status-icon
      >
        <el-form-item label="姓名" label-width="120px" prop="name">
          <el-input
            v-model="changeInfoDialogForm.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="地址" label-width="120px" prop="address">
          <el-input
            v-model="changeInfoDialogForm.address"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="活动时间" label-width="120px">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="changeInfoDialogForm.date"
          ></el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="changeInfoDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateChangeCustomer"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <!-- 分页 -->
    <el-pagination
      @current-change="changePage"
      :current-page.sync="queryList.currentPage"
      :page-size="queryList.pageSize"
      layout="prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import Add from "@/components/tableListAddBox";
import Search from "@/components/tableFilter";
import {
  getAllCustomersApi,
  changeCustomerInfoApi,
  changeStatusApi,
  deleteCustomerApi,
} from "@/utils/customers";

const defaultQueryList = {
  currentPage: 1,
  pageSize: 5,
  key: "",
};
export default {
  components: { Add, Search },
  data() {
    return {
      users: [],
      total: 0,
      queryList: { ...defaultQueryList },
      changeInfoDialogVisible: false,
      changeInfoDialogForm: {},
      changeInfoDialogFormRules: {
        name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        address: [{ required: true, message: "地址不能为空", trigger: "blur" }],
      },
    };
  },
  created() {
    this.getAllCustomer();
  },
  methods: {
    // 获取用户列表
    getAllCustomer() {
      getAllCustomersApi(this.queryList)
        .then((res) => {
          let data = JSON.parse(res.data);
          if (data.meta.status === 200) {
            let { total, list } = data.data;
            this.users = list;
            this.total = total;
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
      this.queryList.currentPage = currentPage;
      this.getAllCustomer();
    },
    // 搜索
    handleSearch() {
      this.queryList.currentPage = 1;
      this.getAllCustomer();
    },
    // 重置搜索条件
    handleResetSearch() {
      this.queryList = { ...defaultQueryList };
    },
    // 根据数据添加类名
    isBanned(value) {
      if (!value.row.status) {
        return "banned";
      }
      return "";
    },
    // 修改用户账号状态
    handleChangeStatus(uid) {
      changeStatusApi(uid)
        .then((res) => {
          let data = JSON.parse(res.data);
          if (data.meta.status === 200) {
            this.$message.success(data.meta.msg);
            this.getAllCustomer();
          } else this.$message.error(data.meta.msg);
        })
        .catch((err) => {
          this.$message.error(err);
        });
    },
    // 点击修改按钮
    handleChangeCustomer(row) {
      this.changeInfoDialogForm = { ...row };
      this.changeInfoDialogVisible = true;
    },
    // 确认修改
    updateChangeCustomer() {
      this.$refs.form.validate((valid) => {
        if (!valid) return;
        let { changeInfoDialogForm: form, $message, getAllCustomer } = this;
        form.date = this.formatDate(form.date);
        changeCustomerInfoApi(form)
          .then((res) => {
            let data = JSON.parse(res.data);
            if (data.meta.status === 200) {
              $message.success(data.meta.msg);
              getAllCustomer();
            } else $message.error(data.meta.msg);
          })
          .catch((err) => $message.error(err));
        this.changeInfoDialogVisible = false;
      });
    },
    // 格式化时间
    formatDate(date) {
      let ans = date;
      if (typeof date != "string") {
        ans = [date.getFullYear(), date.getMonth() + 1, date.getDate()].join(
          "-"
        );
      }
      return ans;
    },
    // 删除确认
    handleDeleteCustomer(uid) {
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.updateDeleteCustomer(uid);
        })
        .catch(() => {});
    },
    // 删除用户
    updateDeleteCustomer(uid) {
      deleteCustomerApi(uid)
        .then((res) => {
          let data = JSON.parse(res.data);
          if (data.meta.status === 200) {
            this.$message.success(data.meta.msg);
            this.getAllCustomer();
          } else this.$message.error(data.meta.msg);
        })
        .catch((err) => this.$message.error(err));
    },
  },
};
</script>

<style lang="less" scoped>
.all-customer {
  .el-table {
    &/deep/.banned {
      text-decoration: line-through;
      color: #999;
    }
  }
}
</style>