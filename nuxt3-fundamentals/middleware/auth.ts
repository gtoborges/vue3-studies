export default defineNuxtRouteMiddleware((to, from) => {
  const userIsLoggerdIn = false;
  if (!userIsLoggerdIn) {
    // return abortNavigation("User not allowed");
    return navigateTo({path: "/login"})
  }
})
