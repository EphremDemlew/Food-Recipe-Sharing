import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { useStorage } from "@vueuse/core";

const router = useRouter();
export const userStore = defineStore("userStore", {
  state: () => ({
    Id: useStorage("id", ""),
    createdDate: useStorage("createdDate", ""),
    name: useStorage("name", ""),
    email: useStorage("email", ""),
    isLoggedIn: useStorage("isLoggedIn", false),
    // isLoggedIn: false,
  }),
  getters: {},
  actions: {
    async login(token, id, createdAt, name, email) {
      this.isLoggedIn = true;
      this.id = id;
      this.createdDate = createdAt;
      this.name = name;
      this.email = email;
      window.localStorage.setItem("token", token);
    },
    async logout() {
      this.isLoggedIn = false;
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("isLoggedIn");
      window.localStorage.removeItem("id");
      window.localStorage.removeItem("createdDate");
      window.localStorage.removeItem("name");
      window.localStorage.removeItem("eamil");
      this.state.value = null;
      this.$reset();
    },
  },
});
