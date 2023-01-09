<template>
  <DocDemo title="Switch 开关"
            use-detail="需要表示开关状态/两种状态之间的切换时。"
  >
    <Demo :component="SwitchDemo1"/>
    <Demo :component="SwitchDemo2"/>
  </DocDemo>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import SwitchDemo1 from './demo/switch/SwitchDemo1.vue';
import SwitchDemo2 from './demo/switch/SwitchDemo2.vue';
import DocDemo from './DocDemo.vue';
export default {
  components: {DocDemo, Demo},
  setup(){
    return {SwitchDemo1,SwitchDemo2}
  }
}
</script>
