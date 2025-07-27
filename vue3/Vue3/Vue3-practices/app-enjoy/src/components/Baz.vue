<template>
  <div>bax</div>
  <input type="text" ref="inpu1t" />
  <ul>
    <li
      v-for="(user, i) in users"
      :key="i"
      :ref="(el: any)=>{
        if(el) {
            // @ts-ignore
            lis[i]=el
        }
        }"
    >
      {{ user.name }}
    </li>
  </ul>
</template>

<script lang="ts">
import {
  inject,
  onBeforeMount,
  onMounted,
  onUpdated,
  reactive,
  watchEffect,
} from "@vue/runtime-core";
import { ref } from "vue";
export default {
  setup() {
    const app = inject("app", "budddd");
    console.log("inject", app);
    onBeforeMount(() => {});
    onMounted(() => {
      console.log("mounted");
    });
    const inpu1t = ref(null);
    onMounted(() => {
      console.log(inpu1t.value);
    });
    watchEffect(
      () => {
        console.log("wacheff");
        console.log(inpu1t.value);
      },
      {
        flush: "post",
      }
    );
    const users = reactive([
      {
        name: "xiaohong",
      },
      {
        name: "xiaoli",
      },
    ]);
    const lis = ref([]);
    onMounted(() => {
      console.log(lis, "lislis");
    });
    return {
      lis,
      inpu1t,
      users,
    };
  },
};
</script>
