<template>
  <pre :class="`language-${codeType}`" v-html="code"/>
</template>

<script lang="ts">
import 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import {ref} from 'vue';

export default {
  props:{
    codeString: {
      type: String,
      required:true
    },
    codeType:{
      type: String,
      required: true
    }
  },
  setup(props) {
    const Prism = (window as any).Prism;
    const codeString = ref(props.codeString);
    const hash = {
      html: Prism.languages.html,
      javascript: Prism.languages.javascript,
    }
    const code = Prism.highlight(codeString.value, hash[props.codeType], `${props.codeType}`);
    return {code};
  }
};
</script>

<style lang="scss" scoped>

</style>