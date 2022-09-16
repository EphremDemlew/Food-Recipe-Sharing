import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../view/LandingPage.vue";
import signup from "../view/signup.vue";
import Home from "../view/HomePage.vue";
import contact from "../view/contact.vue";
import login from "../view/login.vue";
import favorite from "../view/favorite.vue";
import profile from "../view/profile.vue";
import addRecipes from "../view/addRecipes.vue";
import recipeDetails from "../view/recipeDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: LandingPage, name: "LandingPage" },
    { path: "/home", component: Home, name: "Home" },
    { path: "/contact", component: contact, name: "contact" },
    { path: "/signup", component: signup, name: "signup" },
    { path: "/login", component: login, name: "login" },
    { path: "/favorite", component: favorite, name: "favorite" },
    { path: "/profile", component: profile, name: "profile" },
    { path: "/add-recipes", component: addRecipes, name: "recipes" },
    { path: "/recipe", component: recipeDetails, name: "recipeDetails" },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../view/notFound.vue"),
    },
  ],
});

export default router;
