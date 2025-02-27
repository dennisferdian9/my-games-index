<template>
  <div class="pt-4 px-4 sm:p-0 sm:mt-20 max-w-7xl sm:w-max mx-auto">
    <NuxtLink class="hover:underline mb-4" to="/games">Back to Games Lists</NuxtLink>
    <client-only>
    <div v-if="gameToShow" class=" sm:grid grid-cols-3 gap-x-8">
      <div class="col-span-1">
        <NuxtImg class="w-full rounded" :src="gameToShow.thumbnail"/>
        <h1 class="text-2xl font-bold">{{ gameToShow.title }}</h1>
        <DescriptionBox v-if="gameToShow.detailDescription.length" :text="gameToShow.detailDescription"/>
      </div>
      <div class="col-span-2">
        <RequirementDetail v-bind="gameToShow.minimumRequirement" />
        <ScreenshotList class="mt-4" :screenshot-lists="gameToShow.screenshots"/>
        <ChipList
          class="mt-4"
          :developer="gameToShow.developer"
          :platform="gameToShow.platform"
          :publisher="gameToShow.publisher"
          :release-date="gameToShow.releaseDate"
          :status="gameToShow.status"
        />
      </div>
    </div>
  </client-only>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  pageTransition: { name: 'slide-up', mode: 'in-out' },
  scrollToTop: true,
  ssr: false,
})


const route = useRoute()


const gameResponse = useState<GameResponseModel | null>("game-" + route.params.slug, () => null)
  if (!gameResponse.value) {
    const { data } = await useFetch<GameResponseModel>(`/api/games/${route.params.slug}`, {
    server: true,
    key: route.fullPath
  })
  gameResponse.value = data.value ?? null
}



const gameToShow = computed<GameDetailModel | null>(() => {
  if (!gameResponse.value) return null
  return {
    id: gameResponse.value.id,
    title: gameResponse.value.title,
    thumbnail: gameResponse.value.thumbnail,
    status: gameResponse.value.status,
    shortDescription: gameResponse.value.short_description,
    detailDescription: gameResponse.value.description,
    genre: gameResponse.value.genre,
    platform: gameResponse.value.platform,
    publisher: gameResponse.value.publisher,
    releaseDate: new Date(gameResponse.value.release_date),
    minimumRequirement: gameResponse.value.minimum_system_requirements,
    screenshots: gameResponse.value.screenshots,
    developer: gameResponse.value.developer
  }
})

</script>