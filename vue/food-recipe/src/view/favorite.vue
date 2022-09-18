<script setup>
import cards from "../components/cards.vue";
import Loading from "../components/loading.vue";
import { favorite_recipe_query } from "../graphql/index";
import { useQuery } from "@vue/apollo-composable";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

let res = ref([]);

// res = recipes.getRecipeById
const { result, loading, error, onResult } = useQuery(favorite_recipe_query);
onResult((val) => {
  // recipes.addRecipes(val);
  res.value = val.data.favorite;
  console.log("The recipes are ...");
  console.log(res.value);
});
</script>
<template>
  <div class="texture bg-green-50 mt-10">
    <div
      v-if="res"
      class="grid gap-x-8 md:mt-0 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center bg-green-100 texture pb-10"
    >
      <div v-for="rec in res" :key="rec">
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

    <div v-if="error" class="py-24 -mt-10">
      <div class="">
        <center class="m-auto">
          <svg
            class="emoji-404"
            enable-background="new 0 0 226 249.135"
            height="249.135"
            id="Layer_1"
            overflow="visible"
            version="1.1"
            viewBox="0 0 226 249.135"
            width="226"
            xml:space="preserve"
          >
            <circle cx="113" cy="113" fill="#FFE585" r="109" />
            <line
              enable-background="new    "
              fill="none"
              opacity="0.29"
              stroke="#6E6E96"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="8"
              x1="88.866"
              x2="136.866"
              y1="245.135"
              y2="245.135"
            />
            <line
              enable-background="new    "
              fill="none"
              opacity="0.17"
              stroke="#6E6E96"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="8"
              x1="154.732"
              x2="168.732"
              y1="245.135"
              y2="245.135"
            />
            <line
              enable-background="new    "
              fill="none"
              opacity="0.17"
              stroke="#6E6E96"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="8"
              x1="69.732"
              x2="58.732"
              y1="245.135"
              y2="245.135"
            />
            <circle cx="68.732" cy="93" fill="#6E6E96" r="9" />
            <path
              d="M115.568,5.947c-1.026,0-2.049,0.017-3.069,0.045  c54.425,1.551,98.069,46.155,98.069,100.955c0,55.781-45.219,101-101,101c-55.781,0-101-45.219-101-101  c0-8.786,1.124-17.309,3.232-25.436c-3.393,10.536-5.232,21.771-5.232,33.436c0,60.199,48.801,109,109,109s109-48.801,109-109  S175.768,5.947,115.568,5.947z"
              enable-background="new    "
              fill="#FF9900"
              opacity="0.24"
            />
            <circle cx="156.398" cy="93" fill="#6E6E96" r="9" />
            <ellipse
              cx="67.732"
              cy="140.894"
              enable-background="new    "
              fill="#FF0000"
              opacity="0.18"
              rx="17.372"
              ry="8.106"
            />
            <ellipse
              cx="154.88"
              cy="140.894"
              enable-background="new    "
              fill="#FF0000"
              opacity="0.18"
              rx="17.371"
              ry="8.106"
            />
            <path
              d="M13,118.5C13,61.338,59.338,15,116.5,15c55.922,0,101.477,44.353,103.427,99.797  c0.044-1.261,0.073-2.525,0.073-3.797C220,50.802,171.199,2,111,2S2,50.802,2,111c0,50.111,33.818,92.318,79.876,105.06  C41.743,201.814,13,163.518,13,118.5z"
              fill="#FFEFB5"
            />
            <circle
              cx="113"
              cy="113"
              fill="none"
              r="109"
              stroke="#6E6E96"
              stroke-width="8"
            />
          </svg>
          <div class="tracking-widest mt-4">
            <span class="text-gray-500 text-xl"
              >Sorry, there are no liked recipes here!</span
            >
          </div>
        </center>
        <center class="mt-6">
          <button
            @click="router.go(-1)"
            class="text-white font-mono text-xl bg-red-500 p-3 rounded-md hover:shadow-md"
          >
            &lt; Go back
          </button>
        </center>
      </div>
    </div>
    <div v-if="res.length < 1" class="py-24 -mt-10">
      <div class="">
        <center class="m-auto">
          <svg
            class="emoji-404"
            enable-background="new 0 0 226 249.135"
            height="249.135"
            id="Layer_1"
            overflow="visible"
            version="1.1"
            viewBox="0 0 226 249.135"
            width="226"
            xml:space="preserve"
          >
            <circle cx="113" cy="113" fill="#FFE585" r="109" />
            <line
              enable-background="new    "
              fill="none"
              opacity="0.29"
              stroke="#6E6E96"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="8"
              x1="88.866"
              x2="136.866"
              y1="245.135"
              y2="245.135"
            />
            <line
              enable-background="new    "
              fill="none"
              opacity="0.17"
              stroke="#6E6E96"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="8"
              x1="154.732"
              x2="168.732"
              y1="245.135"
              y2="245.135"
            />
            <line
              enable-background="new    "
              fill="none"
              opacity="0.17"
              stroke="#6E6E96"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="8"
              x1="69.732"
              x2="58.732"
              y1="245.135"
              y2="245.135"
            />
            <circle cx="68.732" cy="93" fill="#6E6E96" r="9" />
            <path
              d="M115.568,5.947c-1.026,0-2.049,0.017-3.069,0.045  c54.425,1.551,98.069,46.155,98.069,100.955c0,55.781-45.219,101-101,101c-55.781,0-101-45.219-101-101  c0-8.786,1.124-17.309,3.232-25.436c-3.393,10.536-5.232,21.771-5.232,33.436c0,60.199,48.801,109,109,109s109-48.801,109-109  S175.768,5.947,115.568,5.947z"
              enable-background="new    "
              fill="#FF9900"
              opacity="0.24"
            />
            <circle cx="156.398" cy="93" fill="#6E6E96" r="9" />
            <ellipse
              cx="67.732"
              cy="140.894"
              enable-background="new    "
              fill="#FF0000"
              opacity="0.18"
              rx="17.372"
              ry="8.106"
            />
            <ellipse
              cx="154.88"
              cy="140.894"
              enable-background="new    "
              fill="#FF0000"
              opacity="0.18"
              rx="17.371"
              ry="8.106"
            />
            <path
              d="M13,118.5C13,61.338,59.338,15,116.5,15c55.922,0,101.477,44.353,103.427,99.797  c0.044-1.261,0.073-2.525,0.073-3.797C220,50.802,171.199,2,111,2S2,50.802,2,111c0,50.111,33.818,92.318,79.876,105.06  C41.743,201.814,13,163.518,13,118.5z"
              fill="#FFEFB5"
            />
            <circle
              cx="113"
              cy="113"
              fill="none"
              r="109"
              stroke="#6E6E96"
              stroke-width="8"
            />
          </svg>
          <div class="tracking-widest mt-4">
            <span class="text-gray-500 text-xl"
              >Sorry, there are no liked recipes here!</span
            >
          </div>
        </center>
        <center class="mt-6">
          <button
            @click="router.go(-1)"
            class="text-white font-mono text-xl bg-red-500 p-3 rounded-md hover:shadow-md"
          >
            &lt; Go back
          </button>
        </center>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: red;
}
.emoji-404 {
  position: relative;
  animation: mymove 2.5s infinite;
}

@keyframes mymove {
  33% {
    top: 0px;
  }
  66% {
    top: 20px;
  }
  100% {
    top: 0px;
  }
}
</style>
