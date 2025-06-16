<script setup lang="ts">
import { useFormStore } from '../../stores/form'
const formStore = useFormStore()
</script>

<template>
  <div>
    form builder header {{ formStore.formBuilderData[0].value }}
    <input
      v-on:change="(ev) => formStore.update('header', (ev.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style scoped></style>
