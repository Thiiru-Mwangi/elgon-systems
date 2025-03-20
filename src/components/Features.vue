<script setup lang="ts">
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const descriptionRef = ref(null);
const imgLeft = ref(null);
const imgRight = ref(null);
const imgCenter = ref(null);
const descriptionText1 = ref(null);
const descriptionText2 = ref(null);

// GSAP Animations
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

  // Image on the left
  gsap.to(imgLeft.value, {
    left: "-=100",
    scrollTrigger: {
      trigger: imgLeft.value,
      scrub: 0.5,
    },
    ease: "power2.inOut",
  });

  // Image on the right
  gsap.to(imgRight.value, {
    right: "-=100",
    scrollTrigger: {
      trigger: imgRight.value,
      scrub: 0.5,
    },
    ease: "power2.inOut",
  });

  // Image at the center
  gsap.to(imgCenter.value, {
    scale: 1.3,
    borderRadius: "8px",
    scrollTrigger: {
      trigger: imgRight.value,
      scrub: 0.5,
    },
    ease: "power2.inOut",
  });

  // Description text1
  gsap.fromTo(
    descriptionText1.value,
    {
      opacity: 0,
      y: "30px",
    },
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: descriptionText1.value,
        scrub: true,
      },
    }
  );
  // Description text2
  gsap.fromTo(
    descriptionText2.value,
    {
      opacity: 0,
      y: "30px",
    },
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: descriptionText2.value,
        scrub: true,
      },
    }
  );
});
</script>
<template>
  <div class="mt-120 flex justify-center relative">
    <p
      ref="descriptionRef"
      class="text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-lg w-10/12"
    >
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
    <div class="h-dvh max-md:h-[70dvh] w-10/12 relative mt-4">
      <div ref="imgLeft" class="max-md:hidden absolute top-0 left-8">
        <img
          class="rounded-sm"
          src="/fence.jpg"
          width="235"
          height="125"
          alt="solar"
        />
      </div>
      <div ref="imgRight" class="max-md:hidden absolute top-0 right-8">
        <img
          class="rounded-sm"
          src="/cctv.webp"
          width="235"
          height="125"
          alt="solar"
        />
      </div>
      <div
        ref="imgCenter"
        class="absolute top-1/2 left-1/2 -translate-1/2 overflow-hidden"
      >
        <img
          class="rounded-sm"
          src="/motor.jpg"
          width="235"
          height="125"
          alt="solar"
        />
      </div>
      <div class="max-md:hidden absolute bottom-0 left-0">
        <img
          class="rounded-sm"
          src="/solar.png"
          width="235"
          height="125"
          alt="solar"
        />
      </div>
      <div class="max-md:hidden absolute bottom-0 right-0">
        <img
          class="rounded-sm"
          src="/db4.jpg"
          width="235"
          height="125"
          alt="solar"
        />
      </div>
    </div>
  </div>

  <!-- Copy  section -->
  <div class="relative w-full min-h-[130dvh]">
    <hr class="mt-16" />
    <div
      class="absolute top-0 left-0 w-full h-full flex justify-center items-center"
    >
      <div class="mt-8 w-10/12 h-11/12 flex flex-col justify-between">
        <div
          class=" h-full w-full flex max-md:flex-col justify-between max-md:justify-start items-center"
        >
          <p
            class="text-[#daa520] text-6xl max-lg:4xl max-md:3xl max-sm:2xl font-extrabold"
          >
            Where Reliability
          </p>
          <p ref="descriptionText1" class="w-64 mt-0 max-md:w-fit">
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
        <div
          class="w-full h-full flex justify-between max-md:flex-col-reverse max-md:justify-start items-center"
        >
          <p ref="descriptionText2" class="w-64 mt-8 max-md:mt-0 max-md:w-fit max-md:mb-8">
            Our expertise ensures that your electrical systems function
            seamlessly, meet all safety standards
          </p>
          <p
            class="text-[#daa520] text-6xl max-lg:4xl max-md:3xl max-sm:2xl font-extrabold mb-8 max-md:mb-0 self-end"
          >
            Meets functionality
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
