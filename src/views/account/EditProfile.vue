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
          error="This is a test error"
        />
      </div>
      <div class="w-full md:w-1/2 px-3">
        <TextInput
          label="Last Name"
          placeholder="Rapper"
          v-model:input="lastName"
          inputType="text"
          error="This is a test error"
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
          error="This is a test error"
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
          placeholder="Please entre some information"
          v-model:desciption="desciption"
          error="This is a test error"
        />
      </div>
    </div>
    <div class="flex flex-wrap mt-8 mb-6">
      <div class="w-full px-3">
        <SubmitFormButton btnText="Update Profile" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TextInput from "@/components/global/TextInput.vue";
import DisplayCropperButton from "@/components/global/DisplayCropperButton.vue";
import TextArea from "@/components/global/TextArea.vue";
import SubmitFormButton from "@/components/global/SubmitFormButton.vue";
import CropperModal from "@/components/global/CropperModal.vue";
import CroppedImage from "@/components/global/CroppedImage.vue";

let showModal = ref(false);
let firstName = ref(null);
let lastName = ref(null);
let location = ref(null);
let desciption = ref(null);
//let imageData = ref(null);
let image = ref(null);

const setCroppedImageData = (data) => {
  //imageData = data
  image.value = data.imageUrl;

  console.log(image);
};
</script>
