<script setup lang="ts">
import ServiceCard from "./ServiceCard.vue";
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const serviceCard = ref(null);

const services = [
  {
    id: 1,
    pathName: "wiring",
    title: "Residential/ Commercial Wiring",
  },
  {
    id: 2,
    pathName: "solar",
    title: "Solar Energy Systems",
  },
  {
    id: 3,
    pathName: "cctv",
    title: "Outdoor and Indoor Monitoring Systems",
  },
  {
    id: 4,
    pathName: "electric-fence",
    title: "Electric Fences",
  },
  {
    id: 5,
    pathName: "motors",
    title: "Electric Motors / Water Pumps",
  },
];

onMounted(() => {
  gsap.fromTo(
    serviceCard.value,
    {
      opacity: 0,
      y: "180px",
    },
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: serviceCard.value,
      },
      duration: 1,
      stagger: 0.1,
    }
  );
});
</script>
<template>
  <div class="pt-16 pb-24 bg-[#c0c0c0] w-full text-black">
    <div class="mt-16">
      <h1 class="text-center text-6xl max-lg:text-5xl max-md:text-4xl max-sm:3xl font-bold capitalize">What we do</h1>
      <!--  Services -->
      <div class="mt-16">
        <div v-for="service in services" ref="serviceCard">
          <ServiceCard
            :key="service.id"
            :pathName="service.pathName"
            :no="service.id"
            :title="service.title"
          ></ServiceCard>
        </div>
      </div>
      <!-- <hr class="my-24"> -->
    </div>
  </div>
</template>
