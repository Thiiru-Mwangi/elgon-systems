<script setup lang="ts">
import { RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="max-w-[1920px] flex flex-col items-center">
    <Navbar />
    <!-- From vue router -->
    <Transition name="fade">
      <RouterView />
    </Transition>
    <Footer />
  </div>
</template>

<style>
/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s cubic-bezier(0.76, 0, 0.24, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
