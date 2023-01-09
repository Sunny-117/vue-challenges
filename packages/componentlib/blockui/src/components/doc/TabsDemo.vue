<template>
  <DocDemo title="Tabs 标签页" titleDetail="选项卡切换组件。" use-detail="提供平级的区域将大块内容进行收纳和展现，保持界面整洁。">
<Demo :component="TabsDemoNormal"/>
    <Demo :component="TabsDemoDisabled"/>
  </DocDemo>



</template>

<script lang="ts">

import DocDemo from './DocDemo.vue';
import Demo from '../Demo.vue';
import TabsDemoNormal from './demo/tabs/TabsDemoNormal.vue';
import TabsDemoDisabled from './demo/tabs/TabsDemoDisabled.vue';
  export default {
    components: {Demo,DocDemo},
    setup(){
      return {TabsDemoNormal,TabsDemoDisabled}
    }
  }
</script>