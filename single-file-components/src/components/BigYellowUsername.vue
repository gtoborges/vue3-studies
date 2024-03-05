<template>
  <p class="username">{{ username }}</p>
</template>
<script>
export default {
  props: {
    username: {
      type: String,
      required: true
    }
  }
}
</script>
<style>
.username {
  font-size: 50pt;
  color: #dcae1d;
}
</style>
