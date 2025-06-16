import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', () => {
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

  function update(type: string, value: string) {
    for (const formData of formBuilderData.value) {
      if (formData.type === type) {
        formData.value = value
      }
    }
  }

  return { formBuilderData, update }
})
