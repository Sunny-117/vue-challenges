import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Add from "../components/Add.vue";
import Done from "../components/Done.vue";
import Delete from "../components/Delete.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/add",
        name: "add",
        component: Add
      },
      {
        path: "/done",
        name: "done",
        component: Done
      },
      {
        path: "/delete",
        name: "delete",
        component: Delete
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkExactActiveClass: "active"
});

export default router;
