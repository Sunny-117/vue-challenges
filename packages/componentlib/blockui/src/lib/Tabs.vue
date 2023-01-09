<template>
<div class="block-tabs">
  <div class="block-tabs-nav" ref="containerRef">
    <div class="block-tabs-nav-item"
         v-for="(t,index) in titles" :key="index"
         :class="t === selected ? 'selected' : ''"
         @click="()=>{select(t)}"
         :ref="(el)=>{
           if (t === selected){selectedItem = el}
         }"
         :style="disabled.indexOf(t) >=0 ? 'cursor: not-allowed' : 'cursor:pointer' "
    >
      {{ t }}
    </div>
    <div class="block-tabs-nav-indicator" ref="indicator"/>
  </div>
  <div class="block-tabs-content">
    <component :is="current" :key="selected" class="block-tabs-content-item"/>
  </div>
</div>
</template>

<script lang="ts">
import {computed, ref, watchEffect, onMounted} from 'vue';

export default {
  props: {
    selected: String,
    disabled: {
      type: Array,
      default: []
    }
  },
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== 'div') {
        console.log(tag.type);
        throw new Error('Tabs 的内部必须是 Tab');
      }
    });
    const titles = defaults.map(item => {
      return item.props.title;
    });
    const select = (title: string) => {
      if (props.disabled.indexOf(title) < 0){
        context.emit('update:selected', title);
        return defaults.filter(item => item.props.title === title)[0];
      }
    };
    const current = computed(() => {
      return select(props.selected);
    });
    const indicator = ref(null);
    const containerRef = ref(null);
    const selectedItem = ref(null);
    onMounted(()=>{
      watchEffect(()=>{
        let width = ref(0);
        width.value = selectedItem.value.getBoundingClientRect().width;
        indicator.value.style.width = `${width.value}px`; // 确定下划线的长度
        const containerLeft = (containerRef.value as HTMLDivElement).getBoundingClientRect().left; //确定下划线的位置
        const beSelectedNavLeft = selectedItem.value.getBoundingClientRect().left;
        const indicatorLeft: number = beSelectedNavLeft - containerLeft;
        indicator.value.style.left = `${indicatorLeft}px`;
      },{
        flush: 'post'
      })
    })

    return {defaults, titles, select, current, indicator, containerRef, selectedItem};
  }
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.block-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>