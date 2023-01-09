<template>
  <div>
    <div class="topnav">
      <router-link to="/" class="logo">
        Block UI
      </router-link>
      <span v-if="toggleVisible" class="toggleAside" @click="toggleMenu"></span>
    </div>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';
import Heart from './Logo.vue';
export default {
  components: {Heart},
  props: {
    toggleVisible: Boolean
  },
  setup() {
    const menuVisible = inject<Ref<Boolean>>('menuVisible');
    const toggleMenu = () => {
      if (menuVisible) {
        menuVisible.value = !menuVisible.value;
      }
    };
    return {toggleMenu};
  }
}
</script>

<style lang="scss" scoped>
@import "../helper.scss";
.topnav {
  background: #698ff5;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 1px rgba(0,0,0,0.25);
  > .logo {
    max-width: 6em;
    margin-right: auto;
    font-family: $logoFontFamily;
    color: white;
    font-weight: 500;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 24px;
    height: 24px;
    background-image: url('../assets/menu.png') ;
    background-position-x: center;
    background-position-y: center;
    background-size: 24px;
    background-repeat-x: no-repeat;
    background-repeat-y: no-repeat;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: initial;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    >.menu{
      display: none;
    }
    >.logo{
      margin: auto;
    }
    >.toggleAside{
      display: inline-block;
    }
  }
}


</style>
