<!-- Vue2 -->
<!-- <script lang="ts">
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      title: 'hello title'
    }
  }
}
</script> -->

<!-- Vue3 -->
<script setup lang="ts">
import {
  onMounted,
  onUnmounted,
  onUpdated,
  reactive,
  ref,
  watchEffect,
  watchPostEffect,
  watchSyncEffect
} from 'vue'

defineProps({
  msg: String
})

// 当下 title 不是响应式数据
// 怎样让它成为响应式数据呢？
const title = ref('hello title')

const titleReactive = reactive({ value: 'hello title' })
console.log('🚀 ~ file: HelloWorld.vue:29 ~ titleReactive:', title.value === titleReactive.value)

const reactiveTitle = reactive({ cTitle: 'reactive title' })

// 副作用的侦听
watchEffect(() => console.log(title.value))
// 这俩就是 watchEffect 的语法糖
// watchPostEffect(() => console.log(title.value))
// watchSyncEffect(() => console.log(title.value))

const handleTitleChange = () => {
  title.value = title.value.split('').reverse().join('')
  reactiveTitle.cTitle = reactiveTitle.cTitle.split('').reverse().join('')
}

// 组件挂载的钩子
onMounted(() => {
  console.log('mounted')
  // 这里通常可以去做一些发请求
})

// 组件更新的钩子
onUpdated(() => {
  console.log('updated')
})

// 组件卸载的钩子
onUnmounted(() => {
  console.log('unmounted')
  // 做一些清除的处理
})
</script>

<template>
  <div>{{ msg }}</div>
  <!-- 这里就涉及到一个叫解包的过程 -->
  {{ title }}
  {{ reactiveTitle.cTitle }}
  <button @click="handleTitleChange">change title</button>
</template>

<style scoped></style>
