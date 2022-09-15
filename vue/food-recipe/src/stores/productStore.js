import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { useStorage } from "@vueuse/core";

const router = useRouter();
export const userproductStore = defineStore("productStore", {
  state: () => ({
    recipes: useStorage("recipes", []),
  }),
  getters: {},
  actions: {
    async addRecipes(...recipes) {
      this.recipes = recipes;
    },
  },
});
