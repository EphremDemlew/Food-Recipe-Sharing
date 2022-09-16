<script setup>
import footerPart from "./components/footer.vue";
import navbar from "./components/navbar.vue";
import { useProductStore } from "./stores/productStore";
import { full_recipe_query } from "./graphql/index";
import { useQuery } from "@vue/apollo-composable";
import { ref } from "vue";

const recipes = useProductStore();
const res = ref("");

const { result, loading, error, onResult } = useQuery(full_recipe_query);
onResult((val) => {
  recipes.addRecipes(val);
  // res.value = "asd";
});
</script>

<template>
  <div>
    <navbar />
    <router-view :load="loading" :result="result"> </router-view>
    <footerPart />
  </div>
</template>

<style>
body {
  font-family: "Libre Baskerville", serif;
}
</style>
