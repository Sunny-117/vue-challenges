<script setup lang="ts">
import { useFormStore } from '../../stores/form'
const formStore = useFormStore()
</script>

<template>
  <div>
    form builder footer {{ formStore.formBuilderData[2].value }}
    <input
      v-on:change="(ev) => formStore.update('footer', (ev.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style scoped></style>
