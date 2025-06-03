<!-- Vue3 -->
<script setup lang="ts">
import { ref } from 'vue/dist/vue.js'
import { useCounter } from '../hooks/useCounter'
// 这个 current 就是一个状态（响应式数据）
const {
  value: current,
  actions: { inc, dec, set, reset }
} = useCounter(20, { min: 1, max: 10 })
</script>

<template>
  <div>
    <p>{{ current }} [max: 10; min: 1;]</p>
    <div class="contain">
      <button @click="inc()">Inc()</button>
      <button @click="dec()" style="margin-left: 8px">Dec()</button>
      <button @click="set(3)" style="margin-left: 8px">Set(3)</button>
      <button @click="reset()" style="margin-left: 8px">Reset()</button>
    </div>
  </div>
</template>

<style scoped></style>

<style>
.teleport-demo-wrapper {
  width: 300px;
  height: 30px;
  background-color: #42b983;
  overflow: hidden;
}
.modal-mask {
  /* position: fixed; */
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * 对于 transition="modal" 的元素来说
 * 当通过 Vue.js 切换它们的可见性时
 * 以下样式会被自动应用。
 *
 * 你可以简单地通过编辑这些样式
 * 来体验该模态框的过渡效果。
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
