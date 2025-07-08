<script setup lang="ts">
import { ref } from "vue";
import MyElInput from "./components/MyElInput.vue";
import RefDebounce from "./components/RefDebounce.vue";
import { Search } from "@element-plus/icons-vue";
const data = ref("");
</script>

<template>
  <!-- <RefDebounce/> -->
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
</template>
