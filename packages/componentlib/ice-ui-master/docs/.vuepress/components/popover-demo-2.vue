<template>
  <div style="padding-top: 16px;">

    <i-popover position="left" trigger="hover">
      <i-button>左边弹出</i-button>
      <template slot="content">
        弹出内容
      </template>
    </i-popover>
    <i-popover trigger="hover">
      <i-button>上方弹出</i-button>
      <template slot="content">
        弹出内容
      </template>
    </i-popover>
    <i-popover position="bottom" trigger="hover">
      <i-button>下方弹出</i-button>
      <template slot="content">
        弹出内容
      </template>
    </i-popover>
    <i-popover position="right" trigger="hover">
      <i-button>右边弹出</i-button>
      <template slot="content">
        弹出内容
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