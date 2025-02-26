<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref, onUnmounted, onMounted } from "vue";

const isVisible = ref(true);
let lastScrollY = 0;
const handleScroll = () => {
  const currentScrollY = window.scrollY;
  isVisible.value = currentScrollY < lastScrollY || currentScrollY < 50;
  lastScrollY = currentScrollY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header :class="{ hidden: !isVisible }">
    <div class="flex items-center gap-x-1">
      <div>
        <img src="/logo.png" width="24" height="24" alt="logo" />
      </div>
      <div>
        <img src="/logo1.png" width="70" height="28" alt="logo" />
      </div>
    </div>
    <nav class="flex gap-8 items-center">
      <ul class="flex items-center gap-8 py-2 text-black">
        <li>
          <RouterLink
            class="hover:font-bold"
            active-class="border-b-2 font-semibold pb-1 text-lg"
            to="/"
            >About</RouterLink
          >
        </li>
        <li>
          <RouterLink
          class="hover:font-bold"
            active-class="border-b-2 font-semibold pb-1 text-lg"
            to="/services"
            >Services</RouterLink
          >
        </li>
        <li>
          <RouterLink
          class="hover:font-bold"
            active-class="border-b-2 font-semibold pb-1 text-lg"
            to="/contact"
            >Contact</RouterLink
          >
        </li>
      </ul>
      <RouterLink :to="{ name: 'Contact' }"
        ><button
          class="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full"
        >
          <img
            src="/white-phone.png"
            width="16"
            height="16"
            alt="white-phone"
          />
          <span>Call Us</span>
        </button></RouterLink
      >
    </nav>
  </header>
</template>

<style>
header {
  padding: 4px 8px;
  position: fixed;
  top: 0;
  width: 98%;
  z-index: 50;
  background: white;
  color: black;
  margin-top: 4px;
  padding-inline: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  transition: transform 0.3s ease-in-out;
}

.hidden {
  transform: translateY(-120%);
}
</style>
