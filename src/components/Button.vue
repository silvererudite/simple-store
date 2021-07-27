<template>
  <button v-bind="$attrs" class="p-2 rounded font-heading uppercase font-bold">
    <slot />
  </button>
</template>

<script>
export default {
  name: "Btn",
  inheritAttrs: true,
};
</script>

<style></style>
