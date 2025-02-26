<script setup lang="ts">
import Customers from "../components/Customers.vue";

const services = [
  {
    name: "Solar Energy Systems",
    path: "solar",
    description:
      "Power your home or business with clean, reliable solar energy. Save on electricity bills and enjoy energy independence with our high-efficiency solar solutions. Go green today!",
  },
  {
    name: "Electric Fence Installation",
    path: "electric-fence",
    description:
      "Secure your property with a reliable electric fence. Our expert installation ensures maximum protection, durability, and peace of mind. Safeguard what matters most today",
  },
  {
    name: "CCTV Camera Systems",
    path: "cctv",
    description:
      "Keep an eye on what matters with our advanced CCTV camera systems. High-definition surveillance, remote access, and 24/7 security for your home or business. Stay protected",
  },
  {
    name: "Motors/ Water Pumps",
    path: "motors",
    description:
      "Power your water needs with high-performance motors and water pumps. Efficient, durable, and built for reliability—perfect for homes, farms, and industries. Keep the flow going!",
  },
  {
    name: " Electrical Wiring for Residential & Commercial Spaces",
    path: "wiring",
    description: "Safe, efficient, and professional electrical wiring for homes and businesses. From installations to upgrades, we ensure reliable power for your space. Get wired the right way!"
  },
];
</script>

<template>
  <div class="mt-24">
    <h1 class="font-bold mb-12 text-6xl text-center">Our Services</h1>
    <div class="flex justify-center">
      <div class="flex justify-center gap-4 flex-wrap w-11/12">
        <!-- Service -->
        <div
          v-for="service in services"
          :key="service.name"
          class="grow-1 border w-5/12 p-8 rounded-md"
        >
          <h2 class="text-3xl font-semibold">{{ service.name }}</h2>
          <p class="text-sm mt-2">{{ service.description }}</p>
          <button
            class="mt-4 flex bg-[#c0c0c0] text-black px-4 py-2 rounded-full"
          >
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
