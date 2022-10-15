<template>
  <div>
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="(item, index) in deletes"
        :key="'items-' + index"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import store from "../store";

export default defineComponent({
  setup() {
    return reactive({
      deletes: computed(() => store.state.deletes)
    });
  }
});
</script>

<style lang="scss" scoped></style>
