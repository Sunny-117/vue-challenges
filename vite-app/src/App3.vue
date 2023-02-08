<template>
  checked names: {{ showCheckedNames }}
  <div v-for="item in checkedNames" :key="item.name">
    <input type="checkbox" v-model="item.isChecked" /> {{ item.name }}
  </div>

  <!-- <input type="checkbox" v-model="value" /> 广州 -->
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from "vue";

const checkedNames = reactive([
  {
    name: "北京",
    value: "beijing",
    isChecked: false,
  },
  {
    name: "上海",
    value: "shangahi",
    isChecked: true,
  },
  {
    name: "广州",
    value: "guangzhou",
    isChecked: false,
  },
]);
const showCheckedNames = computed(() => {
  return checkedNames
    .filter((item) => {
      return item.isChecked;
    })
    .map((item) => {
      return item.name;
    });
});
watch(showCheckedNames, (newV) => {
  console.log("[ newV ] >", newV);
});
</script>

<style scoped></style>
