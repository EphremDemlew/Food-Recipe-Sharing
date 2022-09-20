<template>
  <div class="texture bg-green-50 mt-10">
    <div
      v-if="result"
      class="grid gap-x-8 md:mt-0 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center bg-green-100 texture pb-10"
    >
      <!-- {{ result }} -->
      <!-- {{ result }} -->
      <div v-for="rec in result.favorite" :key="rec">
        <cards
          class="w-96 place-items-center lg:w-80"
          :title="rec.recipe.title"
          :id="rec.recipe.id"
          :img_url="rec.recipe.images[0].image_url"
          :like="rec.recipe.likes"
        />
      </div>
    </div>
    <div v-if="loading" class="flex justify-center items-center">
      <loading></loading>
    </div>
    <!-- No Data found element -->
    <div v-if="false" class="py-24 -mt-10">
      <noDataVue message="No Recipes here!!"></noDataVue>
    </div>
    <!-- No Data found element -->

    <!-- If fethc erro happens -->
    <div v-if="error" class="py-24 -mt-10">
      <noDataVue message="Something went wrong!!"></noDataVue>
    </div>
    <!-- If fethc erro happens -->
  </div>
</template>
<script setup>
import cards from "../components/cards.vue";
import Loading from "../components/loading.vue";
import { favorite_recipe_query } from "../graphql/index";
import { useQuery } from "@vue/apollo-composable";
import { ref, onMounted } from "vue";
import noDataVue from "../components/noData.vue";

const { result, loading, error } = useQuery(favorite_recipe_query);
</script>

<style scoped>
body {
  background-color: red;
}
</style>
