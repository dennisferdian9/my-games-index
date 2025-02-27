<template>
  <div>
    <keep-alive>
      <NuxtPage :transition="currentTransition" />
    </keep-alive>
  </div>
</template>

<script setup>

const route = useRoute()
const currentTransition = computed(() => {
  return route.meta.transition || { name: 'slide-up', mode: 'out-in' }
})
</script>

