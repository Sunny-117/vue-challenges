<!--suppress CssUnusedSymbol -->
<template>
  <button
    :class="[
      'button',
      type,
      { round: round, plain: plain, disabled: buttonDisabled },
    ]"
    :disabled="buttonDisabled"
    @click="handleClick"
  >
    <slot>{{ "无按钮文字" }}</slot>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop({ default: "default" }) readonly type!: string;
  @Prop(Boolean) readonly round!: boolean;
  @Prop(Boolean) readonly plain!: boolean;
  @Prop(Boolean) readonly disabled!: boolean;
  buttonStyle = ["button"];

  get buttonDisabled() {
    return this.disabled;
  }

  handleClick(e: MouseEvent) {
    this.$emit("click", e);
  }
}
</script>

<style lang="scss" scoped>
$primary: #409eff;
$success: #67c23a;
$info: #909399;
$warning: #e6a23c;
$danger: #f56c6c;
@mixin primary {
  background-color: $primary;
  border-color: $primary;
  color: #fff;
}

@mixin success {
  color: #fff;
  background-color: $success;
  border-color: $success;
}

@mixin info {
  color: #fff;
  background-color: $info;
  border-color: $info;
}

@mixin warning {
  color: #fff;
  background-color: $warning;
  border-color: $warning;
}

@mixin danger {
  color: #fff;
  background-color: $danger;
  border-color: $danger;
}

/* DEFAULT STYLE */
.button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;

  &:focus,
  &:hover {
    color: $primary;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}

/* PRIMARY STYLE */
.primary {
  @include primary;

  &:focus,
  &:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }

  /*  PLAIN PRIMARY STYLE*/
  &.plain {
    color: $primary;
    background: #ecf5ff;
    border-color: #b3d8ff;
  }

  &.plain {
    &:focus,
    &:hover {
      @include primary;
    }
  }
}

/* SUCCESS STYLE */
.success {
  @include success;

  &:focus,
  &:hover {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }

  /*  PLAIN SUCCESS STYLE*/
  &.plain {
    color: $success;
    background: #f0f9eb;
    border-color: #c2e7b0;

    &:focus,
    &:hover {
      @include success;
    }
  }
}

/*  INFO STYLE */
.info {
  @include info;

  &:focus,
  &:hover {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }

  /*  PLAIN INFO STYLE*/
  &.plain {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;

    &:focus,
    &:hover {
      @include info;
    }
  }
}

/*  WARNING STYLE*/
.warning {
  @include warning;

  &:focus,
  &:hover {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }

  /*  PLAIN WARNING STYLE*/
  &.plain {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;

    &:focus,
    &:hover {
      @include warning;
    }
  }
}

/*  DANGER STYLE*/
.danger {
  @include danger;

  &:focus,
  &:hover {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }

  /*  PLAIN DANGER STYLE*/
  &.plain {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;

    &:focus,
    &:hover {
      @include danger;
    }
  }
}

/*  PLAIN STYLE*/
.plain:focus,
.plain:hover {
  background: #fff;
  border-color: #409eff;
  color: #409eff;
}

/*  ROUND */
.round {
  border-radius: 20px;
  padding: 12px 23px;
}

/*  DISABLE BUTTON*/
.button.disabled {
  &,
  &:focus,
  &:hover {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }
}
</style>
