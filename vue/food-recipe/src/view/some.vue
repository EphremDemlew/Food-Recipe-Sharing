<template>
  <!-- <div>
    <form @submit.prevent="addFile">
      <div class="py-20 h-screen bg-gray-300 px-2">
        <div
          class="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg"
        >
          <div class="md:flex">
            <div class="w-full">
              <div class="p-4 border-b-2">
                <span class="text-lg font-bold text-gray-600"
                  >Add documents</span
                >
              </div>

              <div class="p-3">
                <div class="mb-2">
                  <span class="text-sm">Title</span>
                  <input
                    type="text"
                    class="h-12 px-3 w-full border-gray-200 border rounded focus:outline-none focus:border-gray-300"
                  />
                </div>

                <div class="mb-2">
                  <span>Attachments</span>
                  <div
                    class="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer"
                  >
                    <div class="absolute">
                      <div class="flex flex-col items-center">
                        <i class="fa fa-cloud-upload fa-3x text-gray-200"></i>
                        <span class="block text-gray-400 font-normal"
                          >Attach you files here</span
                        >
                        <span class="block text-gray-400 font-normal">or</span>

                        <span class="block text-blue-400 font-normal"
                          >Browse files</span
                        >
                      </div>
                    </div>

                    <input
                      type="file"
                      class="h-full w-full opacity-0"
                      name="images"
                    />
                  </div>
                  <div class="flex justify-between items-center text-gray-400">
                    <span>Accepted file type:.doc only</span>
                    <span class="flex items-center"
                      ><i class="fa fa-lock mr-1"></i> secure</span
                    >
                  </div>
                </div>

                <div class="mt-3 text-center pb-3">
                  <button
                    class="w-full h-12 text-lg w-32 bg-blue-600 rounded text-white hover:bg-blue-700"
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div> -->

  <div class="mt-56 m-10 flex justify-center items-center">
    <form @submit.prevent="uploade" enctype="multipart/form-data">
      <label for="up">Uploade file here</label><br />
      <input id="up" type="file" @change="addFile" />
      <button class="px-5 py2 bg-red-300 text-white">Add</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { imgUploade } from "../graphql/index";
import { useQuery, useMutation } from "@vue/apollo-composable";
import { useRouter } from "vue-router";
import { ErrorMessage, Form, Field } from "vee-validate";
import { userLoginStore } from "../stores/user";
let imagefile = ref({});
const user = userLoginStore();
const router = useRouter();

const addFile = (e) => {
  console.log("it got here");
  const fd = new FormData();
  fd.append("image", e.target.files[0], e.target.files[0].name);
  // console.log(imagefile);
  // console.log(imagefile.name);
  // console.log("The strigified is  here .......");
  // const value = JSON.stringify(imagefile);
  console.log(fd);
  imagefile = fd;
  console.log("................");
  console.log(imagefile);
  console.log(e.target.files[0].name);
  console.log(e.target.files[0].size);
  console.log("Image................");
  console.log(fd.imag);
  console.log(JSON.stringify(fd));
};
const uploade = () => {
  uploadeMutation();
  onDone((res) => {
    console.log("The data is  .............//");

    if (res.data) {
      console.log("The data is  .............");
      console.log(res.data);
      // const token = res.data.sign_up.token;
      // const Id = res.data.sign_up.id;
      // const name = res.data.sign_up.first_name;
      // const email = res.data.sign_up.email;
      // const createdDate = res.data.sign_up.created_at;
      // user.login(token, Id, createdDate, name, email);
      // router.push("/home");

      return;
    }
  });
};

const {
  mutate: uploadeMutation,
  loading: loading,
  error: error,
  onDone,
} = useMutation(imgUploade, () => ({
  variables: {
    image_url: imagefile,
  },
}));
</script>
