import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
// 安装路由：npm i vue-router@next
// https://next.router.vuejs.org/guide/migration/
export default createRouter({
  history: createWebHistory(), // 之前是 mode:"history"
  // history: createWebHistory("baseURL写到这里"), 
  routes,
});
