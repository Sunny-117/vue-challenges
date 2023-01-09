<template>
  <div class="demo-box">
    <h4>{{component.__sourceCodeTitle}}</h4>
    <div class="intro">
      <div class="demo">
        <component :is="component"/>
      </div>
      <div>
        <Button level="main" size="normal" @click="toggle">{{buttonText}}</Button>
      </div>
      <HighLightCode v-if="codeVisible" :codeString="component.__sourceCode" codeType="html"/>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import {ref,computed} from 'vue'
import HighLightCode from './HighLightCode.vue';
export default {
  props:{
    component: {
      type: Object,
      required: true
    },
  },
  components:{
    HighLightCode,
    Button,
  },
  setup(){
    const codeVisible = ref(false)
    const toggle = () => {
      codeVisible.value = !codeVisible.value
    }
    const buttonText = computed(()=>{
      if (codeVisible.value){return '隐藏代码'}else {return '显示代码'}
    })
    return {codeVisible,toggle,buttonText}
  }
}
</script>

<style lang="scss" scoped>
.demo-box{
  display: grid;
  border:1px solid rgba(0,0,0,0.25);
  margin-top: 20px;
  >h4{
    padding: 4px;
    font-weight: bold;
  }

  >.intro{
    border-top: 1px solid rgba(0,0,0,0.25);
    overflow: auto;
    padding: 4px;
    display: flex;
    flex-direction: column;
    >.demo{
      padding:  8px;
    }
  }
}
</style>