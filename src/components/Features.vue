<script setup lang="ts">
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const descriptionRef = ref(null);
onMounted(() => {
  gsap.fromTo(
    descriptionRef.value,
    {
      y: "30px",
      opacity: 0,
    },
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: descriptionRef.value,
        start: "top-=120px center",
        // onEnter, onLeave, onEnterBack, onLeaveBack
        // play,pause, reverse, restart, reset, none,resume,complete
        toggleActions: "play none none reverse",
      },
      duration: 0.5,
    }
  );
});
</script>
<template>
  <div class="mt-108 flex justify-center relative">
    <p ref="descriptionRef" class="text-3xl w-10/12">
      Whether you're constructing a new building, renovating an existing
      property, or upgrading your electrical infrastructure we have got you
      covered. At <span class="highlight">Elgon Systems</span>, we specialize in
      providing top-quality electrical solutions tailored to residential and
      commercial spaces. Our expertise ensures that your electrical systems
      function seamlessly, meet all safety standards, and support your daily
      operations without interruption.
    </p>
  </div>
  <div class="flex justify-center mt-16">
    <div class="h-dvh w-10/12 relative mt-4">
      <div class="absolute top-0 left-0">
        <img src="/fence.jpg" width="235" height="125" alt="solar" />
      </div>
      <div class="absolute top-0 right-0">
        <img src="/cctv.webp" width="235" height="125" alt="solar" />
      </div>
      <div class="absolute top-1/2 left-1/2 -translate-1/2">
        <img src="/motor.jpg" width="235" height="125" alt="solar" />
      </div>
      <div class="absolute bottom-0 left-0">
        <img src="/solar.png" width="235" height="125" alt="solar" />
      </div>
      <div class="absolute bottom-0 right-0">
        <img src="/db4.jpg" width="235" height="125" alt="solar" />
      </div>
    </div>
  </div>
  <div class="relative w-full h-[120dvh]">
    <!-- <div class="w-full h-full flex justify-center">
      <img
        class="opacity-10 object-cover w-full h-full scale-200"
        src="/noise.png"
        width="540"
        height="475"
        alt="tools"
      />
    </div> -->
    <div
      class="absolute top-0 left-0 w-full h-full flex justify-center items-center"
    >
      <div class="mt-8 w-10/12 h-11/12 flex flex-col justify-between">
        <div class=" h-full w-full flex justify-between items-center">
          <p class="text-[#daa520] text-6xl font-extrabold">
            Where Reliability
          </p>
          <p class="w-64 mt-8">
            We specialize in providing top-quality electrical solutions to
            residential and commercial spaces.
          </p>
        </div>
        <div>
          <div class="w-full h-full flex justify-center">
            <img
              class="rounded-md grayscale-75"
              src="/db3.jpg"
              width="453"
              height="297"
              alt="tools"
            />
          </div>
        </div>
        <div class="w-full h-full flex justify-between items-center">
          <p class="w-64 mt-8">
            Our expertise ensures that your electrical systems function
            seamlessly, meet all safety standards
          </p>
          <p class="text-[#daa520] text-6xl font-extrabold mb-8 self-end">
            Meets functionality
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
