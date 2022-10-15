<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div class="container-fluid">
        <a class="navbar-brand d-flex align-item-center" href="#">
          <div class="logo mr-2"></div>
          <span>TodoList</span>
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/add">待办事项</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/done">已完成</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/delete">已删除</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {}
});
</script>
<style lang="scss" scoped>
.logo {
  background: url("~@/assets/logo.png") no-repeat center center;
  background-size: contain;
  width: 40px;
  height: 40px;
}
</style>
