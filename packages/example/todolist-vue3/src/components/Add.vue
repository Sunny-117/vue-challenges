<template>
  <div>
    <div class="form-group">
      <label for="exampleInputEmail1">添加待办事项</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="inputValue"
        @keydown.enter="add(inputValue)"
      />
      <small id="emailHelp" class="form-text text-muted">回车即可添加</small>
    </div>
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="(item, index) in todos"
        :key="'items-' + index"
      >
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
            @click.prevent="check(index)"
          />
          <label class="form-check-label" for="exampleCheck1">{{ item }}</label>
        </div>
        <div class="float-right">
          <button type="button" class="btn btn-danger" @click="delItem(index)">
            删除
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from "vue";
import store from "../store";

export default defineComponent({
  setup() {
    const inputValue = ref("");

    const add = (value: string) => {
      if (value.trim() === "") return;
      store.commit("add", value);
      inputValue.value = "";
    };
    const delItem = (index: number) => {
      store.commit("delete", index);
    };
    const check = (index: number) => {
      store.commit("check", index);
    };
    return reactive({
      inputValue,
      todos: computed(() => store.state.todos),
      add,
      delItem,
      check
    });
  }
});
</script>

<style lang="scss" scoped></style>
