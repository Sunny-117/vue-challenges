<template>
  <div>
    <!-- <Foo title="foo-props" /> -->
    <!-- <button @click="changeVis()">显示隐藏</button>
    <div v-if="show">
      <Bar />
    </div>
    <Baz /> -->
    <Echarts />
  </div>
</template>

<script lang="ts">
import { provide, ref } from "vue";

export default {
  setup() {
    let show = ref(true);
    function changeVis() {
      console.log(!show);
    }
    provide("app", "1");
    return {
      show,
      changeVis,
    };
  },
};
</script>

<style>
</style>