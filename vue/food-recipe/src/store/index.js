import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      user: null,
      token: null,
      recipe: null,
    };
  },
  getters: {
    user(state) {
      return state.user;
    },
    token(state) {
      return state.token;
    },
    recipe(state) {
      return state.recipe;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setToken(state, payload) {
      state.token = payload;
    },
    setRecipe(state, payload) {
      state.recipe = payload;
    },
  },
});
export default store;
