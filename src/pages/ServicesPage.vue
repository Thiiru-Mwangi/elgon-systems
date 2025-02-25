<script setup lang="ts">
import Customers from "../components/Customers.vue";

const services = [
  {
    name: "Solar Energy Systems",
    path: "solar",
  },
  {
    name: "Electric Fence Installation",
    path: "electric-fence",
  },
  {
    name: "CCTV Camera Systems",
    path: "cctv",
  },
  {
    name: "Motors/ Water Pumps",
    path: "motors",
  },
  {
    name: " Electrical Wiring for Residential & Commercial Spaces",
    path: "wiring",
  },
];
</script>

<template>
  <div class="mt-24">
    <h1 class="font-bold mb-12 text-6xl text-center">Our Services</h1>
    <div class=" flex justify-center">
      <div class=" flex justify-center gap-4 flex-wrap w-11/12">
        <!-- Service -->
        <div
          v-for="service in services"
          :key="service.name"
          class="  grow-1  border w-5/12 p-8 rounded-md"
        >
          <p class="text-3xl">{{ service.name }}</p>
          <button class="mt-4 flex bg-[#c0c0c0] text-black px-4 py-2 rounded-full">
            <RouterLink
              :to="{ name: 'Service', params: { serviceName: service.path } }"
            >
              Learn More
            </RouterLink>
          </button>
        </div>
      </div>
    </div>
    <Customers />
  </div>
</template>
