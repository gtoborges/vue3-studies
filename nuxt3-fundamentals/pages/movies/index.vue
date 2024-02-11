<script lang="ts" setup>
const query = ref("");
const movies = ref([]);
async function search() {
  const {Search} = await $fetch(`https://www.omdbapi.com/?apikey=bd55fcf1&s=${query.value}`);
  console.log(Search)
  movies.value = Search;
}
</script>

<template>
  <form @submit.prevent="search">
    <input type="text" v-model="query" />
    <button>Search</button>
  </form>
  <ul style="display: flex; flex-wrap: wrap; gap: 10px; list-style: none">
    <li v-for="movie in movies" :key="movie.imdbID">
      <!-- {{movie}} -->
      <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID } }">
        <img :src="movie.Poster" :alt="movie.title" />
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped></style>
