<template>
  <main>
    <div>
      <Icon icon="#icon-Vue"/>
      <article>
        <h3>基于 Vue3.0</h3>
        <p>骄傲的使用了Vue 3.0</p>
      </article>
    </div>
    <div>
      <Icon icon="#icon-ts"/>
      <article>
        <h3>基于 TypeScript</h3>
        <p>源代码采用TypeScript书写</p>
      </article>
    </div>
    <div>
      <Icon icon="#icon-read"/>
      <article>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </article>
    </div>

  </main>
</template>

<script lang="ts">
import Topnav from '../../components/Topnav.vue';
import Logo from '../../components/Logo.vue';
import Icon from '../Icon.vue';

export default {
  components: {Icon, Logo, Topnav}
};
</script>

<style scoped lang="scss">
main{
    display: grid;
  overflow: hidden;
  justify-items: center;
  margin-top: 20px;
  @media (min-width: 500px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr ;
  }
  @media (max-width: 500px) {
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr ;
  }
  @media (min-width: 1200px) {
    grid-template-rows: 1fr ;
    grid-template-columns: 1fr 1fr 1fr ;
    padding-top: 10vh;
  }
  align-items: center;
  text-align: center;
  >div{
    margin-top: 20px;
    display: grid;
    justify-items: center;
    >article{
      >h3{
        font-weight: bold;
        font-size: 28px;
        margin-bottom: 10px;
      }
    }
    @media (max-width: 1200px){
      &:nth-child(3){
        padding-bottom: 30px;
      }
    }
  }
}
</style>

