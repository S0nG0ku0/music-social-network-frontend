<script setup>
import { ref } from "vue";
import axios from "axios";
import { useUserStore } from "../store/user-store";
import TextInput from "../components/global/TextInput.vue";
import "@/axios";

const userStore = useUserStore();

let errors = ref([]);
let email = ref(null);
let password = ref(null);

const login = async () => {
  errors.value = [];

  try {
    let res = await axios.post("/api/login", {
      email: email.value,
      password: password.value,
    });

    console.log(res);

    userStore.setUserDetails(res);
  } catch (err) {
    errors.value = err.response.data.errors;
  }
};
</script>

<template>
  <div id="Register">
    <div class="w-full p-6 flex justify-center items-center">
      <div class="w-full max-w-xs">
        <div class="bg-black p-8 shadow rounded mb-6">
          <h1 class="mb-6 text-lg text-gray-100 font-thin">
            Let's get rocking!
          </h1>

          <div class="mb-2">
            <TextInput
              label="Email"
              :labelColor="false"
              placeholder="jhon.repper@m.com"
              v-model:input="email"
              inputType="email"
              :error="errors.email ? errors.email[0] : ''"
            />
          </div>
          <div class="mb-2">
            <TextInput
              label="Password"
              :labelColor="false"
              placeholder="******"
              v-model:input="password"
              inputType="password"
              :error="errors.password ? errors.password[0] : ''"
            />
          </div>
          <button
            class="block w-full bg-green-500 text-white rounded-sm py-3 text-sm tracking-wide"
            type="submit"
            @click="login"
          >
            Login
          </button>
        </div>

        <p class="text-center text-md text-gray-900">
          Don't have an account yet?
          <router-link
            to="register"
            class="text-blue-500 no-underline hover:underline"
          >
            Register
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>
