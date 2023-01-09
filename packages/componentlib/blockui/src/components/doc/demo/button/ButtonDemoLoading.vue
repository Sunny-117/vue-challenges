<demo>
加载按钮
</demo>
<template>
  <Button theme="button" loading>加载中</Button>
  <Button theme="button" >加载完毕</Button>
</template>

<script lang="ts">
import {Button} from '../../../../lib/index.ts';
export default {
  components:{ Button }
}
</script>