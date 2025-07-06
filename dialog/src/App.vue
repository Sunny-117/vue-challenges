<template>
  <Comp v-model="show">
    <h2>自定义内容</h2>
    <p>这里是弹窗内容</p>
  </Comp>
  <button @click="show = true">打开弹窗1</button>
  <button @click="openMsg">打开弹窗2</button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Comp from "./Comp.vue";
import { showMsg } from "./utils";

const show = ref(false);
function openMsg() {
  showMsg("Hello 弹窗", (close) => {
    console.log("关闭回调", close);
  });
}
</script>
