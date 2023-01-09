<demo>
基本用法
</demo>
<template>
  <Switch v-model:value="checked" />
</template>

<script lang="ts">
import {Switch} from '../../../../lib/index.ts'
import {ref} from 'vue'
export default {
  components:{
    Switch
  },
  setup(){
    const checked = ref(true)
    return {checked}
  }
}
</script>