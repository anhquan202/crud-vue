<script setup>
import { login } from '@/services/auth/login';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const errors = ref({});
const router = useRouter();
const handleLogin = async (e) => {
  e.preventDefault();
  errors.value = {};
  try {
    const res = await login(email.value, password.value);
    if (res.status !== 200) {
      errors.value = res.errors;
    } else {
      alert(res.data.message);
      router.push('/');
    }
  } catch (error) {
    console.log(error);
  }

}
</script>
<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Log in to your account
          </h1>
          <form class="space-y-4 md:space-y-6" action="post">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com" v-model="email">
              <div class="text-red-400" v-for="(err, index) in errors.email" :key="index">
                <span>{{ err }}</span>
              </div>
            </div>
            <div>
              <label for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input type="password" placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                v-model="password">
              <div class="text-red-400" v-for="(err, index) in errors.password" :key="index">
                <span>{{ err }}</span>
              </div>
            </div>
            <button type="submit"
              class="w-full cursor-pointer text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              @click="handleLogin">Login</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>