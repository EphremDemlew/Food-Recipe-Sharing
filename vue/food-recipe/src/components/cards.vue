<template>
  <div
    class="flex justify-center items-center bg-white md:mt-10 transform transition duration-500 cursor-pointer"
  >
    <div
      class="bg-grey-500 rounded-lg p-6 w-fit text-black-100 z-10 shadow-xl hover:shadow-2xl"
      style="cursor: auto"
    >
      <div class="flex flex-wrap items-center">
        <div class="flex md:h-64 lg:h-72 relative">
          <div
            class="container mx-auto md:pr-4 max-w-md cursor-pointer hover:shadow-2xl transform transition duration-500"
          >
            <!-- :src="'http://localhost:5000/' + img_url" alt="gh"  -->
            <img
              :src="img_url"
              class="w-full h-full object-cover object-top rounded-lg bg-white"
            />
          </div>

          <div class="w-4/12 h-full hidden md:block">
            <div class="flex flex-col w-full h-full">
              <div class="flex-1 pb-2">
                <div
                  class="w-full h-full relative transform transition duration-500 cursor-pointer"
                >
                  <img
                    :src="img_url"
                    class="absolute top-0 w-full h-full object-cover object-center rounded-lg bg-white"
                  />
                </div>
              </div>

              <div class="flex-1 pt-2 hidden md:block">
                <div
                  class="w-full h-full relative transform transition duration-500 cursor-pointer"
                >
                  <img
                    :src="img_url"
                    class="absolute top-0 w-full h-full object-cover object-bottom rounded-lg bg-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full pt-8 flex flex-col justify-between">
          <div>
            <div class="flex justify-between">
              <div class="font-bold text-xl">
                {{ title }}
              </div>
              <div>
                <button
                  class="mr-2 mb-2 rounded-full px-3 py-1 text-xs font-bold border-1 cursor-auto glow border-green-700 bg-green-500 text-green-900"
                >
                  {{ time }} min
                </button>
              </div>
            </div>
            <div class="flex flex-wrap text-center justify-between pt-4 mb-2">
              <div
                class="flex justify-between w-full md:flex-row md:justify-between"
              >
                <div>
                  <span class="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      ></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      ></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      ></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      ></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div>
                  <button
                    @click="addFavourite(id)"
                    class="inline-flex items-center px-5 text-sm font-medium text-center text-black rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <i
                      class="fa-solid fa-bookmark text-yellow-400 text-xl shadow-2xl cursor-pointer"
                    ></i>
                  </button>
                </div>
              </div>
            </div>

            <p class="text-xs leading-relaxed text-black -50">
              This revolutionary email design kit is going to transform the way
              in which you send modern emails.
            </p>
            <p v-if="description">{{ description }}</p>
          </div>
          <div class="flex flex-row justify-between pr-5 py-8">
            <div class="flex space-x-1 items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7 text-red-500 hover:text-red-400 transition duration-100 cursor-pointer"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span v-if="like < 1">0</span>
              <span v-else>{{ like }}</span>
            </div>
            <div class="flex space-x-1 items-center">
              <button
                @click="preview(title, id)"
                class="w-full block text-center relative text-white font-bold text-sm bg-red-500 px-4 py-3 rounded-lg shadow-lg hover:shadow-none hover:opacity-75"
              >
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { add_favorite_recipe } from "../graphql/index";
import { ref } from "vue";

const router = useRouter();

defineProps({
  id: String,
  title: String,
  description: String,
  img_url: String,
  like: Number,
  time: Number,
});
const fav = ref(false);
const toogleFavourite = (id) => {
  addFavourite(id);
};
const addFavourite = (id) => {
  const {
    mutate: addFav,
    loading: addFavloading,
    error: addFaverror,
    onDone,
  } = useMutation(add_favorite_recipe, {
    recipe_id: id,
  });

  onDone((res) => {
    router.push("/favorite");
  });
};
const removeFavourite = (id) => {
  const {
    mutate: addFav,
    loading: addFavloading,
    error: addFaverror,
    onDone,
  } = useMutation(add_favorite_recipe, {
    recipe_id: id,
  });

  onDone((res) => {
    router.push("/favorite");
  });
};

const preview = (title, id) => {
  const slug = ref("");

  slug.value = title.toLowerCase().replace(/\s/g, "-");
  console.log("slug " + slug);
  console.log(id);
  router.push(`/recipe/${id}`);
  // router.push({path: 'foo', params: { foo: bar }})
  // router.push({ path: `recipe/${slug.value}`, params: { id: id } });
};
</script>

<style scoped></style>
