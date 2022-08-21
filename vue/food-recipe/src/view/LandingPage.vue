<script setup>
import navbar from "../components/navbar.vue";
</script>
<template>
  <div>
    <navbar />
    <div class="hero min-h-screen bg-base-200 flex items-center">
      <div
        class="hero-content mt-4 flex flex-row justify-center items-center jus lg:flex-row"
      >
        <div class="basis-1/4 mr-8">
          <img
            src="../assets/chad-montano-eeqbbemH9-c-unsplash.jpg"
            class="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
        <div class="basis-1/2">
          <h1 class="text-5xl font-bold">Find a Recipe</h1>
          <p class="py-6">
            Search through the recipes tailored to your needs. When you favorite
            a recipe, you can jump right into making it now, or put it on your
            favorite section and come back later.
          </p>
          <button
            class="bg-red-500 border border-red-500 shadow hover:bg-red-600 p-2 rounded-sm text-white flex items-center focus:outline-none focus:shadow-outline"
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
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
