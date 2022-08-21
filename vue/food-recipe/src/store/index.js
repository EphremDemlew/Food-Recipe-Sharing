import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      user: null,
      token: null,
    };
  },
  getters: {
    user(state) {
      return state.user;
    },
    token(state) {
      return state.token;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setToken(state, payload) {
      state.token = payload;
    },
  },
});
export default store;
