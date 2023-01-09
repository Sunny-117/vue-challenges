<template>
  <div class="container">
    <div class="buttonGroup">
      <Button @click="handleClick">默认按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="info">信息按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="danger">危险按钮</Button>
    </div>
    <div class="buttonGroup">
      <Button plain>朴素按钮</Button>
      <Button plain type="primary">主要按钮</Button>
      <Button plain type="success">成功按钮</Button>
      <Button plain type="info">信息按钮</Button>
      <Button plain type="warning">警告按钮</Button>
      <Button plain type="danger">危险按钮</Button>
    </div>
    <div class="buttonGroup">
      <Button @click="handleClick" disabled>禁用按钮</Button>
      <Button disabled type="primary">主要按钮</Button>
      <Button disabled type="success">成功按钮</Button>
      <Button disabled type="info">信息按钮</Button>
      <Button disabled type="warning">警告按钮</Button>
      <Button disabled type="danger">危险按钮</Button>
    </div>
    <div class="buttonGroup">
      <Button round>圆角按钮</Button>
      <Button round type="primary">主要按钮</Button>
      <Button round type="success">成功按钮</Button>
      <Button round type="info">信息按钮</Button>
      <Button round type="warning">警告按钮</Button>
      <Button round type="danger">危险按钮</Button>
    </div>
  </div>
</template>

<script lang="ts">
  import Button from "../components/Button/Button.vue"
  import {Component, Vue} from "vue-property-decorator"

  @Component({
    components: {Button}
  })
  export default class Buttons extends Vue {
    handleClick(e: MouseEvent) {
      console.log("点击事件触发: ", e)
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
  }

  .buttonGroup {
    padding-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
</style>
