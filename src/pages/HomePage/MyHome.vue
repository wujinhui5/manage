<template>
  <div class="my-home">
    <!-- logo -->
    <div class="logo">
      <img src="@/assets/logo.png" alt="logo" />
      <h3 class="display-none">欢迎登录后台管理系统</h3>
    </div>
    <!-- 销量统计数据总计 -->
    <div class="total-layout">
      <el-row :gutter="20">
        <el-col :span="8">
          <router-link class="total-frame" to="/salesdata/sale">
            <i class="el-icon-s-order"></i>
            <div class="total-title">今日订单总数</div>
            <div class="total-value big-font-one">200</div>
          </router-link>
        </el-col>
        <el-col :span="8">
          <router-link class="total-frame" to="/salesdata/shopsales">
            <i class="el-icon-coin"></i>
            <div class="total-title">今日累计销售额</div>
            <div class="total-value big-font-one">￥5000.00</div>
          </router-link>
        </el-col>
        <el-col :span="8">
          <router-link class="total-frame" to="/salesdata/shopsales">
            <i class="el-icon-coin"></i>
            <div class="total-title">7天总销售额</div>
            <div class="total-value big-font-one">￥50000.00</div>
          </router-link>
        </el-col>
      </el-row>
    </div>
    <!-- 待做事项 -->
    <div class="un-handle-layout">
      <h3 class="layout-title big-font-one">待处理事务</h3>
      <div class="content">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="item">
              <span class="font-medium fl">待付款订单</span>
              <span class="color-danger fr">(10)</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="item">
              <span class="font-medium fl">已完成订单</span>
              <span class="color-danger fr">(10)</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="item">
              <span class="font-medium fl">待确认收货订单</span>
              <span class="color-danger fr">(10)</span>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="item">
              <span class="font-medium fl">待发货订单</span>
              <span class="color-danger fr">(10)</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="item">
              <span class="font-medium fl">新缺货登记</span>
              <span class="color-danger fr">(10)</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="item">
              <span class="font-medium fl">待处理退款申请</span>
              <span class="color-danger fr">(10)</span>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="item">
              <span class="font-medium fl">已发货订单</span>
              <span class="color-danger fr">(10)</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="item">
              <span class="font-medium fl">待处理退货订单</span>
              <span class="color-danger fr">(10)</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="item">
              <span class="font-medium fl">广告位即将到期</span>
              <span class="color-danger fr">(10)</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 数据总览 -->
    <div class="overview-layout">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="out-border">
            <h3 class="layout-title big-font-one">商品总览</h3>
            <div style="padding: 40px">
              <el-row>
                <el-col :span="6" class="color-danger overview-item-value"
                  >100</el-col
                >
                <el-col :span="6" class="color-danger overview-item-value"
                  >400</el-col
                >
                <el-col :span="6" class="color-danger overview-item-value"
                  >50</el-col
                >
                <el-col :span="6" class="color-danger overview-item-value"
                  >500</el-col
                >
              </el-row>
              <el-row class="font-medium">
                <el-col :span="6" class="overview-item-title">已下架</el-col>
                <el-col :span="6" class="overview-item-title">已上架</el-col>
                <el-col :span="6" class="overview-item-title">库存紧张</el-col>
                <el-col :span="6" class="overview-item-title">全部商品</el-col>
              </el-row>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="out-border">
            <h3 class="layout-title big-font-one">用户总览</h3>
            <div style="padding: 40px">
              <el-row>
                <el-col :span="6" class="color-danger overview-item-value"
                  >100</el-col
                >
                <el-col :span="6" class="color-danger overview-item-value"
                  >200</el-col
                >
                <el-col :span="6" class="color-danger overview-item-value"
                  >1000</el-col
                >
                <el-col :span="6" class="color-danger overview-item-value"
                  >5000</el-col
                >
              </el-row>
              <el-row class="font-medium">
                <el-col :span="6" class="overview-item-title">今日新增</el-col>
                <el-col :span="6" class="overview-item-title">昨日新增</el-col>
                <el-col :span="6" class="overview-item-title">本月新增</el-col>
                <el-col :span="6" class="overview-item-title">会员总数</el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- <MyCalendar /> -->
  </div>
</template>

<script>
// import MyCalendar from "./components/MyCalendar";

export default {
  // components: { MyCalendar },
};
</script>

<style lang="less" scope>
.my-home {
  margin: 0 auto;
  max-width: 900px;
  // min-width: 830px;
  .logo {
    margin: 0 auto;
    width: 250px;
    height: 50px;
    img {
      float: left;
      width: 50px;
      height: 50px;
    }
    h3 {
      float: left;
      font-size: 20px;
      line-height: 50px;
    }
  }
  .total-layout,
  .un-handle-layout,
  .overview-layout {
    margin-top: 20px;
  }
  .total-layout {
    .total-frame {
      position: relative;
      display: block;
      border: 1px solid #dcdfe6;
      border-radius: 5px;
      padding: 20px;
      height: 60px;
      // min-width: 160px;
      text-align: left;
      &:hover .total-title{
        color: #f56c6c;
      }
      i {
        color: rgb(0, 183, 255);
        font-size: 40px;
        line-height: 60px;
      }
      .total-title {
        position: absolute;
        color: #999;
        left: 70px;
        top: 20px;
      }
      .total-value {
        position: absolute;
        color: #666;
        left: 70px;
        top: 50px;
      }
    }
  }
  .un-handle-layout,
  .overview-layout {
    color: #666;
    .layout-title {
      padding: 15px 20px;
      background: #f2f6fc;
    }
    .color-danger {
      color: #f56c6c;
    }
  }
  .un-handle-layout {
    border: 1px solid #dcdfe6;
    .content {
      padding: 20px 40px;
    }
    .item {
      border-bottom: 1px solid #ebeef5;
      height: 40px;
      line-height: 40px;
    }
  }
  .overview-layout {
    .out-border {
      border: 1px solid #dcdfe6;
    }
    .color-danger {
      font-size: 24px;
    }
  }
}
</style>