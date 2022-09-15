<script setup>
import footerPart from "./components/footer.vue";
import navbar from "./components/navbar.vue";
import { useProductStore } from "./stores/productStore";
import { recipe_query } from "./graphql/index";
import { useQuery } from "@vue/apollo-composable";

const recipes = useProductStore();

const { result, loading, error, onResult } = useQuery(recipe_query);
onResult((val) => {
  recipes.addRecipes(val);
});
</script>

<template>
  <div>
    <navbar />
    <router-view></router-view>
    <footerPart />
  </div>
</template>

<style>
body {
  font-family: "Libre Baskerville", serif;
}
</style>
