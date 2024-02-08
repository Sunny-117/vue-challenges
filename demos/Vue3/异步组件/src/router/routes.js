import { getAsyncPage } from "../util";

// 异步页面Home About
const Home = getAsyncPage("../views/Home.vue");
const About = getAsyncPage("../views/About.vue");

export default [
  { path: "/", component: Home },
  { path: "/about", component: About },
];
