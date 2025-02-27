<template>
  <div class="text-sm">
    <div>
      <span class="font-bold">Operating System: </span>
      <span>{{ os }}</span>
    </div>
    <div>
      <span class="font-bold">Processor: </span>
      <span>{{ processor }}</span>
    </div>
    <div>
      <span class="font-bold">Memory: </span>
      <span>{{ memory }}</span>
    </div>
    <div>
      <span class="font-bold">Graphics Card: </span>
      <span>{{ graphics }}</span>
    </div>
    <div>
      <span class="font-bold">Storage: </span>
      <span>{{ storage }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">

interface MinimumRequirementProps {
    os: string 
    processor: string 
    memory: string 
    graphics: string 
    storage: string 
  }

defineProps<MinimumRequirementProps>()

</script>