<template>
  <div>
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="(item, index) in dones"
        :key="'items-' + index"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import store from "../store";

export default defineComponent({
  setup() {
    return reactive({
      dones: computed(() => store.state.dones)
    });
  }
});
</script>

<style lang="scss" scoped></style>
