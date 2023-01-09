<template>
  <router-view/>
</template>

<script lang="ts">
import {ref,provide} from 'vue'
import {router} from './router';
export default {
  name: 'App',
  setup(){
    const width = document.documentElement.clientWidth
    // width 大于 500 初始值为 ture 小与500 为 false
    const menuVisible = ref(width > 500)
    provide('menuVisible',menuVisible)
    router.afterEach(()=>{
      if (menuVisible && width <= 500){
        menuVisible.value = false
      }
    })
  }
}
</script>

