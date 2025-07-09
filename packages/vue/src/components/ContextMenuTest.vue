<template>
  <div class="container">
    <ContextMenu
      class="block"
      :menu="[
        { label: '编辑' },
        { label: '删除' },
        { label: '复制' },
        { label: '粘贴' },
        { label: '选择全部' },
      ]"
      @select="choose1 = $event.label"
    >
      <h2>{{ choose1 }}</h2>
    </ContextMenu>

    <ContextMenu
      class="block"
      :menu="[
        { label: '编辑0' },
        { label: '删除0' },
        { label: '复制0' },
        { label: '粘贴0' },
        { label: '选择全部0' },
      ]"
      @select="choose1 = $event.label"
    >
      <h2>{{ choose1 }}</h2>
      <ContextMenu
        class="block"
        :menu="[
          { label: '编辑1' },
          { label: '删除1' },
          { label: '复制1' },
          { label: '粘贴1' },
          { label: '选择全部1' },
        ]"
        @select="choose1 = $event.label"
      >
        <h2>{{ choose1 }}</h2>
      </ContextMenu>
    </ContextMenu>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ContextMenu from "./ContextMenu.vue";
const choose1 = ref("");
const props = defineProps({
  menu: {
    type: Array,
    default: () => [],
  },
});
// If you want to specify the event type:
const emit = defineEmits<{
  (event: "select", payload: any): void;
}>();
</script>

<style scoped></style>
