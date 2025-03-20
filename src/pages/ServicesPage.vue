<script setup lang="ts">
import { useRouter } from "vue-router";
import Customers from "../components/Customers.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const router = useRouter();
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
    description:
      "Safe, efficient, and professional electrical wiring for homes and businesses. From installations to upgrades, we ensure reliable power for your space. Get wired the right way!",
  },
];

// Programmatic navigation
const goToService = (path: string) => {
  router.push({ name: "Service", params: { serviceName: path } });
};
</script>

<template>
  <div class="mt-28">
    <h1 class="font-bold mb-12 text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl text-center">Our Services</h1>
    <div class="flex justify-center">
      <div class="flex justify-center gap-4 flex-wrap w-11/12">
        <!-- Service -->
        <div
          v-for="service in services"
          :key="service.name"
          class="grow-1 border w-5/12 p-8 rounded-md hover:cursor-pointer hover:bg-[#c0c0c0] hover:text-black transition-all ease-in-out hover:scale-105"
          @click="goToService(service.path)"
        >
          <h2 class="text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-lg max-md:font-medium">{{ service.name }}</h2>
          <p class="text-sm max-lg:text-xs mt-2 max-md:hidden">{{ service.description }}</p>
          <div class="flex mt-2 justify-end">
            <span class="pi pi-arrow-right mr-8"></span>
          </div>
        </div>
      </div>
    </div>
    <Customers />
  </div>
</template>
