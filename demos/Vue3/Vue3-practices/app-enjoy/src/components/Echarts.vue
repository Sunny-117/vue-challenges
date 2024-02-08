<template>
  <div>
    <v-chart class="chart" :option="option" />
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { onMounted, reactive } from "vue";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, defineComponent } from "vue";
use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default defineComponent({
  name: "HelloWorld",
  components: {
    VChart,
  },
  setup: () => {
    axios.get("../api/mock/data.json").then(({ data }) => {
      const res = data.data.rows.map((item: any) => {
        return {
          value: item.id,
          name: item.title,
        };
      });
      console.log(res);
    });
    const arr = reactive([]);
    const option = ref({
      title: {
        text: "Traffic Sources",
        left: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      legend: {
        orient: "vertical",
        left: "left",
        data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"],
      },
      series: [
        {
          name: "Traffic Sources",
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: arr,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    });
    return { option };
  },
});
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>