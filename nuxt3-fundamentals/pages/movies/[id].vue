<script lang="ts" setup>
const route = useRoute()

const { data, error } = useFetch(`https://www.omdbapi.com/`, { // api retorna status 200 com erro
  params: { apikey: 'bd55fcf1', i: route.params.id },
  pick: ['Title', 'Plot', 'Error'],
  key: `/movies/${route.params.id}`,
})

if(data.value && data.value['Error'] === "Incorrect IMDb ID.") {
  showError({status: 404, statusMessage: "Page not found"});
}
</script>

<template>
  <div>
    <h1>{{data}}</h1>
  </div>
</template>

<style scoped>
</style>
