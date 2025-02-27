<template>
  <div class="flex flex-wrap gap-2">
    <div class="text-xs bg-red-700 w-max text-white px-2 py-1 rounded">
      {{ status }}
    </div>
    <div class="text-xs bg-green-700 w-max text-white px-2 py-1 rounded">
      {{ platform }}
    </div>
    <div class="text-xs bg-blue-700 w-max text-white px-2 py-1 rounded">
      Developed By <span class="font-bold">{{ developer }}</span>
    </div>
    <div class="text-xs bg-orange-700 w-max text-white px-2 py-1 rounded">
      Published By <span class="font-bold">{{ publisher }}</span>
    </div>
    <div class="text-xs bg-green-400 w-max text-white px-2 py-1 rounded">
      Released at <span class="font-bold">{{ formatDate(releaseDate) }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface ChipListProps {
  status: string
  platform: string 
  developer: string 
  publisher: string 
  releaseDate: Date
}
defineProps<ChipListProps>()
</script>