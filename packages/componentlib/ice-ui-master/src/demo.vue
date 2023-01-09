<template>
  <div>
    <c-button>安妮</c-button>

    <div>
      <c-cascader :source="source" />
    </div>
  </div>
</template>

<script>
import button from "./button";
import cascader from "@/cascader/cascader";
export default {
  name: 'demo',
  components: {
    'c-button': button,
    'c-cascader': cascader
  },
  data() {
    return {
      source: [{
        name: '春天',
        children: [
          {name: '花开'},
          {name: '温暖'},
          {name: '光芒万丈'}
        ]
      },{
        name: '夏天',
        children: [
          {name: '炎热'},
          {name: '凉快'},
        ]
      }]
    }
  }
}
</script>
