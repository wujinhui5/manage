<template>
  <div class="manage-shop">
    <!-- 面包屑 -->
    <MyBreadcrumb :list="breadcrumb" />

    <div class="main">
      <div class="search-and-new">
        <!-- 搜索 -->
        <el-input
          class="search"
          placeholder="请输入内容"
          v-model="search"
          clearable
        >
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <!-- 添加管理员 -->
        <AddShop @updata="getShops" />
      </div>

      <!-- 管理员列表 -->
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column type="index" :index="indexMethod"> </el-table-column>
        <el-table-column prop="name" label="商品名"> </el-table-column>
        <el-table-column prop="price" label="价格" width="60px">
        </el-table-column>
        <el-table-column prop="num" label="库存" width="60px">
        </el-table-column>
        <el-table-column prop="dateOnSale" label="起售时间" width="160px">
        </el-table-column>
        <el-table-column label="操作" width="138px">
          <template slot-scope="scope">
            <template>
              <!-- 修改管理员信息弹窗 -->
              <ChangeShopInfo :currentShop="scope.row" @updata="getShops" />
              <DeleteShop :id="scope.row.id" @updata="getShops" />
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
        :total="shops.length"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import MyBreadcrumb from "../../../components/MyBreadcrumb";
import ChangeShopInfo from "./components/ChangeShopInfo";
import AddShop from "./components/AddShop";
import DeleteShop from "./components/DeleteShop"
import { getShopsApi } from "../../../utils/shop";

export default {
  components: { ChangeShopInfo, AddShop, MyBreadcrumb,DeleteShop },
  data() {
    return {
      breadcrumb: [{ name: "首页", path: "/" }, { name: "商品管理" }],
      shops: [],
      pagingData: {
        currentPage: 1,
        pageSize: 10,
      },
      search: "",
    };
  },
  methods: {
    // 列表项编号
    indexMethod(index) {
      return index + 1;
    },

    // 获取商品数据
    getShops() {
      getShopsApi(this.$store.state.user.uid)
        .then((res) => {
          let data = JSON.parse(res.data);
          if (data.meta.status === 200) {
            this.shops = data.data;
            this.$message.success(data.meta.msg);
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
      this.pagingData.currentPage = page;
    },
  },

  computed: {
    // 根据搜索、页码显示内容
    tableData: function () {
      let targetShops = this.shops.filter((shop) => {
        return shop.name.indexOf(this.search) != -1;
      });
      return targetShops.slice(
        (this.pagingData.currentPage - 1) * this.pagingData.pageSize,
        this.pagingData.currentPage * this.pagingData.pageSize
      );
    },
  },

  created() {
    this.getShops();
  },
};
</script>

<style scoped>
.main {
  background: #fff;
  margin-top: 5px;
  padding: 5px;
  border-radius: 4px;
}

.search-and-new {
  height: 40px;
  margin-bottom: 10px;
}

.search-and-new .search {
  float: left;
  width: 200px;
}

.search-and-new .add-shop {
  float: right;
  margin-top: 6px;
}

.change-shop-info{
  display:inline-block;
  margin-right: 5px;
}
</style>