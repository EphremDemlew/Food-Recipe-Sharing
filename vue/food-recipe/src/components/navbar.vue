<script setup>
import { userLoginStore } from "../stores/user";
import { useRouter } from "vue-router";
const router = useRouter();
const user = userLoginStore();

const logoutUser = () => {
  console.log(user.name);
  console.log(user.createdDate);
  console.log(user);
  user.logout();
  // product.$reset;
  router.push("/login");
};
</script>
<template>
  <nav
    class="bg-opacity-80 blur-0 backdrop-blur px-2 sm:px-4 py-5 fixed w-full z-20 top-0 left-0"
  >
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <router-link to="/" class="flex items-center">
        <img src="../assets/bibimbap.png" class="mr-3 h-6 sm:h-9" alt="Logo" />
        <span
          class="self-center text-red-500 font-serif text-xl font-semibold whitespace-nowrap dark:text-white"
          >Eph</span
        >
      </router-link>
      <div class="flex md:order-2">
        <router-link
          v-if="user.isLoggedIn == false"
          to="/login"
          type="button"
          class="text-gray-900 w-32 bg-transparent font-semibold focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </router-link>
        <router-link
          v-if="user.isLoggedIn == false"
          to="/signup"
          type="button"
          class="text-white w-32 ml-10 bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sign Up
        </router-link>

        <div
          class="flex items-center space-x-4 cursor-pointer"
          v-if="user.isLoggedIn == true"
          @click="router.push('/profile')"
        >
          <img class="w-10 h-10 rounded-full" src="../assets/man.png" alt="" />
          <div class="font-medium dark:text-white">
            <div>Hi! {{ user.name }}</div>
            <div class="text-sm text-gray-500 dark:text-gray-800">WellCome</div>
          </div>
        </div>
        <router-link
          v-if="user.isLoggedIn == true"
          to="/signup"
          type="button"
          @click="logoutUser"
          class="text-white w-32 ml-10 bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Logout
        </router-link>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 lg:bg-transparent"
        >
          <li>
            <router-link
              to="/home"
              class="block py-2 pr-4 pl-3 text-[#002D74] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/contact"
              aria-current="page"
              class="block py-2 focus:text-blue-600 pr-4 pl-3 text-[#002D74] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Contact</router-link
            >
          </li>
          <li>
            <router-link
              to="/favorite"
              aria-current="page"
              class="focus:text-gray-900 focus:font-bold block py-2 pr-4 pl-3 text-[#002D74] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Favorite</router-link
            >
          </li>
          <li>
            <router-link
              to="/profile"
              aria-current="page"
              class="focus:text-blue-600 block py-2 text-sm pr-4 pl-3 text-[#002D74] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Profile</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
