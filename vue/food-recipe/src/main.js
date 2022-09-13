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
// import store from "./stores/user.js";
import { createPinia } from "pinia";

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
})
  .use(router)
  .use(createPinia())
  // .use(store)
  .mount("#app");
