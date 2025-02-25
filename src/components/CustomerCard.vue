<script setup lang="ts">
defineProps<{ name: string; imgSrc: string; imgClasses: string; review: string }>();
</script>

<template>
  <div class="flex h-dvh  justify-center">
    <div class="w-11/12 h-10/12 flex gap-2 items-center">
      <div class="w-4/12">
        <img
          :class="`rounded-md ${imgClasses}`"
          :src="imgSrc"
          width="320"
          height="480"
          alt=""
        />
      </div>
      <div class="w-8/12 px-8">
        <p class="text-4xl">
          <q>
            {{ review }}
          </q>
        </p>
        <p class="mt-8">— {{ name }}</p>
      </div>
    </div>
  </div>
</template>
