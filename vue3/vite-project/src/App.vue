<template>
  <h1>count:{{ countRef }}</h1>
  <p>
    <button @click="decrease">decrease</button>
    <button @click="increase">increase</button>
  </p>
</template>

<script>
import { ref } from "vue";

function useCount() {
  let countRef = ref(0); //具有响应式了
  // console.log(countRef);
  const increase = () => {
    countRef.value++;
  };
  const decrease = () => {
    countRef.value--;
  };
  return {
    countRef,
    increase,
    decrease,
  };
}

export default {
  setup() {},
};
</script>
