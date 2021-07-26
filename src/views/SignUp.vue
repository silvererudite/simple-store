<template>
  <div class="flex justify-center items-center h-screen w-full bg-purple-200">
    <div class="w-1/4 bg-white rounded shadow-2xl p-8 m-4">
      <h1
        class="block w-full text-center text-gray-800 text-2xl font-bold mb-6"
      >
        Register
      </h1>
      <form>
        <div class="flex flex-col mb-4">
          <label class="mb-2 font-bold text-lg text-gray-900" for="first_name"
            >Name</label
          >
          <input
            class="border py-2 px-3 text-grey-800"
            type="text"
            name="first_name"
            id="first_name"
          />
        </div>
        <div class="flex flex-col mb-4">
          <label class="mb-2 font-bold text-lg text-gray-900" for="email"
            >Email</label
          >
          <input
            class="border py-2 px-3 text-grey-800"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div class="flex flex-col mb-4">
          <label class="mb-2 font-bold text-lg text-gray-900" for="password"
            >Password</label
          >
          <input
            class="border py-2 px-3 text-grey-800"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div class="flex flex-col mb-4">
          <label class="mb-2 font-bold text-lg text-gray-900" for="last_name"
            >Company</label
          >
          <input
            class="border py-2 px-3 text-grey-800"
            type="text"
            name="company"
            id="last_name"
          />
        </div>
        <div class="flex flex-col mb-4">
          <label class="mb-2 font-bold text-lg text-gray-900" for="last_name"
            >Are you a supplier</label
          >
          <select name="user_type" id="type">
            <option value="supplier">True</option>
            <option value="user">False</option>
          </select>
        </div>
        <Btn
          class="
            block
            bg-pink-400
            hover:bg-pink-600
            uppercase
            text-lg
            mx-auto
            p-4
            rounded
          "
        >
          Create Account
        </Btn>
      </form>
      <a
        class="
          block
          w-full
          text-center
          no-underline
          mt-4
          text-sm text-gray-700
          hover:text-gray-900
        "
        href="/login"
        >Already have an account?</a
      >
    </div>
  </div>
</template>

<script>
import Btn from "@/components/Button.vue";
export default {
  name: "SignUp",
  components: {
    Btn,
  },
  data() {
    return {
      register: {
        name: "Test_shm ",
        email: "test_shm3@gmail.com",
        password: "test123",
        isSupplier: false,
        company: "Test",
      },
    };
  },
};
</script>

<style></style>
