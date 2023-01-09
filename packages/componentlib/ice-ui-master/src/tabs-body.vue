<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'IceTabsBody',
  inject:['eventBus'],
  created() {
  }
}
</script>
<style></style>