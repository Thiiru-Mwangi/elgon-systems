<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

// Services data
const services = [
  {
    name: "Solar Panel Installations",
    path: "solar",
    imgSrc1: "/solar2.jpg",
    imgSrc2: "/solar.jpg",
    description1:
      "Our team provides seamless integration and maintenance support. With high-quality components and professional installation, we make the switch to solar easy and cost-effective. Invest in clean, renewable energy today and enjoy uninterrupted power with our customized solar solutions.",
    description2:
      "We provide complete solar systems solutions, from solar panels to battery systems, for homes and businesses aiming to reduce electricity costs—helping you transition to sustainable power with ease. Whether for savings or backup power, we will tailor solutions to meet your needs.",
  },
  {
    name: "Electric Fence Installation",
    path: "electric-fence",
    imgSrc1: "/fence1.jpg",
    imgSrc2: "/fence2.jpg",
    description1:
      "Enhance the security of your home, business, or property with our professional electric fence installation services. Our high-quality electric fencing solutions provide a powerful deterrent against intruders, ensuring round-the-clock protection. We specialize in customized electric fences designed to meet your specific security needs. Whether you need a wall-top electric fence, freestanding fence, or a combination with CCTV surveillance, we deliver durable, high-voltage barriers that keep unauthorized access at bay.",
    description2:
      "Our expert team ensures seamless installation, using weather-resistant materials, energy-efficient systems, and reliable alarm integrations for maximum effectiveness. Our fences are equipped with tamper alerts that notify you immediately in case of any breach, giving you peace of mind. With years of experience in the security industry, we guarantee safe, compliant, and cost-effective solutions for homes, businesses, and institutions. Plus, we offer routine maintenance and support to ensure your electric fence remains in top condition. Protect what matters most! ",
  },
  {
    name: "CCTV Camera Installations",
    path: "cctv",
    imgSrc1: "/cctv1.jpg",
    imgSrc2: "/cctv2.jpg",
    description1:
      "Protect your home, business, or property with our expert CCTV camera installation services. We provide high-quality surveillance solutions tailored to your security needs, ensuring 24/7 monitoring and peace of mind. Our team specializes in modern, high-definition CCTV systems, including IP cameras, night vision, motion detection, and remote access features. Whether you need a single-camera setup or a fully integrated security network, we deliver seamless installations with minimal disruption.",
    description2:
      "With years of experience, we guarantee professional wiring, strategic camera placement, and reliable connectivity, allowing you to monitor your premises in real time from anywhere via mobile or desktop applications. Secure what matters most today! Contact us for a free consultation and let us help you design the perfect CCTV surveillance system for your home or business.",
  },
  {
    name: "Motors/ Water Pumps",
    path: "motors",
    imgSrc1: "/motor1.jpg",
    imgSrc2: "/motor2.jpg",
    description1:
      "Ensure a steady and efficient water supply with our expert motor and water pump installations. Whether for residential, commercial, or agricultural use, we provide high-performance pumps that deliver optimal water pressure and reliability. Our skilled technicians handle installation, maintenance, and repairs, ensuring your system runs smoothly with minimal downtime.",
    description2:
      "From submersible pumps to booster and borehole systems, we customize solutions to fit your needs. Trust us for energy-efficient, long-lasting motors that keep water flowing seamlessly. With Elgon Systems, you get quality, durability, and 24/7 support for all your motor and water pumping solutions. Get in touch today",
  },
  {
    name: "Residential / Commercial Wiring",
    path: "wiring",
    imgSrc1: "/wiring1.jpg",
    imgSrc2: "/wiring2.jpg",
    description1:
      "Power up your home or business with expert residential and commercial wiring services. We provide safe, efficient, and code-compliant electrical solutions tailored to your needs. Whether you're building a new property, upgrading an existing system, or handling repairs, our skilled electricians ensure seamless installations with high-quality materials",
    description2:
      " From lighting and outlets to panel upgrades and complete rewiring, we prioritize safety, reliability, and energy efficiency. Trust us for professional wiring that keeps your space powered and protected. Contact us today for a consultation and experience top-tier electrical solutions designed for your comfort and productivity. Secure what matters most today! Contact us for a free consultation and let us help you design the perfect CCTV surveillance system for your home or business.",
  },
];

// Route
const route = useRoute();

// $route.params.serviceName
//Displaying data according to the url
const currentService = computed(() => {
  return services.find((service) => service.path === route.params.serviceName);
});
</script>
<template>
  <div
    v-if="currentService"
    class="min-h-dvh pb-24 w-full flex justify-center mt-16 bg-[#c0c0c0] text-black"
  >
    <div class="w-11/12">
      <nav class="mt-8 flex gap-2">
        <RouterLink
          v-for="(service, index) in services"
          :key="index"
          active-class="bg-black text-white"
          class="border rounded-full px-4 py-2 inline-block"
          :to="{ name: 'Service', params: { serviceName: service.path } }"
          ><button class="capitalize">{{ service.path }}</button></RouterLink
        >
      </nav>
      <Transition name="fade">
        <div :key="currentService.name" class=" mt-16 flex items-start justify-between gap-8">
          <!--  -->
          <div class="w-6/12">
            <h1 class="text-5xl w-full font-bold">{{ currentService.name }}</h1>
            <div class="mt-8">
              <img
                :src="currentService.imgSrc1"
                width="240"
                height="180"
                alt=""
              />
            </div>
            <p class="mt-8 w-10/12">
              {{ currentService.description1 }}
            </p>
          </div>
          <!--  -->
          <div class="w-6/12 mt-0">
            <p class="">
              {{ currentService.description2 }}
            </p>
            <div class="mt-8">
              <img :src="currentService.imgSrc2" width="960" alt="540" />
            </div>
            <!-- <p>{{ $route.params.serviceName }}</p> -->
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
