<template>
  <div>firstName: {{ firstName }} lastName: {{ lastName }}</div>
  <p>fullName: {{ fullName }}</p>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";
let firstName = ref("demo1");
let lastName = ref("demo2");
const fullName = computed({
  get() {
    return firstName.value + lastName.value;
  },
  set(newValue) {
    [firstName.value, lastName.value] = newValue.split("");
  },
});
</script>

<style scoped></style>
