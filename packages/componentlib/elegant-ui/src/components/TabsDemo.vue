<template>
  <h1>Tabs 示例</h1>
  <Demo :component="TabsDemo" />
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import TabsDemo from "./Tabs.demo.vue";
export default {
  components: { Demo },
  setup() {
    return { TabsDemo };
  },
};
</script>
