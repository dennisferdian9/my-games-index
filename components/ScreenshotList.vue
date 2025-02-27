<template>
  <div class="relative w-full overflow-hidden">
    <div class="snap-x snap-mandatory flex overflow-x-auto scroll-smooth scrollbar-hide">
      <div 
        class="snap-center snap-always min-w-[200px] inline-block mr-2" 
        v-for="image in screenshotLists" 
        :key="image.id">
        <NuxtImg class="w-full" :src="image.image" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ScreenshotListProps {
  screenshotLists: screenshotsModel[]
}

defineProps<ScreenshotListProps>()
</script>