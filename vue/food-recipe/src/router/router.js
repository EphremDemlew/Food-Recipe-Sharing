import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../view/LandingPage.vue";
import signup from "../view/signup.vue";
import Home from "../view/HomePage.vue";
import login from "../view/login.vue";
// import notfound from "../view/notFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: LandingPage, name: "LandingPage" },
    { path: "/home", component: Home, name: "Home" },
    { path: "/signup", component: signup, name: "signup" },
    { path: "/login", component: login, name: "login" },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../view/notFound.vue"),
    },
  ],
});

export default router;
