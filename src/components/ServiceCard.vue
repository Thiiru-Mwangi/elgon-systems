<script setup lang="ts">
defineProps<{ pathName: string; imgSrc?: string; no: number; title: string }>();
</script>

<template>
  <div class="w-full flex justify-center">
    <div
      class="mt-2 border flex py-8 px-4 justify-around items-center rounded-md w-11/12"
    >
      <div class="flex items-center justify-between gap-x-8">
        <p class="self-start text-sm">Service 0{{ no }}</p>
        <div>
          <!-- <img
            class="rounded-md"
            :src= "imgSrc"
            width="188"
            height="100"
            alt=""
          /> -->
        </div>
      </div>
      <h2 class="text-4xl w-7/12 font-semibold">{{ title }}</h2>
      <RouterLink
        class="cursor-pointer"
        :to="{ name: 'Service', params: { serviceName: pathName } }"
        ><button class="bg-black text-[#c0c0c0] py-2 px-4 rounded-full">
          Learn More
        </button></RouterLink
      >
    </div>
  </div>
</template>
