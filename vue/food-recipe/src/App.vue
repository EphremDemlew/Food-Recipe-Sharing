<script setup>
import footerPart from "./components/footer.vue";
import navbar from "./components/navbar.vue";
import { useProductStore } from "./stores/productStore";
import { full_recipe_query, favorite_recipe_query } from "./graphql/index";
import { useQuery } from "@vue/apollo-composable";
import { computed, ref, watch } from "vue";

const recipes = useProductStore();
let res = ref();

const { result, loading, error, onResult } = useQuery(full_recipe_query);

onResult((val) => {
  console.log(val);
  if (val.loading == false) recipes.addRecipes(val);
});
</script>

<template>
  <div>
    <navbar />
    <router-view> </router-view>
    <footerPart />
  </div>
</template>

<style>
body {
  font-family: "Libre Baskerville", serif;
}
</style>
