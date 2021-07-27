import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import service from "./services";
import mixins from "./util/global_mixins";

//createApp(App).use(store).use(router).use(service).mixin(mixins).mount("#app");
const app = createApp(App);
app.use(store);
app.use(router);
app.use(service);
app.mixin(mixins);
app.config.globalProperties.$service = service;
app.mount("#app");
