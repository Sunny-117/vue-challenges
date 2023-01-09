<template>
  <div class="wrapper">
    <div>
      <i-collapse :selected.sync="selectedTab" single>
        <i-collapse-item title="标题1" name="1">hello，你好呢。</i-collapse-item>
        <i-collapse-item title="标题2" name="2">你知道我在想你吗?</i-collapse-item>
        <i-collapse-item title="标题3" name="3">我在等你呀!</i-collapse-item>
      </i-collapse>
    </div>
  </div>
</template>
<script>
import Collapse from '../../../src/collapse'
import CollapseItem from '../../../src/collapse-item'

export default {
  data() {
    return {
      selectedTab: ['1']
    }
  },
  components: {
    'i-collapse': Collapse,
    'i-collapse-item': CollapseItem
  }
}
</script>
<style scoped>
.wrapper{
  margin-top: 10px;
}
</style>