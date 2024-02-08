<template>
  count: {{ count }}
  {{ obj.age }}
  dounble count:{{ double }}
  <button @click="handleCount">count++</button>
  <button @click="addObj">addObj</button>
</template>

<script lang="ts">
import { computed, reactive, ref, watch } from "vue";
import { cloneDeep } from "lodash";
export default {
  props: ["title"],
  setup(props) {
    console.log(props.title);
    // not this
    let count = ref(1);
    const obj = reactive({
      name: "大宝",
      age: 22,
    });
    function addObj() {
      obj.age++;
    }
    function handleCount() {
      count.value++;
    }
    const double = computed(() => {
      return count.value * 2;
    });
    watch(
      double,
      (newVal, oldVal) => {
        // console.log(newVal);
        // console.log(oldVal);
      },
      {
        immediate: true,
      }
    );
    // watch(
    //   () => obj.age,
    //   (newVal, oldVal) => {
    //     console.log(newVal);
    //     console.log(oldVal);
    //   }
    // );
    watch(
      () => cloneDeep(obj),
      (newVal, oldVal) => {
        console.log(newVal);
        console.log(oldVal);
      },
      {
        deep: true,
      }
    );
    return {
      addObj,
      obj,
      count,
      handleCount,
      double,
    };
  },
};
</script>

<style>
</style>