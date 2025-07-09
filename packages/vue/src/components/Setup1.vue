<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="inc">count: {{ count }}</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const msg = "Hello, Vue 3 with TypeScript!";
const count = ref(0);
function inc() {
  count.value++;
}
defineExpose({
  count,
});
</script>

<style scoped></style>
