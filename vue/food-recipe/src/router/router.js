import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../view/LandingPage.vue";
import { userStore } from "../stores/userStore";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: LandingPage, name: "LandingPage" },
    {
      path: "/home",
      name: "Home",
      component: () => import("../view/HomePage.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../view/contact.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../view/signup.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../view/login.vue"),
    },
    {
      path: "/favorite",
      name: "favorite",
      component: () => import("../view/favorite.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../view/profile.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/add-recipes",
      name: "recipes",
      component: () => import("../view/addRecipes.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/recipe/:id",
      name: "recipeDetails",
      component: () => import("../view/recipeDetails.vue"),
    },

    {
      path: "/:pathMatch(.*)*",
      component: () => import("../view/notFound.vue"),
    },
  ],
});
router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) {
    next();
    return;
  }
  const store = userStore();

  if (store.isLoggedIn) {
    next();
  } else {
    next({ name: "LandingPage" });
  }
});

export default router;
