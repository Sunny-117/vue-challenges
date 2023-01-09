<template>
  <div :style="{height: height}" @mouseenter.stop="handleMouseEnter" @mouseleave.stop="handleMouseLeave"
       class="carousel">
    <div class="panels" ref="panels">
      <slot></slot>
    </div>
    <div class="arrows">
      <button @click="shiftPage(getPrevIndex)" class="arrow arrow-prev"></button>
      <button @click="shiftPage(getNextIndex)" class="arrow arrow-next"></button>
    </div>
    <div class="indicators" ref="indicators">
      <span :key="index" v-for="(indicator, index) in indicatorCounts"></span>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Ref, Vue} from "vue-property-decorator"
  import PageAnimation from "../../animation"

  @Component
  export default class Carousel extends Vue {
    indicatorCounts = 0
    intervalId: number | undefined | null
    @Ref() readonly panels!: HTMLDivElement
    @Ref() readonly indicators!: HTMLDivElement
    @Prop({default: "slide", type: String}) readonly type!: string
    @Prop({default: "200px", type: String}) readonly height?: string
    @Prop({default: "mouseenter", type: String}) readonly trigger!: string
    @Prop({default: true, type: Boolean}) readonly autoplay!: boolean
    @Prop({default: 3000, type: Number}) readonly interval!: number

    mounted() {
      this.indicatorCounts = this.$slots.default!.length
      this.panels.children[0].classList.add("active")
      this.$nextTick(() => {
        this.indicators.children[0].classList.add("active")
        this.bindIndicators()
      })
      this.startTimer()
    }

    beforeDestroy() {
      this.pauseTimer()
    }

    shiftPage(fn: Function) {
      let fromIndex = this.getIndex()
      let toIndex = fn()
      this.setPage(fromIndex, toIndex)
      this.setIndicator(toIndex)
    }

    bindIndicators() {
      for (const indicator of this.indicators.children) {
        indicator.addEventListener(this.trigger, (e) => {
          const fromIndex = this.getIndex()
          const toIndex = [...this.indicators.children].indexOf((e.target) as HTMLSpanElement)
          this.setIndicator(toIndex)
          this.setPage(fromIndex, toIndex)
        })
      }
    }

    setIndicator(toIndex: number) {
      [...this.indicators.children].forEach(indicator => {
        indicator.classList.remove("active")
      })
      this.indicators.children[toIndex].classList.add("active")
    }

    setPage(fromIndex: number, toIndex: number) {
      const direction = fromIndex > toIndex ? "right" : "left"
      PageAnimation[this.type](this.panels.children[fromIndex], this.panels.children[toIndex], direction)
    }

    getIndex() {
      return [...this.indicators.children].indexOf((this.indicators.querySelector(".active")) as HTMLElement)
    }

    getPrevIndex() {
      return (this.getIndex() - 1 + this.indicators.children.length) % this.indicators.children.length
    }

    getNextIndex() {
      return (this.getIndex() + 1) % this.indicators.children.length
    }

    pauseTimer() {
      if (this.intervalId) {
        clearInterval(this.intervalId)
        this.intervalId = null
      }
    }

    startTimer() {
      if (this.interval <= 0 || !this.autoplay || this.intervalId) return
      this.intervalId = setInterval(() => {
        this.shiftPage(this.getNextIndex)
      }, this.interval)
    }

    handleMouseEnter() {
      this.pauseTimer()
    }

    handleMouseLeave() {
      this.startTimer()
    }
  }
</script>

<style lang="scss" scoped>
  @mixin flexCenter {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @mixin hoverButton {
    transform: translateX(0) translateY(-50%);
    opacity: 1;
  }

  .carousel {
    position: relative;
    overflow: hidden;

    .panels > a {
      position: absolute;
      width: 100%;
      height: 100%;
      text-decoration: none;
      z-index: 1;
      @include flexCenter;

      &.active {
        z-index: 10;
      }

      &:nth-child(even) {
        background-color: lightskyblue;
      }

      &:nth-child(odd) {
        background-color: lightpink;
      }
    }

    .arrow {
      position: absolute;
      border: none;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      background: rgba(31, 45, 61, .11);
      top: 50%;
      outline: none;
      cursor: pointer;
      z-index: 20;
      @include flexCenter;

      &::before {
        content: '';
        display: block;
        width: 8px;
        height: 8px;
        border-left: 1px solid #fff;
        border-top: 1px solid #ffffff;
        transform: rotate(-45deg);
      }

      &.arrow-next::before {
        transform: rotate(135deg);
      }
    }

    .arrow-prev {
      left: 10px;
      transform: translateX(-10px) translateY(-50%);
      opacity: 0;
      transition: all .3s;
    }

    &:hover .arrow-prev {
      @include hoverButton;
    }

    .arrow-next {
      right: 10px;
      transform: translateX(10px) translateY(-50%);
      opacity: 0;
      transition: all .3s;
    }

    &:hover .arrow-next {
      @include hoverButton
    }

    .indicators {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 10px;
      list-style: none;
      margin: 0;
      padding: 0;
      z-index: 20;

      span {
        display: inline-block;
        margin: 0 5px;
        cursor: pointer;

        &::before {
          content: '';
          display: block;
          width: 40px;
          height: 4px;
          background: #c0c4cc;
          border-radius: 2px;
          transition: all .3s;
        }

        &.active::before {
          background: #ffffff;
        }
      }
    }
  }
</style>
