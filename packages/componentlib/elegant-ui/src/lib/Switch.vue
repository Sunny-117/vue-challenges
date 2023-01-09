<template>
  <button
    class="elegant-switch"
    :class="{ ['elegant-checked']: value }"
    @click="toggle"
  >
    <span></span>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return {
      toggle,
    };
  },
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
$color: #1296d8;
.elegant-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: grey;
  border-radius: $h/2;
  position: relative;
  cursor: pointer;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 250ms;
  }

  &:active {
    > span {
      width: $h2 + 4px;
    }
  }

  &.elegant-checked {
    background: $color;
  }

  &.elegant-checked > span {
    left: calc(100% - #{$h2} - 2px);
  }

  &.elegant-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }

  &:focus {
    outline: none;
  }
}
</style>
