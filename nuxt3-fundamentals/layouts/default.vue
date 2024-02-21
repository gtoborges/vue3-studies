<script setup>
const user = useUser()
</script>
<template>
  <nav style="display:flex; gap:10px;">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/movies">Movies</NuxtLink>
    <NuxtLink to="/login" v-if="!user.isLoggedIn">Login</NuxtLink>
    <a href="#" v-else @click.prevent="user.isLoggedIn = false">Logout</a>
  </nav>
  <slot></slot>
</template>
