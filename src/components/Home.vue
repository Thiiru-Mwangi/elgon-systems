<script setup lang="ts">
import { ref, onMounted } from "vue"; 
import Button from "./Button.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// GSAP Animation
gsap.registerPlugin(ScrollTrigger)
const imageRef = ref(null)

onMounted(()=> {
  gsap.to(imageRef.value, {
    scale: 6.4,
    scrollTrigger: {
      trigger: imageRef.value,
      start: 'center center',
      scrub:1, 
      pin: imageRef.value,
      // pinSpacing: true
    }

  })
})
</script>
<template>
  <div class="pt-20 h-dvh relative flex gap-8 justify-center">
    <div class="w-9/12 flex flex-col justify-around p-4">
      <h1 class="text-8xl font-semibold">
        Reliable Electrical Solutions for Residential and Commercial Spaces
      </h1>
      <div class="text-center">
        <RouterLink :to="{name: 'Contact'}"><button class="px-4 py-2 border rounded-full bg-white text-black">Talk to an Electrician</button></RouterLink>
      </div>
    </div>
    <div ref="imageRef" class="absolute top-1/2 left-1/2 -translate-1/2">
      <img class="rounded-md" src="/db2.jpg" width="200" height="125" alt="" />
    </div>
  </div>
</template>
