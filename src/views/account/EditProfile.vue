<template>
  <div id="EditProfile" class="container max-w-4xl mx-auto pt-20 pb-20 px-6">
    <div class="text-gray-900 text-xl">Edit Profile</div>
    <div class="bg-green-500 w-full h-1"></div>

    <CropperModal
      v-if="showModal"
      :minAspectRatioProp="{ width: 8, height: 8 }"
      :maxAspectRatioProp="{ width: 8, height: 8 }"
      @croppedImageData="setCroppedImageData"
      @showModal="showModal = false"
    />

    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <TextInput
          label="First Name"
          placeholder="Jhon"
          v-model:input="firstName"
          inputType="text"
          :error="errors.first_name ? errors.first_name[0] : ''"
        />
      </div>
      <div class="w-full md:w-1/2 px-3">
        <TextInput
          label="Last Name"
          placeholder="Rapper"
          v-model:input="lastName"
          inputType="text"
          :error="errors.last_name ? errors.last_name[0] : ''"
        />
      </div>
    </div>
    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <TextInput
          label="Location"
          placeholder="Rabat, MA"
          v-model:input="location"
          inputType="text"
          :error="errors.location ? errors.location[0] : ''"
        />
      </div>
    </div>
    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <DisplayCropperButton
          label="Profile Image"
          btnText="Update Profile Image"
          @showModal="showModal = true"
        />
      </div>
    </div>
    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <CroppedImage label="Cropped Image" :image="image" />
      </div>
    </div>
    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full px-3">
        <TextArea
          label="Description"
          placeholder="Please enter some information here!!!"
          v-model:description="description"
        />
      </div>
    </div>
    <div class="flex flex-wrap mt-8 mb-6">
      <div class="w-full px-3">
        <SubmitFormButton btnText="Update Profile" @click="updateUser" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/user-store";
import TextInput from "@/components/global/TextInput.vue";
import DisplayCropperButton from "@/components/global/DisplayCropperButton.vue";
import TextArea from "@/components/global/TextArea.vue";
import SubmitFormButton from "@/components/global/SubmitFormButton.vue";
import CropperModal from "@/components/global/CropperModal.vue";
import CroppedImage from "@/components/global/CroppedImage.vue";
import axios from "axios";

const userStore = useUserStore();
const router = useRouter();

let showModal = ref(false);
let firstName = ref(null);
let lastName = ref(null);
let location = ref(null);
let description = ref(null);
//let imageData = ref(null);
let image = ref(null);
let errors = ref([]);

onMounted(() => {
  firstName.value = userStore.firstName || null;
  lastName.value = userStore.lastName || null;
  location.value = userStore.location || null;
  description.value = userStore.description || null;
  image.value = userStore.image || null;
});

const setCroppedImageData = (data) => {
  //imageData = data
  image.value = data.imageUrl;

  console.log(image);
};

const updateUser = async () => {
  errors.value = [];

  let data = new FormData();

  data.append("first_name", firstName.value || "");
  data.append("last_name", lastName.value || "");
  data.append("location", location.value || "");
  data.append("description", description.value || "");

  try {
    await axios.post("users/" + userStore.id + "?_method=PUT", data);

    await userStore.fetchUser();

    router.push("/account/profile");
  } catch (err) {
    errors.value = err.response.data.errors;
  }
};
</script>
