<template>
  <div class="container">
    <div class="block">
      <h2>区域1</h2>
      <p>
        <button @click="modalVisible = true">打开朦层</button>
      </p>
      <Teleport to="body">
        <!-- to="css选择器" -->
        <!-- Modal组件逻辑结构很合理，但是dom结构不合理，应该在body的最后 -->
        <Modal v-if="modalVisible">
          <button @click="modalVisible = false">关闭朦层</button>
        </Modal>
      </Teleport>
    </div>
    <div class="block mid">
      <h2>区域2</h2>
    </div>
    <div class="block big"><Block3 /></div>
    <div class="block big"><h2>区域4</h2></div>
    <div class="block mid"><Block5 /></div>
    <div class="block"><h2>区域6</h2></div>
  </div>
</template>

<script>
import { ref, defineAsyncComponent } from "vue";
import Modal from "../components/Modal.vue";
import { getAsyncComponent } from "../util";
// const Block3 = defineAsyncComponent("../components/Block3.vue")// 这样写就可以，下面只是为了模拟网络请求的效果
const Block3 = getAsyncComponent("../components/Block3.vue"); //需要返回一个Promise
const Block5 = getAsyncComponent("../components/Block5.vue");
export default {
  components: {
    Block3,
    Block5,
    Modal,
  },
  setup() {
    const modalVisibleRef = ref(false);
    return {
      modalVisible: modalVisibleRef,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  width: 1000px;
  margin: 0 auto;
  flex-wrap: wrap;
  padding: 0 50px;
  justify-content: space-between;
}
.block {
  width: 200px;
  margin: 15px;
  height: 250px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
    0 2px 4px 0 rgba(232, 237, 250, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.mid {
  width: 300px;
}
.big {
  width: 400px;
}
</style>
