<template>
  <div style="padding-top: 16px;">

    <i-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <i-header style="height: 50px; background:#9E91F2;">
        header
      </i-header>
      <i-layout>
        <i-sider style="height: 100px; background:#ddd; width:200px; color: black;">
          sider
        </i-sider>
        <i-content style="height: 100px; background:#7B62D9;">
          content
        </i-content>
      </i-layout>
      <i-footer style="height: 50px; background:#9E91F2;">
        footer
      </i-footer>
    </i-layout>

  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
</style>
<script>
import ILayout from '../../../src/layout'
import IHeader from '../../../src/header'
import IFooter from '../../../src/footer'
import IContent from '../../../src/content'
import ISider from '../../../src/sider'

export default {
  components: {ILayout, IHeader, IFooter, IContent, ISider},
}
</script>