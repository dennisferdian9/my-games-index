<template>
  <div class="bg-[#FBFBFB] h-screen">
    <div class="max-w-7xl mx-auto w-full h-full">
      <div class=" grid sm:grid-cols-2 items-center content-start sm:content-center h-full">
        <IntroGames class="w-max max-w-screen"/>

        <div class="px-4 mx-auto text-center sm:text-left mt-4 sm:mt-0">
          <h2 class="font-bold text-2xl">My Games Index</h2>
          <p class=" mb-2 sm:w-96 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi iure quia natus a voluptas incidunt? Nobis, vero accusamus doloremque eaque ipsam error debitis, fugiat quo ipsum est pariatur dolore deleniti?</p>
          <NuxtLink class="text-sm" to="/games">Open Games List ></NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>