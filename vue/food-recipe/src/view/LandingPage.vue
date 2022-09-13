<script setup>
import { useQuery } from "@vue/apollo-composable";

import cards from "../components/cards.vue";
import Search from "../components/search.vue";
import { recipe_query } from "../graphql/index";
// import { computed } from "vue";
// import { useStore } from "vuex";
// const store = useStore();
// const val = computed(() => {
//   return store.getters?.recipe;
// });

const { result, loading, error } = useQuery(recipe_query);
console.log("From on outside");
console.log(result);
console.log(loading);
console.log(error);

// console.log(result);

// onResult((result) => {
//   console.log("result=", result.data);
//   store?.commit("setRecipe", result.data);
// });
</script>
<template>
  <div class="md:mt-8 w-full">
    <div
      class="hero min-h-screen w-full bg-base-200 flex items-center justify-center -mt-10"
    >
      <div
        class="hero-content mt-4 flex flex-col justify-evenly items-center md:flex-row md:ml-20"
      >
        <div class="basis-1/4 mt-24 md:mt-24">
          <img
            src="../assets/chad-montano-eeqbbemH9-c-unsplash.jpg"
            class="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
        <div class="basis-3/4 mx-24 mt-10">
          <h1 class="text-5xl font-bold">Find a Recipe</h1>
          <p class="py-6">
            Search through the recipes tailored to your needs. When you favorite
            a recipe, you can jump right into making it now, or put it on your
            favorite section and come back later.
          </p>
          <router-link
            to="/login"
            class="bg-red-500 border border-red-500 shadow hover:bg-red-600 w-60 p-2 rounded-sm text-white flex items-center focus:outline-none focus:shadow-outline"
          >
            <span class="mx-10 pl-4"> Get Started</span>
            <svg width="24" height="24" viewBox="0 0 16 16">
              <path
                d="M7 4 L11 8 L7 12"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
    <search />

    <div
      class="flex flex-col justify-center items-center md:flex-row md:justify-evenly"
      v-if="result"
    >
      <div v-for="rec in result.recipe" :key="rec.id">
        <cards
          class="flex w-96 justify-center mb-10 md:w-full"
          :title="rec.name"
          :img_url="rec.images[0].image_url"
          :like="result.likes"
        />
      </div>
    </div>
    <div v-if="loading">
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

<style>
.hero {
  background-image: url(../assets/bannerbackground.png);
  background-attachment: scroll;
  background-position: center bottom;
  background-size: cover;
}
</style>
