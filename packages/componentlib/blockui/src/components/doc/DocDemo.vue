<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ titleDetail }}</p>
    <br>
    <h3>何时使用</h3>
    <p>{{ useDetail }}</p>
    <br>
    <h3>注意</h3>
    <article>
      以下代码中的 组件/函数 需要统一从 block-ui-1 中导入
      <HighLightCode :code-string="codeString" code-type="javascript"/>
    </article>
    <br>
    <h3>代码演示</h3>
    <slot/>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue';
import HighLightCode from '../HighLightCode.vue';

export default {
  components: {HighLightCode},
  props: {
    title: {
      type: String,
      required: true
    },
    titleDetail: {
      type: String
    },
    useDetail: {
      type: String
    }
  },
  setup() {
    const codeString = ref('import { XXX } from \'../../../../lib/index.ts\';\n// 需改为\nimport { XXX } from \'block-ui-1\';');
    return {codeString};
  }
};
</script>
