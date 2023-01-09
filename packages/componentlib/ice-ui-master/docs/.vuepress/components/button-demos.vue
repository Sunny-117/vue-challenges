<template>
  <div class="wrapper">
    <div>
      <i-button>默认按钮</i-button>
      <i-button icon="settings">默认按钮</i-button>
      <i-button :loading="loading" @click="loading=!loading">默认按钮</i-button>
    </div>
  </div>
</template>
<script>
import Button from '../../../src/button'

export default {
  components: {'i-button': Button},
  data() {
    return {
      loading: true
    }
  }
}
</script>
<style>
div.wrapper {
  margin-top: 10px;
}
</style>