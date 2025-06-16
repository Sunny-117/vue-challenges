<script setup lang="ts">
defineProps<{
  value: string
}>()

defineEmits(['change'])
</script>

<template>
  <div>
    form builder footer {{ value }}
    <input v-on:change="(ev) => $emit('change', (ev.target as HTMLInputElement).value)" />
  </div>
</template>

<style scoped></style>
