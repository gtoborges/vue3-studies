export default defineNuxtRouteMiddleware((to, from) => {
  console.log('to: ', to.fullPath, 'from: ', from.fullPath, 'global logger')
})
