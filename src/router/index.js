import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
import Login from "../pages/Login.vue";
import DashBoard from "../pages/subpages/DashBoard.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/login/dashboard",
    name: "DashBoard",
    component: DashBoard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
