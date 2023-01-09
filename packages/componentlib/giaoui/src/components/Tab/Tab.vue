<template>
  <div class="tabs">
    <div
      :style="{borderBottom: noBar ? 'none' : '2px solid #ddd', lineHeight: height}"
      class="tab-header"
    >
      <span
        :class="['tab-item', {active: activeIndex === index}]"
        :key="tab"
        :style="{width:spanWidth}"
        @click.stop="handleTagChange(index)"
        ref="header"
        v-for="(tab, index) in tabs"
        v-html="tab"
      />
      <span class="line" ref="line" v-if="!noBar"></span>
    </div>
    <div class="tab-content" ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Emit, Prop, Ref, Vue} from "vue-property-decorator"

  @Component
  export default class Tab extends Vue {
    @Prop(String) active!: string
    @Prop(Boolean) noBar!: boolean
    @Prop({type: Number, default: 2}) height!: number
    @Prop(Boolean) onlyHeader!: boolean
    @Ref() line!: HTMLSpanElement
    @Ref("header") headers!: HTMLSpanElement[]
    @Ref("content") content!: HTMLDivElement
    tabs: string[] = []
    activeIndex: number = 0
    childrenLength: number | undefined

    get spanWidth() {
      return `${(1 / (this.childrenLength as number)) * 100}%`
    }

    init(activeName: string) {
      this.$children.forEach((ele: any, index: number) => {
        this.tabs.push(ele.label)
        if (activeName === ele.value) {
          ele.visible = true
          this.activeIndex = index
        } else {
          ele.visible = false
        }
      })
    }

    loadLine(index: number) {
      this.line.style.width = `${this.headers[index].offsetWidth}px`
      this.line.style.transform = `translateX(${this.headers[index].offsetLeft}px)`
    }

    handleTagChange(index: number) {
      (this.$children[this.activeIndex] as any).visible = false
      let ele: any = this.$children[index]
      ele.visible = true
      this.activeIndex = index
      if (!this.noBar) {
        this.loadLine(index)
      }
      this.$emit("tab-change", ele.value)
      this.updateVal(ele.value)
    }

    mounted() {
      this.init(this.active)
      if (!this.noBar) {
        setTimeout(() => {
          this.loadLine(0)
        }, 0)
      }
      if (this.onlyHeader) {
        this.content.remove()
      }
      this.childrenLength = this.$children.length
    }

    @Emit("update:value")
    updateVal(val: string | number) {
      return val
    }
  }
</script>

<style lang="scss" scoped>
  $blue: #409eff;

  .tab-header {
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #303030;
    font-weight: 500;
    position: relative;

    span {
      text-align: center;
    }

    .line {
      position: absolute;
      height: 2px;
      bottom: 0;
      background: $blue;
      transform: translateX(0);
      transition: all 0.3s;
      margin-bottom: -2px;
    }

  }

  .tab-item {
    cursor: pointer;

    &:hover {
      color: $blue;
    }

    &.active {
      color: $blue;
    }
  }

</style>
