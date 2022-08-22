<script setup>
defineProps({
  title: String,
  img_url: String,
  like: Number,
});
</script>

<template>
  <div class="flex justify-center items-center lg:mt-20">
    <div
      class="bg-white rounded-lg p-6 text-black-100 z-10"
      style="cursor: auto"
    >
      <div class="flex flex-wrap items-center">
        <div class="flex w-full md:h-64 lg:h-72 relative">
          <div class="w-8/12 pr-4 relative">
            <img
              :src="img_url"
              class="w-full h-full object-cover object-top rounded-lg bg-white"
            />
          </div>

          <div class="w-4/12 h-full">
            <div class="flex flex-col w-full h-full">
              <div class="flex-1 pb-2">
                <div class="w-full h-full relative">
                  <img
                    :src="img_url"
                    class="absolute top-0 w-full h-full object-cover object-center rounded-lg bg-white"
                  />
                </div>
              </div>

              <div class="flex-1 pt-2">
                <div class="w-full h-full relative">
                  <img
                    :src="img_url"
                    class="absolute top-0 w-full h-full object-cover object-bottom rounded-lg bg-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full pt-8 flex flex-col justify-between">
          <div>
            <h2 class="font-bold text-xl">
              {{ title }}
            </h2>

            <div class="flex flex-wrap text-center justify-between pt-4 mb-2">
              <button
                type="button"
                class="inline-flex items-center px-5 py-2.5 text-sm border-2 border-gray-500 font-medium text-center text-black rounded-lg hover:bg-[#002D74] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Likes

                <span
                  class="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full"
                >
                  {{ like }}
                </span>
              </button>

              <button
                class="mr-2 mb-2 rounded-full px-3 py-1 text-xs font-bold border-2 border-green-600 bg-green-400 text-green-900"
              >
                2 min
              </button>
            </div>

            <p class="text-xs leading-relaxed text-black -50">
              This revolutionary email design kit is going to transform the way
              in which you send modern emails.
            </p>
          </div>

          <div class="w-full sm:flex-1 grid gap-4 grid-cols-2 pt-6">
            <a
              href="https://stackdiary.com/"
              class="flex items-center justify-center text-center relative text-white font-bold text-sm bg-gray-200 text-gray-800 px-8 py-3 rounded-lg shadow-lg hover:shadow-none hover:opacity-75"
              >Add to Favorite
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                viewBox="0 0 24 24"
                id="IconChangeColor"
                height="25"
                width="25"
              >
                <path
                  d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"
                  id="mainIconPathAttribute"
                  fill="orange"
                  stroke-width="0"
                  stroke="rgba(0, 0, 0, 0)"
                ></path>
              </svg>
            </a>

            <button
              x-on:click="pay('Essential')"
              class="w-full block text-center relative text-white font-bold text-sm bg-red-500 px-4 py-3 rounded-lg shadow-lg hover:shadow-none hover:opacity-75"
            >
              Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
