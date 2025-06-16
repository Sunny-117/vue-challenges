<script setup lang="ts">
import { useFormStore } from '../../stores/form'
const formStore = useFormStore()
</script>

<template>
  <div>
    form builder body {{ formStore.formBuilderData[1].value }}
    <input v-on:change="(ev) => formStore.update('body', (ev.target as HTMLInputElement).value)" />
  </div>
</template>

<style scoped></style>
