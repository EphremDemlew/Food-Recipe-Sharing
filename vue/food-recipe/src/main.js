// import { createApp, provide, h } from "vue";
// import App from "./App.vue";
// import "./index.css";
// import router from "./router/router.js";

// const app = createApp({
//   setup() {
//     provide(DefaultApolloClient, apolloClient);
//   },
//   render: () => h(App),
// });
// app.use(router).mount("#app");

import { DefaultApolloClient } from "@vue/apollo-composable";
import apolloClient from "./ApolloClient.js";
import { createApp, provide, h } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router/router";
import { createPinia } from "pinia";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const options = {
  // You can set your default options here
};

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
})
  .use(router)
  .use(createPinia())
  .use(Toast, options)
  .mount("#app");
