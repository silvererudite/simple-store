import Vue from "vue";
import mixins from "./global_mixins";

export default {
  register: () => {
    Vue.mixin(mixins);
  },
};
