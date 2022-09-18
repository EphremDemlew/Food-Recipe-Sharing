<template>
  <div>
    <section class="text-gray-100 body-font overflow-hidden bg-gray-900">
      <div class="container px-5 py-24 mx-auto bg-Gray-900">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <!-- :src="favouriteRecipe.images[0].image_url" -->
          <img
            alt="ecommerce"
            class="lg:w-1/2 w-full object-cover object-center rounded"
            :src="favouriteRecipe.images[0].image_url"
          />
          <div
            class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 text-white lg:mt-0 bg-gray-900"
          >
            <h2 class="text-sm title-font text-gray-200 tracking-widest"></h2>
            <h1 class="text-gray-50 text-3xl title-font font-medium mb-1">
              {{ favouriteRecipe.title }}
            </h1>

            <div class="flex mb-4">
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
                <span class="text-gray-600 ml-3"
                  >{{
                    favouriteRecipe.ratings_aggregate.aggregate.avg.rating
                  }}
                  Reviews</span
                >
              </span>

              <!-- socialmedias not working now but for later -->
              <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                <a class="text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                    ></path>
                  </svg>
                </a>
                <a class="ml-2 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                    ></path>
                  </svg>
                </a>
                <a class="ml-2 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                    ></path>
                  </svg>
                </a>
              </span>
              <!-- socialmedias not working now but for later -->
            </div>
            <div>
              <p class="leading-relaxed">{{ favouriteRecipe.desc }}</p>
              <div
                class="flex flex-col mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"
              >
                <!-- The Categories go here -->
                <div class="flex">
                  <div>
                    <span class="mr-3 mt-1">Categories: </span>
                  </div>
                  <div
                    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 gap-3 md:gap-4"
                  >
                    <button
                      v-for="cat in favouriteRecipe.categories"
                      :key="cat.id"
                      class="cursor-text border-2 border-gray-300 rounded-full w-fit px-3 py-1 focus:outline-none mr-5 mb-3 md:mx-4 md:md-4"
                    >
                      {{ cat.category }}
                    </button>
                  </div>
                </div>
                <!-- The Categories go here -->
              </div>
              <!-- The Images -->
              <!-- <div
                class="grid grid-cols-2 gap-3 max-w-full mb-5 md:mb-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <div
                  v-for="imgs in favouriteRecipe.images"
                  :key="imgs.id"
                  class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box"
                >
                  <div class="carousel-item">
                    <img
                      src="https://placeimg.com/250/180/arch"
                      class="rounded-box"
                    />
                  </div>

                  <div class="carousel-item">
                    <img
                      src="https://placeimg.com/250/180/arch"
                      class="rounded-box"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://placeimg.com/250/180/arch"
                      class="rounded-box"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://placeimg.com/250/180/arch"
                      class="rounded-box"
                    />
                  </div>
                </div>
                <img
                  class="rounded-t-lg h-52"
                  :src="imgs.image_url"
                  :alt="`${favouriteRecipe.title}.jpg`"
                />
              </div> -->
              <!-- The Images -->
            </div>
          </div>
        </div>
        <section
          class="mt-10 px-10 relative flex-row items-center lg:flex lg:justify-evenly lg:items-start py-10 -r min-h-max antialiased bg-gray-600 rounded-lg min-w-full"
        >
          <!-- The Ingredients go here -->
          <div class="text-white mb-10 lg:mb-0">
            <p class="mr-3 bg-gray-500 py-2 px-10 rounded font-bold mb-3">
              Ingredients of {{ favouriteRecipe.title }}
            </p>
            <div class="relative">
              <ul class="">
                <li
                  v-for="(ingridents, i) in favouriteRecipe.Ingredients"
                  :key="ingridents.id"
                >
                  <span class="pr-1">{{ i + 1 }}.</span>
                  {{ ingridents.ingridents }}
                </li>
              </ul>
            </div>
          </div>
          <!-- The Ingredients go here -->
          <!-- The How/Steps go here -->
          <div class="text-white">
            <p class="mr-3 bg-gray-500 py-2 px-10 rounded font-bold mb-3">
              How to make {{ favouriteRecipe.title }}
            </p>
            <ul>
              <li v-for="(steps, i) in favouriteRecipe.steps" :key="steps.id">
                <span class="pr-1">Step {{ i + 1 }} :</span>
                {{ steps.steps }}
              </li>
            </ul>
          </div>
          <!-- The How/Steps go here -->
        </section>
        <!-- The Comments  -->

        <section
          class="mt-10 relative flex items-center justify-center min-h-max antialiased bg-gray-600 pb-10 min-w-full rounded-md"
        >
          <div
            class="container px-0 sm:px-5 flex flex-col justify-center mt-10"
          >
            <!-- <div
              class="flex-col w-full py-4 mx-auto bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3"
            >
              <div class="flex flex-row">
                <img
                  class="object-cover w-12 h-12 border-2 border-gray-300 rounded-full"
                  alt="Noob master's avatar"
                  src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
                />
                <div class="flex-col mt-1">
                  <div
                    class="flex items-center flex-1 px-4 font-bold leading-tight"
                  >
                    Noob master
                    <span class="ml-2 text-xs font-normal text-gray-500"
                      >2 weeks ago</span
                    >
                  </div>
                  <div
                    class="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600"
                  >
                    Wow!!! how you did you create this?
                  </div>
                  <button
                    class="inline-flex items-center px-1 pt-2 ml-1 flex-column"
                  >
                    <svg
                      class="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"
                      viewBox="0 0 95 78"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
                        fill-rule="nonzero"
                      />
                    </svg>
                  </button>
                  <button
                    class="inline-flex items-center px-1 -ml-1 flex-column"
                  >
                    <svg
                      class="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <hr class="my-2 ml-16 border-gray-200" />
              <div class="flex flex-row pt-1 md-10 md:ml-16">
                <img
                  class="w-12 h-12 border-2 border-gray-300 rounded-full"
                  alt="Emily's avatar"
                  src="https://images.unsplash.com/photo-1581624657276-5807462d0a3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
                />
                <div class="flex-col mt-1">
                  <div
                    class="flex items-center flex-1 px-4 font-bold leading-tight"
                  >
                    Emily
                    <span class="ml-2 text-xs font-normal text-gray-500"
                      >5 days ago</span
                    >
                  </div>
                  <div
                    class="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600"
                  >
                    I created it using TailwindCSS
                  </div>
                  <button
                    class="inline-flex items-center px-1 pt-2 ml-1 flex-column"
                  >
                    <svg
                      class="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"
                      viewBox="0 0 95 78"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
                        fill-rule="nonzero"
                      />
                    </svg>
                  </button>
                  <button
                    class="inline-flex items-center px-1 -ml-1 flex-column"
                  >
                    <svg
                      class="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div> -->
            <h1 class="text-white font-bold mx-auto">
              Some reviews
              {{ favouriteRecipe.likes_aggregate.aggregate.count }} likes
            </h1>
            <div v-if="favouriteRecipe.comments.length > 0">
              <div
                v-for="comments in favouriteRecipe.comments"
                :key="comments.id"
                class="flex-col py-4 mx-auto mt-3 w-3/4 bg-white border-b-2 border-r-2 border-gray-600 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-full"
              >
                <div class="flex flex-row md-10">
                  <img
                    class="w-12 h-12 border-2 border-orange-500 rounded-full"
                    alt="Anonymous's avatar"
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
                  />
                  <div class="flex-col mt-1">
                    <div
                      class="flex items-center flex-1 text-gray-800 px-4 font-bold leading-tight"
                    >
                      Anonymous
                      <span class="ml-2 text-xs font-normal text-gray-500"
                        >3 days ago</span
                      >
                    </div>
                    <div
                      class="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600"
                    >
                      {{ comments.comment }}
                    </div>
                    <button
                      class="inline-flex items-center px-1 pt-2 ml-1 flex-column"
                    >
                      <svg
                        class="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"
                        viewBox="0 0 95 78"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
                          fill-rule="nonzero"
                        />
                      </svg>
                    </button>
                    <button
                      class="inline-flex items-center px-1 -ml-1 flex-column"
                    >
                      <svg
                        class="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Comment Form -->
            <div
              class="rounded-lg shadow-md shadow-blue-600/50 w-full bg-white mt-5 sm:px-4"
            >
              <form @submit.prevent="commentHandler" class="w-full p-4">
                <div class="mb-2">
                  <label for="comment" class="text-lg text-gray-800"
                    >Add a comment</label
                  >
                  <textarea
                    class="w-full h-20 p-2 border text-gray-900 rounded focus:outline-none focus:ring-gray-900 focus:ring-1"
                    name="comment"
                    placeholder="Comment here ..."
                    v-model="commentValue"
                  ></textarea>
                </div>
                <div>
                  <button
                    class="px-3 py-2 text-sm text-white bg-red-500 rounded"
                  >
                    Comment
                  </button>
                </div>
              </form>
            </div>
            <!-- Comment Form -->
          </div>
        </section>

        <!-- The Comments -->
      </div>
    </section>
  </div>
</template>
<script setup>
import Loading from "../components/loading.vue";
import { useProductStore } from "../stores/productStore";
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
const route = useRoute();
const recipes = useProductStore();

let val = ref([]);
let vals = ref("");

const recipesVals = recipes.recipes[0].data;
console.log(recipes.recipes[0].data);
console.log("recipesVals from the details");
// setTimeout(() => {
val = recipes.recipes[0].data.recipe;
vals = route.params.id;
const favouriteRecipe = val.find((va) => va.id == vals);
console.log(favouriteRecipe);
console.log("Image");
console.log(favouriteRecipe.images[0].image_url);
// }, 3000);
</script>
