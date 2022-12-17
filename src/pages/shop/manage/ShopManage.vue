<template>
  <div class="manage-shop">
    <!-- 搜索框 -->
    <search @handleReset="handleResetSearch" @handleSearch="handleSearch">
      <el-input
        class="search"
        placeholder="请输入内容"
        v-model="queryList.key"
        clearable
      >
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <el-select v-model="queryList.state" placeholder="所有商品" clearable>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        >
        </el-option>
      </el-select>
    </search>
    <!-- 添加商品 -->
    <add>
      <el-button size="mini" type="primary">
        <router-link to="/shop/add" style="color:#fff;">添加</router-link>
      </el-button>
    </add>
    <!-- 商品列表 -->
    <el-table :data="shops" style="width: 100%" border>
      <el-table-column prop="index" label="编号" width="60px" align="center">
      </el-table-column>
      <el-table-column label="商品图片" width="110px" align="center">
        <template slot-scope="scope">
          <img class="shopImg" :src="scope.row.imgUrl" :alt="scope.row.title" />
        </template>
      </el-table-column>
      <el-table-column prop="title" label="商品名" align="center">
      </el-table-column>
      <el-table-column label="价格/货号" width="100" align="center">
        <template slot-scope="scope">
          <p>￥{{ scope.row.price }}</p>
          <p>{{ scope.row.shopId }}</p>
        </template>
      </el-table-column>
      <el-table-column
        prop="inventory"
        label="库存"
        width="60px"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="state" label="状态" width="60px" align="center">
      </el-table-column>
      <el-table-column label="操作" width="138px" align="center">
        <template slot-scope="scope">
          <template>
            <!-- 修改商品信息弹窗 -->
            <ChangeShopInfo :currentShop="scope.row" @updata="getShops" />
            <el-button
              size="mini"
              type="danger"
              @click="handleDeleteShop(scope.row.shopId)"
              >删除</el-button
            >
          </template>
        </template>
      </el-table-column>
    </el-table>
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
import ChangeShopInfo from "./components/ChangeShopInfo";
import Add from "@/components/tableListAddBox";
import Search from "@/components/tableFilter";
import { getShopsApi, deleteShopApi } from "@/utils/shop";

let defaultQueryList = {
  currentPage: 1,
  pageSize: 5,
  state: "",
  key: "",
};

export default {
  components: { ChangeShopInfo, Add, Search },
  data() {
    return {
      shops: [],
      total: 0,
      options: [
        {
          value: "checked",
          label: "审核通过",
        },
        {
          value: "uncheck",
          label: "未审核",
        },
        {
          value: "noPass",
          label: "未通过",
        },
      ],
      queryList: { ...defaultQueryList },
    };
  },
  created() {
    this.getShops();
  },
  methods: {
    verifyState() {
      this.shops.forEach((i) => {
        i.state =
          i.state === "checked"
            ? "审核通过"
            : i.state == "uncheck"
            ? "未审核"
            : "不通过";
      });
    },
    // 获取商品数据
    getShops() {
      let { $message, verifyState } = this;
      getShopsApi(this.queryList)
        .then((res) => {
          let data = JSON.parse(res.data);
          if (data.meta.status === 200) {
            this.shops = data.data;
            this.total = data.total;
            verifyState();
          } else $message.error(data.meta.msg);
        })
        .catch((err) => $message.error(err));
    },
    // 切换页码
    handleCurrentChange(page) {
      this.queryList.currentPage = page;
      this.getShops();
    },
    // 搜索
    handleSearch() {
      this.queryList.currentPage = 1;
      this.getShops();
    },
    // 重置搜索条件
    handleResetSearch() {
      this.queryList = { ...defaultQueryList };
    },
    // 删除确认
    handleDeleteShop(id) {
      this.$confirm("此操作将永久删除该商品, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.updateDeleteShop(id);
        })
        .catch(() => {});
    },
    // 删除商品
    updateDeleteShop(id) {
      let { $message, getShops } = this;
      deleteShopApi({ shopId: id })
        .then((res) => {
          let data = JSON.parse(res.data);
          if (data.meta.status === 200) {
            $message.success(data.meta.msg);
            getShops();
          } else $message.error(data.meta.msg);
        })
        .catch((err) => $message.error(err));
    },
  },
};
</script>

<style lang="less" scoped>
.manage-shop {
  .el-table {
    p {
      margin: 12px 0;
    }
    .change-shop-info {
      display: inline-block;
      margin-right: 5px;
    }
    .shopImg {
      width: 80px;
      height: 80px;
    }
  }
}
</style>