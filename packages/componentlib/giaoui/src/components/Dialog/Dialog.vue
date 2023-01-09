<template>
  <transition name="fade">
    <div class="dialog" v-show="isVisible">
      <div class="main">
        <div class="header">
          提示
          <button @click="$emit('update:isVisible', !isVisible)" class="close"></button>
        </div>
        <div class="content">
          <slot/>
        </div>
        <div class="footer">
          <Button @click="$emit('update:isVisible', !isVisible)" type="danger">取消</Button>
          <Button @click="$emit('update:isVisible', !isVisible)" type="primary">确定</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator"
  import Button from "../Button/Button.vue"

  @Component({
    components: {Button}
  })
  export default class Dialog extends Vue {
    @Prop(Boolean) isVisible!: boolean
  }
</script>

<style lang="scss" scoped>
  @mixin centerFlex {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }

  .dialog {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, .3);
    z-index: 10;
    @include centerFlex;

    .main {
      width: 40%;
      background: #fff;
      margin: 0 auto;
      padding: 16px;
      border-radius: 6px;
      box-shadow: 0 0 4px 0 rgba(0, 0, 0, .3);
    }

    .header {
      font-size: 18px;
      @include centerFlex;

      .close {
        margin-left: auto;
        @include centerFlex;
        outline: none;
        border: none;
        cursor: pointer;
        padding: 20px;
        background: none;

        &::before, &::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 1px;
          display: block;
          background-color: #333333;
          transform: rotate(45deg);
        }

        &::after {
          transform: rotate(-45deg);
        }
      }
    }

    .footer {
      display: flex;
      justify-content: flex-end;

      > :last-child {
        margin-left: 10px;
      }
    }
  }
</style>
