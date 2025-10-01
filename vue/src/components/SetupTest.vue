<template>
  <div>
    <Setup1 ref="setup1" />
    <Setup2 ref="setup2" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, useTemplateRef } from "vue";
import Setup1 from "./Setup1.vue";
import Setup2 from "./Setup2.vue";

const refS1 = useTemplateRef("setup1");
const refS2 = useTemplateRef("setup2");

onMounted(() => {
  // 访问 Setup1 和 Setup2 的实例
  console.log("Setup1 instance:", refS1.value);
  console.log("Setup2 instance:", refS2.value);
});
// ! 借助 vite-plugin-inspect 看编译后结果
</script>

<style scoped></style>
