<template>
  <div @click="handleClick" class="item" ref="item">
    <div class="item-header">{{header}}</div>
    <div class="item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Inject, Prop, Ref, Vue} from "vue-property-decorator"

  @Component
  export default class CollapseItem extends Vue {
    @Prop(String) readonly header: string | undefined | null
    @Prop(String) readonly name: string | undefined | null
    @Ref("item") readonly item!: HTMLDivElement
    @Inject() readonly active!: number

    handleClick() {
      for (let child of this.item.parentElement!.children) {
        child.classList.remove("active")
      }
      this.item.classList.add("active")
    }

    mounted() {
      if (this.name === this.active.toString()) {
        this.item.classList.add("active")
      }
    }
  }
</script>

<style lang="scss" scoped>
  $line-dd: 1px solid #dddddd;
  $line-30: 1px solid #303030;
  .item {
    border-top: $line-dd;

    &:last-child {
      border-bottom: $line-dd;
    }
  }

  .item-header {
    color: #303030;
    font-weight: 500;
    line-height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;

    &::after {
      content: '';
      display: block;
      width: 6px;
      height: 6px;
      border-top: $line-30;
      border-right: $line-30;
      margin-left: auto;
      transform: rotate(45deg);
      transition: all .4s ease;
    }
  }

  .item.active {
    .item-header::after {
      transform: rotate(135deg);
    }

    .item-content {
      height: auto;
      padding-bottom: 16px;
    }
  }

  .item-content {
    font-size: 14px;
    color: #666;
    height: 0;
    overflow: hidden;
    transition: all .4s ease-in;
  }

</style>
