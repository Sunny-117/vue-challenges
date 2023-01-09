<template>
  <DocDemo title="Dialog 对话框" title-detail="模态对话框。" use-detail="需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Dialog 在当前页面正中打开一个浮层，承载相应的操作。">
    <Demo :component="DialogDemoSlot" />
    <Demo :component="DialogDemoFn"/>
  </DocDemo>
</template>

<script lang="ts">
import Dialog from '../../lib/Dialog.vue';
import Button from '../../lib/Button.vue';
import DocDemo from './DocDemo.vue';
import Demo from '../Demo.vue';
import DialogDemoSlot from './demo/dialog/DialogDemoSlot.vue';
import DialogDemoFn from './demo/dialog/DialogDemoFn.vue';
export default {
  components:{
    Demo,
    DocDemo,
    Button,
    Dialog
  },
  setup(){
    return {DialogDemoSlot,DialogDemoFn}
  },
}
</script>
