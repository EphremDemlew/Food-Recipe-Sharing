<script setup>
import footerVue from "../components/footer.vue";
import navBar from "../components/navbar.vue";
import cards from "../components/cards.vue";
import status from "../components/status.vue";
import Search from "../components/search.vue";
import Loading from "../components/loading.vue";
import { userproductStore } from "../stores/productStore";
const recipes = userproductStore();
const recipesVals = recipes.recipes[0].data;
console.log(recipes.recipes[0].data);
console.log("recipesVals");
console.log(recipesVals);
</script>
<template>
  <div>
    <div class="hero bg bg-red-100 w-full md:w-full pt-20 md:p-44">
      <search class="bg-transparent" />
    </div>
    <div class="">
      <div
        class="flex flex-col justify-center items-center lg:flex-row md:color lg:justify-evenly"
        v-if="recipesVals"
      >
        <div v-for="rec in recipesVals.recipe" :key="rec.id">
          <cards
            class="flex w-96 justify-center items-center mb-10"
            :title="rec.name"
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
<style>
.hero {
  background-image: url(../assets/bannerbackground.png);
  background-attachment: scroll;
  background-position: center right;
  background-size: cover;
}
</style>
