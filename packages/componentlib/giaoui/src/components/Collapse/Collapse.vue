<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Provide, Vue} from "vue-property-decorator"

  @Component
  export default class Collapse extends Vue {
    @Prop() activeItem!: number
    @Provide() active = this.activeItem
  }
</script>

<style scoped>
  .collapse {
    font-size: 13px;
  }
</style>