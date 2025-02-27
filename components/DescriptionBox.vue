<template>
  <div class="text-xs">
    <div 
      class="transition-all duration-200 ease-in-out overflow-hidden"
      :class="[!isExpand ? 'max-h-20': 'max-h-screen h-auto']"
    >
      <p v-html="textDescription"></p>
    </div>
    <button @click="toggleExpand" class="relative w-full bg-white cursor-pointer -top-1 text-sm underline">Read {{ isExpand ? 'less' : 'more' }}</button>
  </div>
</template>

<script setup lang="ts">
interface DescriptionProps {
  text: string
}


const props = defineProps<DescriptionProps>()

const textDescription = computed(() => props.text)


const isExpand = ref(false)

const toggleExpand = async() => {
  isExpand.value = !isExpand.value
  if (!isExpand.value) {
    await nextTick()
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    })
  }
}


</script>