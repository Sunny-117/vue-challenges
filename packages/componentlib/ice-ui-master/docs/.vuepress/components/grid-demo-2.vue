<template>
  <div style="padding-top: 16px;">
    <i-row class="demoRow" gutter="10">
      <i-col span="8">
        <div class="demoCol">8</div>
      </i-col>
      <i-col span="8">
        <div class="demoCol">8</div>
      </i-col>
      <i-col span="8">
        <div class="demoCol">8</div>
      </i-col>
    </i-row>
    <i-row class="demoRow" gutter="10">
      <i-col span="6">
        <div class="demoCol">6</div>
      </i-col>
      <i-col span="6">
        <div class="demoCol">6</div>
      </i-col>
      <i-col span="6">
        <div class="demoCol">6</div>
      </i-col>
      <i-col span="6">
        <div class="demoCol">6</div>
      </i-col>
    </i-row>

  </div>
</template>

<script>
import Row from '../../../src/row'
import Col from '../../../src/col'

export default {
  components: {
    'i-row':Row,
    'i-col':Col
  },
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.demoRow{
  margin: 10px 0;
}
.demoCol {
  height: 50px;
  border: 1px solid #ccc;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>