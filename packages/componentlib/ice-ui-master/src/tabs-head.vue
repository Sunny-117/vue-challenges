<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:'IceTabsHead',
  inject:['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected',(item,vm)=>{
      let {width,height,top,left} = vm.$el.getBoundingClientRect()
      // console.dir(vm.$el)
      // console.dir(vm.$el.offsetLeft)
      // console.log(width,height,top,left)
      this.$refs.line.style.width = `${width}px`
      // this.$refs.line.style.left = `${left}px`
      this.$refs.line.style.left = `${vm.$el.offsetLeft}px`
    })
  }
}
</script>
<style lang="scss" scoped>
@import "helper";
.tabs-head{
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  position: relative;
  border-bottom: solid 1px $tabs-border-color;
  > .line{
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
    transition: all 350ms;
  }
  > .actions-wrapper{
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
  }
}
</style>