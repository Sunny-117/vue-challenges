<template>
  <h1>全选</h1>
  <label for="checkall">全选</label>
  <input type="checkbox" :checked="isCheckedAll" @change="handleAllChange" />
  <div v-for="item in checkedNames" :key="item.name">
    <input type="checkbox" v-model="item.isChecked" /> {{ item.name }}
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";

let checkedNames = reactive([
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
let isCheckedAll = computed(() => {
  return checkedNames.every((item) => item.isChecked);
});
const handleAllChange = (e) => {
  // 已经全选
  if (isCheckedAll.value) {
    console.log("[ 已经是全选，应该全部取消 ] >");
    checkedNames.forEach((item) => {
      item.isChecked = false;
    });
  } else {
    // 部分没有选 应该全选中
    // checkedNames = checkedNames.map((item) => {
    //   return {
    //     ...item,
    //     isChecked: true,
    //   };
    // });
    // 上面的方法不可：
    // 1. 没有响应式的新数组
    // 2. 没有对原来的响应式数据变化
    checkedNames.forEach((item) => {
      item.isChecked = true;
    });
  }
};
</script>

<style scoped></style>
