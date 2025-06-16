<script setup lang="ts">
import FormBuilderHeader from './FormBuilderHeader.vue'
import FormBuilderBody from './FormBuilderBody.vue'
import FormBuilderFooter from './FormBuilderFooter.vue'

defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <div>
      <FormBuilderHeader />
      <FormBuilderBody />
      <FormBuilderFooter />
    </div>
  </div>
</template>

<style scoped></style>
