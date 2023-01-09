<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible=!popoverVisible"></div>
    <div class="popover" v-if="popoverVisible">
      <cascader-item :items="source" />
    </div>
  </div>
</template>
<script>
import cascaderItem from '@/cascader/cascaderItem.vue'
export default {
  name: 'Cascader',
  components: { cascaderItem },
  props: {
    source: {
      type: Array
    }
  },
  data() {
    return {
      popoverVisible: false
    }
  }
}
</script>

<style lang="scss" scoped>
.cascader{
  .trigger{
    border: solid 1px red;
    height: 32px;
    width: 100px;
  }
  .popover{
    border: 2px solid green;
    height: 200px;
    display: flex;
  }
}
</style>