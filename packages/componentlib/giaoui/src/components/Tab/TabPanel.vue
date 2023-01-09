<template>
  <div class="tab-panel" v-show="visible">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator"

  @Component
  export default class TabPanel extends Vue {
    visible = false
    @Prop({required: true}) readonly label!: string
    @Prop(String) readonly value!: string
  }
</script>

<style scoped>
  .tab-panel {
    padding: 16px 0;
    font-size: 14px;
  }
</style>
