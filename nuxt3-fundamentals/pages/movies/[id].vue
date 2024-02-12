<script lang="ts" setup>
const route = useRoute()

const { data } = useAsyncData(`/movies/${route.params.id}`, () => {
  return $fetch(
    `https://www.omdbapi.com/`, 
    { params: { apikey: 'bd55fcf1', i: route.params.id } }
  );
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
