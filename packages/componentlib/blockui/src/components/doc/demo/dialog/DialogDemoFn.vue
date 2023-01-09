<demo>
函数传参形式对话框
</demo>
<template>
  <Button @click="showDialog">showDialog</Button>
</template>

<script lang="ts">
import {Button,openDialog} from '../../../../lib/index.ts';
export default {
  components:{
    Button
  },
  setup(){
    const showDialog = () => {
      openDialog({
        visible:true,
        title:'对话框标题',
        content:'对话框内容',
        closeOnClickOverlay:true,
        confirmFn:()=>{return true}})
    }
    return {showDialog}
  }
}
</script>