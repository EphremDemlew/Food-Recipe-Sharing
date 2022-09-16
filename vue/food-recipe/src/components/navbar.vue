<script setup>
import { userStore } from "../stores/userStore";
import { useRouter } from "vue-router";
import { ref } from "vue";
const router = useRouter();
const user = userStore();

const logoutUser = () => {
  console.log(user.name);
  console.log(user.createdDate);
  console.log(user);
  user.logout();
  // product.$reset;
  router.push("/login");
};

let showMenu = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);
</script>
<template>
  <!-- asdas -->

  <div class="-mb-36 blur-0 backdrop-blur">
    <nav
      class="container blur-0 backdrop-blur w-screen px-6 py-6 md:flex md:justify-between md:items-center"
    >
      <div
        class="flex items-center flex-col w-full justify-center lg:flex-row md:justify-between"
      >
        <div class="">
          <router-link
            to="/"
            class="text-xl font-bold text-gray-900 md:text-2xl hover:text-indigo-400"
          >
            <div class="flex w-32">
              <div>
                <img
                  src="../assets/bibimbap.png"
                  class="mr-3 -mt-1 h-6 sm:h-9"
                  alt="Logo"
                />
              </div>
              <div>Ephy</div>
            </div>
          </router-link>
        </div>
        <div class="flex">
          <div @click="toggleNav" class="flex md:hidden">
            <button
              type="button"
              class="text-grey-800 hover:text-gray-900 focus:outline-none focus:text-gray-900 fixed -mt-5 right-5"
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
        class="flex-col py-5 px-10 mt-8 mb-5 space-y-4 text-white md:flex md:space-y-0 md:flex-row md:items-center rounded-lg md:space-x-10 md:mt-0 bg-gray-800 md:bg-transparent md:text-gray-900 w-full"
      >
        <li class="text-white">
          <router-link
            to="/home"
            class="block py-2 text-white pr-4 pl-3 mr-16 rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0 md:-ml-10 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 md:bg-transparent md:text-gray-900"
            >Home</router-link
          >
        </li>
        <li class="text-white">
          <router-link
            to="/contact"
            aria-current="page"
            class="block py-2 text-white pr-4 w-64 pl-3 rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0 md:-ml-16 md:-mr-20 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 md:bg-transparent md:text-gray-900"
            >Contact Us</router-link
          >
        </li>
        <li class="text-white">
          <router-link
            v-if="user.isLoggedIn == true"
            to="/favorite"
            aria-current="page"
            class="block py-2 text-white pr-4 pl-3 mr-16 rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0 md:-ml-16 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 md:bg-transparent md:text-gray-900"
            >Favorite</router-link
          >
        </li>
      </ul>
      <router-link
        v-if="user.isLoggedIn == false"
        to="/login"
        type="button"
        class="border bg-red-50 border-red-500 w-full mr-16 my-3 md:w-36 md:mx-10 focus:ring-4 h-fit focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Login
      </router-link>
      <router-link
        v-if="user.isLoggedIn == false"
        to="/signup"
        type="button"
        class="text-white md:mx-10 bg-red-500 mr-16 border border-red-500 hover:bg-red-600 h-fit w-full md:w-64 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Sign Up
      </router-link>

      <div
        class="flex items-center space-x-4 cursor-pointer text-right mx-0 md:mx-5 md:mr-34"
        v-if="user.isLoggedIn == true"
        @click="router.push('/profile')"
      >
        <div class="font-medium dark:text-white w-36">
          <div>Hi! {{ user.name }}</div>
          <div class="text-sm text-gray-500 dark:text-gray-800">WellCome</div>
        </div>
        <img class="w-10 h-10 rounded-full" src="../assets/man.png" alt="" />
      </div>
      <router-link
        v-if="user.isLoggedIn == true"
        to="/add-recipes"
        type="button"
        class="border bg-red-50 border-red-500 w-full my-3 md:max-w-md focus:ring-4 h-fit focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <i class="fa-solid fa-plus"></i> Add Recipe
      </router-link>
      <router-link
        v-if="user.isLoggedIn == true"
        to="/signup"
        type="button"
        @click="logoutUser"
        class="text-white md:mx-10 bg-red-500 border border-red-500 hover:bg-red-600 h-fit w-full md:w-64 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Logout
      </router-link>
    </nav>
  </div>
  <!-- asdas -->
</template>
