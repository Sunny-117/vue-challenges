import { createApp } from 'vue'
import App from './App.vue'
import ECharts from 'vue-echarts'
import { use } from "echarts/core";
// 手动引入 ECharts 各模块来减小打包体积
import {
    CanvasRenderer
} from 'echarts/renderers'
import {
    BarChart
} from 'echarts/charts'
import {
    GridComponent,
    TooltipComponent
} from 'echarts/components'

use([
    CanvasRenderer,
    BarChart,
    GridComponent,
    TooltipComponent
]);
const app = createApp(App)

// 全局注册组件（也可以使用局部注册）
app.component('v-chart', ECharts)

app.mount('#app')
