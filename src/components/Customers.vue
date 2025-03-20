<script setup lang="ts">
import CustomerCard from "./CustomerCard.vue";
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const customerRefs = ref([]);

const customers = [
  {
    imgSrc: "/customer1.jpg",
    imgClasses: "-scale-x-100",
    customerName: "Abdul Ahmed, Managing Director",
    customerReview:
      "Elgon Systems handled the electrical installation for our new office, and their attention to detail was impressive. They designed an efficient system tailored to our needs, ensuring uninterrupted power supply. Their expertise and customer service were outstanding!",
  },
  {
    imgSrc: "/customer2.jpg",
    imgClasses: "",
    customerName: "William Ndegwa, Business Owner",
    customerReview:
      "I needed a secure and efficient electric fence for my property, and Elgon Systems delivered beyond my expectations. Their installation was quick, the materials were high quality, and they took the time to explain how everything works. Now, I feel much safer knowing my property is well-protected. Excellent service",
  },
  {
    imgSrc: "/customer3.jpg",
    imgClasses: "-scale-x-100",
    customerName: "Kathy Omondi, Home owner",
    customerReview:
      "Elgon Systems installed a solar power system for my home, and I couldn’t be happier! My electricity bills have significantly dropped, and I now have a reliable backup during power outages. Their team was professional, knowledgeable, and ensured everything was installed safely and efficiently. Highly recommended!",
  },
];

// Customercard Animation
onMounted(() => {
  gsap.utils.toArray(customerRefs.value).forEach((card: any) => {
    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: "30px",
      },
      {
        opacity: 1,
        y: 0,
        // duration: 1,
        scrollTrigger: {
          trigger: card,
          start: "top 95%",
          end: "top 5%",
          toggleActions: "play reverse play reverse",
          scrub: .5,
        },
        ease: "power2.inOut"
      }
    );
  });
});
</script>

<template>
  <div class="">
    <!-- <hr /> -->
    <h1 class=" font-medium text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-2xl text-center mt-24 mb-16">What Our Clients Say</h1>
    <div
      ref="customerRefs"
      v-for="(customer, index) in customers"
      :key="index"
      class=""
    >
      <CustomerCard
        :img-src="customer.imgSrc"
        :img-classes="customer.imgClasses"
        :name="customer.customerName"
        :review="customer.customerReview"
      />
    </div>
    <!-- <hr /> -->
  </div>
</template>
