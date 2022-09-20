<script setup>
import { useQuery } from "@vue/apollo-composable";
import cards from "../components/cards.vue";
import { search_recipe } from "../graphql/index";
import loadingView from "../components/loading.vue";
import { useProductStore } from "../stores/productStore";
import { useRouter, useRoute } from "vue-router";
import { ref } from "@vue/reactivity";

import { computed, onMounted } from "vue";
import Cards from "../components/cards.vue";
import NoData from "../components/noData.vue";
const route = useRoute();
const router = useRouter();
const searchResults = computed(() => route.params.recQuery);

const { result, loading, error } = useQuery(search_recipe, {
  search: searchResults.value,
});
console.log(result.value);
</script>
<template>
  <div>
    <button
      @click="router.push('/home')"
      class="text-white font-mono text-xl bg-red-500 p-3 m-3 rounded-md hover:shadow-md"
    >
      &lt; Go back
    </button>
    <div v-if="loading" class="flex justify-center items-center">
      <loading-view></loading-view>
    </div>
    <div v-if="result.search_recipe.length == 0" class="mb-20">
      <NoData message="The recipe you searched for is not available" />
    </div>
    <div
      v-if="result.search_recipe.length > 0"
      class="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center bg-green-100 texture pb-10"
    >
      <div v-for="rec in result.search_recipe" :key="rec.id">
        <cards
          class="w-96 place-items-center md:w- lg:w-80"
          :title="rec.title"
          :id="rec.id"
          :img_url="rec.images[0].image_url"
          :like="rec.likes.likes_aggregate"
        />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
