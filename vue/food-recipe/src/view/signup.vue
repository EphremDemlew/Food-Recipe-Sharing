<template>
  <div>
    <section
      class="bg-blue-200 min-h-screen shadow-sm flex items-center texture justify-center px-20"
    >
      <!-- login container -->
      <div
        class="bg-white text-center mt-10 flex rounded-2xl max-w-3xl p-5 items-center shadow-2xl"
      >
        <!-- form -->
        <div class="">
          <h2 class="font-bold mt-8 text-2xl text-[#002D74]">Sign up</h2>

          <Form
            @submit="addUser"
            :validation-schema="signupSchema"
            class="flex flex-col gap-4 w-96 text-left"
          >
            <Field
              class="p-2 mt-8 rounded-xl border"
              type="text"
              name="first_name"
              placeholder="First Name"
            />
            <ErrorMessage
              name="first_name"
              class="py-2 text-xs ml-4 text-red-500"
            />
            <Field
              class="p-2 rounded-xl border"
              type="text"
              name="last_name"
              placeholder="Last Name"
            />
            <ErrorMessage
              name="last_name"
              class="py-2 text-xs ml-4 text-red-500"
            />

            <Field
              class="p-2 rounded-xl border"
              type="email"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage name="email" class="py-2 text-xs ml-4 text-red-500" />
            <div class="relative">
              <Field
                class="p-2 rounded-xl border w-full"
                type="password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage
                name="password"
                class="py-2 text-xs ml-4 text-red-500"
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

            <div class="relative">
              <Field
                class="p-2 rounded-xl border w-full"
                type="password"
                name="passwordConfirm"
                placeholder="Confirm Password"
              />
              <ErrorMessage
                name="passwordConfirm"
                class="py-2 text-xs ml-4 text-red-500"
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
              class="bg-red-500 rounded-xl text-white py-2 hover:scale-105 duration-300"
            >
              <svg
                v-if="loading"
                role="status"
                class="inline mr-3 w-4 h-4 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Sign Up
            </button>
            <p class="text-xs ml-4 text-red-500" v-if="error">
              {{ error.message }}
            </p>
          </Form>

          <div class="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr class="border-gray-400" />
            <p class="text-center text-sm">OR</p>
            <hr class="border-gray-400" />
          </div>

          <div
            class="mt-3 text-xs flex justify-between items-center text-[#002D74]"
          >
            <p>Do you have an account?</p>
            <router-link
              to="/login"
              class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
            >
              Login
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref } from "@vue/reactivity";
import { signup_query } from "../graphql/index";
import { useQuery, useMutation } from "@vue/apollo-composable";
import { useRouter } from "vue-router";
import { ErrorMessage, Form, Field } from "vee-validate";
import { userStore } from "../stores/userStore";
// import signupSchema from "../validator/index";
// import { string, object } from "yup";
import * as yup from "yup";

const signupSchema = yup.object({
  first_name: yup.string().min(6).required().label("First Name"),
  last_name: yup.string().min(6).required().label("Last Name"),
  email: yup.string().email().required().label("Email Address"),
  password: yup.string().min(6).required().label("Your Password"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("You must Confirm your password")
    .label("Password confirmation"),
});

const user = userStore();
const router = useRouter();
let users = ref({});
const addUser = async (value) => {
  users = {
    first_name: value.first_name,
    last_name: value.last_name,
    email: value.email,
    password: value.password,
  };

  signup();
  onDone((res) => {
    console.log("The data is  .............//");

    if (res.data) {
      console.log("The data is  .............");
      console.log(res.data);
      const token = res.data.sign_up.token;
      const Id = res.data.sign_up.id;
      const Fname = res.data.sign_up.first_name;
      const Lname = res.data.sign_up.last_name;
      const email = res.data.sign_up.email;
      const createdDate = res.data.sign_up.created_at;
      user.login(token, Id, createdDate, Fname, Lname, email);
      router.push("/home");

      return;
    }
  });
};

const {
  mutate: signup,
  loading: loading,
  error: error,
  onDone,
} = useMutation(signup_query, () => ({
  variables: {
    first_name: users.first_name,
    last_name: users.last_name,
    email: users.email,
    password: users.password,
  },
}));
</script>
