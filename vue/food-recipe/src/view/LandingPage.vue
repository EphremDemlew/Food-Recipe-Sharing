<script setup>
import { useQuery } from "@vue/apollo-composable";
import cards from "../components/cards.vue";
import Search from "../components/search.vue";
import { recipe_query } from "../graphql/index";
import loadingView from "../components/loading.vue";
import { useProductStore } from "../stores/productStore";
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
import { computed, onMounted } from "vue";

const router = useRouter();
const recipes = useProductStore();
let loading = ref(false);
const val = computed(() => {
  let recipesVals = ref(null);
  recipesVals = recipes.recipes[0].data?.recipe;
  return recipesVals;
});
</script>
<template>
  <div class="w-full">
    <div class="bg-blue-100 -mt-20 texture flex items-center justify-center">
      <div
        class="hero-content flex flex-col justify-evenly items-center md:flex-row md:ml-20"
      >
        <div class="basis-1/4 mt-36">
          <img
            src="../assets/chad-montano-eeqbbemH9-c-unsplash.jpg"
            class="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
        <div
          class="basis-3/4 mx-24 mt-10 h-full bg-red-50 bg-opacity-70 shadow-2xl rounded-3xl py-5 px-5 md:mt-32"
        >
          <h1 class="text-5xl font-bold">
            Find a recipe<span class="text-red-500">!</span>
          </h1>
          <p class="py-6">
            Search through the recipes tailored to your needs. When you favorite
            a recipe, you can jump right into making it now, or put it on your
            favorite section and come back later.
            {{ recipes.recipes[0].data.recipe[0].desc }}
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
    <!-- the {{ result }} is -->
    <div
      v-if="recipes.recipes[0].loading != false"
      class="flex justify-center items-center"
    >
      <loading-view></loading-view>
    </div>
    <div
      v-if="recipes.recipes.length > 0"
      class="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center bg-green-100 texture pb-10"
    >
      <div v-for="rec in val && val" :key="rec.id">
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

<style>
.hero {
  background-image: url(../assets/1.png);
  background-attachment: fixed;
  background-position: top right;
  background-size: cover;
}
.texture {
  background-image: url(../assets/foodtexure.jpg);
  background-attachment: fixed;

  background-blend-mode: soft-light;
  background-blend-mode: screen;
}
li .router-link-active {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity));
}

#active-btn-text {
  color: #fff;
}
</style>
