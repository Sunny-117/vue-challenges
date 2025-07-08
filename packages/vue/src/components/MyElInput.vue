<template>
  <div class="my-el-input">
    <el-input v-bind="attrs" ref="inp">
      <!-- <template #prefix>
        <slot name="prefix"></slot>
      </template>
      <template #suffix>
        <slot name="suffix"></slot>
      </template>
      <template #prepend>
        <slot name="prepend"></slot>
      </template>
      <template #append>
        <slot name="append"></slot>
      </template> -->
      <!-- 通过外部传入的slots动态渲染 -->
      <template v-for="(value, name) in slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData || {}"></slot>
      </template>
    </el-input>
  </div>
</template>

<script setup lang="ts">
// attrs 透传所有属性
import { ElInput } from "element-plus";
import { onMounted, useAttrs, useSlots, useTemplateRef } from "vue";
const attrs = useAttrs(); // 获取所有传入的属性但不在props中定义的
const slots = useSlots();
const inpRef = useTemplateRef("inp"); // 获取el-input的ref
console.log(slots);
onMounted(() => {
  // 获取el-input的ref
  const refValue = inpRef.value;
  const entries = Object.entries(refValue);
  for (const [key, value] of entries) {
    // 打印el-input的所有属性
    console.log(`${key}: ${value}`);
    // 提取到当前实例中
  }
});
</script>
<style scoped>
.my-el-input {
  transition: 0.3s;
}
.my-el-input:focus-within {
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.2));
}
</style>
