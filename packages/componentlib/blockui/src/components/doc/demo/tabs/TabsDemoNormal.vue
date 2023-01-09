<demo>
基本用法
</demo>
<template>
  <Tabs v-model:selected="selected" >
    <div title="导航1">内容1</div>
    <div title="导航2">内容2</div>
  </Tabs>
</template>

<script lang="ts">
import {Tabs} from '../../../../lib/index.ts';
import {ref} from 'vue';
export default {
  components:{Tabs},
  setup(){
    const selected = ref('导航1')
    return {selected}
  }
}
</script>
