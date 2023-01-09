<template>
  <HomeHeader/>
  <HomeMain/>
</template>
<script>
import HomeHeader from "../components/home/HomeHeader.vue"
import HomeMain from "../components/home/HomeMain.vue"
export default {
  components: {HomeMain, HomeHeader}
}
</script>