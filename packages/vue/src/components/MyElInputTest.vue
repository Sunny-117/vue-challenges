<template>
  <MyElInput v-model="data" placeholder="请输入" ref="inputRef">
    <template #prepend>
      <el-select placeholder="Select" style="width: 115px">
        <el-option label="1" value="1"></el-option>
        <el-option label="2" value="2"></el-option>
        <el-option label="3" value="3"></el-option>
      </el-select>
    </template>
    <template #append>
      <el-button :icon="Search"></el-button>
    </template>
  </MyElInput>
  <el-button @click="onClick">聚焦</el-button>
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
import { ref } from "vue";
import MyElInput from "./MyElInput.vue";
const data = ref("");
const inputRef = ref();
function onClick() {
  const dom = inputRef.value;
  dom.inp.focus();
}
</script>

<style scoped></style>
