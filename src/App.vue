<template>
  <div class="w-screen h-full bg-primary">
    <Navbar />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<style lang="scss" scoped></style>
