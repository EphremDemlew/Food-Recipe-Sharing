<script setup>
import cards from "../components/cards.vue";
import Loading from "../components/loading.vue";
import { useProductStore } from "../stores/productStore";
import { full_recipe_query } from "../graphql/index";
import { useQuery } from "@vue/apollo-composable";
import { ref } from "vue";

const recipes = useProductStore();
const recipesVals = recipes.recipes[0].data;
console.log(recipes.recipes[0].data);
console.log("recipesVals");
console.log(recipesVals);

let res = ref([]);

// res = recipes.getRecipeById
const { result, loading, error, onResult } = useQuery(full_recipe_query);
onResult((val) => {
  recipes.addRecipes(val);
  // res.value = "asd";
});
</script>
<template>
  <div class="mt-36 texture bg-blue-200">
    <div
      v-if="recipesVals"
      class="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center bg-green-100 texture pb-10"
    >
      <div v-for="rec in recipesVals.recipe" :key="rec.id">
        <cards
          class="w-96 place-items-center lg:w-80"
          :title="rec.title"
          :id="rec.id"
          :img_url="rec.images[0].image_url"
          :like="rec.likes"
        />
      </div>
    </div>
    <div v-if="loading" class="flex justify-center items-center">
      <loading></loading>
    </div>

    <div v-if="error">
      <div class="flex justify-center items-center">
        <div
          class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        >
          <span class="visually-hidden"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
