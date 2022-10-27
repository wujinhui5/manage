<template>
  <div class="shop-sales">
    <!-- 面包屑 -->
    <MyBreadcrumb :list="breadcrumb" />
    <div class="salesVolume"></div>
  </div>
</template>

<script>
import MyBreadcrumb from "../../../components/MyBreadcrumb";
import * as echarts from "echarts";

export default {
  components: { MyBreadcrumb },
  data() {
    return {
      breadcrumb: [
        { name: "首页", path: "/" },
        { name: "销量数据" },
        { name: "销量" },
      ],
      option: {
        title: {
          text: "商品销量",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: ["T恤", "牛仔裤", "毛衣", "衬衫", "夹克"],
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "T恤",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "牛仔裤",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "毛衣",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "衬衫",
            type: "line",
            stack: "总量",
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "夹克",
            type: "line",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "top",
              },
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      },
    };
  },
  methods: {
    getSalesVolume() {
      let myChart = echarts.init(document.querySelector(".salesVolume"));
      this.option && myChart.setOption(this.option);
    },
  },
  mounted() {
    this.getSalesVolume();
  },
};
</script>

<style scoped>
.salesVolume {
  background: #fff;
  margin-top: 5px;
  padding: 5px;
  border-radius: 4px;
  height: 500px;
}
</style>