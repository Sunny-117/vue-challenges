<demo>
基本样式
</demo>
<template>
  <Button theme="button"> 普通按钮 </Button>
  <Button theme="link"> 链接按钮 </Button>
  <Button theme="text"> 文本按钮 </Button>
</template>

<script lang="ts">
import {Button} from '../../../../lib/index.ts';
export default {
  components:{ Button }
}
</script>