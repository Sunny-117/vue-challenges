<demo>
支持disabled
</demo>
<template>
  <Tabs v-model:selected="selected" :disabled="disabled">
    <div title="导航1">内容1</div>
    <div title="导航2">内容2</div>
    <div title="导航3">内容3</div>
  </Tabs>
</template>

<script lang="ts">
import {Tabs} from '../../../../lib/index.ts';
import {ref} from 'vue';
export default {
  components:{Tabs},
  setup(){
    const selected = ref('导航1')
    const disabled = ref(['导航2'])
    return {selected,disabled}
  }
}
</script>
