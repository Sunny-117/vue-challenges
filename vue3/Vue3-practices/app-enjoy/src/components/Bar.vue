<template>
  <div>count: {{ count }}</div>
  <button @click="countAdd">点击</button>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import { watchEffect } from "@vue/runtime-core";

export default {
  setup() {
    const count = ref(0);
    function countAdd() {
      count.value++;
    }
    watchEffect((onCleanUp) => {
      onCleanUp(() => {
        console.log("reset");
      });
      // 触发get，依赖收集，收集函数
      console.log(count.value);
    });
    return {
      count,
      countAdd,
    };
  },
};
</script>

<style scoped>
</style>