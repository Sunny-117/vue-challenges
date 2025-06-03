<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import DirectiveDemo from './components/DirectiveDemo.vue'
import TeleportDemo from './components/TeleportDemo.vue'
import CustomeHookDemo01 from './components/CustomHookDemo01.vue'
// import TheWelcome from './components/TheWelcome.vue'

// 通过异步组件的形式定义
// 之所以 webpack 或者是 vite 能做 chunk，或者是能做 tree shaking，都是得益于 ESM
// commonjs 是不支持 tree shaking 的，因为他的依赖不透明
const AsyncHelloWorld = defineAsyncComponent(() => import('./components/HelloWorld.vue'))

// if (isTrue) {
//   require('')
// }
</script>

<template>
  <!-- <HelloWorld msg="hello" /> -->
  123
  <AsyncHelloWorld msg="async Hello" />
  <DirectiveDemo />
  <TeleportDemo />
  <CustomeHookDemo01 />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
