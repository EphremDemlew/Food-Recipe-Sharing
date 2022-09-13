<script setup>
import footerVue from "../components/footer.vue";
import navBar from "../components/navbar.vue";
import cards from "../components/cards.vue";
import status from "../components/status.vue";
import { useQuery } from "@vue/apollo-composable";
import { recipe_query } from "../graphql/index";
import Search from "../components/search.vue";

const { result, loading, error } = useQuery(recipe_query);
</script>
<template>
  <div class="md:mt-32">
    <div class="hero md:-mt-32 bg bg-red-100 h-fit w-full p-40 md:w-full">
      <search class="backdrop-blur" />
    </div>

    <div
      class="flex flex-col justify-center items-center md:flex-row md:color md:justify-evenly"
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
</template>
<style>
.hero {
  background-image: url(../assets/bannerbackground.png);
  background-attachment: scroll;
  background-position: center bottom;
  background-size: cover;
}
</style>
