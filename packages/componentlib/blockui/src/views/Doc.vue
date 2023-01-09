<template>
    <div class="layout">
      <Topnav toggle-visible="toggle-visible" class="nav"/>
      <div class="content">
        <aside v-if="menuVisible">
          <h2>文档</h2>
          <ol>
            <li>
              <router-link to="/doc/intro">介绍</router-link>
            </li>
            <li>
              <router-link to="/doc/install">安装</router-link>
            </li>
            <li>
              <router-link to="/doc/getStart">开始使用</router-link>
            </li>
          </ol>
          <h2>组件列表</h2>
          <ol>
            <li>
              <router-link to="/doc/switch">Switch 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/button">Button 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/dialog">Dialog 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/tabs">Tabs 组件</router-link>
            </li>
          </ol>
        </aside>
        <main>
          <router-view/>
        </main>
      </div>
    </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
import {inject,ref} from 'vue'
export default {
  components: {Topnav},
  setup(){
    const toggleVisible = ref(true)
    const menuVisible = inject('menuVisible')
    return {menuVisible,toggleVisible}
  }
};
</script>

<style lang="scss" scoped>
@import "../helper.scss";
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  position: relative;
  > aside {
    position: fixed;
    flex-shrink: 0;
    z-index: 1;
    background: white;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
aside {
  .router-link-active{
    color:#698ff5;
  }

  width: 150px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding: 70px 16px 16px;
  box-shadow: 0 0 1px rgba(0,0,0,0.25);
  > h2 {
    margin-bottom: 4px;
    font-weight: 600;
    color: $black;
  }

  > ol {
    > li {
      padding: 4px 0;
      color: $grey;
    }
  }
}
main {
  overflow: auto;
}
</style>