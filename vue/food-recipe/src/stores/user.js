// import { createStore } from "vuex";

// const store = createStore({
//   state() {
//     return {
//       user: null,
//       token: null,
//       recipe: null,
//     };
//   },
//   getters: {
//     user(state) {
//       return state.user;
//     },
//     token(state) {
//       return state.token;
//     },
//     recipe(state) {
//       return state.recipe;
//     },
//   },
//   mutations: {
//     setUser(state, payload) {
//       state.user = payload;
//     },
//     setToken(state, payload) {
//       state.token = payload;
//     },
//     setRecipe(state, payload) {
//       state.recipe = payload;
//     },
//   },
// });

import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const user = ref({
    name: "Eph",
    email: "test@gmail.com",
  });
  const wb = computed(() =>
    user.value.email.substring(user.value.email.lastIndexOf("@") + 1)
  );

  const changeName = (val) => {
    user.value.name = val;
  };

  return {
    user,
    wb,
    changeName,
  };
});
