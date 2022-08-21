<script setup></script>

<template>
  <!-- <div>
    <div class="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div class="card-body p-10">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="mx-10">
            <span class="relative inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="w-6 h-6 text-gray-700 fill-current"
                viewBox="0 0 16 16"
                id="IconChangeColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  id="mainIconPathAttribute"
                  fill="#ff5900"
                  stroke-width="0"
                  stroke="#ff0000"
                ></path>
              </svg>

              <span
                class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"
                >99</span
              >
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-heart-fill"
              viewBox="0 0 16 16"
              id="IconChangeColor"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                id="mainIconPathAttribute"
                fill="#ff5900"
                stroke-width="0"
                stroke="#ff0000"
              ></path>
            </svg>
            <span
              class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-800 transform translate-x-1/2 -translate-y-1/2 bg-purple-600 rounded-full"
              >99</span
            >
            <div
              class="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-red-500 bg-black-500 rounded-full border-2 border-white dark:border-gray-900"
            >
              20
            </div>
          </button>
          <button>
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
          </button>
          <div
            class="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-red-500 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"
          >
            20
          </div>
          <button
            class="btn h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
          >
            View Complete Guide
          </button>
        </div>
      </div>
    </div>
  </div> -->

  <div class="">
    <div class="container flex justify-center items-center lg:mt-24">
      <div
        class="bg-teal-400 w-1/3 bg-opacity-25 rounded-lg p-6 text-black-100 z-10"
        style="cursor: auto"
      >
        <div class="flex flex-wrap items-center">
          <div class="flex w-full md:h-64 lg:h-72 relative">
            <div class="w-8/12 pr-4 relative">
              <img
                src="https://placeimg.com/400/225/arch"
                class="w-full h-full object-cover object-top rounded-lg bg-white"
              />
            </div>

            <div class="w-4/12 h-full">
              <div class="flex flex-col w-full h-full">
                <div class="flex-1 pb-2">
                  <div class="w-full h-full relative">
                    <img
                      src="https://placeimg.com/400/225/arch"
                      class="absolute top-0 w-full h-full object-cover object-center rounded-lg bg-white"
                    />
                  </div>
                </div>

                <div class="flex-1 pt-2">
                  <div class="w-full h-full relative">
                    <img
                      src="https://placeimg.com/400/225/arch"
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
                Tailmail - Tailwind CSS Email Design Kit
              </h2>

              <div class="flex flex-wrap text-center justify-between pt-4 mb-2">
                <button
                  type="button"
                  class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-black rounded-lg hover:bg-[#002D74] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Likes

                  <span
                    class="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full"
                  >
                    2
                  </span>
                </button>

                <button
                  class="mr-2 mb-2 rounded-full px-3 py-1 text-xs font-bold bg-green-400 text-green-900"
                >
                  2 min
                </button>
              </div>

              <p class="text-xs leading-relaxed text-black -50">
                This revolutionary email design kit is going to transform the
                way in which you send modern emails.
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
  </div>
</template>

<style scoped></style>
