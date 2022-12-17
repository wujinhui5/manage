
<template>
  <div class="shop-sales">
    <div class="shop-sales-container"></div>
  </div>
</template>

<script>
import * as echarts from "echarts/core";
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import { PieChart } from "echarts/charts";
import { LabelLayout } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout,
]);

export default {
  data() {
    return {
      breadcrumb: [
        { name: "首页", path: "/" },
        { name: "销量数据" },
        { name: "销售额占比" },
      ],
      option: {
        title: {
          text: "销售额占比",
          subtext: "过去一个月",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        legend: {
          type: "scroll",
          orient: "vertical",
          right: 10,
          top: 20,
          bottom: 20,
          data: ["T恤", "牛仔裤", "毛衣", "衬衫", "夹克"],
        },
        series: [
          {
            name: "销售额",
            type: "pie",
            radius: "55%",
            center: ["40%", "50%"],
            data: [
              { name: "T恤", value: 41400 },
              { name: "牛仔裤", value: 5234 },
              { name: "毛衣", value: 15633 },
              { name: "衬衫", value: 9823 },
              { name: "夹克", value: 2972 },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
    };
  },
  methods: {
    createCharts() {
      let myChart = echarts.init(
        document.querySelector(".shop-sales-container")
      );

      this.option && myChart.setOption(this.option);
    },
  },
  mounted() {
    this.createCharts();
  },
};
</script>

<style scoped>
.shop-sales-container {
  background: #fff;
  margin-top: 5px;
  padding: 5px;
  border-radius: 4px;
  height: 500px;
}
</style>