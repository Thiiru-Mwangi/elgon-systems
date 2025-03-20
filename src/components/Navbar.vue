<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref, onUnmounted, onMounted } from "vue";
const isVisible = ref(true);
const isMobileMenuToggled = ref(false);
const navLinks = ref([
  { name: "About", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
]);
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
  <header class="relative" :class="{ hidden: !isVisible }">
    <div class="flex items-center gap-x-1">
      <div class="">
        <img src="/logo.png" width="24" height="24" alt="logo" />
      </div>
      <div>
        <img src="/logo1.png" width="70" height="28" alt="logo" />
      </div>
    </div>

    <!-- Hamburger Menu -->
    <button
      @click="isMobileMenuToggled = !isMobileMenuToggled"
      class="md:hidden z-50"
    >
      <span v-if="!isMobileMenuToggled" class="pi pi-bars text-xl"></span>
      <span v-else class="pi pi-times"></span>
    </button>

    <!-- Desktop Menu -->
    <nav class="flex gap-8 items-center max-md:hidden">
      <RouterLink
        v-for="(navLink, index) in navLinks"
        :key="index"
        class="relative"
        active-class=" font-semibold"
        :to="navLink.path"
      >
        {{ navLink.name }}
        <transition name="underline">
          <span
            v-if="$route.path === navLink.path"
            class="absolute -bottom-1 left-0 w-full h-[2px] bg-[#daa520]"
          />
        </transition>
      </RouterLink>
      <!-- Contact -->
      <RouterLink :to="{ name: 'Contact' }" class="max-md:hidden"
        ><button
          class="flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-full"
        >
          <span class="pi pi-phone"></span>
          <span>Call Us</span>
        </button></RouterLink
      >
    </nav>

    <!-- Mobile navigation -->
    <Transition name="slide">
      <div
        v-if="isMobileMenuToggled"
        :key="isMobileMenuToggled.valueOf.toString()"
        class="pt-16 absolute top-0 right-0 h-dvh w-56 bg-[#c0c0c0] flex flex-col items-center"
      >
        <div class="w-10/12 flex flex-col gap-y-8 h-full justify-between">
          <div class="mt-16 flex flex-col gap-4">
            <RouterLink
              v-for="(navLink, index) in navLinks"
              :key="index"
              class="relative"
              active-class=" font-semibold"
              :to="navLink.path"
            >
              {{ navLink.name }}
              <transition name="underline">
                <span
                  v-if="$route.path === navLink.path"
                  class="absolute -bottom-1 left-0 w-full h-[2px] bg-[#daa520]"
                />
              </transition>
            </RouterLink>
          </div>
          <!-- Contact -->
          <RouterLink :to="{ name: 'Contact' }" class="mt-16 mb-4"
            ><button
              class="flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-full"
            >
              <!-- <img
                 src="/white-phone.png"
                 width="16"
                 height="16"
                 alt="white-phone"
               /> -->
              <span class="pi pi-phone"></span>
              <span>Call Us</span>
            </button></RouterLink
          >
        </div>
      </div>
    </Transition>
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

.underline-enter-active,
.underline-leave-active {
  transition: width 0.3s ease-in-out;
}
.underline-enter-from,
.underline-leave-to {
  width: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
