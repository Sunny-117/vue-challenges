<template>
  <div class="elegant-tabs">
    <div class="elegant-tabs-nav" ref="tabNav">
      <div
        class="elegant-tabs-nav-item"
        v-for="(t, index) in titles"
        :ref="
          (el) => {
            if (t === selected) selectedItem = el;
          }
        "
        @click="select(t)"
        :class="{ selected: t === selected }"
        :key="index"
      >
        {{ t }}
      </div>
      <div class="elegant-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="elegant-tabs-content">
      <component :is="current" :key="current.props.title" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref, watchEffect } from "vue";
import Tab from "./Tab.vue";
export default {
  components: { Tab },
  props: {
    selected: String,
  },
  setup(props, context) {
    const tabNav = ref<HTMLDivElement>(null);
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);

    onMounted(() => {
      watchEffect(
        () => {
          const {
            width,
            left: left2,
          } = selectedItem.value.getBoundingClientRect();
          const { left: left1 } = tabNav.value.getBoundingClientRect();
          indicator.value.style.width = width + "px";
          indicator.value.style.left = left2 - left1 + "px";
        },
        { flush: "post" }
      );
    });

    const defaults = { ...context }.slots.default();
    defaults.forEach((tag) => {
      // @ts-ignore
      if (tag.type.name !== Tab.name) {
        throw new Error("Tabs 的内部嵌套组件必须为 Tab！");
      }
    });
    const titles = defaults.map((tag) => tag.props.title);
    const select = (title: string) => {
      context.emit("update:selected", title);
    };

    const current = computed(() =>
      defaults.find((tag) => tag.props.title === props.selected)
    );

    return { titles, select, current, tabNav, selectedItem, indicator };
  },
};
</script>

<style lang="scss">
$blue: #1296d8;
$color: #333;
$border-color: #d9d9d9;
.elegant-tabs {
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
      left: 0;
      bottom: -1px;
      height: 3px;
      width: 3em;
      background: $blue;
      transition: all 0.3s;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
