<template>
  <div>
    <div class="easy">
      <i-input placeholder="请输入内容"></i-input>
      <i-input value="默认内容"></i-input>
      <i-input disabled value="默认内容"></i-input>
    </div>
    <div class="error">
      <i-input error="用户名不低于两个字"></i-input>
    </div>
    <div class="bindDate">
      <i-input v-model="value"></i-input>
      <p>value: {{value}}</p>
    </div>
  </div>
</template>
<script>
import Input from '../../../src/input'
export default {
  components:{'i-input':Input},
  data(){
    return{
      value:'默认内容'
    }
  }
}
</script>
<style lang="scss">
div.easy{
  margin-top: 10px;
  margin-bottom: 8px;
  > input{
    margin-top: 8px;
  }
}

div.bindDate{
  margin-top: 8px;
  height: 64px;
}
</style>