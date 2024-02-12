<script lang="ts" setup>
const route = useRoute()

const { data } = useFetch(`https://www.omdbapi.com/`, {
  params: { apikey: 'bd55fcf1', i: route.params.id },
  pick: ['Title', 'Plot'],
  key: `/movies/${route.params.id}`,
})

// const { data } = useAsyncData(`/movies/${route.params.id}`, () => {
//   return $fetch(`https://www.omdbapi.com/`, { params: { apikey: 'bd55fcf1', i: route.params.id } });
// }, {
//   pick: ['Title', 'Plot'],
//   // transform(data) {
//   //   return {
//   //     Title: data.Title,
//   //     Plot: data.Plot,
//   //   }
//   // }
// })
</script>

<template>
  <div>
    <h1>{{data}}</h1>
  </div>
</template>

<style scoped>
</style>
