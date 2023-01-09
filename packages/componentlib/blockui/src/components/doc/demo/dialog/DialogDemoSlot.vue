<demo>
插槽传参形式对话框
</demo>
<template>
  <Dialog v-model:visible="visible"
          :closeOnClickOverlay="closeOnClickOverlay"
          :confirmFn="confirmFn">
    <template v-slot:title>
      <strong>对话框标题</strong>
    </template>
    <template v-slot:content>
      <div>对话框内容1</div>
      <div>对话框内容2</div>
    </template>
  </Dialog>
  <Button @click="toggle">showDialog</Button>
</template>

<script lang="ts">
import {ref} from 'vue';
import {Button,Dialog} from '../../../../lib/index.ts';

export default {
  components:{ Button,Dialog },
  setup(){
    const visible = ref(false)
    const closeOnClickOverlay = ref(true)
    const toggle = () => {
      visible.value = !visible.value
    }
    const confirmFn = () => {
      return true
    }
    return {visible,closeOnClickOverlay,toggle,confirmFn}
  }
}
</script>