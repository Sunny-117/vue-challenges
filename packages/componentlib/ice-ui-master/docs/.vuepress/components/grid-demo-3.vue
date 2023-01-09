<template>
  <div style="padding-top: 16px;">
    <i-row class="demoRow" gutter="10">
      <i-col span="8">
        <div class="demoCol">8</div>
      </i-col>
      <i-col span="8" offset="8">
        <div class="demoCol">8</div>
      </i-col>
    </i-row>
    <i-row class="demoRow" gutter="10">
      <i-col span="6" offset="6">
        <div class="demoCol">6</div>
      </i-col>
      <i-col span="6" offset="6">
        <div class="demoCol">6</div>
      </i-col>
    </i-row>
    <i-row class="demoRow" gutter="10">
      <i-col span="4">
        <div class="demoCol">4</div>
      </i-col>
      <i-col span="4" offset="4">
        <div class="demoCol">4</div>
      </i-col>
      <i-col span="4" offset="8">
        <div class="demoCol">4</div>
      </i-col>
    </i-row>
    <i-row class="demoRow" gutter="10">
      <i-col span="2">
        <div class="demoCol">2</div>
      </i-col>
      <i-col span="2" offset="2">
        <div class="demoCol">2</div>
      </i-col>
      <i-col span="2">
        <div class="demoCol">2</div>
      </i-col>
      <i-col span="2" offset="2">
        <div class="demoCol">2</div>
      </i-col>
      <i-col span="2">
        <div class="demoCol">2</div>
      </i-col>
      <i-col span="2" offset="2">
        <div class="demoCol">2</div>
      </i-col>
      <i-col span="2">
        <div class="demoCol">2</div>
      </i-col>
      <i-col span="2" offset="2">
        <div class="demoCol">2</div>
      </i-col>
    </i-row>

  </div>
</template>
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
<script>
import IRow from '../../../src/row'
import ICol from '../../../src/col'

export default {
  components: {IRow, ICol},
}
</script>