export default defineEventHandler( async (event) => {
  const id = getRouterParam(event, 'id')

  return await $fetch(`https://www.mmobomb.com/api1/game?id=${id}`)
})