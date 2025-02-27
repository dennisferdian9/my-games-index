<template>
  <div class="px-4 max-w-7xl mx-auto">
    <h1 class="font-bold text-center mt-4">My Games List</h1>
    <NuxtLink to="/newgames" class="hover:underline cursor-pointer">Create new Games</NuxtLink>
    <div v-if="gameListsToShow?.length" class="grid sm:grid-cols-4 gap-4 ">
      <GameListCard v-for="game in gameListsToShow" :key="game.id" :game="game"/>
    </div>
    <div v-else-if="errorState" class="w-max mx-auto"> Terjadi Kesalahan dalam mengambil Data!!!</div>
    <div v-else class="animate-pulse"> Loading ...</div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  pageTransition: { 
    name:'slide-up', 
    mode: 'out-in' 
  },
  ssr: false ,
})


// Persist state globally
const games = useState<GameResponseModel[] | null>("games", () => null)
const errorState = ref(false)

if (!games.value) {
  const { data, error} = await useFetch<GameResponseModel[]>("/api/games", {
    server: true,
    key: 'gameList'
  })
  if (error.value) errorState.value = true

  games.value = data.value ?? null
  console.log(data)
}

const pages = ref<number>(1)



const { reset } = useInfiniteScroll(
  document,
  () => {
    pages.value++
  },
  {
    distance: 10,
    canLoadMore: () => {
      if (!games.value) return false
      return gameListsToShow.value.length < games.value?.length
    },
  }
)

const gameListsToShow = computed<GameModel[]>(() => {
  const slicesGame = games.value?.slice(0, 12 * pages.value) ?? []
  return slicesGame.map((game: GameResponseModel) => ({
    id: game.id,
    title: game.title,
    developer: game.developer,
    genre: game.genre,
    thumbnail: game.thumbnail,
    description: game.short_description,
    releaseDate: new Date(game.release_date),
  }))
})
</script>
