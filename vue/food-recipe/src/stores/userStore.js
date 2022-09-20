import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { useStorage } from "@vueuse/core";

const router = useRouter();
export const userStore = defineStore("userStore", {
  state: () => ({
    Id: useStorage("id", ""),
    createdDate: useStorage("createdDate", ""),
    Fname: useStorage("FirsName", ""),
    Lname: useStorage("LastName", ""),
    email: useStorage("email", ""),
    isLoggedIn: useStorage("isLoggedIn", false),
    // isLoggedIn: false,
  }),
  getters: {},
  actions: {
    async login(token, id, createdAt, Fname, Lname, email) {
      this.isLoggedIn = true;
      this.Id = id;
      this.createdDate = createdAt;
      this.Fname = Fname;
      this.Lname = Lname;
      this.email = email;
      window.localStorage.setItem("token", token);
    },
    async logout() {
      this.isLoggedIn = false;
      localStorage.clear();
      // this.state = null;
      this.$reset();
    },
  },
});
