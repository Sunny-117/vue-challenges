

<template>
  <div></div>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ElTree",
  components: { ElTreeNode },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  emits: [
    "check-change",
    "current-change",
    "node-click",
    "node-contextmenu",
    "node-collapse",
    "node-expand",
    "check",
    "node-drag-start",
    "node-drag-end",
    "node-drop",
    "node-drag-leave",
    "node-drag-enter",
    "node-drag-over",
  ],
});
</script>
  
  <style lang="scss" scoped>
</style>