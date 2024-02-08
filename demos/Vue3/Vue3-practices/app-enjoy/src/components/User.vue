<template>
  <div>
    <button>+</button>
    {{ one }}
  </div>
</template>

<script lang="ts">
// import { computed, ref, watch } from "vue";
// function useOne() {
//   const one = ref(1);
//   const handleOne = () => {
//     return one.value + 1;
//   };
//   watch(one, () => {});
//   const plusOne = computed(() => one.value + 1);
//   return {
//     one,
//   };

import { useOne } from "./useOne";
console.log(123);

// }
export default {
  setup() {
    const { one } = useOne();
    return {
      one,
    };
  },
};
</script>
