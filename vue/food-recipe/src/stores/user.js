import { defineStore } from "pinia";
import { useRouter } from "vue-router";
const router = useRouter();
export const userLoginStore = defineStore("user", {
  state: () => ({
    Id: "",
    createdDate: "",
    name: "",
    email: "",
    isLoggedIn: false,
    foods: [],
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
    },
    async addFoods(...foods) {
      this.foods = foods;
    },
  },
  persist: {
    enabled: true,
  },
});
