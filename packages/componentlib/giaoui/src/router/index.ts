import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/tabs",
    name: "tabs",
    component: () => import("../views/Tabs.vue")
  },
  {
    path: "/collapses",
    name: "collapses",
    component: () => import("../views/Collapses.vue")
  },
  {
    path: "/buttons",
    name: "buttons",
    component: () => import("../views/Buttons.vue")
  },
  {
    path: "/messages",
    name: "messages",
    component: () => import("../views/Messages.vue")
  },
  {
    path: "/tooltip",
    name: "tooltip",
    component: () => import("../views/Tooltips.vue")
  },
  {
    path: "/dialog",
    name: "dialog",
    component: () => import("../views/Dialogs.vue")
  },
  {
    path: "/carousel",
    name: "carousel",
    component: () => import("../views/Carousels.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
