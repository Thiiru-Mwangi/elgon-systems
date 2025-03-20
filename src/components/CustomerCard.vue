<script setup lang="ts">
defineProps<{ name: string; imgSrc: string; imgClasses: string; review: string }>();
</script>

<template>
  <div class="flex  justify-center">
    <div class="w-11/12 h-10/12 flex max-md:flex-col gap-2 items-center my-4">
      <div class="w-4/12 max-md:w-8/12">
        <img
          :class="`rounded-md  max-md:w-full ${imgClasses}`"
          :src="imgSrc"
          width="320"
          height="480"
          alt=""
        />
      </div>
      <div class="w-8/12 px-8 max-md:px-4 max-sm:px-2 max-md:w-full max-md:mt-4">
        <p class="text-4xl max-lg:text-2xl max-md:text-xl max-sm:text-base">
          <q>
            {{ review }}
          </q>
        </p>
        <p class="mt-8 max-md:mt-4 max-md:text-sm max-sm:text-xs">— {{ name }}</p>
      </div>
    </div>
  </div>
</template>
