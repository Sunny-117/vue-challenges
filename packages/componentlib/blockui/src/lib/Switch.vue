<template>
  <button ref="switchRef" :disabled="disabled" class="block-switch" :class="{'block-checked':value}" @click="toggle">
    <span/>
  </button>
</template>

<script lang="ts">
import {ref,onMounted} from 'vue'
export default {
    props:{ value: Boolean,
      disabled:{
        type:Boolean,
        default:false
      }},
    setup(props,context){
      const switchRef = ref(null)
      const toggle = () => {
       context.emit('update:value',!props.value)
      }
      onMounted(()=>{
        if (props.disabled){
          switchRef.value.style.cursor = 'not-allowed'
        }
      })

      return {toggle,switchRef}
    }
}
</script>

<style lang="scss">
  $h: 22px;
  $h2: $h - 4px;
  .block-switch{
    height: $h;
    width: $h*2;
    border: none;
    background: #bfbfbf;
    border-radius: $h/2;
    position: relative;
    transition: all 250ms ease;
    >span{
      position: absolute;
      top: 2px;
      left: 2px;
      height: $h2;
      width: $h2;
      background:white;
      border-radius: $h2 / 2;
      transition: all 250ms ease;
    }
    &.block-checked{
      background: #1890ff;
      &:active{
        > span {width: $h2 + 4px; margin-left: -4px;}
      }
      > span{
        left: calc(100% - #{$h2} - 2px);
      }
    }
    &:focus{
      outline: none;
    }
    &:active{
      > span {width: $h2 + 4px;}
    }
  }
</style>