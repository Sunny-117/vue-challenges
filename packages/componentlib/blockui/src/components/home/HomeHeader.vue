<template>
  <Topnav/>
  <div class="banner">
    <header>
      <div class="nameAndLogo">
        <Logo/>
        <span>Block UI </span>
      </div>
      <div class="sloganAndButtons">
        <span class="slogan">
          基于 Vue3.0
          <br>
          一个厉害的 UI 组件库
        </span>
        <span class="actions">
            <router-link to="/doc">开始</router-link>
            <a class="github" href="https://github.com/h666t/blockui">
              <svg>
                <use xlink:href="#icon-github"></use>
              </svg>
              GitHub
            </a>
          </span>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import Topnav from '../../components/Topnav.vue';
import Logo from '../../components/Logo.vue';
import Icon from '../Icon.vue';
export default {
  components: {Icon, Logo, Topnav}
};
</script>

<style lang="scss" scoped>
@import "src/helper.scss";
.banner {
  color: white;
  padding: 30px 0;
  background: linear-gradient(142deg, rgba(105,143,245,1) 0%, rgba(129,71,181,1) 100%);
  @media (min-width: 1200px) {
    padding: 100px;
  }
  > header {
    display: grid;
    width: 100%;
    @media(min-width: 500px) {
      margin: auto;
      min-width: 100%;
      display: grid;
      align-items: center;
      justify-items: center;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      >.sloganAndButtons{
        >.slogan{
          font-size: 32px;
        }
      }
    }
    > .nameAndLogo {
      line-height: 1.5;
      padding-top: 30px;
      padding-bottom: 15px;
      display: grid;
      justify-items: center;

      > span {
        font-size: 48px;
      }

      > .icon {
        width: 128px;
        height: 128px;
        margin: 30px;
      }
    }
    > .sloganAndButtons {
      display: grid;
      align-items: center;
      justify-items: center;
      > .slogan {
        @media (max-width: 500px) {
          font-size: 24px;
        }
        text-align: center;
        width: 80%;
      }

      > .actions {
        color: $black;
        padding-top: 20px;
        display: grid;
        align-items: center;
        justify-items: center;
        grid-template-columns: 1fr 1fr;
        a {
          margin: 0 10px;
          background: #fff;
          display: inline-block;
          $h: 28px;
          height: $h;
          line-height: $h;
          border-radius: $h/2;
          padding: 0 10px;

        }
        >.github{
          display: grid;
          grid-template-rows: 1fr ;
          grid-template-columns:  35% 65%;
          align-items: center;
          justify-items: center;
          > svg {
            width: 18px;
            height: 18px;
            margin-right: 5px;
          }
        }
      }
    }
  }
}
</style>