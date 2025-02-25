<script setup lang="ts">
import CustomerCard from "./CustomerCard.vue";
</script>

<template>
  <div class="">
    <!-- <hr /> -->
    <h1 class="text-6xl text-center mt-24 mb-16">What Our Clients Say</h1>
    <div class="">
      <CustomerCard
        img-src="/customer1.jpg"
        img-classes="-scale-x-100"
        name="Abdul Ahmed, Managing Director"
        review="Elgon Systems handled the electrical installation for our new office, and their attention to detail was impressive. They designed an efficient system tailored to our needs, ensuring uninterrupted power supply. Their expertise and customer service were outstanding!"
      />
      <CustomerCard img-src="/customer2.jpg" img-classes="" name="William Ndegwa, Business Owner" review="I needed a secure and efficient electric fence
      for my property, and Elgon Systems delivered beyond my expectations. Their
      installation was quick, the materials were high quality, and they took the
      time to explain how everything works. Now, I feel much safer knowing my
      property is well-protected. Excellent service!"
      />
      <CustomerCard
        img-src="/customer3.jpg"
        img-classes="-scale-x-100"
        name="Kathy Omondi, Home owner"
        review="Elgon Systems installed a solar power system for my home, and I couldn’t be happier! My electricity bills have significantly dropped, and I now have a reliable backup during power outages. Their team was professional, knowledgeable, and ensured everything was installed safely and efficiently. Highly recommended!"
      />
    </div>
    <hr />
  </div>
</template>
