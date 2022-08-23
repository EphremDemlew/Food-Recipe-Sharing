<script setup></script>
<template>
  <div class="md:mt-24">
    <section class="text-black body-font">
      <div class="container px-5 pb-24 mx-auto flex flex-col">
        <div class="lg:w-4/6 mx-auto">
          <div
            class="flex flex-col sm:flex-row mt-10 border-blue-100 border-2 rounded-md"
          >
            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div
                class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-white text-gray-600"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div
                class="flex flex-col items-center text-center justify-center"
              >
                <h2 class="font-medium title-font mt-4 text-Black text-lg">
                  User Name
                </h2>
                <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p class="text-base text-gray-400">Email</p>
                <p class="text-base text-gray-400">Phone Number</p>
              </div>
            </div>
            <div
              class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-blue-100 sm:border-t-0 border-t mt-8 pt-4 sm:mt-0 text-center sm:text-left"
            >
              <p class="leading-relaxed text-lg mb-4">
                Details about the person is writteen here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
body {
  background-image: url(../assets/14589.jpg);
  background-size: cover;
}
</style>
