<template>
  <div class="grid grid-cols-3 gap-1">
    <div v-for="game in gamesToShow" :key="game.id">
      <NuxtImg class="aspect-video w-40" :alt="game.name" :src="game.image"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
const gamesToShow = computed(() => ([
  {
    id: 1136,
    name: 'Overwatch 2',
    image: '/games/overwatch.jpg'
  },
  {
    id: 1113,
    name: 'PUBG: BATTLEGROUNDS',
    image: '/games/pubg.jpg'
  },
  {
    id: 474,
    name: 'Rocket League',
    image: '/games/rocket-league.jpg'
  },
  {
    id: 1114,
    name: 'Yu-Gi-Oh! Master Duel',
    image: '/games/yugioh-master.jpg'
  },
  {
    id: 474,
    name: 'Rocket League',
    image: '/games/rocket-league.jpg'
  },
  {
    id: 1114,
    name: 'Yu-Gi-Oh! Master Duel',
    image: '/games/yugioh-master.jpg'
  },
  {
    id: 474,
    name: 'Rocket League',
    image: '/games/rocket-league.jpg'
  },
  {
    id: 1114,
    name: 'Yu-Gi-Oh! Master Duel',
    image: '/games/yugioh-master.jpg'
  },
  {
    id: 1114,
    name: 'Yu-Gi-Oh! Master Duel',
    image: '/games/yugioh-master.jpg'
  },
  {
    id: 1136,
    name: 'Overwatch 2',
    image: '/games/overwatch.jpg'
  },
  {
    id: 1113,
    name: 'PUBG: BATTLEGROUNDS',
    image: '/games/pubg.jpg'
  },
  {
    id: 474,
    name: 'Rocket League',
    image: '/games/rocket-league.jpg'
  },
]))
</script>