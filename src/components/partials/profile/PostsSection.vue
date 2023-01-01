<script setup>
import RouterLinkButton from "@/components/global/RouterLinkButton.vue";
</script>

<template>
  <div>
    <div class="mx-auto py-4">
      <div class="flex flex-wrap font-bold text-gray-100">
        <div class="text-gray-900 text-xl">Posts</div>
        <div class="bg-green-500 w-full h-1"></div>

        <div class="w-full mt-4">
          <RouterLinkButton
            btnText="Create Post"
            color="green"
            url="/account/add-post"
          />
        </div>
      </div>
    </div>
    <div>
      <div class="flex flex-wrap mb-4">
        <div class="my-1 px-1 w-full md:w-1/2 lg:w-1/2">
          <div class="border rounded-lg">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="https://via.placeholder.com/500X300"
                alt=""
              />
            </a>
            <div class="p-2 md:p-4">
              <div class="text-lg">
                <router-link
                  to=""
                  class="underline text-blue-500 hover:text-blue-600"
                >
                  Text Title
                </router-link>
              </div>
              <p class="py-2">Location: Test Location</p>
              <p class="text-gray-darker text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                aliquam minima laborum. Placeat aperiam, accusantium labore
                voluptate architecto incidunt repellat nobis et sunt minima illo
                ipsam, voluptatem veritatis, corrupti quia?
              </p>
              <div class="mt-2 flex items-center justify-end">
                <router-link
                  to=""
                  class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-2 rounded-full"
                >
                  Edit post
                </router-link>
                <button
                  class="bg-red-500 hover:bg-red-700 text-white text-sm font-bold py-1 px-2 rounded-full ml-2"
                >
                  Delete post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
