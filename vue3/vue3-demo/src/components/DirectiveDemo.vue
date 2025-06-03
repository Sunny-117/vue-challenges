<!-- Vue2 -->
<!-- <script lang="ts">
export default {
  directives: {
    // 定义了一个自定义指令叫 focus
    focus: {
      // 在组件挂载的时候，让 el 获取焦点
      mounted(el) {
        el.focus()
        el.style.boxShadow = '0 0 5px red'
        el.style.border = 'none'
      }
    }
  }
}
</script> -->

<!-- Vue3 -->
<script setup lang="ts">
import { ref } from 'vue'

const vFocus = {
  // 在组件挂载的时候，让 el 获取焦点
  mounted(el: HTMLElement, context: any) {
    const {
      modifiers: { stop }
    } = context

    // const { stop } = modifiers

    if (stop) {
      // event.stopPropagation()
    }
    console.log('🚀 ~ file: DirectiveDemo.vue:26 ~ mounted ~ stop:', stop)
    console.log('🚀 ~ file: DirectiveDemo.vue:23 ~ mounted ~ context:', context)
    el.focus()
    el.style.boxShadow = '0 0 5px red'
    el.style.border = 'none'
  }
}

const value = ref('')
</script>

<template>
  directive demo
  <!-- 叫受控组件 -->
  <input v-focus:click.stop="'baz'" v-model="value" />
  <div>{{ value }}</div>
  <!-- <input v-focus />
  <input v-focus />
  <textarea v-focus></textarea> -->
</template>

<style scoped></style>
