<template>
  <h1>{{name}}</h1>
  <button @click="placeOrder">Place Order</button>
  <YummyMeal name="Hamburger" :price="5" @addToCart="addItemToCart"/>
</template>

<script>
import YummyMeal from './components/YummyMeal.vue'
import { ref } from 'vue';
export default {
  components: { YummyMeal },
  setup() {
    const name = ref("The Snazzy Burger");
    const placeOrder = () => {
      alert("Your order has been placed!");
    }
    const addItemToCart = (item) => {
      alert(`One ${item} added to the cart`)
    }
    return { name, placeOrder, addItemToCart }
  }
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
