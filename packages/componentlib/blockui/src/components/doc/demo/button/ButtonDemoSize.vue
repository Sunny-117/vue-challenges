<demo>
按钮大小
</demo>
<template>
  <Button theme="button" size="big"> 大按钮 </Button>
  <Button> 普通按钮 </Button>
  <Button theme="button" size="small"> 小按钮 </Button>
</template>

<script lang="ts">
import {Button} from '../../../../lib/index.ts';
export default {
  components:{ Button }
}
</script>