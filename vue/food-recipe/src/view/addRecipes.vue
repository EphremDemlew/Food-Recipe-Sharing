<template>
  <div>
    <section
      class="bg-gray-50 min-h-screen flex flex-col items-center banner justify-center p-20"
    >
      <div class="mt-3 relative left-0 w-full">
        <button
          class="bg-red-500 text-white pl-5 pr-10 py-1 rounded-md"
          @click="router.push('/home')"
        >
          <i
            class="fa-solid fa-caret-left hover:-translate-x-2 duration-500 pr-16"
          ></i>
          <span class="-ml-12">Back</span>
        </button>
      </div>
      <!-- aler -->
      <div class="fixed bottom-5 right-5">
        <div
          v-if="error"
          class="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
          role="alert"
        >
          <svg
            aria-hidden="true"
            class="flex-shrink-0 inline w-5 h-5 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Info</span>
          <div>
            <span class="font-medium">{{ message }}</span> Change a few things
            up and try submitting again.
          </div>
        </div>
        <div
          v-else-if="message"
          class="flex p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
          role="alert"
        >
          <svg
            aria-hidden="true"
            class="flex-shrink-0 inline w-5 h-5 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Info</span>
          <div>
            <span class="font-medium">{{ message }}</span>
          </div>
        </div>
      </div>
      <!-- alert -->
      <div
        class="bg-white text-center mt-10 flex rounded-2xl max-w-3xl p-5 items-center"
      >
        <!-- form -->
        <div class="">
          <h2 class="font-bold mt-8 text-2xl text-[#002D74]">Add Recipes</h2>

          <form
            @submit.prevent="addRecipe"
            enctype="multipart/form-data"
            class="flex flex-col gap-4 w-96 text-left"
          >
            <input
              class="p-2 rounded-xl border"
              type="text"
              name="title"
              v-model="recs.title"
              placeholder="Title"
            />
            <input
              class="p-2 rounded-xl border"
              type="text"
              name="description"
              v-model="recs.description"
              placeholder="Description"
            />
            <input
              class="p-2 rounded-xl border"
              type="text"
              name="category"
              v-model="recs.category"
              placeholder="Category"
            />

            <input
              class="p-2 rounded-xl border"
              type="number"
              name="time"
              v-model="recs.time"
              placeholder="Time required in minutes"
            />
            <div v-for="i in recs.stepRows" :key="i">
              <input
                class="p-2 rounded-xl w-96 border"
                type="text"
                name="steps"
                placeholder="Steps"
                v-model="recs.steps[i - 1]"
              />
            </div>
            <div class="">
              <button
                @click="addStepRows"
                type="button"
                class="py-2 px-5 rounded-md bg-red-500 hover:bg-red-600 text-white"
              >
                Add Steps
              </button>
            </div>
            <div v-for="i in recs.ingridentRows" :key="i">
              <input
                class="p-2 rounded-xl w-96 border"
                type="text"
                name="Ingridents"
                placeholder="Ingridents"
                v-model="recs.ingridents[i - 1]"
              />
            </div>
            <div class="">
              <button
                @click="addIngridentRows"
                type="button"
                class="py-2 px-5 rounded-md bg-red-500 hover:bg-red-600 text-white"
              >
                Add Ingridents
              </button>
            </div>

            <div class="flex justify-center items-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-red-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div
                  class="flex flex-col justify-center items-center pt-5 pb-6"
                >
                  <svg
                    aria-hidden="true"
                    class="mb-3 w-10 h-10 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload Images</span> or
                    drag and drop
                  </p>
                  <p
                    v-if="imgFile != ''"
                    class="text-base text-gray-500 dark:text-gray-400"
                  >
                    {{ name }}
                  </p>
                  <p
                    v-if="name == ''"
                    class="text-xs text-gray-500 dark:text-gray-400"
                  >
                    Only GIF, PNG, & JPG are allowed
                  </p>

                  <input
                    id="dropzone-file"
                    type="file"
                    class="hidden"
                    ref="imgFile"
                    @change="selectFile"
                  />
                </div>
              </label>
            </div>

            <button
              type="submit"
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

              Add Recipe
            </button>
            <p v-if="error" class="text-xs ml-4 text-red-500">
              {{ message }}
            </p>
          </form>
          <!-- <Form
            @submit="addRecipe"
            :validation-schema="addRecipeSchema"
            class="flex flex-col gap-4 w-96 text-left"
          >
            <Field
              class="p-2 mt-8 rounded-xl border"
              type="text"
              name="title"
              placeholder="Title"
            />
            <ErrorMessage name="title" class="py-2 text-xs ml-4 text-red-500" />
            <Field
              as="textarea"
              class="p-2 rounded-xl border"
              name="description"
              placeholder="Description"
            />
            <ErrorMessage
              name="description"
              class="py-2 text-xs ml-4 text-red-500"
            />

            <Field
              class="p-2 rounded-xl border"
              type="text"
              name="category"
              placeholder="Category"
            />
            <ErrorMessage
              name="category"
              class="py-2 text-xs ml-4 text-red-500"
            />

            <Field
              class="p-2 rounded-xl border"
              type="number"
              name="time"
              placeholder="Time required in minutes"
            />
            <ErrorMessage name="time" class="py-2 text-xs ml-4 text-red-500" />
            <div v-for="i in rec.value.value" :key="i">
              <Field
                class="p-2 rounded-xl w-96 border"
                type="text"
                name="Ingridents"
                placeholder="Ingridents"
                v-model="rec.value.value.ingridents[i - 1]"
              />
              <ErrorMessage
                name="Ingridents"
                class="py-2 text-xs ml-4 text-red-500"
              />
            </div>
            <div class="">
              <button
                @click="addIngridentRows"
                type="button"
                class="py-2 px-5 rounded-md bg-red-500 hover:bg-red-600 text-white"
              >
                Add Ingridents
              </button>
            </div>
            <div>
              <Field
                as="textarea"
                class="p-2 rounded-xl border w-96"
                name="steps"
                placeholder="Add Steps"
                v-model="val"
              />
              <ErrorMessage
                name="steps"
                class="py-2 text-xs ml-4 text-red-500"
              />
            </div>
            <div class="">
              <button
                @click="addStepRows"
                type="button"
                class="py-2 px-5 rounded-md bg-red-500 hover:bg-red-600 text-white"
              >
                Add Steps
              </button>
            </div>

            <div class="flex justify-center items-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-red-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div
                  class="flex flex-col justify-center items-center pt-5 pb-6"
                >
                  <svg
                    aria-hidden="true"
                    class="mb-3 w-10 h-10 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload Images</span> or
                    drag and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>

            <button
              type="submit"
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

              Add Recipe
            </button>
            <p class="text-xs ml-4 text-red-500" v-if="error">
              {{ error.message }}
            </p>
          </Form> -->

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
//
<script setup>
import { ref } from "@vue/reactivity";
import { signup_query } from "../graphql/index";
import { useQuery, useMutation } from "@vue/apollo-composable";
import { useRouter } from "vue-router";
import { ErrorMessage, Form, Field } from "vee-validate";
import { userStore } from "../stores/userStore";
import * as yup from "yup";
import axios from "axios";
import { computed } from "@vue/runtime-core";
const router = useRouter();
let users = ref({});
let imgFile = ref("");
let name = ref("");
let ifile = ref({});
let error = ref(false);
let message = ref("");

const recs = ref({
  title: "",
  description: "",
  ingridents: [],
  steps: [],
  category: "",
  time: 0,
  ingridentRows: 1,
  stepRows: 1,
});

const addRecipe = () => {
  console.log("The value ");
  console.log(recs);
  console.log(recs.value);
  console.log("The imageeeeeeeeeee ");

  console.log(imgFile.value.files[0]);
  const fd = new FormData();
  fd.append("file", ifile.value);
  fd.append("title", recs.value.title);
  fd.append("description", recs.value.description);
  fd.append("ingridents", recs.value.ingridents);
  fd.append("steps", recs.value.steps);
  fd.append("category", recs.value.category);
  fd.append("time", recs.value.time);

  name.value = "";
  axios
    .post("http://localhost:5000/uploadeImage", fd)
    .then((res) => {
      console.log(res);
      error.value = false;
      message.value = "File has been uploaded";
    })
    .catch((err) => {
      console.error(err);
      error.value = true;
      message.value = "";
      console.log(err.message);
      console.log(err.data);
    });

  // const fd = new FormData();

  // fd.append();
};

const addIngridentRows = () => {
  recs.value.ingridentRows++;
};
const addStepRows = () => {
  recs.value.stepRows++;
};
const selectFile = (value) => {
  // imgFile = ref.imgFile.files[0];
  console.log("/'/'/'/'/'/'/'/'/'/");
  name.value = imgFile.value.files[0].name;
  // recs.value.stepRows++;
  ifile.value = value.target.files[0];
  console.log(ifile.value);
  error.value = false;
  message.value = "";
};
</script>

<style scoped>
.banner {
  background-image: url(../assets/bannerbackground.png);
  background-attachment: scroll;
  background-position: center left;
  background-size: cover;
}
</style>
