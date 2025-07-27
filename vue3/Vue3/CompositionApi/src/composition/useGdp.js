import { computed, ref, watch } from "vue";
import gsap from "gsap";

const colors = ["#334552", "#B34335", "#6E9FA5", "#A2C3AC", "#C8846C"];
export default function useGdp(gdpRef, maxSize) {
  // 本demo练习的核心：
  // gdpRef根据属性进行某种依赖的话，某些响应式数据依赖某些属性的话，处理方法  依赖关系：bars-->gdpRef --> props.gdp
  const maxValue = computed(() => {
    if (gdpRef.value.length) {
      return Math.max(...gdpRef.value.map((it) => it.value));//所有value的最大值
    }
    return 0;//没有length
  });
  const bars = ref([]);// 我要把他从当前状态变成目标值，需要用watchEffect
  // 条的最新状态（目标状态值）
  const barsTarget = computed(() => {
    return gdpRef.value.map((it, i) => ({
      ...it,
      color: colors[i % colors.length],
      size: (it.value / maxValue.value) * maxSize,
      // 比例
    }));
  });

  watch(
    barsTarget,
    () => {
      // 变化动画
      // 将bars变化到barsTarget
      for (let i = 0; i < barsTarget.value.length; i++) {
        if (!bars.value[i]) {//没有值
          bars.value[i] = {//赋值：初始值
            ...barsTarget.value[i],
            size: 0,
            value: 0,
          };
        }
        // bars.value[i] 中的属性 逐步变化到 barsTarget.value[i]
        gsap.to(bars.value[i], {
          ...barsTarget.value[i],
          duration: 1,
        });
      }
    },
    {
      deep: true,//深度观察
    }
  );

  return {
    bars,
  };
}
