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

// watch(sort, (val) => {
//   router.push({ query: { sort: val } });
//   /* ... */
// });
</script>
<template>
  <div>
    <div class="hero bg bg-red-100 w-full md:w-full md:pt-20 lg:p-44">
      <!-- <div>
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
      </div> -->
      <search class="bg-transparent md:mt-10 md:mb-5" />
    </div>

    <div class="">
      <div
        v-if="recipesVals"
        class="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center bg-green-100 texture pb-10"
      >
        <div v-for="rec in recipesVals.recipe" :key="rec.id">
          <cards
            class="w-96 place-items-center lg:w-80"
            :id="rec.id"
            :title="rec.title"
            :description="rec.description"
            :img_url="rec.images[0].image_url"
            :like="rec.likes_aggregate.aggregate.count"
            :time="rec.time"
          />
        </div>
      </div>

      <div v-if="loading" class="flex justify-center items-center">
        <loading></loading>
      </div>
      <div class="flex flex-col items-center mb-5 texture bg-blue-200">
        <!-- Help text -->
        <span class="text-sm text-gray-700 dark:text-gray-400">
          Showing
          <span class="font-semibold text-gray-900 dark:text-white">1</span>
          to
          <span class="font-semibold text-gray-900 dark:text-white">10</span>
          of
          <span class="font-semibold text-gray-900 dark:text-white">100</span>
          Entries
        </span>
        <div class="inline-flex mt-2 xs:mt-0">
          <!-- Buttons -->
          <button
            class="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              class="mr-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Prev
          </button>
          <button
            class="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
            <svg
              aria-hidden="true"
              class="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
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
<style scoped></style>
