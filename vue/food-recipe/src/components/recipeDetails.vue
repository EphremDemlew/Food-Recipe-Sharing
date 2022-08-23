<script setup>
import { useRoute } from "vue-router";
import { useQuery } from "@vue/apollo-composable";
import { ONE_FOOD } from "../Quires";
import Back from "../Router/Back.vue";
import { userLoginStore } from "../store/store";
const food = userLoginStore();

const route = useRoute();
const id = route.params.id;
console.log(id);
const Food = food.foods[0].find((food) => id === id);
console.log(Food.title);
</script>

<template>
  <div class="max-w-screen-xl mx-auto px-6 my-16">
    <Back />

    <div class="flex flex-col justify-center items-center h-screen">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        <div class="order-2 md:order-1 lg:order-1 flex flex-col justify-center">
          <h1
            class="text-center md:text-left lg:text-left text-3xl lg:text-4xl font-semibold poppins pb-4 text-gray-700 select-none"
          >
            {{ Food.title }}
          </h1>
          <p
            class="text-center md:text-left lg:text-left text-sm poppins text-gray-500 leading-relaxed select-none"
          >
            {{ Food.description }}
          </p>
        </div>

        <div class="order-1 md:order-2 lg:order-2">
          <img
            :src="food.image"
            class="w-3/4 md:w-3/4 lg:w-full mx-auto"
            alt="food"
          />
        </div>
      </div>
    </div>
  </div>
</template>
