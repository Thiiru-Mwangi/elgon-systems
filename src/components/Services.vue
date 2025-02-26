<script setup lang="ts">
import ServiceCard from "./ServiceCard.vue";
</script>
<template>
  <div class=" pt-16 pb-24  bg-[#c0c0c0] w-full text-black">
    <div class="mt-16">
      <h1 class="text-center text-6xl font-bold capitalize">What we do</h1>
      <!--  Services -->
      <div class="mt-16">
        <ServiceCard
        pathName="wiring"
          imgSrc="/db5.jpg"
          :no="1"
          title="Residential/ Commercial Wiring"
        ></ServiceCard>
        <ServiceCard
        pathName="solar"
          imgSrc="/solar.png"
          :no="2"
          title="Solar Energy Systems"
        ></ServiceCard>
        <ServiceCard
        pathName="cctv"
          imgSrc="/cctv.webp"npm
          :no="3"
          title="Outdoor and Indoor Security Systems"
        ></ServiceCard>
        <ServiceCard
        pathName="electric-fence"
          imgSrc="/fence.jpg"
          :no="4"
          title="Electric fence Installations"
        ></ServiceCard>
        <ServiceCard
        pathName="motors"
          imgSrc="/motors3.jpg"
          :no="5"
          title="Electric Motors / Water Pumps"
        ></ServiceCard>
      </div>
      <!-- <hr class="my-24"> -->
    </div>
  </div>
</template>
