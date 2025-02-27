<template>
  <NuxtLink :to="`/games/${game.id}`">
    <div class="border border-gray-300 relative h-80 flex flex-col justify-between">
      <div class="absolute text-xs bg-gray-500 shadow right-2 top-2 text-white px-2 py-1 font-bold">{{ game.genre }}</div>
      <div>
        <NuxtImg class="w-full" :src="game.thumbnail"  />
        <span class="font-bold px-1">{{ game.title }}</span>
        <p class="text-xs line-clamp-2 break-words text-ellipsis px-1">{{ game.description }}</p>
      </div>
      <div class="px-1 w-full pb-3">
        <div class="text-xs flex justify-between mt-4 items-end">
          <div><div>Release: </div><span class="font-bold w-max">{{ formatDate(game.releaseDate) }}</span> </div>
          <div class="font-bold text-right max-w-32">{{ game.developer }}</div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
interface GameListCardProps {
  game: GameModel;
}

const formatDate = (date: Date) => {
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  return `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`
}

defineProps<GameListCardProps>();
</script>
