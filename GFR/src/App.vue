<!-- https://m.medsci.cn/scale/show.do?id=77bc2310c9 -->
<script lang="ts" setup>
import { reactive, ref, watch } from "vue";
import type { FormProps } from "./types";
import { m1 } from "./math/calc";

const defaultState = "条件不全";

const form = reactive<FormProps>({
  age: null,
  weight: null,
  sex: "male",
  creatine: null,
});

const ccr = ref<number | string>(defaultState);
watch(
  () => form,
  (newForm) => {
    const { age, weight, sex, creatine } = newForm;
    if (!age || !weight || !creatine) {
      ccr.value = defaultState;
    } else {
      ccr.value = m1({ age, weight, sex, creatine });
    }
  },
  { deep: true }
);
</script>

<template>
  <h1>医学计算</h1>
  <h2>内生肌酐清除率(CCr)在线计算器</h2>
  <el-form :model="form" label-width="auto">
    <el-form-item label="性别">
      <el-radio-group
        v-model="form.sex"
        prop="sex"
        :rules="[{ required: true, message: 'sex is required' }]"
      >
        <el-radio value="male">male</el-radio>
        <el-radio value="female">female</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item
      label="年龄"
      prop="age"
      :rules="[
        { required: true, message: 'age is required' },
        { type: 'number', message: 'age must be a number' },
      ]"
    >
      <el-input v-model.number="form.age" type="text" />
    </el-form-item>
    <el-form-item
      label="体重（kg）"
      prop="weight"
      :rules="[
        { required: true, message: 'weight is required' },
        { type: 'number', message: 'weight must be a number' },
      ]"
    >
      <el-input v-model.number="form.weight" type="text" />
    </el-form-item>
    <el-form-item
      label="肌酐（μmol/L）"
      prop="creatine"
      :rules="[
        { required: true, message: 'creatine is required' },
        { type: 'number', message: 'creatine must be a number' },
      ]"
    >
      <el-input v-model.number="form.creatine" type="text" />
    </el-form-item>
  </el-form>
  <div>内生肌酐清除率(CCr): {{ ccr }}</div>
</template>
