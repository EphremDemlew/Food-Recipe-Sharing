import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { useStorage } from "@vueuse/core";

const router = useRouter();
export const useProductStore = defineStore("productStore", {
  state: () => ({
    recipes: useStorage("recipes", []),
    favouritRecipes: useStorage(" favoritRecipes", []),
  }),
  getters: {
    getRecipeById: (state) => {
      return (userId) =>
        state.recipes.find((recipe) => recipe.title === userId);
    },
  },
  actions: {
    async addRecipes(...recipes) {
      this.recipes = recipes;
    },
  },
});
