<template>
  <div class="manage-shop">
    <!-- 搜索框 -->
    <el-card class="operate-container" shadow="never">
      <div class="title">
        <i class="el-icon-search"></i>
        <span>筛选搜索</span>
        <el-button
          class="btn-search fr"
          type="primary"
          size="small"
          @click="handleSearch"
          >搜索</el-button
        >
        <el-button class="btn-reset fr" @click="handleResetSearch" size="small">
          重置
        </el-button>
      </div>
      <el-input
        class="search"
        placeholder="请输入内容"
        v-model="search.key"
        clearable
      >
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <el-select v-model="search.state" placeholder="所有商品" clearable>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        >
        </el-option>
      </el-select>
    </el-card>
    <!-- 数据 -->
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>数据列表</span>
      <!-- 添加商品-->
      <AddShop @updata="getShops" />
    </el-card>
    <!-- 商品列表 -->
    <el-table :data="shops" style="width: 100%" border>
      <el-table-column prop="index" label="编号" width="60px" align="center">
      </el-table-column>
      <el-table-column label="商品图片" width="110px" align="center">
        <template slot-scope="scope">
          <img class="shopImg" :src="scope.row.imgUrl" :alt="scope.row.title" />
        </template>
      </el-table-column>
      <el-table-column prop="title" label="商品名"> </el-table-column>
      <el-table-column prop="price" label="价格" width="60px">
      </el-table-column>
      <el-table-column prop="inventory" label="库存" width="60px">
      </el-table-column>
      <el-table-column prop="state" label="状态" width="60px" align="center">
      </el-table-column>
      <el-table-column label="操作" width="138px">
        <template slot-scope="scope">
          <template>
            <!-- 修改商品信息弹窗 -->
            <ChangeShopInfo :currentShop="scope.row" @updata="getShops" />
            <DeleteShop :id="scope.row.shopId" @updata="getShops" />
          </template>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="pagingData.currentPage"
      :page-size="pagingData.pageSize"
      layout="prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import ChangeShopInfo from "./components/ChangeShopInfo";
import AddShop from "./components/AddShop";
import DeleteShop from "./components/DeleteShop";
import { getShopsApi } from "../../../utils/shop";

let requestData = {
  currentPage: 1,
  pageSize: 5,
  state: "",
  key: "",
};

export default {
  components: { ChangeShopInfo, AddShop, DeleteShop },
  data() {
    return {
      breadcrumb: [{ name: "首页", path: "/" }, { name: "商品管理" }],
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
      search: {
        state: "",
        key: "",
      },
      pagingData: {
        currentPage: 1,
        pageSize: 5,
      },
    };
  },
  methods: {
    // 列表项编号
    indexMethod(index) {
      return index + 1;
    },

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
      getShopsApi(requestData)
        .then((res) => {
          let data = JSON.parse(res.data);
          if (data.meta.status === 200) {
            this.shops = data.data;
            this.total = data.total;
            this.verifyState();
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
      requestData.currentPage = this.pagingData.currentPage = page;
      this.getShops();
    },

    // 搜索
    handleSearch() {
      requestData = { ...requestData, ...this.search, currentPage: 1 };
      this.getShops();
    },

    // 重置搜索条件
    handleResetSearch() {
      this.search = { key: "", state: "" };
    },
  },

  created() {
    this.getShops();
  },
};
</script>

<style lang="less" scoped>
.manage-shop {
  background: #fff;
  margin-top: 5px;
  padding: 5px;
  border-radius: 4px;
  .operate-container {
    margin-bottom: 20px;
    .title {
      margin-bottom: 20px;
      .btn-reset {
        margin-right: 10px;
      }
    }
    .search {
      margin-right: 20px;
      width: 200px;
    }
  }
  .add-shop {
    float: right;
    margin-top: -4px;
  }
  .el-table {
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