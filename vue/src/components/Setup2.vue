<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="inc">count: {{ count }}</button>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  setup(props, { expose }) {
    // expose()
    const msg = "Hello, Vue 3 with TypeScript!";
    const count = ref(0);
    function inc() {
      count.value++;
    }
    return {
      msg,
      count,
      inc,
    };
  },
};
</script>

<style scoped></style>
