<template>
  <div class="container">
    <input :value="text" @input="handleUpdate" />
    <p class="result">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { debounce } from "../utils/debounce";
import { debounceRef } from "../utils/debounceRef";

// const text = ref("");
// 写法1
// let t;
// function handleUpdate(e: any) {
//   clearTimeout(t);
//   setTimeout(() => {
//     text.value = e.target.value;
//   }, 500);
// }
// 封装1
// const update = (e) => (text.value = e.target.value);
// const handleUpdate = debounce(update, 500);
// 封装2：自定义ref
const text = debounceRef("");
const handleUpdate = (e: any) => (text.value = e.target.value);
</script>

<style scoped></style>
