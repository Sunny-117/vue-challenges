<template>
  <div>firstName: {{ firstName }} lastName: {{ lastName }}</div>
  <p>fullName: {{ fullName }}</p>
  <div :class="myClass"></div>
  <div v-for="item of list" :key="item.name">
    {{ item.name }}
  </div>
  <button @click.once="handleClick('传递的消息', $event)">点击</button>
  <form @submit.prevent="onSubmit">
    <button type="submit">点击提交</button>
    submit: <input type="text" name="" id="" @keydown.meta="submit" />
  </form>

  <input type="text" :value="value" @input="handleInput" />
  {{ value }}
  <input type="text" v-model="value" />
  <input
    type="checkbox"
    v-model="checkboxValue"
    @change="handleChange(checkboxValue)"
  />
  <select :value="selectValue" @change="handleSelectValue">
    <option name="city" value="beijing">北京</option>
    <option name="city" value="shanghai">上海</option>
    <option name="city" value="guangzhou">广州</option>
  </select>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";
let firstName = ref("demo1");
let lastName = ref("demo2");
const fullName = computed({
  get() {
    return firstName.value + lastName.value;
  },
  set(newValue) {
    [firstName.value, lastName.value] = newValue.split("");
  },
});
const myClass = reactive({
  active: true,
  "text-danger": false,
});
const list = reactive([{ name: "fengxingzhe" }, { name: "sunny" }]);
const handleClick = (msg, event) => {
  console.log("[ msg ] >", msg);

  console.log("[ event ] >", event);
};
const onSubmit = () => {
  console.log("[ submit ] >");
};
const submit = () => {
  console.log("[ submit input ] >");
};
const value = ref("default value");
const handleInput = (event) => {
  value.value = event.target.value;
};
const checkboxValue = ref(true);
const handleChange = (changeValue) => {
  console.log("[ chang ] >", changeValue);
};
const selectValue = ref("beijing");
const handleSelectValue = (e) => {
  console.log("[ e.target.value ] >", e.target.value);
  selectValue.value = e.target.value;
};
</script>
