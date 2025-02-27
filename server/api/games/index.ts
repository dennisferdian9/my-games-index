export default defineEventHandler(async (event) => {
  return await $fetch("https://www.mmobomb.com/api1/games?platform=pc")
})