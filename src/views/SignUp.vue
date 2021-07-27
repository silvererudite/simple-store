<template>
  <div class="flex justify-center items-center h-screen w-full bg-purple-200">
    <div class="sm:w-1/4 bg-white rounded shadow-2xl p-8 m-4">
      <h1
        class="block w-full text-center text-gray-800 text-2xl font-bold mb-6"
      >
        Register
      </h1>
      <form>
        <div class="flex flex-col mb-4">
          <label class="mb-2 font-bold text-lg text-gray-900">Name</label>
          <input
            v-model="register.name"
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
            v-model="register.email"
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
            v-model="register.password"
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
            v-model="register.company"
            id="last_name"
          />
        </div>
        <div class="flex flex-col mb-4">
          <label class="mb-2 font-bold text-lg text-gray-900" for="last_name"
            >Are you a supplier</label
          >
          <select name="user_type" id="type" v-model="register.isSupplier">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
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
          @click.prevent="signUp()"
        >
          Create Account
        </Btn>
      </form>
      <router-link
        class="
          block
          w-full
          text-center
          no-underline
          mt-4
          text-sm text-gray-700
          hover:text-gray-900
        "
        to="/login"
        >Already have an account?</router-link
      >
    </div>
    <!-- <pre>{{ register }}</pre> -->
  </div>
</template>

<script>
import Btn from "@/components/Button.vue";
import Swal from "sweetalert2";
export default {
  name: "SignUp",
  components: {
    Btn,
  },
  data() {
    return {
      register: {
        name: "",
        email: "",
        password: "",
        isSupplier: false,
        company: "",
      },
    };
  },
  methods: {
    validateEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    signUp() {
      //console.log("here");
      this.$service
        .signup(this.register)
        .then((res) => {
          //console.log("this", res.data.createdUser);
          //this.LocalStore("userInfo", res.data.createdUser.id);
          Swal.fire({
            icon: "info",
            title: "Please save your user id for logging in",
            text: res.data.createdUser.id,
          });
          this.Goto({ name: "Login" });
        })
        .catch(() => {
          this.ErrorAlert("Please put correct email/password");
        });
    },
  },
};
</script>

<style></style>
