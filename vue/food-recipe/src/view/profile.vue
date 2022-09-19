<template>
  <!-- <div class="md:mt-24">
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
                  Name
                </h2>
                <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p class="text-base text-gray-400">{{ user.name }}</p>

                <h2 class="font-medium title-font mt-4 text-Black text-lg">
                  Email
                </h2>
                <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p class="text-base text-gray-400">{{ user.name }}</p>
              </div>
            </div>
            <div
              class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-blue-100 sm:border-t-0 border-t mt-8 pt-4 sm:mt-0 text-center sm:text-left"
            >
              <p class="leading-relaxed text-lg mb-4 w-96">
                <img src="../assets/man.png" alt="" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div> -->
  <div class="py-12 texture bg-green-100">
    <div
      class="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden md:max-w-2xl"
    >
      <div class="md:flex">
        <div class="w-full text-center">
          <img src="../assets/man.png" alt="" />

          <div class="px-16 my-5 text-left">
            <div class="flex flex-col text-center mt-3 mb-4">
              <span class="text-2xl font-medium">{{ user.Fname }}</span>
              <span class="text-md text-gray-400"
                >@{{ user.Fname }}_{{ user.Lname }}</span
              >
            </div>
            <div class="bg-gray-200 py-6 px-3 rounded-lg">
              <div>
                <h1 class="my-2 font-extrabold">Email</h1>
                <span class="">{{ user.email }}</span>
              </div>
              <div>
                <h1 class="my-2 font-extrabold">First Name</h1>

                <span>{{ user.Fname }}</span>
              </div>
              <div>
                <h1 class="my-2 font-extrabold">Last Name</h1>
                <span>{{ user.Lname }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-100 p-2 py-10 w-full rounded-r-lg">
          <div class="justify-center hidden md:flex">
            <div class="relative">
              <img
                src="../assets/man.png"
                alt=""
                class="rounded-full"
                width="80"
              />
              <span
                class="absolute border-white border-4 h-5 w-5 top-12 left-16 bg-green-700 rounded-full"
              ></span>
            </div>
          </div>

          <div class="md:flex flex-col text-center mt-3 mb-4 hidden">
            <span class="text-2xl font-medium">{{ user.Fname }}</span>
            <span class="text-md text-gray-400"
              >@{{ user.Fname }}_{{ user.Lname }}</span
            >
          </div>
          <div class="bg-gray-100 py-5">
            <div class="px-16 mt-5 text-left">
              <div>
                <span
                  class="bg-gray-100 h-5 p-1 px-3 rounded cursor-pointer hover:shadow hover:bg-gray-200"
                  >Email</span
                >
              </div>

              <input
                class="bg-white mt-3 border w-full px-5 py-2 rounded-md"
                type="text"
                :value="user.email"
              />
            </div>
            <div class="px-16 mt-5 text-left">
              <div>
                <span
                  class="bg-gray-100 h-5 p-1 px-3 rounded cursor-pointer hover:shadow hover:bg-gray-200"
                  >First Name</span
                >
              </div>

              <input
                class="bg-white mt-3 border w-full px-5 py-2 rounded-md"
                type="text"
                :value="user.Fname"
              />
            </div>
            <div class="px-16 mt-5 text-left">
              <div>
                <span
                  class="bg-gray-100 h-5 p-1 px-3 rounded cursor-pointer hover:shadow hover:bg-gray-200"
                  >Last Name</span
                >
              </div>

              <input
                class="bg-white mt-3 border w-full px-5 py-2 rounded-md"
                type="text"
                :value="user.Lname"
              />
            </div>

            <div class="px-14 mt-5">
              <button
                class="h-12 bg-red-500 w-full text-white text-md rounded hover:shadow hover:bg-red-600"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { userStore } from "../stores/userStore";
const user = userStore();
</script>
<style></style>
