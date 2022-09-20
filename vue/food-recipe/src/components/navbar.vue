<script setup>
import { userStore } from "../stores/userStore";
import { useProductStore } from "../stores/productStore";

import { useRouter } from "vue-router";
import { ref } from "vue";
const router = useRouter();
const user = userStore();
const products = useProductStore();

const logoutUser = () => {
  user.logout();
  products.clearProductOnLogout();

  // product.$reset;
  router.push("/login");
};

let showMenu = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);
</script>
<template>
  <!-- asdas -->

  <div class="backdrop-blur-none bg-gray-900 drop-shadow-2xl">
    <nav
      class="px-6 py-10 lg:flex lg:justify-between lg:items-center lg:py-0 lg:h-32"
    >
      <div
        class="flex items-center w-full md:justify-center lg:flex-row lg:justify-between"
      >
        <div>
          <router-link
            to="/"
            class="text-xl font-bold text-white md:text-2xl hover:text-indigo-400"
          >
            <div class="flex w-32">
              <div>
                <img
                  src="../assets/bibimbap.png"
                  class="mr-3 -mt-1 h-9 sm:h-9"
                  alt="Logo"
                />
              </div>
              <div>Ephy</div>
            </div>
          </router-link>
        </div>
        <div class="flex">
          <div @click="toggleNav" class="flex lg:hidden">
            <button
              type="button"
              class="text-white hover:text-gray-100 focus:outline-none focus:text-gray-200 fixed -mt-5 right-5"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col py-5 px-10 w-full mt-8 space-y-4 text-white lg:flex lg:space-y-0 lg:flex-row lg:items-center lg:text-right rounded-lg lg:mt-0 bg-gray-800 lg:bg-transparent lg:text-gray-900"
      >
        <li class="text-white">
          <router-link
            to="/home"
            class="block py-2 text-white mr-16 pr-4 w-full pl-3 md:pl-16 rounded hover:bg-gray-700 lg:hover:bg-transparent lg:p-0 lg:-ml-10 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 lg:bg-transparent lg:text-white"
            >Home</router-link
          >
        </li>
        <li class="text-white">
          <router-link
            to="/contact"
            aria-current="page"
            class="block py-2 text-white mr-16 pr-4 w-32 md:w-full lg:w-32 pl-3 md:pl-16 rounded hover:bg-gray-700 lg:hover:bg-transparent lg:p-0 lg:-ml-10 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 lg:bg-transparent lg:text-white"
            >Contact Us</router-link
          >
        </li>
        <li class="text-white">
          <router-link
            v-if="user.isLoggedIn == true"
            to="/favorite"
            aria-current="page"
            class="block py-2 text-white mr-16 pr-4 w-full pl-3 md:pl-16 rounded hover:bg-gray-700 lg:hover:bg-transparent lg:p-0 lg:-ml-10 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 lg:bg-transparent lg:text-white"
            >Favorite</router-link
          >
        </li>
        <li class="">
          <router-link
            v-if="user.isLoggedIn == false"
            to="/login"
            type="button"
            id="active-btn-text"
            class="border border-red-500 w-full mr-16 my-3 lg:w-36 lg:mx-10 focus:ring-2 h-fit hover:bg-gray-700 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </router-link>
        </li>
        <li>
          <router-link
            v-if="user.isLoggedIn == false"
            to="/signup"
            type="button"
            class="text-white lg:mx-10 bg-red-500 mr-16 border border-red-500 hover:bg-red-600 h-fit w-full lg:w-64 focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center lg:mr-0"
          >
            Sign Up
          </router-link>
        </li>
        <li>
          <div
            class="flex items-center space-x-4 cursor-pointer text-right mx-0 lg:mx-5 lg:mr-34"
            v-if="user.isLoggedIn == true"
            @click="router.push('/profile')"
          >
            <div class="font-medium text-white dark:text-white w-36">
              <div>Hi! {{ user.Fname }}</div>
              <div class="text-sm text-gray-100 dark:text-white">WellCome</div>
            </div>
            <img
              class="w-10 h-10 rounded-full"
              src="../assets/man.png"
              alt=""
            />
          </div>
        </li>
        <li>
          <router-link
            id="active-btn-text"
            v-if="user.isLoggedIn == true"
            to="/add-recipes"
            type="button"
            class="border border-red-500 w-full my-3 lg:w-44 focus:ring-2 h-fit focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <i class="fa-solid fa-plus"></i> Add Recipe
          </router-link>
        </li>
        <li>
          <router-link
            v-if="user.isLoggedIn == true"
            to="/signup"
            type="button"
            @click="logoutUser"
            class="text-white lg:mx-10 bg-red-500 border border-red-500 hover:bg-red-600 h-fit w-full lg:w-32 focus:ring-2 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Logout
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
  <!-- asdas -->
</template>
<style scoped></style>
