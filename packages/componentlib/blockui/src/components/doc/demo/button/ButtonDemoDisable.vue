<demo>
按钮禁用
</demo>
<template>
  <Button theme="button" disabled> 禁用 </Button>
  <Button theme="link"  disabled> 禁用 </Button>
  <Button theme="text"  disabled> 禁用 </Button>
</template>

<script lang="ts">
import {Button} from '../../../../lib/index.ts';
export default {
  components:{ Button }
}
</script>