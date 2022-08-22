<script setup>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
// provide(ApolloClients, apolloClients);

const email = ref("");
const password = ref("");

const store = useStore();

const addUser = () => {
  const userData = gql`
    query logins($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        id
        token
      }
    }

    # query users {
    #   users {
    #     id
    #     email
    #     first_name
    #   }
    # }
  `;
  const { result, error, loading } = useQuery(userData, {
    variables: {
      email: email.value,
      password: password.value,
    },
  });
  // console.log(result.value.login.token);
  console.log(result);
};
</script>

<template>
  <div>
    <section class="bg-gray-50 min-h-screen flex items-center justify-center">
      <!-- login container -->
      <div
        class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center"
      >
        <!-- form -->
        <div class="md:w-1/2 px-8 md:px-16">
          <h2 class="font-bold text-2xl text-[#002D74]">Login</h2>
          <p class="text-xs mt-4 text-[#002D74]">
            If you are already a member, easily log in
          </p>

          <form @submit.prevent="addUser" class="flex flex-col gap-4">
            <input
              class="p-2 mt-8 rounded-xl border"
              type="email"
              name="email"
              v-model="email"
              placeholder="Email"
            />
            <div class="relative">
              <input
                class="p-2 rounded-xl border w-full"
                type="password"
                v-model="password"
                name="password"
                placeholder="Password"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="gray"
                class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                />
                <path
                  d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                />
              </svg>
            </div>
            <button
              class="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
            >
              Login
            </button>
          </form>

          <div class="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr class="border-gray-400" />
            <p class="text-center text-sm">OR</p>
            <hr class="border-gray-400" />
          </div>

          <div
            class="mt-3 text-xs flex justify-between items-center text-[#002D74]"
          >
            <p>Don't have an account?</p>
            <router-link
              to="/signup"
              class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
            >
              Register
            </router-link>
          </div>
        </div>

        <!-- image -->
        <div class="md:block hidden w-1/2">
          <img
            class="rounded-2xl"
            src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
          />
        </div>
      </div>
    </section>
    <div>
      <div v-if="error">
        <h1>error</h1>
      </div>
      <div v-if="loading"><h1>loading</h1></div>
      <div
        v-else
        v-for="ppl in result.logins"
        :key="ppl.id"
        class="p-4 md:w-1/3 sm:mb-0 mb-6"
      >
        <h1>ID</h1>
        <h1>{{ ppl.email }}</h1>
      </div>
    </div>
  </div>
</template>
