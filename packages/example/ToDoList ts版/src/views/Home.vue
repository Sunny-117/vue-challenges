<template>
  <div class="container" @mousedown="mouseDown">
    <h1>ToDoList</h1>
    <h3>
      共有<span class="text-primary">{{ lists.length }}</span
      >项任务，已完成<span class="text-success">{{ finished.length }}</span
      >项任务
    </h3>
    <h3>未完成列表</h3>
    <ul class="list-group">
      <template v-for="(item, index) in lists">
        <li
          class="list-group-item d-flex justify-content-between"
          v-if="!item.checked"
          :key="index"
        >
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="'item-'+index"
              v-model="item.checked"
              @click="() => (item.checked = !item.checked)"
            />
            <label
              class="form-check-label"
              v-if="!item.isEdit"
              @dblclick="showEdit(item, index)"
            >
              {{ item.name }}
            </label>
            <label class="form-check-label" :for="'item-' + index" v-else>
              <input type="text" v-model="editValue" ref="myInput" />
            </label>
          </div>
          <button
            type="button"
            class="close"
            aria-label="Close"
            @click="remove(index)"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </li>
      </template>
    </ul>
    <!-- 已完成 -->
    <h3>已完成列表</h3>
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="(item, index) in finished"
        :key="'finished' + index"
      >
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="'finished'+index"
            v-model="item.checked"
            disabled
          />
          <label class="form-check-label" for="'finished'+index">
            {{ item.name }}
          </label>
        </div>
      </li>
    </ul>
    <h3>添加新的Tasks</h3>
    <div class="input-group input-group-sm mb-3">
      <input
        type="text"
        class="form-control"
        id="add"
        placeholder="添加新的Task"
        v-model="value"
        @keydown.enter="add"
      />
    </div>

    <button type="button" class="btn btn-primary btn-lg btn-block" @click="add">
      确认添加
    </button>
  </div>
</template>

<script lang="ts">
import { computed, reactive, toRefs, ref } from "vue";
// @ is an alias to /src
export default {
  name: "Home",
  setup() {
    let editIndex = 0;
    const myInput = ref(null);
    // 1.加入CheckBox --->checked
    // 2.统计状态 --->checked ->finish列表
    const state: any = reactive({
      value: "",
      editValue: "",
      lists: [
        {
          name: 1,
          checked: true,
          isEdit: false
        },
        {
          name: 2,
          checked: false,
          isEdit: false
        },
        {
          name: 3,
          checked: false,
          isEdit: false
        }
      ],
      finished: computed(() =>
        state.lists.filter(
          (item: { checked: boolean }) => item.checked === true
        )
      )
    });
    // 3.add添加item ->ite数据结构 ->name,checked,isEdit
    const add = () => {
      state.lists.push({
        name: state.value,
        checked: false,
        isEdit: false
      });
      state.value = "";
    };
    // 4.双击进行编辑
    const showEdit = (item: { isEdit: boolean; name: any }, index: number) => {
      editIndex = index;
      item.isEdit = true;
      state.editValue = item.name;
    };
    const mouseDown = (e: { target: { contains: (arg0: any) => any } }) => {
      console.log(editIndex);
      if (myInput.value && e.target !== myInput.value) {
        state.lists[editIndex] = {
          name: state.editValue,
          checked: false,
          isEdit: false
        };
      }
    };
    // 5.删除功能 --- 删除特定INDEX的元素

    const remove = (index: number) => {
      state.lists.splice(index, 1);
    };

    return { ...toRefs(state), add, showEdit, mouseDown, myInput, remove };
  }
};
</script>
