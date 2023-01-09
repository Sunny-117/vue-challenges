<template>
  <div style="margin-top: 10px">
    <div>
      <i-tabs :selected="selected1">
        <i-tabs-head>
          <i-tabs-item name="1">标题一</i-tabs-item>
          <i-tabs-item name="2">标题二</i-tabs-item>
        </i-tabs-head>
        <i-tabs-body>
          <i-tabs-pane name="1">内容1</i-tabs-pane>
          <i-tabs-pane name="2">内容2</i-tabs-pane>
        </i-tabs-body>
      </i-tabs>
    </div>

    <div style="margin-top: 20px">
      <i-tabs :selected="selected2">
        <i-tabs-head>
          <i-tabs-item name="1">标题一</i-tabs-item>
          <i-tabs-item disabled name="2">标题二</i-tabs-item>
          <i-tabs-item name="3">标题三</i-tabs-item>
        </i-tabs-head>
        <i-tabs-body>
          <i-tabs-pane name="1">内容1</i-tabs-pane>
          <i-tabs-pane name="2">内容2</i-tabs-pane>
          <i-tabs-pane name="3">内容3</i-tabs-pane>
        </i-tabs-body>
      </i-tabs>
    </div>
  </div>
</template>
<script>
import Tabs from '../../../src/tabs'
import TabsHead from '../../../src/tabs-head'
import TabsBody from '../../../src/tabs-body'
import TabsItem from '../../../src/tabs-item'
import TabsPane from '../../../src/tabs-pane'

export default {
  data() {
    return {
      selected1: '1',
      selected2: '1'
    }
  },
  components: {
    'i-tabs': Tabs,
    'i-tabs-head': TabsHead,
    'i-tabs-body': TabsBody,
    'i-tabs-item': TabsItem,
    'i-tabs-pane': TabsPane,
  }
}
</script>