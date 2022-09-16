<script setup>
import cards from "../components/cards.vue";
import Search from "../components/search.vue";
import Loading from "../components/loading.vue";
import { useProductStore } from "../stores/productStore";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const recipes = useProductStore();
const recipesVals = recipes.recipes[0].data;
console.log(recipes.recipes[0].data);
console.log("recipesVals");
console.log(recipesVals);

watch(sort, (val) => {
  router.push({ query: { sort: val } });
  /* ... */
});
</script>
<template>
  <div>
    <div class="hero bg bg-red-100 w-full md:w-full pt-20 md:p-44">
      <div>
        <label for="sort"><i class="fa-solid fa-filter"></i> Filter</label>
        <select
          name="sort"
          v-model="sort"
          id="sort"
          class="block mt-1 py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        >
          <option value="1">Latest</option>
          <option value="2">Oldeest</option>
        </select>
      </div>
      <search class="bg-transparent" />
    </div>

    <div class="">
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
  </div>
</template>
<style scoped>
.hero {
  background-image: url(../assets/bannerbackground.png);
  background-attachment: scroll;
  background-position: center right;
  background-size: cover;
}
</style>
