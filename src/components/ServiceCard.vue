<script setup lang="ts">
import { useRouter } from 'vue-router';
const router  = useRouter()
defineProps<{ pathName: string; no: number; title: string }>();
const goToPathName = (path: string) => {
  router.push({name: 'Service', params: {serviceName: path}})
}
</script>

<template>
  <div class="w-full flex justify-center">
    <div
      class="mt-2 border flex py-8 px-4 justify-around items-center rounded-md w-11/12 ease-in-out hover:cursor-pointer hover:bg-black hover:text-[#c0c0c0] hover:scale-103 transition-all"
      @click="goToPathName(pathName)"
    >
      <div class="flex items-center justify-between gap-x-8">
        <p class="self-start text-sm max-lg:text-xs">Service 0{{ no }}</p>
        <div>
        </div>
      </div>
      <h2 class="text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl  w-7/12 font-semibold">{{ title }}</h2>
      <span class="pi pi-chevron-right"></span>
    </div>
  </div>
</template>
