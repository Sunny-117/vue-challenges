<template>
  <DocDemo title="Button 按钮"
           title-detail="按钮用于开始一个即时操作。"
           use-detail="标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。"
  >
    <Demo :component="ButtonDemoNormal"/>
    <Demo :component="ButtonDemoSize"/>
    <Demo :component="ButtonDemoLevel"/>
    <Demo :component="ButtonDemoDisable"/>
    <Demo :component="ButtonDemoLoading"/>
  </DocDemo>
</template>

<script lang="ts">
import ButtonDemoNormal from './demo/button/ButtonDemoNormal.vue';
import ButtonDemoSize from './demo/button/ButtonDemoSize.vue';
import ButtonDemoLevel from './demo/button/ButtonDemoLevel.vue';
import ButtonDemoDisable from './demo/button/ButtonDemoDisable.vue';
import ButtonDemoLoading from './demo/button/ButtonDemoLoading.vue';
import Demo from '../Demo.vue';
import DocDemo from './DocDemo.vue';
export default {
  components: {Demo,DocDemo},
  setup() {
    return{ButtonDemoNormal,ButtonDemoSize,ButtonDemoLevel,ButtonDemoDisable,ButtonDemoLoading}
  }
}
</script>
