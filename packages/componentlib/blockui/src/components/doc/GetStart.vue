<template>
  <article class="markdown-body">
    <h2>开始使用</h2>
    <p>请先 <a href="#/doc/install">安装</a> 本组件库然后在您的代码中写入下面的代码</p>
  </article>
  <HighLightCode code-type="javascript" :code-string="codeString"/>
</template>

<script lang="ts">
import {ref} from 'vue';
import HighLightCode from '../HighLightCode.vue';

export default {
  components: {HighLightCode},
  setup() {
    const codeString = ref('import {Button,Switch,Dialog,openDialog,Tabs} from \'block-ui-1\';\n' +
        'import \'block-ui-1/dist/lib/blockui.css\';');
    return {codeString};
  }
};
</script>
