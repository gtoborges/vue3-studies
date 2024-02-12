<script lang="ts" setup>
const route = useRoute()

const { data } = useAsyncData(() => {
  return $fetch(`https://www.omdbapi.com/?apikey=bd55fcf1&i=${route.params.id}`);
})
console.log(data)
</script>

<template>
  <div>
    <h1>{{data}}</h1>
  </div>
</template>

<style scoped>
</style>
