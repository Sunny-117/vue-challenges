<template>
  <Child ref="child"> child slot test </Child>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Child from "./Child.vue";
const child = ref(null);
onMounted(() => {
  console.log("[ child. ] >", child.value);
});
</script>
