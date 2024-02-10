<script lang="ts" setup>
const route = useRoute()
const message = computed(() => `I'm on team ${route.params.teamSlug}, with userId ${route.params.userId}`)
</script>

<template>
  <div>
    <h1>{{message}}</h1>
  </div>
</template>

<style scoped>
</style>
