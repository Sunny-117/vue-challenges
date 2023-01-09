<demo>
按钮类型
</demo>
<template>
  <Button theme="button" > 普通按钮 </Button>
  <Button theme="button" level="main"> 主要按钮 </Button>
  <Button theme="button" level="danger"> 危险按钮 </Button>
</template>

<script lang="ts">
import {Button} from '../../../../lib/index.ts';
export default {
  components:{ Button }
}
</script>