<template>
  <div class="flex justify-center items-center h-screen w-full bg-purple-200">
    <div class="sm:w-1/4 bg-white rounded shadow-2xl p-8 m-4">
      <h1
        class="block w-full text-center text-gray-800 text-2xl font-bold mb-6"
      >
        Log In
      </h1>
      <form>
        <div class="flex flex-col mb-4">
          <label class="mb-2 font-bold text-lg text-gray-900">User Id</label>
          <input
            class="border py-2 px-3 text-grey-800"
            type="number"
            name="id"
            id="userid"
            v-model="userId"
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
            v-model="userInfo.email"
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
            v-model="userInfo.password"
          />
        </div>
        <Btn
          class="
            block
            bg-pink-400
            uppercase
            text-lg text-white
            mx-auto
            p-4
            rounded
          "
          @click.prevent="login()"
        >
          Log In
        </Btn>
      </form>
    </div>
    <!-- <pre>{{ userInfo }}</pre>
    <pre>{{ userId }}</pre> -->
  </div>
</template>

<script>
import Btn from "@/components/Button.vue";
export default {
  name: "Login",
  components: {
    Btn,
  },
  data() {
    return {
      userId: "",
      userInfo: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      if (!this.userInfo.email == "" || !this.userInfo.password == "") {
        this.$service
          .login(this.userInfo)
          .then((res) => {
            localStorage.removeItem("refresh_token");
            localStorage.removeItem("access_token");
            localStorage.setItem("access_token", res.data.access_token);
            localStorage.setItem("refresh_token", res.data.refresh_token);
            this.$router.push({ name: "profile", params: { id: this.userId } });
          })
          .catch(() => {
            this.ErrorAlert("Please put correct email/password");
          });
      } else {
        this.ErrorAlert("Please fill all fields");
      }
    },
  },
};
</script>

<style></style>
