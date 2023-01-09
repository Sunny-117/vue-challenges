<template>
  <div style="padding-top: 16px;">

    <i-popover position="left">
      <i-button>左边弹出</i-button>
      <template slot="content">
        <strong style="color: #F1453D">加粗的提示</strong>
      </template>
    </i-popover>
    <i-popover>
      <i-button>上方弹出</i-button>
      <template slot="content">
        <a href="https://github.com/Orange-ice/Ice-UI">这是个a链接</a>
      </template>
    </i-popover>
    <i-popover position="bottom">
      <i-button>下方弹出</i-button>
      <template slot="content">
        普通文本内容
      </template>
    </i-popover>
    <i-popover position="right">
      <i-button>右边弹出</i-button>
      <template slot="content">
        普通文本内容
      </template>
    </i-popover>

  </div>
</template>

<script>
import IButton from '../../../src/button'
import IPopover from '../../../src/popover'
export default {
  components: {IButton, IPopover},
}
</script>
<style>
.ice-popover{
  z-index: 30;
}
</style>