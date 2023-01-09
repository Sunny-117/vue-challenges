<template>
  <div class="cascaderItem">
    <div class="left">
      <div class="label" v-for="item in items" @click="leftSelected = item">
        {{item.name}}
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <cascader-item :items="rightItems" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'cascaderItem',
  props: {
    items: {
      type: Array
    }
  },
  data() {
    return {
      leftSelected: null
    }
  },
  computed: {
    rightItems() {
      if(this.leftSelected && this.leftSelected.children) {
        return this.leftSelected.children
      } else {
        return null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cascaderItem{
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  .left{border: solid 1px red;}
  .right{margin-top: -1px;}
}
</style>