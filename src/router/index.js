import { createRouter, createWebHashHistory } from "vue-router";
import chamadosView from "../views/Chamados.vue";
import AboutView from "../views/About.vue";
import LoginView from "../views/Login.vue";
import ChatView from "../views/Chat.vue";
import LogoutView from "../views/Logout.vue";
import ConfigView from "../views/configurações/config.vue";
import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: "/chamados",
    name: "chamados",
    component: chamadosView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/chat",
    name: "chat",
    component: ChatView,
  },
  {
    path: "/config",
    name: "config",
    component: ConfigView,
  },

  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
