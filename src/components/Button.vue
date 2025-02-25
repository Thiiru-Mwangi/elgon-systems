<script setup lang="ts">
defineProps<{btnText: string, btnClasses?: string}>()
</script>

<template>
    <button :class="`py-2 px-4 border rounded-full text-[#daa520] border-[#daa520] ${btnClasses}`">{{ btnText }}</button>
</template>