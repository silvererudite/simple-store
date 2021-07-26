import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import service from "./services";

createApp(App).use(store).use(router).use(service).mount("#app");
