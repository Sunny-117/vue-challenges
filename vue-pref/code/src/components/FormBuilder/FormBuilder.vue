<script setup lang="ts">
import { ref } from 'vue'
import FormBuilderHeader from './FormBuilderHeader.vue'
import FormBuilderBody from './FormBuilderBody.vue'
import FormBuilderFooter from './FormBuilderFooter.vue'

// const formBuilderData = ref({
//   header: '',
//   body: '',
//   footer: ''
// })
const formBuilderData = ref([
  {
    type: 'header',
    value: ''
  },
  {
    type: 'body',
    value: ''
  },
  {
    type: 'footer',
    value: ''
  }
])

defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <div>
      <FormBuilderHeader
        :value="formBuilderData[0].value"
        v-on:change="
          (val) =>
            // 这样写是非常影响性能的，因为每次都会重新渲染整个组件
            (formBuilderData = formBuilderData.map((item) =>
              item.type === 'header' ? { ...item, value: val } : item
            ))
        "
      />
      <FormBuilderBody
        :value="formBuilderData[1].value"
        v-on:change="
          (val) =>
            // 这样写是非常影响性能的，因为每次都会重新渲染整个组件
            (formBuilderData = formBuilderData.map((item) =>
              item.type === 'body' ? { ...item, value: val } : item
            ))
        "
      />
      <FormBuilderFooter
        :value="formBuilderData[2].value"
        v-on:change="
          (val) =>
            // 这样写是非常影响性能的，因为每次都会重新渲染整个组件
            (formBuilderData[2].value = val)
        "
      />
    </div>
  </div>
</template>

<style scoped></style>
