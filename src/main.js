import './assets/main.css'
import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

import Home from "./views/Home.vue";

import "@fortawesome/fontawesome-free/css/all.min.css";

import App from "@/App.vue";

const routes = [
  { path: "/home", component: Home },
  { path: "/:pathMatch(.*)*", redirect: "/home" }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
